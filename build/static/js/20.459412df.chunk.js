(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[20],{180:function(a,n,t){"use strict";t.r(n),t.d(n,"readingTime",(function(){return o})),t.d(n,"default",(function(){return c})),t.d(n,"tableOfContents",(function(){return r})),t.d(n,"frontMatter",(function(){return i}));var e=t(34),s=(t(1),t(209)),p=["components"],o={text:"3 min read",minutes:2.295,time:137700,words:459},l={};function c(a){var n=a.components,t=Object(e.a)(a,p);return Object(s.a)("wrapper",Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"styling"},"Styling"),Object(s.a)("h2",{id:"-your-notes"},"\ud83d\udcdd Your Notes"),Object(s.a)("p",null,"Elaborate on your learnings here in ",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/05.md")),Object(s.a)("h2",{id:"background"},"Background"),Object(s.a)("p",null,"There are two primary ways to style react components"),Object(s.a)("ol",null,Object(s.a)("li",{parentName:"ol"},"Inline styles with the ",Object(s.a)("inlineCode",{parentName:"li"},"style")," prop"),Object(s.a)("li",{parentName:"ol"},"Regular CSS with the ",Object(s.a)("inlineCode",{parentName:"li"},"className")," prop")),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"About the ",Object(s.a)("inlineCode",{parentName:"strong"},"style")," prop:")),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"In HTML you\u2019d pass a string of CSS:")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"In React, you\u2019ll pass an object of CSS:")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>marginTop<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n'}})),Object(s.a)("p",null,"Note that in react the ",Object(s.a)("inlineCode",{parentName:"p"},"{{")," and ",Object(s.a)("inlineCode",{parentName:"p"},"}}")," is actually a combination of a JSX\nexpression and an object expression. The same example above could be written\nlike so:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> myStyles <span class="token operator">=</span> <span class="token punctuation">{</span>marginTop<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>myStyles<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n'}})),Object(s.a)("p",null,"Note also that the property names are ",Object(s.a)("inlineCode",{parentName:"p"},"camelCased")," rather than ",Object(s.a)("inlineCode",{parentName:"p"},"kebab-cased"),".\nThis matches the ",Object(s.a)("inlineCode",{parentName:"p"},"style")," property of DOM nodes (which is a\n",Object(s.a)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration"},Object(s.a)("inlineCode",{parentName:"a"},"CSSStyleDeclaration")),"\nobject)."),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"About the ",Object(s.a)("inlineCode",{parentName:"strong"},"className")," prop:")),Object(s.a)("p",null,"As we discussed earlier, in HTML, you apply a class name to an element with the\n",Object(s.a)("inlineCode",{parentName:"p"},"class")," attribute. In JSX, you use the ",Object(s.a)("inlineCode",{parentName:"p"},"className")," prop."),Object(s.a)("h2",{id:"exercise"},"Exercise"),Object(s.a)("p",null,"Production deploys:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/exercise/05.js"},"Exercise")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/final/05.js"},"Final"))),Object(s.a)("p",null,"In this exercise we\u2019ll use both methods for styling react components."),Object(s.a)("p",null,"We have the following css on the page:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-css","data-language":"css","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #333<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.box--large</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 270px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 270px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.box--medium</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.box--small</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}})),Object(s.a)("p",null,"Your job is to apply the right className and style props to the divs below so\nthe styles applied match the text content."),Object(s.a)("h2",{id:"extra-credit"},"Extra Credit"),Object(s.a)("h3",{id:"1--create-a-custom-component"},"1. \ud83d\udcaf Create a custom component"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/05.extra-1.js"},"Production deploy")),Object(s.a)("p",null,"Try to make a custom ",Object(s.a)("inlineCode",{parentName:"p"},"<Box />")," component that renders a div, accepts all the\nprops and merges the given ",Object(s.a)("inlineCode",{parentName:"p"},"style")," and ",Object(s.a)("inlineCode",{parentName:"p"},"className")," props with the shared values."),Object(s.a)("p",null,"I should be able to use it like so:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Box</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box--small<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>backgroundColor<span class="token operator">:</span> <span class="token string">\'lightblue\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  small lightblue box\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Box</span></span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("p",null,"The ",Object(s.a)("inlineCode",{parentName:"p"},"box")," className and ",Object(s.a)("inlineCode",{parentName:"p"},"fontStyle: 'italic'")," style should be applied in\naddition to the values that come from props."),Object(s.a)("h3",{id:"2--accept-a-size-prop-to-encapsulate-styling"},"2. \ud83d\udcaf accept a size prop to encapsulate styling"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/05.extra-2.js"},"Production deploy")),Object(s.a)("p",null,"It\u2019s great that we\u2019re composing the ",Object(s.a)("inlineCode",{parentName:"p"},"className"),"s and ",Object(s.a)("inlineCode",{parentName:"p"},"style"),"s properly, but\nwouldn\u2019t it be better if the users of our components didn\u2019t have to worry about\nwhich class name to apply for a given effect? Or that a class name is involved\nat all? I think it would be better if users of our component had a ",Object(s.a)("inlineCode",{parentName:"p"},"size")," prop\nand our component took care of making the box that size."),Object(s.a)("p",null,"In this extra credit, try to make this API work:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Box</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>backgroundColor<span class="token operator">:</span> <span class="token string">\'lightblue\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  small lightblue box\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Box</span></span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("h2",{id:"attribution"},"Attribution"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"https://twitter.com/mzabriskie"},"Matt Zabriskie")," developed this example\noriginally for\n",Object(s.a)("a",{parentName:"p",href:"https://github.com/mzabriskie/react-workshop"},"a workshop we gave together.")),Object(s.a)("h2",{id:"\ud83e\udd89-feedback"},"\ud83e\udd89 Feedback"),Object(s.a)("p",null,"Fill out\n",Object(s.a)("a",{parentName:"p",href:"https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=05%3A%20Styling&em="},"the feedback form"),"."))}c.isMDXComponent=!0;var r=function(){return[{id:"-your-notes",level:2,title:"\ud83d\udcdd Your Notes",children:[]},{id:"background",level:2,title:"Background",children:[]},{id:"exercise",level:2,title:"Exercise",children:[]},{id:"extra-credit",level:2,title:"Extra Credit",children:[{id:"1--create-a-custom-component",level:3,title:"1. \ud83d\udcaf Create a custom component",children:[]},{id:"2--accept-a-size-prop-to-encapsulate-styling",level:3,title:"2. \ud83d\udcaf accept a size prop to encapsulate styling",children:[]}]},{id:"attribution",level:2,title:"Attribution",children:[]},{id:"\ud83e\udd89-feedback",level:2,title:"\ud83e\udd89 Feedback",children:[]}]},i={}},209:function(a,n,t){"use strict";t.d(n,"a",(function(){return k}));var e=t(1),s=t.n(e);function p(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function o(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),t.push.apply(t,e)}return t}function l(a){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(a,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))}))}return a}function c(a,n){if(null==a)return{};var t,e,s=function(a,n){if(null==a)return{};var t,e,s={},p=Object.keys(a);for(e=0;e<p.length;e++)t=p[e],n.indexOf(t)>=0||(s[t]=a[t]);return s}(a,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(e=0;e<p.length;e++)t=p[e],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var r=s.a.createContext({}),i=function(a){var n=s.a.useContext(r),t=n;return a&&(t="function"===typeof a?a(n):l(l({},n),a)),t},u={inlineCode:"code",wrapper:function(a){var n=a.children;return s.a.createElement(s.a.Fragment,{},n)}},d=s.a.forwardRef((function(a,n){var t=a.components,e=a.mdxType,p=a.originalType,o=a.parentName,r=c(a,["components","mdxType","originalType","parentName"]),d=i(t),k=e,b=d["".concat(o,".").concat(k)]||d[k]||u[k]||p;return t?s.a.createElement(b,l(l({ref:n},r),{},{components:t})):s.a.createElement(b,l({ref:n},r))}));function k(a,n){var t=arguments,e=n&&n.mdxType;if("string"===typeof a||e){var p=t.length,o=new Array(p);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=a,l.mdxType="string"===typeof a?a:e,o[1]=l;for(var r=2;r<p;r++)o[r]=t[r];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=20.459412df.chunk.js.map