(function(){var d=!0,f=null,h=!1,i=window,j=document;function m(a,b){return a.addEventListener=b}function n(a,b){return a.attachEvent=b}
var o="push",p="exec",q="indexOf",r="hasAttribute",s="readyState",t="querySelector",u="addEventListener",v="setAttribute",w="attachEvent",x="getElementsByTagName",y="documentElement",z="length",A="prototype",B="removeChild",C="call",D="getAttribute",E="querySelectorAll",F="fireEvent",G="parentNode",H="",aa="\n",ba='");',ca="*",da=":not([psa_not_processed])",ea="<div>_</div>",fa='=document.getElementById("',ga="Add to queue str: ",ha="Add to queue url: ",ia="DOMContentLoaded",ja="Evaluated: ",I="Exception while evaluating.",
ka="Exception while overriding document.readyState.",la="Executed: ",ma="Executing a script twice. Orig_Index: ",na="Firefox",oa="Firing Event: ",pa="HTMLEvents",qa="PSA ERROR: ",J="SCRIPT",ra="Unable to insert nodes, no context element found",sa="[psa_current_node]",ta="[psa_not_processed]",ua='[type="text/psajs"]',va="application/ecmascript",wa="application/javascript",xa="application/x-ecmascript",ya="application/x-javascript",za="complete",Aa="data:text/javascript,",Ba="div",Ca="dw: ",Da="error",
Ea="handle_dw: ",Fa="id",Ga="language",K="load",Ha="loaded",Ia="loading",L="on",Ja="onDOMContentLoaded",Ka="onafterscripts",La="onbeforescripts",M="onload",Ma="onload: ",Na="onreadystatechange",N="orig_index",Oa="pagespeed_orig_src",Pa="pagespeed_orig_type",Qa="psa_current_node",Ra="psa_dw_target",O="psa_not_processed",P="psanode",Sa="readyState",Ta="readystatechange",Q="script",R="src",Ua="text/",Va="text/ecmascript",S="text/javascript",Wa="text/javascript1.0",Xa="text/javascript1.1",Ya="text/javascript1.2",
Za="text/javascript1.3",$a="text/javascript1.4",ab="text/javascript1.5",bb="text/jscript",cb="text/livescript",T="text/psajs",db="text/x-ecmascript",eb="text/x-javascript",fb="true",U="type",gb="var ",V;i.pagespeed=i.pagespeed||{};var W=i.pagespeed;W.deferJsNs={};
var X=W.deferJsNs,Y=function(){this.i=[];this.g=[];this.k=this.h=0;this.f=[];this.c=H;this.n={};this.F=[va,wa,xa,ya,Va,S,Wa,Xa,Ya,Za,$a,ab,bb,cb,db,eb];this.z=j.getElementById;this.p=j[x];this.S=j.write;this.T=j.writeln;this.R=j.open;this.Q=j.close;this.A=j[u];this.C=i[u];this.B=j[w];this.D=i[w];this.d=j.createElement;this.r=this.q=this.a=0;this.e=this.o=d;this.l=f},Z=h;V=Y[A];
V.log=function(a,b){this.g&&(this.g[o](H+a),b&&(this.g[o](b),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log(qa+a+b.message)))};V.L=function(a,b){this.i.splice(b?b:this.i[z],0,a)};V.M=function(a){var b=this.d[C](j,Q);b.text=a;b[v](U,S);a=this.w();a[G].insertBefore(b,a)};
V.W=function(){for(var a=j[x](ca),b=H,c=0;c<a[z];c++)if(a[c][r](Fa)){var e=a[c][D](Fa);if(e&&-1==e.search(/[-:.]/)&&-1==e.search(/^[0-9]/))try{i[e]&&i[e].tagName&&(b+=gb+e+fa+e+ba)}catch(k){this.log(I,k)}}b&&this.M(b)};V.v=function(a,b,c){var e=a[D](Oa)||a[D](R);e?(c&&((new Image).src=e),this.addUrl(e,a,b)):(c=a.innerHTML||a.textContent||a.data)&&this.P(c,a,b)};
V.P=function(a,b,c){if(this.$())this.addUrl(Aa+encodeURIComponent(a),b,c);else{this.g[o](ga+a);var e=this;this.L(function(){e.t(b);e.K()[v](Qa,H);try{e.M(a)}catch(c){e.log(I,c)}e.log(ja+a);e.u()},c)}};Y[A].addStr=Y[A].P;
Y[A].addUrl=function(a,b,c){this.g[o](ha+a);var e=this;this.L(function(){e.t(b);var c=e.d[C](j,Q);c[v](U,S);var g=function(){e.log(la+a);e.u()};X.m(c,g);X.j(c,Da,g);9>e.b()&&X.j(c,Ta,function(){if(c[s]==za||c[s]==Ha)c.onreadystatechange=f,g()});c[v](R,a);var l=b.innerHTML||b.textContent||b.data;l&&c.appendChild(j.createTextNode(l));l=e.K();l[v](Qa,H);l[G].insertBefore(c,l)},c)};Y[A].addUrl=Y[A].addUrl;V=Y[A];
V.t=function(a){if(j[E]&&!(8>=this.b()))for(var b=j[E](ta),c=0;c<b[z];c++){var e=b.item(c);if(e==a)break;e[D](U)!=T&&e.removeAttribute(O)}};V.X=function(){for(var a=this.p[C](j,ca),b=0;b<a[z];b++)a.item(b)[v](O,H)};V.K=function(){var a=f;j[t]&&(a=j[t](ua));return a};V.w=function(){var a;j[t]&&(a=j[t](sa));return a||this.p[C](j,P)[0]};V.Y=function(){var a=this.w();a.nodeName==J&&a[G][B](a)};
V.s=function(){if(!(5<=this.a))if(this.e&&(this.b()&&j[y].originalDoScroll&&(j[y].doScroll=j[y].originalDoScroll),Object.defineProperty&&delete j[s]),j.getElementById=this.z,j[E]&&!(8>=this.b())&&(j.getElementsByTagName=this.p),j.createElement=this.d,j.open=this.R,j.close=this.Q,j.write=this.S,j.writeln=this.T,this.e){this.a=5;this.U();var a=this;j[s]!=za?X.m(i,function(){a.I()}):(j.onreadystatechange&&this[p](j.onreadystatechange,j),i.onload&&($(i,M,i.onload),i.onload=f),this.I())}else this.a=1,
this.o=h,this.l&&(this[p](this.l),this.l=f)};V.I=function(){this[F](3);for(var a=j.body[x](P),b=a[z]-1;0<=b;b--)j.body[B](a[b]);this.a=6;this[F](4)};V.Z=function(a){for(;a=a[G];)if(a==j)return d;return h};V.G=function(){if(4!=this.a)return h;var a=0;if(0!=this.k)for(var b=this.f[z],c=0;c<b;++c){var e=this.f[c],k=e[G],g=e.src,l=e.textContent;(8<this.b()&&(!k||g==H&&l==H)||!this.b()&&(!this.Z(e)||g==H))&&a++}return this.k==a?d:h};V.la=function(){return 6===this.a};Y[A].scriptsAreDone=Y[A].la;
Y[A].u=function(){this.H();this.Y();this.h<this.i[z]?(this.h++,this.i[this.h-1][C](i)):this.e?(this.a=4,this.t(),this[F](2),this.G()&&this.s()):this.s()};Y[A].O=function(a){for(var b=[],c=a[z],e=0;e<c;++e)b[o](a.item(e));return b};
Y[A].aa=function(){if(this.o){var a=j.createElement(P);a[v](Ra,fb);j.body.appendChild(a);this.b()&&this.W();if(Object.defineProperty)try{Object.defineProperty(j,Sa,{configurable:d,get:function(){return Ia}})}catch(b){this.log(ka,b)}this.b()&&(j[y].originalDoScroll=j[y].doScroll,j[y].doScroll=function(){throw"psa exception";})}this.X();this.V();var c=this;j.writeln=function(a){c.J(a+aa)};j.write=function(a){c.J(a)};j.open=function(){};j.close=function(){};j.getElementById=function(a){c.H();a=c.z[C](j,
a);return a==f||a[r](O)?f:a};j[E]&&!(8>=c.b())&&(j.getElementsByTagName=function(a){return j[E](a+da)});j.createElement=function(a){var b=c.d[C](j,a);if(a.toLowerCase()==Q){c.f[o](b);c.k++;a=function(){c.k--;var a=c.f[q](this);if(a!=-1){c.f.splice(a,1);c.G()&&c.s()}};X.m(b,a);X.j(b,Da,a)}return b}};Y[A].ia=function(){2==this.a&&(this.o&&this[F](1),this.a=3,this.aa(),this.u())};Y[A].run=Y[A].ia;V=Y[A];V.ea=function(a){var b=this.d[C](j,Ba);b.innerHTML=ea+a;b[B](b.firstChild);return b};
V.ga=function(a){var b=a[G];b&&b[B](a)};V.da=function(a,b){for(var c=this.O(a),e=c[z],k=b[G],g=0;g<e;++g){var l=c[g];this.ga(l);k.insertBefore(l,b)}};V.fa=function(a){return a.nodeName!=J?h:a[r](U)?(a=a[D](U),!a||-1!=this.F[q](a)):a[r](Ga)?(a=a[D](Ga),!a||-1!=this.F[q](Ua+a.toLowerCase())):d};V.N=function(a,b){if(a.childNodes)for(var c=this.O(a.childNodes),e=c[z],k=0;k<e;++k){var g=c[k];g.nodeName==J?this.fa(g)&&(b[o](g),g[v](Pa,g.type),g[v](U,T),g[v](Oa,g.src),g[v](R,H),g[v](O,H)):this.N(g,b)}};
V.ca=function(a,b){for(var c=a[z],e=0;e<c;++e)this.v(a[e],b+e,!!e)};V.ba=function(a,b,c){var a=this.ea(a),e=[];this.N(a,e);c?this.da(a.childNodes,c):this.log(ra);this.ca(e,b)};V.H=function(){if(this.c!=H){this.log(Ea+this.c);var a=this.c;this.c=H;var b=this.w();this.ba(a,this.h,b)}};V.J=function(a){this.log(Ca+a);this.c+=a};V.ja=function(a,b){this.log(Ma+b.toString());6==this.a?b[C](a):$(a,M,b)};Y[A].addOnloadListeners=Y[A].ja;Y[A].na=function(a){$(i,La,a)};Y[A].addBeforeDeferRunFunctions=Y[A].na;
Y[A].ma=function(a){$(i,Ka,a)};Y[A].addAfterDeferRunFunctions=Y[A].ma;Y[A].fireEvent=function(a){this.q=a;this.log(oa+a);for(var a=this.n[a]||[],b=0;b<a[z];++b)this[p](a[b]);a.length=0};Y[A].exec=function(a,b){try{a[C](b||i)}catch(c){this.log(I,c)}};Y[A].V=function(){var a=this;i[u]?(m(j,function(b,c,e){$(j,b,c,e,a.A)}),m(i,function(b,c,e){$(i,b,c,e,a.C)})):i[w]&&(n(j,function(b,c){$(j,b,c,void 0,a.B)}),n(i,function(b,c){$(i,b,c,void 0,a.D)}))};
Y[A].U=function(){i[u]?(m(j,this.A),m(i,this.C)):i[w]&&(n(j,this.B),n(i,this.D))};var $=function(a,b,c,e,k){var g=W.deferJs;if(!(6<=g.a)){if(2>g.q&&(b==ia||b==Ta||b==Ja||b==Na))b=2;else if(3>g.q&&(b==K||b==M))b=3;else if(b==La)b=1;else if(b==Ka)b=4;else{k&&k[C](a,b,c,e);return}var l;3==b&&!(8>=g.b())&&(l=j.createEvent(pa),l.initEvent(K,h,h));g.n[b]||(g.n[b]=[]);g.n[b][o](function(){c[C](a,l)})}};
Y[A].ha=function(a){if(!(2<=this.a)){if(a){if(!Z){a();return}this.e=h;this.l=a}else this.e=d;this.a=2;for(var b=j[x](Q),c=b[z],e=0;e<c;++e){var k=this.i[z]==this.h,g=b[e];g[D](U)==T&&(a?g[D](N)==this.r&&(this.r++,this.v(g,void 0,!k)):(g[D](N)<this.r&&this.log(ma+g[D](N),Error(H)),this.v(g,void 0,!k)))}}};Y[A].registerScriptTags=Y[A].ha;X.m=function(a,b){X.j(a,K,b)};W.addOnload=X.m;X.j=function(a,b,c){if(a[u])a[u](b,c,h);else if(a[w])a[w](L+b,c);else{var e=a[L+b];a[L+b]=function(){c[C](this);e&&e[C](this)}}};
W.addHandler=X.j;Y[A].$=function(){return-1!=navigator.userAgent[q](na)};Y[A].b=function(){var a=/(?:MSIE.(\d+\.\d+))/[p](navigator.userAgent);return a&&a[1]?j.documentMode||parseFloat(a[1]):NaN};Y[A].oa=function(){return Z};Y[A].isExperimentalMode=Y[A].oa;X.ka=function(){W.deferJs||(i.localStorage&&(Z=i.localStorage.defer_js_experimental),W.deferJs=new Y)};W.deferInit=X.ka;})();
