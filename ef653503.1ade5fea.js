(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),a=(n(0),n(179)),i={id:"getting_started",title:"Getting Started",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Main_Concepts/Getting_Started.md"},c={id:"portal/Main_Concepts/getting_started",title:"Getting Started",description:"To develop for Conflux Portal, you're first going to want to get Conflux Portal",source:"@site/docs/en/portal/Main_Concepts/Getting_Started.md",permalink:"/docs/portal/Main_Concepts/getting_started",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Main_Concepts/Getting_Started.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584525632},l=[{value:"Basic Considerations",id:"basic-considerations",children:[{value:"ConfluxJS Browser Detection",id:"confluxjs-browser-detection",children:[]},{value:"Running a Test Network",id:"running-a-test-network",children:[]},{value:"Detecting Conflux Portal",id:"detecting-conflux-portal",children:[]},{value:"User State",id:"user-state",children:[]},{value:"Connecting to Conflux Portal",id:"connecting-to-conflux-portal",children:[]}]},{value:"Choosing a Convenience Library",id:"choosing-a-convenience-library",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To develop for Conflux Portal, you're first going to want to get Conflux Portal\ninstalled on your development machine. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal/releases"}),"Download\nhere"),".   "),Object(a.b)("p",null,"Once you have it running, you should find that new browser tabs have a\n",Object(a.b)("inlineCode",{parentName:"p"},"window.conflux")," object available in the console. This is the way Conflux Portal\nprovides for you to interact with it.  "),Object(a.b)("p",null,"You can review the full API for that object ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/portal/API_Reference/provider_api"}),"here"),"."),Object(a.b)("h2",{id:"basic-considerations"},"Basic Considerations"),Object(a.b)("h3",{id:"confluxjs-browser-detection"},"ConfluxJS Browser Detection"),Object(a.b)("p",null,"The first thing your app will want to do is verify whether the user is using\nConflux Portal or not, which is simple using a check like ",Object(a.b)("inlineCode",{parentName:"p"},"if (typeof\nwindow.conflux !== 'undefined') { /* deal with it */ }"),". "),Object(a.b)("h3",{id:"running-a-test-network"},"Running a Test Network"),Object(a.b)("p",null,"In the top right menu of Conflux Portal, you can select the network that you are\ncurrently connected to. Among several popular defaults, you'll find ",Object(a.b)("inlineCode",{parentName:"p"},"Custom RPC"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"Localhost 12539"),". These are both useful for connecting to a test\nblockchain, like ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/yqrashawn/conflux-local-network-lite#readme"}),"conflux local network\nlite"),", which you\ncan quickly install and start if you have ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," installed with ",Object(a.b)("inlineCode",{parentName:"p"},"npm i -g\nganache-cli && ganache-cli"),". "),Object(a.b)("p",null,"Since your seed phrase is the power to control all your accounts, it is probably\nworth keeping at least one seed phrase for development, separate from any that\nyou use for storing real value. One easy way to manage multiple seed phrases\nwith Conflux Portal is with multiple browser profiles, each of which can have\nits own clean extension installations.  "),Object(a.b)("h4",{id:"resetting-your-local-nonce-calculation"},"Resetting Your Local Nonce Calculation"),Object(a.b)("p",null,"If you're running a test blockchain, and then restart it, you can accidentally\nconfuse Conflux Portal, because it calculates the next\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/portal/Main_Concepts/sending_transactions#nonce-%5Bignored%5D"}),"nonce")," based on both the network\nstate ",Object(a.b)("em",{parentName:"p"},"and")," the known sent transactions.  "),Object(a.b)("p",null,"To clear Conflux Portal's transaction queue, and effectively reset its nonce\ncalculation, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"Reset Account")," button in ",Object(a.b)("inlineCode",{parentName:"p"},"Settings")," (available in\nthe top-right sandwich menu). "),Object(a.b)("h3",{id:"detecting-conflux-portal"},"Detecting Conflux Portal"),Object(a.b)("p",null,"If you want to differentiate Conflux Portal from other conflux-compatible\nbrowsers, you can detect Conflux Portal using ",Object(a.b)("inlineCode",{parentName:"p"},"conflux.isConflux Portal"),". "),Object(a.b)("h3",{id:"user-state"},"User State"),Object(a.b)("p",null,"Currently there are a few stateful things you want to consider when interacting\nwith this API:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What is the current network?"),Object(a.b)("li",{parentName:"ul"},"What is the current account?")),Object(a.b)("p",null,"Both of these are available synchronously as ",Object(a.b)("inlineCode",{parentName:"p"},"conflux.networkVersion")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"conflux.selectedAddress"),". You can listen for changes using events too, see\n(",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/portal/API_Reference/provider_api"}),"the API reference"),")."),Object(a.b)("h3",{id:"connecting-to-conflux-portal"},"Connecting to Conflux Portal"),Object(a.b)("p",null,'"Connecting" or "logging in" to Conflux Portal effectively means "to access the\nuser\'s Conflux account(s)".'),Object(a.b)("p",null,"You should ",Object(a.b)("strong",{parentName:"p"},"only")," initiate a connection request in response to direct user\naction, such as clicking a button. You should ",Object(a.b)("strong",{parentName:"p"},"never")," initiate a connection\nrequest on page load.  "),Object(a.b)("p",null,"We recommend that you provide a button to allow the user to connect Conflux\nPortal to your dapp. Clicking this button should call the following method:  "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.enable()\n")),Object(a.b)("p",null,"This promise-returning function resolves with an array of hex-prefixed conflux\naddresses, which can be used as general account references when sending\ntransactions.  "),Object(a.b)("p",null,"Over time, this method is intended to grow to include various additional\nparameters to help your site request all the setup it needs from the user during\nsetup.  "),Object(a.b)("p",null,"Since it returns a promise, if you're in an ",Object(a.b)("inlineCode",{parentName:"p"},"async")," function, you may log in\nlike this:  "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const accounts = await conflux.enable()\nconst account = accounts[0] // We currently only ever provide a single account,\n                            // but the array gives us some room to grow.\n")),Object(a.b)("h2",{id:"choosing-a-convenience-library"},"Choosing a Convenience Library"),Object(a.b)("p",null,"Convenience libraries exist for a variety of reasons."),Object(a.b)("p",null,"Some of them simplify the creation of specific user interface elements, some\nentirely manage the user account onboarding, and others give you a variety of\nmethods of interacting with smart contracts, for a variety of API preferences,\nfrom promises, to callbacks, to strong types, and on.  "),Object(a.b)("p",null,"The provider API itself is very simple, and wraps ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/json-rpc/"}),"Conflux\nJSON-RPC")," formatted\nmessages, which is why developers usually use a convenience library for\ninteracting with the provider, like\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk"),",\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/liuis/conffle#readme"}),"conffle"),", or others. From those tools,\nyou can generally find sufficient documentation to interact with the provider,\nwithout reading this lower-level API. "))}u.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);