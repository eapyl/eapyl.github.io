/*!
 * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,r){"use strict";e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(5),a=r(7),s=r(4),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,a=r.distance,c=void 0===a?100:a,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.isCaseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=f&&(this.patternAlphabet=s(this.pattern))}return o(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,r=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>r)return i(e,this.pattern,n);var o=this.options,s=o.location,c=o.distance,h=o.threshold,l=o.findAllMatches,u=o.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}]),e}();e.exports=c},function(e,t,r){"use strict";var n=r(0),o=function e(t,r,o){if(r){var i=r.indexOf("."),a=r,s=null;-1!==i&&(a=r.slice(0,i),s=r.slice(i+1));var c=t[a];if(null!==c&&void 0!==c)if(s||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o};e.exports=function(e,t){return o(e,t,[])}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||(o=i-1,o-n+1>=t&&r.push([n,o]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}},function(e,t,r){"use strict";e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t}},function(e,t,r){"use strict";e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(r,"|")),o=e.match(n),i=!!o,a=[];if(i)for(var s=0,c=o.length;s<c;s+=1){var h=o[s];a.push([e.indexOf(h),h.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:a}}},function(e,t,r){"use strict";e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t,r){"use strict";var n=r(6),o=r(3);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),x=t.length,S=[],M=0;M<y;M+=1)S[M]=0;if(-1!==k){var b=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(b,m),-1!==(k=e.lastIndexOf(t,g+x))){var _=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=x+y,C=1<<x-1,I=0;I<x;I+=1){for(var O=0,F=A;O<F;){n(t,{errors:I,currentLocation:g+F,expectedLocation:g,distance:h})<=m?O=F:A=F,F=Math.floor((A-O)/2+O)}A=F;var P=Math.max(1,g-F+1),j=d?y:Math.min(g+F,y)+x,z=Array(j+2);z[j+1]=(1<<I)-1;for(var T=j;T>=P;T-=1){var E=T-1,K=r[e.charAt(E)];if(K&&(S[E]=1),z[T]=(z[T+1]<<1|1)&K,0!==I&&(z[T]|=(L[T+1]|L[T])<<1|1|L[T+1]),z[T]&C&&(w=n(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(n(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=z}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(S,p)}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),a=r(2),s=r(0),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,s=r.distance,c=void 0===s?100:s,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.caseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k,S=r.id,M=void 0===S?null:S,b=r.keys,_=void 0===b?[]:b,L=r.shouldSort,w=void 0===L||L,A=r.getFn,C=void 0===A?a:A,I=r.sortFn,O=void 0===I?function(e,t){return e.score-t.score}:I,F=r.tokenize,P=void 0!==F&&F,j=r.matchAllTokens,z=void 0!==j&&j,T=r.includeMatches,E=void 0!==T&&T,K=r.includeScore,$=void 0!==K&&K,J=r.verbose,N=void 0!==J&&J;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x,id:M,keys:_,includeMatches:E,includeScore:$,shouldSort:w,getFn:C,sortFn:O,verbose:N,tokenize:P,matchAllTokens:z},this.setCollection(t)}return o(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),r=t.tokenSearchers,n=t.fullSearcher,o=this._search(r,n),i=o.weights,a=o.results;return this._computeScore(i,a),this.options.shouldSort&&this._sort(a),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=r.length;c<h;c+=1)for(var l=r[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var r=e.key,n=e.arrayIndex,o=void 0===n?-1:n,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(void 0!==i&&null!==i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: "+(""===r?"-":r));var x=f.search(i);if(this._log('Full text: "'+i+'", score: '+x.score),this.options.tokenize){for(var S=i.split(this.options.tokenSeparator),M=[],b=0;b<l.length;b+=1){var _=l[b];this._log('\nPattern: "'+_.pattern+'"');for(var L=!1,w=0;w<S.length;w+=1){var A=S[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,M.push(C.score)):(I[A]=1,this.options.matchAllTokens||M.push(1)),this._log('Token: "'+A+'", score: '+I[A])}L&&(k+=1)}m=M[0];for(var O=M.length,F=1;F<O;F+=1)m+=M[F];m/=O,this._log("Token score average:",m)}var P=x.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var j=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: "+j),(y||x.isMatch)&&j){var z=v[c];z?z.output.push({key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}):(v[c]={item:a,output:[{key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var T=0,E=i.length;T<E;T+=1)this._analyze({key:r,arrayIndex:T,value:i[T],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var r=0,n=t.length;r<n;r+=1){for(var o=t[r].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=1===h?o[c].score:o[c].score||.001,u=l*h;1!==h?s=Math.min(s,u):(o[c].nScore=u,a*=u)}t[r].score=1===s?a:s,this._log(t[r])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this.options.verbose&&this._log("\n\nOutput:\n\n",JSON.stringify(e));var r=[];this.options.includeMatches&&r.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var n=0,o=e.length;n<o;n+=1){var i=e[n];if(this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),r.length){for(var a={item:i.item},s=0,c=r.length;s<c;s+=1)r[s](i,a);t.push(a)}else t.push(i.item)}return t}},{key:"_log",value:function(){if(this.options.verbose){var e;(e=console).log.apply(e,arguments)}}}]),e}();e.exports=c}])});

var articles = [
{
  'Title': "English",
  'Description': "",
  'Tags': []
},
{
  'Title': "High-loaded-applications",
  'Description': "",
  'Tags': []
},
{
  'Title': "Machine-Learning",
  'Description': "",
  'Tags': []
},
{
  'Title': "Polish",
  'Description': "",
  'Tags': []
},
{
  'Title': "0x80004005 Failed to Execute URL",
  'Description': "",
  'Tags': []
},
{
  'Title': "Add dotnet command to alias of bash",
  'Description': "",
  'Tags': ["linux","dotnet"]
},
{
  'Title': "API Facebook",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "ASP.NET MVC and Html.Hidden",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "ASP.NET MVC Bundle Minification",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Auto deployment for SSRS reports",
  'Description': "",
  'Tags': []
},
{
  'Title': "Avoid Ambiguous invocation for extension methods",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Backup InfluxDB in Docker",
  'Description': "",
  'Tags': ["docker"]
},
{
  'Title': "Bootstrap + Recaptcha. Css problem",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "Bootstrap datepicker Week mode view",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "Cake.Net. Useful scripts for AngularJS, dotnet core, docker application",
  'Description': "",
  'Tags': ["dotnet","docker"]
},
{
  'Title': "Create line chart use .net 2.0",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Cron schedule using F#",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Cron service using F# on .NET Core",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Daemon cron using F#",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Discord Belarus chat By",
  'Description': "",
  'Tags': []
},
{
  'Title': "Generate EF Core model from database using SQL script",
  'Description': "",
  'Tags': ["sql","dotnet"]
},
{
  'Title': "exRS tool to deploy SSRS reports and subscriptions",
  'Description': "",
  'Tags': []
},
{
  'Title': "Fiddler Zip extension",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Fixed header or column for HTML table using JQuery",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "FuelUX Tree additional behavior",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "Get information about all stored procedures, views and functions",
  'Description': "",
  'Tags': ["sql","dotnet"]
},
{
  'Title': "GitVersion + TC",
  'Description': "",
  'Tags': []
},
{
  'Title': "Giving full read+write permissions to a folder by all users and apps",
  'Description': "",
  'Tags': ["linux"]
},
{
  'Title': "Help to your eyes",
  'Description': "",
  'Tags': ["health"]
},
{
  'Title': "How to create Discord bot",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "How to set up SQL code coverage",
  'Description': "",
  'Tags': ["sql","dotnet"]
},
{
  'Title': "IIS 7 HttpModule Logger",
  'Description': "",
  'Tags': []
},
{
  'Title': "Implementing async.queue using rxjs",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "InfluxDB can't be started as a service",
  'Description': "",
  'Tags': ["linux"]
},
{
  'Title': "Install docker on raspberry PI",
  'Description': "",
  'Tags': ["docker"]
},
{
  'Title': "jQuery Twitter Bootstrap List Tree Plugin Editable version",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "Light version of Monodruid",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Linq and Group",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Log2Console with IISExpress and log4net",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "MVC indefinitely loads the page and call the controller cyclical",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Nancy sample application",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Notes from 'Introduction to Linux'",
  'Description': "",
  'Tags': ["linux"]
},
{
  'Title': "Octave Tutorial",
  'Description': "",
  'Tags': []
},
{
  'Title': "Persistence.js insert empty values in web sql",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "Personal mobile radio application using Ionic",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "PowerShell How to",
  'Description': "",
  'Tags': []
},
{
  'Title': "Radio on Windows IOT via Telegram Bot",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Dotnet global tool, radio player",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Copy remote MSSQL DB to local server",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Replace physical path of web sites in IIS7",
  'Description': "",
  'Tags': []
},
{
  'Title': "Response without root element",
  'Description': "",
  'Tags': []
},
{
  'Title': "Restore InfluxDB in Docker",
  'Description': "",
  'Tags': ["docker","docker"]
},
{
  'Title': "Prepare SD card for Raspbian",
  'Description': "",
  'Tags': []
},
{
  'Title': "Show information about types in tooltip",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "Simple question to check understanding of multithreading",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Simple question to check understanding of recursion in .NET",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Simplest syslog server for rfc5424 (TCP)",
  'Description': "",
  'Tags': ["docker","dotnet"]
},
{
  'Title': "SMO Scripter. Create script of DB",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Sniffer of TCP packets",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Structure of presentation",
  'Description': "",
  'Tags': []
},
{
  'Title': "Style Cop I don't like SA 1201",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "TFS Delete Team Project",
  'Description': "",
  'Tags': []
},
{
  'Title': "TFS Exclude binding from solution",
  'Description': "",
  'Tags': []
},
{
  'Title': "Understanding Docker",
  'Description': "",
  'Tags': ["docker"]
},
{
  'Title': "Update pip application in Ubuntu",
  'Description': "",
  'Tags': ["linux"]
},
{
  'Title': "Use LogParser",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Use WebSQL and IndexedDB in Typescript",
  'Description': "",
  'Tags': ["javascript"]
},
{
  'Title': "Use ZadGraph",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Useful LINQ extensions",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "VS 2010 Attach to process w3wp.exe",
  'Description': "",
  'Tags': []
},
{
  'Title': "How to use wait-for-it with docker compose",
  'Description': "",
  'Tags': ["docker"]
},
{
  'Title': "WinRT Checksum for large files",
  'Description': "",
  'Tags': ["dotnet"]
},
{
  'Title': "Xamarin Dev Days in Warsaw",
  'Description': "",
  'Tags': []
},
];


var options = {
    keys: ['Title', 'Tags', 'Description'],
    id: 'Title'
}
var fuse = new Fuse(articles, options);
document.getElementById('search').addEventListener('click', (event) =>
{
    var searchText = document.getElementById('search-value').value;
    var result = fuse.search(searchText);
    var cards = document.querySelectorAll('.card-title');
    for (var i = 0; i < cards.length; i++)
    {
        var titleEl = cards[i];
        var shouldHide = result.filter(x => x == titleEl.innerText).length == 1 ? false : true;
        if (shouldHide)
        {
            titleEl.parentElement.parentElement.style.display = 'none';
        }
        else
        {
            titleEl.parentElement.parentElement.style.display = '';
        }
    }
});