(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),c=n(9),a=(n(0),n(179)),o={id:"accessing_accounts",title:"Accessing Accounts",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Main_Concepts/Accessing_Accounts.md"},i={id:"portal/Main_Concepts/accessing_accounts",title:"Accessing Accounts",description:"User accounts are used in a variety of contexts in Conflux, they serve as neat",source:"@site/docs/en/portal/Main_Concepts/Accessing_Accounts.md",permalink:"/docs/portal/Main_Concepts/accessing_accounts",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Main_Concepts/Accessing_Accounts.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584525632},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"User accounts are used in a variety of contexts in Conflux, they serve as neat\nidentifiers, but no use is as important as calling ",Object(a.b)("em",{parentName:"p"},"wallet methods"),". These\nmethods involve a signature or transaction approval. All of those methods\nrequire the sending account as a function parameter:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cfx_sendTransaction")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cfx_sign")," (insecure and unadvised to use)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"personal_sign"))),Object(a.b)("p",null,"Once you've ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/portal/Main_Concepts/getting_started"}),"connected to a user"),", you can always re-check\nthe current account by checking ",Object(a.b)("inlineCode",{parentName:"p"},"conflux.selectedAddress"),". "),Object(a.b)("p",null,"If you'd like to be notified when the address changes, we have an event you can\nsubscribe to: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.on('accountsChanged', function (accounts) {\n  // Time to reload your interface with accounts[0]!\n})\n")),Object(a.b)("p",null,"If the first account in the returned array isn't the account you expected, you\nshould notify the user! In the future, the accounts array may contain more than\none account. However, the first account in the array will continue to be\nconsidered as the user's \"selected\" account. "))}l.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return n?c.a.createElement(b,i({ref:t},u,{components:n})):c.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);