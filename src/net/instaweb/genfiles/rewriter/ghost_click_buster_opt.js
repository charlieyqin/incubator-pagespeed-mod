(function(){var g=navigator,h=String,k="shift",l="replace",m="userAgent",n="stack",p="console",q="fileName",r="push",s="indexOf",t="length",u="prototype",v="target",w="call",x="navigator",y="",aa="\n\nBrowser stack:\n",ba='\nUrl: <a href="view-source:',ca='"',da='" target="_new">',ea="%s",fa="&",ga="&amp;",ha="&gt;",ia="&lt;",ja="&quot;",ka="(",la=")",ma=")\n",z=", ",na="-> ",oa=".",pa="...",qa=": ",ra="<",sa="</a>\nLine: ",ta=">",ua="Assertion failed",va="DOMFocusIn",wa="DOMFocusOut",xa="Exception trying to expose exception! You win, we lose. ",
ya="Message: ",A="Not available",za="Not busting click on label elem at (",Aa="Root logger has no level set.",Ba="TEXTAREA",Ca="Unknown error",Da="UnknownError",Ea="[...circular reference...]",Fa="[...long stack...]",Ga="[Anonymous]",Ha="[end]",Ia="[end]\n\nJS stack traversal:\n",Ja="[exception trying to get caller]\n",Ka="[fn]",La="boolean",Ma="busting click at ",Na="false",Oa="function",Pa="href",Qa="location",Ra="log:",Sa="null",Ta="number",Ua="object",B="string",Va="true",Wa="window",C,D=this,
E=Date.now||function(){return+new Date},Xa=function(a,b){function c(){}c.prototype=b[u];a.r=b[u];a.prototype=new c};var F=function(a){Error.captureStackTrace?Error.captureStackTrace(this,F):this.stack=Error()[n]||y;a&&(this.message=h(a))};Xa(F,Error);F[u].name="CustomError";var Ya=function(a,b){for(var c=a.split(ea),f=y,d=Array[u].slice[w](arguments,1);d[t]&&1<c[t];)f+=c[k]()+d[k]();return f+c.join(ea)},G=function(a,b){if(b)return a[l](Za,ga)[l]($a,ia)[l](ab,ha)[l](bb,ja);if(!cb.test(a))return a;-1!=a[s](fa)&&(a=a[l](Za,ga));-1!=a[s](ra)&&(a=a[l]($a,ia));-1!=a[s](ta)&&(a=a[l](ab,ha));-1!=a[s](ca)&&(a=a[l](bb,ja));return a},Za=/&/g,$a=/</g,ab=/>/g,bb=/\"/g,cb=/[&<>\"]/;var H=function(a,b){b.unshift(a);F[w](this,Ya.apply(null,b));b[k]()};Xa(H,F);H[u].name="AssertionError";var db=function(a,b,c){if(!a){var f=Array[u].slice[w](arguments,2),d=ua;if(b)var d=d+(qa+b),e=f;throw new H(y+d,e||[]);}return a},eb=function(a,b){throw new H("Failure"+(a?qa+a:y),Array[u].slice[w](arguments,1));};var fb=Array[u],gb=fb[s]?function(a,b,c){db(null!=a[t]);return fb[s][w](a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a[t]+c):c;if(typeof a==B)return typeof b==B&&1==b[t]?a[s](b,c):-1;for(;c<a[t];c++)if(c in a&&a[c]===b)return c;return-1};var I,J,K,L,hb=function(){return D[x]?D[x][m]:null};L=K=J=I=!1;var M;if(M=hb()){var ib=D[x];I=0==M.lastIndexOf("Opera",0);J=!I&&(-1!=M[s]("MSIE")||-1!=M[s]("Trident"));K=!I&&-1!=M[s]("WebKit");L=!I&&!K&&!J&&"Gecko"==ib.product}var jb=J,kb=L,lb=K;var N;if(I&&D.opera){var mb=D.opera.version;typeof mb==Oa&&mb()}else kb?N=/rv\:([^\);]+)(\)|;)/:jb?N=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:lb&&(N=/WebKit\/(\S+)/),N&&N.exec(hb());var ob=function(a,b){try{var c;var f;t:{for(var d=[Wa,Qa,Pa],e=D,P;P=d[k]();)if(null!=e[P])e=e[P];else{f=null;break t}f=e}if(typeof a==B)c={message:a,name:Ca,lineNumber:A,fileName:f,stack:A};else{var V,W,d=!1;try{V=a.lineNumber||a.q||A}catch(Ib){V=A,d=!0}try{W=a[q]||a.filename||a.sourceURL||D.$googDebugFname||f}catch(Jb){W=A,d=!0}c=!d&&a.lineNumber&&a[q]&&a[n]&&a.message&&a.name?a:{message:a.message||A,name:a.name||Da,lineNumber:V,fileName:W,stack:a[n]||A}}return ya+G(c.message)+ba+c[q]+da+c[q]+sa+
c.lineNumber+aa+G(c[n]+na)+Ia+G(nb(b)+na)}catch(xb){return xa+xb}},nb=function(a){return pb(a||arguments.callee.caller,[])},pb=function(a,b){var c=[];if(0<=gb(b,a))c[r](Ea);else if(a&&50>b[t]){c[r](qb(a)+ka);for(var f=a.arguments,d=0;d<f[t];d++){0<d&&c[r](z);var e;e=f[d];switch(typeof e){case Ua:e=e?Ua:Sa;break;case B:break;case Ta:e=h(e);break;case La:e=e?Va:Na;break;case Oa:e=(e=qb(e))?e:Ka;break;default:e=typeof e}40<e[t]&&(e=e.substr(0,40)+pa);c[r](e)}b[r](a);c[r](ma);try{c[r](pb(a.caller,b))}catch(P){c[r](Ja)}}else a?
c[r](Fa):c[r](Ha);return c.join(y)},qb=function(a){if(O[a])return O[a];a=h(a);if(!O[a]){var b=/function ([^\(]+)/.exec(a);O[a]=b?b[1]:Ga}return O[a]},O={};var Q=function(a,b,c,f,d){this.reset(a,b,c,f,d)};Q[u].e=0;Q[u].b=null;Q[u].a=null;var rb=0;C=Q[u];C.reset=function(a,b,c,f,d){this.e=typeof d==Ta?d:rb++;f||E();this.c=a;this.d=b;delete this.b;delete this.a};C.i=function(a){this.b=a};C.j=function(a){this.a=a};C.g=function(a){this.c=a};C.getMessage=function(){return this.d};var R=function(a){this.e=a};R[u].a=null;R[u].c=null;R[u].b=null;R[u].d=null;var S=function(a,b){this.name=a;this.value=b};S[u].toString=function(){return this.name};var sb=new S("WARNING",900),tb=new S("CONFIG",700);C=R[u];C.getParent=function(){return this.a};C.getChildren=function(){this.b||(this.b={});return this.b};C.g=function(a){this.c=a};C.f=function(){if(this.c)return this.c;if(this.a)return this.a.f();eb(Aa);return null};C.o=function(a){return a.value>=this.f().value};
C.log=function(a,b,c){this.o(a)&&this.m(this.n(a,b,c))};C.n=function(a,b,c){var f=new Q(a,h(b),this.e);c&&(f.i(c),f.j(ob(c,arguments.callee.caller)));return f};C.h=function(a,b){this.log(sb,a,b)};C.m=function(a){var b=Ra+a.getMessage();D[p]&&(D[p].timeStamp?D[p].timeStamp(b):D[p].markTimeline&&D[p].markTimeline(b));D.msWriteProfilerMark&&D.msWriteProfilerMark(b);for(b=this;b;)b.p(a),b=b.getParent()};C.p=function(a){if(this.d)for(var b=0,c;c=this.d[b];b++)c(a)};C.l=function(a){this.a=a};
C.k=function(a,b){this.getChildren()[a]=b};var T={},U=null,ub=function(a){U||(U=new R(y),T[y]=U,U.g(tb));var b;if(!(b=T[a])){b=new R(a);var c=a.lastIndexOf(oa),f=a.substr(c+1),c=ub(a.substr(0,c));c.k(f,b);b.l(c);T[a]=b}return b};var X=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};X[u].toString=function(){return ka+this.x+z+this.y+la};var Y=function(a,b,c,f,d){var e=!!f;a.addEventListener(b,c,e);d&&(Y(a,va,function(d){d[v]&&d[v].tagName==Ba&&a.removeEventListener(b,c,e)}),Y(a,wa,function(d){d[v]&&d[v].tagName==Ba&&a.addEventListener(b,c,e)}))};var vb=/Mac OS X.+Silk\//;var wb=/iPhone|iPod|iPad/.test(g[m])||-1!=g[m][s]("Android")||vb.test(g[m]),yb=window[x].msPointerEnabled,zb=wb?"touchstart":yb?"MSPointerDown":"mousedown",Ab=wb?"touchend":yb?"MSPointerUp":"mouseup",Bb=function(a){return function(b){b.touches=[];b.targetTouches=[];b.changedTouches=[];b.type!=Ab&&(b.touches[0]=b,b.targetTouches[0]=b);b.changedTouches[0]=b;a(b)}};var Z,Cb,Db,Eb=ub("wireless.events.clickbuster"),Fb=function(a){if(!(2500<E()-Cb)){var b=new X(a.clientX,a.clientY);if(1>b.x&&1>b.y)Eb.h(za+b.x+z+b.y+la);else{for(var c=0;c<Z[t];c+=2)if(25>Math.abs(b.x-Z[c])&&25>Math.abs(b.y-Z[c+1])){Z.splice(c,c+2);return}Eb.h(Ma+b.x+z+b.y);a.stopPropagation();a.preventDefault();(a=Db)&&a()}}},Gb=function(a){var b=new X((a.touches||[a])[0].clientX,(a.touches||[a])[0].clientY);Z[r](b.x,b.y);window.setTimeout(function(){for(var a=b.x,f=b.y,d=0;d<Z[t];d+=2)if(Z[d]==
a&&Z[d+1]==f){Z.splice(d,d+2);break}Db=void 0},2500)};Db=void 0;if(!Z){document.addEventListener("click",Fb,!0);var Hb=Gb;wb||yb||(Hb=Bb(Hb));Y(document,zb,Hb,!0,!0);Z=[]}Cb=E();for(var $=0;$<Z[t];$+=2)if(25>Math.abs(0-Z[$])&&25>Math.abs(0-Z[$+1])){Z.splice($,$+2);break};})();
