using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using blg.Domain;
using MediatR;

namespace blg.Application
{
    internal class FuseSearchCommand : IRequest
    {
        public FuseSearchCommand(IEnumerable<ArticleTitle> cards, string outputPath, string sourceFolder)
        {
            Cards = cards;
            OutputPath = outputPath;
            SourceFolder = sourceFolder;
        }
        public IEnumerable<ArticleTitle> Cards { get; }
        public string OutputPath { get; }
        public string SourceFolder { get; }
    }

    internal class FuseSearchCommandHandler : IRequestHandler<FuseSearchCommand>
    {
        private IFileSystem _fileSystem;
        private IMediator _mediator;

        public FuseSearchCommandHandler(IFileSystem fileSystem, IMediator mediator)
        {
            _fileSystem = fileSystem;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(FuseSearchCommand request, CancellationToken cancellationToken)
        {
            var configuration = await _mediator.Send(new GetConfigurationCommand(request.SourceFolder));
            var fuseTemplate = await _mediator.Send(new GetTemplateCommand(configuration.FuseTemplatePath));

            var fuseFilePath = Path.Combine(request.OutputPath, "fuse.js");

            var js = new StringBuilder();

            js.AppendLine("var articles = [");
            foreach (var card in request.Cards)
            {
                js
                    .AppendLine("{")
                    .AppendLine($"  'Title': \"{card.Title}\",")
                    .AppendLine($"  'Description': \"{card.Description}\",")
                    .AppendLine($"  'Tags': [{string.Join(',', card.Tags.Select(x => $"\"{x}\""))}]")
                    .AppendLine("},");
            }
            js.AppendLine("];");

            var result = fuseTemplate.Replace("{{ARTICLES}}", js.ToString());

            var uglified = await _mediator.Send(new UglifyCommand(result, TypeOfContent.Js));

            await _fileSystem.WriteAllTextAsync(fuseFilePath, uglified);

            return Unit.Value;
        }
    }
}