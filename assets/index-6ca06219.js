import{R as m,r as x}from"./index-902e4630.js";import{$ as le,a as U,_ as N,b as Se,c as ke,d as ye,e as ve,f as we,g as Ce,h as Be}from"./index-883097aa.js";import{j as E}from"./jsx-runtime-0741ab7f.js";var $="colors",w="sizes",c="space",ce={gap:c,gridGap:c,columnGap:c,gridColumnGap:c,rowGap:c,gridRowGap:c,inset:c,insetBlock:c,insetBlockEnd:c,insetBlockStart:c,insetInline:c,insetInlineEnd:c,insetInlineStart:c,margin:c,marginTop:c,marginRight:c,marginBottom:c,marginLeft:c,marginBlock:c,marginBlockEnd:c,marginBlockStart:c,marginInline:c,marginInlineEnd:c,marginInlineStart:c,padding:c,paddingTop:c,paddingRight:c,paddingBottom:c,paddingLeft:c,paddingBlock:c,paddingBlockEnd:c,paddingBlockStart:c,paddingInline:c,paddingInlineEnd:c,paddingInlineStart:c,top:c,right:c,bottom:c,left:c,scrollMargin:c,scrollMarginTop:c,scrollMarginRight:c,scrollMarginBottom:c,scrollMarginLeft:c,scrollMarginX:c,scrollMarginY:c,scrollMarginBlock:c,scrollMarginBlockEnd:c,scrollMarginBlockStart:c,scrollMarginInline:c,scrollMarginInlineEnd:c,scrollMarginInlineStart:c,scrollPadding:c,scrollPaddingTop:c,scrollPaddingRight:c,scrollPaddingBottom:c,scrollPaddingLeft:c,scrollPaddingX:c,scrollPaddingY:c,scrollPaddingBlock:c,scrollPaddingBlockEnd:c,scrollPaddingBlockStart:c,scrollPaddingInline:c,scrollPaddingInlineEnd:c,scrollPaddingInlineStart:c,fontSize:"fontSizes",background:$,backgroundColor:$,backgroundImage:$,borderImage:$,border:$,borderBlock:$,borderBlockEnd:$,borderBlockStart:$,borderBottom:$,borderBottomColor:$,borderColor:$,borderInline:$,borderInlineEnd:$,borderInlineStart:$,borderLeft:$,borderLeftColor:$,borderRight:$,borderRightColor:$,borderTop:$,borderTopColor:$,caretColor:$,color:$,columnRuleColor:$,fill:$,outline:$,outlineColor:$,stroke:$,textDecorationColor:$,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ee=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,O=()=>{const e=Object.create(null);return(t,o,...r)=>{const n=(i=>JSON.stringify(i,Ee))(t);return n in e?e[n]:e[n]=o(t,...r)}},P=Symbol.for("sxs.internal"),Q=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),te=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:ze}=Object.prototype,K=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Re=/\s+(?![^()]*\))/,_=e=>t=>e(...typeof t=="string"?String(t).split(Re):[t]),re={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:_((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:_((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:_((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:_((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:_((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:_((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},Y=/([\d.]+)([^]*)/,Ie=(e,t)=>e.length?e.reduce((o,r)=>(o.push(...t.map(n=>n.includes("&")?n.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(n)?`:is(${r})`:r):r+" "+n)),o),[]):t,je=(e,t)=>e in We&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(o,r,n,i)=>r+(n==="stretch"?`-moz-available${i};${K(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${K(e)}:${r}fit-content`)+i):String(t),We={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},W=e=>e?e+"-":"",de=(e,t,o)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,n,i,d,s)=>d=="$"==!!i?r:(n||d=="--"?"calc(":"")+"var(--"+(d==="$"?W(t)+(s.includes("$")?"":W(o))+s.replace(/\$/g,"-"):s)+")"+(n||d=="--"?"*"+(n||"")+(i||"1")+")":"")),Me=/\s*,\s*(?![^()]*\))/,Pe=Object.prototype.toString,F=(e,t,o,r,n)=>{let i,d,s;const a=(u,p,f)=>{let l,g;const h=k=>{for(l in k){const S=l.charCodeAt(0)===64,H=S&&Array.isArray(k[l])?k[l]:[k[l]];for(g of H){const R=/[A-Z]/.test(b=l)?b:b.replace(/-[^]/g,C=>C[1].toUpperCase()),D=typeof g=="object"&&g&&g.toString===Pe&&(!r.utils[R]||!p.length);if(R in r.utils&&!D){const C=r.utils[R];if(C!==d){d=C,h(C(g)),d=null;continue}}else if(R in re){const C=re[R];if(C!==s){s=C,h(C(g)),s=null;continue}}if(S&&(y=l.slice(1)in r.media?"@media "+r.media[l.slice(1)]:l,l=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(C,B,I,M,z,j)=>{const T=Y.test(B),q=.0625*(T?-1:1),[J,ee]=T?[M,B]:[B,M];return"("+(I[0]==="="?"":I[0]===">"===T?"max-":"min-")+J+":"+(I[0]!=="="&&I.length===1?ee.replace(Y,(xe,X,Z)=>Number(X)+q*(I===">"?1:-1)+Z):ee)+(z?") and ("+(z[0]===">"?"min-":"max-")+J+":"+(z.length===1?j.replace(Y,(xe,X,Z)=>Number(X)+q*(z===">"?-1:1)+Z):j):"")+")"})),D){const C=S?f.concat(l):[...f],B=S?[...p]:Ie(p,l.split(Me));i!==void 0&&n(oe(...i)),i=void 0,a(g,B,C)}else i===void 0&&(i=[[],p,f]),l=S||l.charCodeAt(0)!==36?l:`--${W(r.prefix)}${l.slice(1).replace(/\$/g,"-")}`,g=D?g:typeof g=="number"?g&&R in Ae?String(g)+"px":String(g):de(je(R,g??""),r.prefix,r.themeMap[R]),i[0].push(`${S?`${l} `:`${K(l)}:`}${g}`)}}var y,b};h(u),i!==void 0&&n(oe(...i)),i=void 0};a(e,t,o)},oe=(e,t,o)=>`${o.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(o.length?o.length+1:0).join("}")}`,Ae={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ne=e=>String.fromCharCode(e+(e>25?39:97)),A=e=>(t=>{let o,r="";for(o=Math.abs(t);o>52;o=o/52|0)r=ne(o%52)+r;return ne(o%52)+r})(((t,o)=>{let r=o.length;for(;r;)t=33*t^o.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),G=["themed","global","styled","onevar","resonevar","allvar","inline"],Le=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Te=e=>{let t;const o=()=>{const{cssRules:n}=t.sheet;return[].map.call(n,(i,d)=>{const{cssText:s}=i;let a="";if(s.startsWith("--sxs"))return"";if(n[d-1]&&(a=n[d-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;return i.cssRules.length?`${a}${s}`:""}return s}).join("")},r=()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const u in s)delete s[u]}const n=Object(e).styleSheets||[];for(const s of n)if(Le(s)){for(let a=0,u=s.cssRules;u[a];++a){const p=Object(u[a]);if(p.type!==1)continue;const f=Object(u[a+1]);if(f.type!==4)continue;++a;const{cssText:l}=p;if(!l.startsWith("--sxs"))continue;const g=l.slice(14,-3).trim().split(/\s+/),h=G[g[0]];h&&(t||(t={sheet:s,reset:r,rules:{},toString:o}),t.rules[h]={group:f,index:a,cache:new Set(g)})}if(t)break}if(!t){const s=(a,u)=>({type:u,cssRules:[],insertRule(p,f){this.cssRules.splice(f,0,s(p,{import:3,undefined:1}[(p.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,p=>p.cssText).join("")}}`:a}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:r,toString:o}}const{sheet:i,rules:d}=t;for(let s=G.length-1;s>=0;--s){const a=G[s];if(!d[a]){const u=G[s+1],p=d[u]?d[u].index:i.cssRules.length;i.insertRule("@media{}",p),i.insertRule(`--sxs{--sxs:${s}}`,p),d[a]={group:i.cssRules[p+1],index:p,cache:new Set([s])}}_e(d[a])}};return r(),t},_e=e=>{const t=e.group;let o=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,o),++o}catch{}}},V=Symbol(),Fe=O(),ie=(e,t)=>Fe(e,()=>(...o)=>{let r={type:null,composers:new Set};for(const n of o)if(n!=null)if(n[P]){r.type==null&&(r.type=n[P].type);for(const i of n[P].composers)r.composers.add(i)}else n.constructor!==Object||n.$$typeof?r.type==null&&(r.type=n):r.composers.add(Ne(n,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),Oe(e,r,t)}),Ne=({variants:e,compoundVariants:t,defaultVariants:o,...r},n)=>{const i=`${W(n.prefix)}c-${A(r)}`,d=[],s=[],a=Object.create(null),u=[];for(const l in o)a[l]=String(o[l]);if(typeof e=="object"&&e)for(const l in e){p=a,f=l,ze.call(p,f)||(a[l]="undefined");const g=e[l];for(const h in g){const k={[l]:String(h)};String(h)==="undefined"&&u.push(l);const y=g[h],b=[k,y,!te(y)];d.push(b)}}var p,f;if(typeof t=="object"&&t)for(const l of t){let{css:g,...h}=l;g=typeof g=="object"&&g||{};for(const y in h)h[y]=String(h[y]);const k=[h,g,!te(g)];s.push(k)}return[i,r,d,s,a,u]},Oe=(e,t,o)=>{const[r,n,i,d]=He(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(f=>{function l(){for(let g=0;g<l[V].length;g++){const[h,k]=l[V][g];f.rules[h].apply(k)}return l[V]=[],null}return l[V]=[],l.rules={},G.forEach(g=>l.rules[g]={apply:h=>l[V].push([g,h])}),l})(o):null,a=(s||o).rules,u=`.${r}${n.length>1?`:where(.${n.slice(1).join(".")})`:""}`,p=f=>{f=typeof f=="object"&&f||De;const{css:l,...g}=f,h={};for(const b in i)if(delete g[b],b in f){let S=f[b];typeof S=="object"&&S?h[b]={"@initial":i[b],...S}:(S=String(S),h[b]=S!=="undefined"||d.has(b)?S:i[b])}else h[b]=i[b];const k=new Set([...n]);for(const[b,S,H,R]of t.composers){o.rules.styled.cache.has(b)||(o.rules.styled.cache.add(b),F(S,[`.${b}`],[],e,B=>{a.styled.apply(B)}));const D=ae(H,h,e.media),C=ae(R,h,e.media,!0);for(const B of D)if(B!==void 0)for(const[I,M,z]of B){const j=`${b}-${A(M)}-${I}`;k.add(j);const T=(z?o.rules.resonevar:o.rules.onevar).cache,q=z?a.resonevar:a.onevar;T.has(j)||(T.add(j),F(M,[`.${j}`],[],e,J=>{q.apply(J)}))}for(const B of C)if(B!==void 0)for(const[I,M]of B){const z=`${b}-${A(M)}-${I}`;k.add(z),o.rules.allvar.cache.has(z)||(o.rules.allvar.cache.add(z),F(M,[`.${z}`],[],e,j=>{a.allvar.apply(j)}))}}if(typeof l=="object"&&l){const b=`${r}-i${A(l)}-css`;k.add(b),o.rules.inline.cache.has(b)||(o.rules.inline.cache.add(b),F(l,[`.${b}`],[],e,S=>{a.inline.apply(S)}))}for(const b of String(f.className||"").trim().split(/\s+/))b&&k.add(b);const y=g.className=[...k].join(" ");return{type:t.type,className:y,selector:u,props:g,toString:()=>y,deferredInjector:s}};return Q(p,{className:r,selector:u,[P]:t,toString:()=>(o.rules.styled.cache.has(r)||p(),r)})},He=e=>{let t="";const o=[],r={},n=[];for(const[i,,,,d,s]of e){t===""&&(t=i),o.push(i),n.push(...s);for(const a in d){const u=d[a];(r[a]===void 0||u!=="undefined"||s.includes(u))&&(r[a]=u)}}return[t,o,r,new Set(n)]},ae=(e,t,o,r)=>{const n=[];e:for(let[i,d,s]of e){if(s)continue;let a,u=0,p=!1;for(a in i){const f=i[a];let l=t[a];if(l!==f){if(typeof l!="object"||!l)continue e;{let g,h,k=0;for(const y in l){if(f===String(l[y])){if(y!=="@initial"){const b=y.slice(1);(h=h||[]).push(b in o?o[b]:y.replace(/^@media ?/,"")),p=!0}u+=k,g=!0}++k}if(h&&h.length&&(d={["@media "+h.join(", ")]:d}),!g)continue e}}}(n[u]=n[u]||[]).push([r?"cv":`${a}-${i[a]}`,d,p])}return n},De={},Ve=O(),Ge=(e,t)=>Ve(e,()=>(...o)=>{const r=()=>{for(let n of o){n=typeof n=="object"&&n||{};let i=A(n);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in n){let d=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(n["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,d++);delete n["@import"]}F(n,[],[],e,d=>{t.rules.global.apply(d)})}}return""};return Q(r,{toString:r})}),Ue=O(),qe=(e,t)=>Ue(e,()=>o=>{const r=`${W(e.prefix)}k-${A(o)}`,n=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];F(o,[],[],e,s=>i.push(s));const d=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(d)}return r};return Q(n,{get name(){return n()},toString:n})}),Je=class{constructor(e,t,o,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=o==null?"":String(o),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+W(this.prefix)+W(this.scale)+this.token}toString(){return this.computedValue}},Xe=O(),Ze=(e,t)=>Xe(e,()=>(o,r)=>{r=typeof o=="object"&&o||Object(r);const n=`.${o=(o=typeof o=="string"?o:"")||`${W(e.prefix)}t-${A(r)}`}`,i={},d=[];for(const a in r){i[a]={};for(const u in r[a]){const p=`--${W(e.prefix)}${a}-${u}`,f=de(String(r[a][u]),e.prefix,a);i[a][u]=new Je(u,f,a,e.prefix),d.push(`${p}:${f}`)}}const s=()=>{if(d.length&&!t.rules.themed.cache.has(o)){t.rules.themed.cache.add(o);const a=`${r===e.theme?":root,":""}.${o}{${d.join(";")}}`;t.rules.themed.apply(a)}return o};return{...i,get className(){return s()},selector:n,toString:s}}),Ye=O(),Ke=O(),Qe=e=>{const t=(o=>{let r=!1;const n=Ye(o,i=>{r=!0;const d="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},p={prefix:d,media:s,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...ce},utils:typeof i.utils=="object"&&i.utils||{}},f=Te(a),l={css:ie(p,f),globalCss:Ge(p,f),keyframes:qe(p,f),createTheme:Ze(p,f),reset(){f.reset(),l.theme.toString()},theme:{},sheet:f,config:p,prefix:d,getCssText:f.toString,toString:f.toString};return String(l.theme=l.createTheme(u)),l});return r||n.reset(),n})(e);return t.styled=(({config:o,sheet:r})=>Ke(o,()=>{const n=ie(o,r);return(...i)=>{const d=n(...i),s=d[P].type,a=m.forwardRef((u,p)=>{const f=u&&u.as||s,{props:l,deferredInjector:g}=d(u);return delete l.as,l.ref=p,g?m.createElement(m.Fragment,null,m.createElement(f,l),m.createElement(g,null)):m.createElement(f,l)});return a.className=d.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=d.selector,a.toString=()=>d.selector,a[P]=d[P],a}}))(t),t},et=x.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),tt=function(t,o,r){var n=r.get(t);return n?n(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function se(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}var ue=x.forwardRef(function(e,t){var o=e.alt,r=e.color,n=e.size,i=e.weight,d=e.mirrored,s=e.children,a=e.renderPath,u=se(e,["alt","color","size","weight","mirrored","children","renderPath"]),p=x.useContext(et),f=p.color,l=f===void 0?"currentColor":f,g=p.size,h=p.weight,k=h===void 0?"regular":h,y=p.mirrored,b=y===void 0?!1:y,S=se(p,["color","size","weight","mirrored"]);return m.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n??g,height:n??g,fill:r??l,viewBox:"0 0 256 256",transform:d||b?"scale(-1, 1)":void 0},S,u),!!o&&m.createElement("title",null,o),s,m.createElement("rect",{width:"256",height:"256",fill:"none"}),a(i??k,r??l))});ue.displayName="IconBase";const rt=ue;var L=new Map;L.set("bold",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});L.set("duotone",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});L.set("fill",function(){return m.createElement(m.Fragment,null,m.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});L.set("light",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});L.set("thin",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});L.set("regular",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ot=function(t,o){return tt(t,o,L)},ge=x.forwardRef(function(e,t){return m.createElement(rt,Object.assign({ref:t},e,{renderPath:ot}))});ge.displayName="User";const nt=ge,fe="Avatar",[it,Qt]=le(fe),[at,pe]=it(fe),st=x.forwardRef((e,t)=>{const{__scopeAvatar:o,...r}=e,[n,i]=x.useState("idle");return x.createElement(at,{scope:o,imageLoadingStatus:n,onImageLoadingStatusChange:i},x.createElement(U.span,N({},r,{ref:t})))}),lt="AvatarImage",ct=x.forwardRef((e,t)=>{const{__scopeAvatar:o,src:r,onLoadingStatusChange:n=()=>{},...i}=e,d=pe(lt,o),s=gt(r),a=Se(u=>{n(u),d.onImageLoadingStatusChange(u)});return ke(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?x.createElement(U.img,N({},i,{ref:t,src:r})):null}),dt="AvatarFallback",ut=x.forwardRef((e,t)=>{const{__scopeAvatar:o,delayMs:r,...n}=e,i=pe(dt,o),[d,s]=x.useState(r===void 0);return x.useEffect(()=>{if(r!==void 0){const a=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(a)}},[r]),d&&i.imageLoadingStatus!=="loaded"?x.createElement(U.span,N({},n,{ref:t})):null});function gt(e){const[t,o]=x.useState("idle");return x.useEffect(()=>{if(!e){o("error");return}let r=!0;const n=new window.Image,i=d=>()=>{r&&o(d)};return o("loading"),n.onload=i("loaded"),n.onerror=i("error"),n.src=e,()=>{r=!1}},[e]),t}const ft=st,pt=ct,ht=ut,he="Switch",[bt,er]=le(he),[mt,$t]=bt(he),xt=x.forwardRef((e,t)=>{const{__scopeSwitch:o,name:r,checked:n,defaultChecked:i,required:d,disabled:s,value:a="on",onCheckedChange:u,...p}=e,[f,l]=x.useState(null),g=ye(t,S=>l(S)),h=x.useRef(!1),k=f?!!f.closest("form"):!0,[y=!1,b]=ve({prop:n,defaultProp:i,onChange:u});return x.createElement(mt,{scope:o,checked:y,disabled:s},x.createElement(U.button,N({type:"button",role:"switch","aria-checked":y,"aria-required":d,"data-state":be(y),"data-disabled":s?"":void 0,disabled:s,value:a},p,{ref:g,onClick:we(e.onClick,S=>{b(H=>!H),k&&(h.current=S.isPropagationStopped(),h.current||S.stopPropagation())})})),k&&x.createElement(yt,{control:f,bubbles:!h.current,name:r,value:a,checked:y,required:d,disabled:s,style:{transform:"translateX(-100%)"}}))}),St="SwitchThumb",kt=x.forwardRef((e,t)=>{const{__scopeSwitch:o,...r}=e,n=$t(St,o);return x.createElement(U.span,N({"data-state":be(n.checked),"data-disabled":n.disabled?"":void 0},r,{ref:t}))}),yt=e=>{const{control:t,checked:o,bubbles:r=!0,...n}=e,i=x.useRef(null),d=Ce(o),s=Be(t);return x.useEffect(()=>{const a=i.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(d!==o&&f){const l=new Event("click",{bubbles:r});f.call(a,o),a.dispatchEvent(l)}},[d,o,r]),x.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:o},n,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function be(e){return e?"checked":"unchecked"}const vt=xt,wt=kt;var Ct={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",vertu300:"#BE97C6",vertu500:"#8661C1",vertu700:"#2E294E",vertu900:"#4B5267",red300:"#FF2828",red500:"#C10000",yellow300:"#F6DE16",yellow500:"#B8A507",green300:"#269C43"},Bt={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Et={regular:"400",medium:"500",bold:"700"},zt={default:"Poppins, sans-serif",code:"JetBrains Mono, monospace"},Rt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},It={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},jt={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},{styled:v,theme:tr,css:rr,getCssText:or,globalCss:nr,keyframes:ir,createTheme:ar,config:sr}=Qe({themeMap:{...ce,height:"space",width:"space"},theme:{colors:Ct,fontSizes:Bt,fontWeights:Et,fonts:zt,lineHeights:Rt,radii:It,space:jt}}),Wt=v("div",{padding:"$4",backgroundColor:"$gray800",borderRadius:"8px",border:"1px solid $gray800"});Wt.displayName="Box";var me=v("p",{color:"$gray100",fontFamily:"$default",lineHeight:"$base",margin:0,variants:{sizes:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{sizes:"md"}});me.displayName="Text";var Mt=v("h2",{color:"$gray100",fontFamily:"$default",lineHeight:"$short",margin:0,variants:{sizes:{sm:{fontSize:"$lg"},md:{fontSize:"$xl"},lg:{fontSize:"$2xl"},xl:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"4xl":{fontSize:"$6xl"},"5xl":{fontSize:"$7xl"},"6xl":{fontSize:"$8xl"}}},defaultVariants:{sizes:"md"}});Mt.displayName="Header";var Pt=v(ft,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),At=v(pt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Lt=v(ht,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray200",color:"$gray800",svg:{width:"$10",height:"$10"}});function Tt(e){return E.jsxs(Pt,{children:[E.jsx(At,{...e}),E.jsx(Lt,{delayMs:600,children:E.jsx(nt,{})})]})}Tt.displayName="Avatar";var _t=v("button",{all:"unset",borderRadius:"$sm",fontFamily:"$default",fontSize:"$sm",fontWeight:"$medium",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",padding:"0 $4","&:disabled":{cursor:"not-allowed",opacity:.7,backgroundColor:"$gray200"},svg:{width:"$4",height:"$4"},variants:{variant:{primary:{color:"$white",backgroundColor:"$vertu500","&:not(:disabled):hover":{backgroundColor:"$vertu700",transition:"background-color 0.4s"}},secondary:{color:"$white",backgroundColor:"$vertu300","&:not(:disabled):hover":{backgroundColor:"$vertu500",transition:"background-color 0.4s"}},tertiary:{color:"$white",backgroundColor:"$vertu700","&:not(:disabled):hover":{backgroundColor:"$vertu900",transition:"background-color 0.4s"}},attention:{color:"$black",backgroundColor:"$yellow300","&:not(:disabled):hover":{backgroundColor:"$yellow500",transition:"background-color 0.4s"}},warning:{color:"$white",backgroundColor:"$red300","&:not(:disabled):hover":{backgroundColor:"$red500",transition:"background-color 0.4s"}}},size:{sm:{height:36},md:{height:48}}},defaultVariants:{variant:"primary",size:"md"}});_t.displayName="Button";var Ft=v("div",{boxSizing:"border-box",backgroundColor:"$gray900",borderRadius:"$sm",padding:"$3 $4",display:"flex",alignItems:"baseline"}),Nt=v("span",{color:"$gray500",fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular"}),$e=v("input",{color:"$gray200",fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular",background:"transparent",width:"100%",border:"2px solid $gray900",borderRadius:"$xs",resize:"none","&:disabled":{opacity:"0.5",cursor:"not-allowed"},"&:focus":{outline:0,borderColor:"$vertu500"}});function lr({prefix:e,...t}){return E.jsxs(Ft,{children:[!!e&&E.jsx(Nt,{children:e}),E.jsx($e,{...t})]})}$e.displayName="TextInput";var Ot=v("textarea",{display:"flex",color:"$gray200",fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular",background:"$gray900",padding:"$4 $5",borderRadius:"$xs",border:"2px solid $gray900",resize:"none",minHeight:80,"&:disabled":{opacity:"0.5",cursor:"not-allowed"},"&:focus":{outline:0,borderColor:"$vertu500"}});Ot.displayName="TextArea";var Ht=v(vt,{all:"unset",width:42,height:25,backgroundColor:"$gray400",borderRadius:"9999px",position:"relative",boxShadow:"0 2px 10px $black",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",variants:{colors:{default:{"&:focus":{boxShadow:"0 0 0 2px $green300"},'&[data-state="checked"]':{backgroundColor:"$green300"}},primary:{"&:focus":{boxShadow:"0 0 0 2px $vertu500"},'&[data-state="checked"]':{backgroundColor:"$vertu500"}},secondary:{"&:focus":{boxShadow:"0 0 0 2px $vertu700"},'&[data-state="checked"]':{backgroundColor:"$vertu700"}},tertiary:{"&:focus":{boxShadow:"0 0 0 2px $vertu900"},'&[data-state="checked"]':{backgroundColor:"$vertu900"}}}},defaultVariants:{colors:"default"}}),Dt=v(wt,{display:"block",width:21,height:21,backgroundColor:"white",borderRadius:"9999px",boxShadow:"0 2px 2px $black",transition:"transform 400ms",transform:"translateX(2px)",willChange:"transform",'&[data-state="checked"]':{transform:"translateX(19px)"}});function Vt({colors:e,...t}){return E.jsx(Ht,{colors:e,...t,children:E.jsx(Dt,{})})}Vt.displayName="Switch";var Gt=v("div",{}),Ut=v(me,{color:"$gray200",defaultVariants:{sizes:"xs"}}),qt=v("div",{display:"grid",gridTemplateColumns:"repeat(var(--number-steps), 1fr)",gap:"$2",marginTop:"$1"}),Jt=v("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Xt({steps:e,activeStep:t=1}){return E.jsxs(Gt,{children:[E.jsxs(Ut,{children:["Step ",t," of ",e]}),E.jsx(qt,{css:{"--number-steps":e},children:Array.from({length:e},(o,r)=>r+1).map(o=>E.jsx(Jt,{active:t>=o},o))})]})}Xt.displayName="MultiStep";export{Tt as A,Wt as B,Mt as H,rt as I,Xt as M,Vt as S,lr as T,me as a,Ot as b,_t as c,tt as r};
//# sourceMappingURL=index-6ca06219.js.map
