(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(1),i=r(9),n=(r(0),r(179)),o={id:"common_terms",title:"Common Terms",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Main_Concepts/Common_Terms.md"},l={id:"portal/Main_Concepts/common_terms",title:"Common Terms",description:"## Words are Hard",source:"@site/docs/en/portal/Main_Concepts/Common_Terms.md",permalink:"/docs/portal/Main_Concepts/common_terms",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Main_Concepts/Common_Terms.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584525632},c=[{value:"Words are Hard",id:"words-are-hard",children:[{value:"Wallet",id:"wallet",children:[]},{value:"Account",id:"account",children:[]},{value:"Address <em>(&quot;Public Key&quot;)</em>",id:"address-public-key",children:[]},{value:"Public Key",id:"public-key",children:[]},{value:"Private Key",id:"private-key",children:[]},{value:"Keystore File",id:"keystore-file",children:[]},{value:"Mnemonic Phrase / Seed Phrase / Seed Words",id:"mnemonic-phrase--seed-phrase--seed-words",children:[]},{value:"Hardware Wallet:",id:"hardware-wallet",children:[]},{value:"Identicon / AddressIdenticon / AddressIcon:",id:"identicon--addressidenticon--addressicon",children:[]},{value:"Hexadecimal",id:"hexadecimal",children:[]},{value:"Seed",id:"seed",children:[]},{value:"Brain Wallet",id:"brain-wallet",children:[]},{value:"Entropy",id:"entropy",children:[]},{value:"Derive / Derivation",id:"derive--derivation",children:[]},{value:"Encryption",id:"encryption",children:[]},{value:"Encrypted vs Unencrypted Keys",id:"encrypted-vs-unencrypted-keys",children:[]},{value:"Decentralize / Decentralization",id:"decentralize--decentralization",children:[]},{value:"Trustless",id:"trustless",children:[]},{value:"Smart Contracts",id:"smart-contracts",children:[]},{value:"Blockchain",id:"blockchain",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"words-are-hard"},"Words are Hard"),Object(n.b)("p",{id:"agoctitecs_p"},"This is a list of terms you might encounter when using the Conflux Portal interface."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"wallet"},"Wallet"),Object(n.b)("ul",null,Object(n.b)("li",{id:"wallet_l1"},"The interface / client / wrapper / holder that you use to manage your account(s)."),Object(n.b)("li",{id:"wallet_l2"},"Example: Conflux Portal, your Ledger Hardware Wallet, a Multisig Wallet Contract.")),Object(n.b)("h3",{id:"account"},"Account"),Object(n.b)("ul",null,Object(n.b)("li",{id:"account_l1"},'A public & private keypair that "holds" your funds.'),Object(n.b)("li",{id:"account_l2"},"Your funds are actually stored on the blockchain, not in the wallet or account."),Object(n.b)("li",{id:"account_l3"}," Just like your Reddit account has a ",Object(n.b)("code",null," username (public)")," and ",Object(n.b)("code",null," password (private)"),", so does your Conflux account. For additional security, you can use a password to encrypt your private key which would result in a ",Object(n.b)("code",null," username (public)")," and ",Object(n.b)("code",null," password (private)")," and ",Object(n.b)("code",null," password for that password (private + more secure)"),". See the ",Object(n.b)("code",null," Keystore File")," section. ")),Object(n.b)("h3",{id:"address-public-key"},"Address ",Object(n.b)("em",{parentName:"h3"},'("Public Key")')),Object(n.b)("ul",null,Object(n.b)("li",{id:"address_l1"},"You use this to send funds ",Object(n.b)("b",null,"to")," an account."),Object(n.b)("li",{id:"address_l2"},'Sometimes referred to as the "public key"'),Object(n.b)("li",{id:"address_l3"},"A string made up of ",Object(n.b)("code",null,"0x")," + ",Object(n.b)("code",null,"40 hexadecimal characters"),"."),Object(n.b)("li",{id:"address_l4"},"In Conflux, the address begins with ",Object(n.b)("code",null,"0x"),"."),Object(n.b)("li",{id:"address_l5"},"Example: ",Object(n.b)("code",null,"0x06a85356dcb5b307096726fb86a78c59d38e08ee"))),Object(n.b)("h3",{id:"public-key"},"Public Key"),Object(n.b)("ul",null,Object(n.b)("li",{id:"pubk_l1"},"In cryptography, you have a keypair: the public and private key."),Object(n.b)("li",{id:"pubk_l2"},"You can derive a public key from a private key, but cannot derive a private key from a public key."),Object(n.b)("li",{id:"pubk_l3"},'(Advanced) In Conflux, the address "acts" like the public key, but it\'s not actually the public key.'),Object(n.b)("li",{id:"pubk_l4"},"(Advanced) In Conflux, the public key is derived from the private key and is 128 hex characters. You then take the ",Object(n.b)("code",null,'"SHA3" (Keccak-256)')," hash of this (64 characters), take the last 40 characters, and prefix with ",Object(n.b)("code",null,"0x"),", give you your 42-character address.")),Object(n.b)("h3",{id:"private-key"},"Private Key"),Object(n.b)("ul",null,Object(n.b)("li",{id:"privk_1"},"You use this to send funds ",Object(n.b)("b",null,"from")," an account."),Object(n.b)("li",{id:"privk_2"},"The secret half of your Address / public key."),Object(n.b)("li",{id:"privk_3"},"A string of 64 hexadecimal characters."),Object(n.b)("li",{id:"privk_4"},"(",Object(n.b)("a",{href:"https://crypto.stackexchange.com/questions/30269/are-all-possible-ec-private-keys-valid",target:"_blank"},"Almost"),") every string of 64 hexadecimal characters is a private key."),Object(n.b)("li",{id:"privk_5"},"If you hand-type a private key differently today than yesterday, you will access a different wallet. Never hand type your private key."),Object(n.b)("li",{id:"privk_6"},"This is the string you need to send from your account. Without it you cannot access your funds. Although, you don't need to save this raw, unencrypted private key in this format. You can saving the fancy versions of it (e.g. the Keystore File / Mnemonic Phrase)."),Object(n.b)("li",{id:"privk_7"},"Example: ",Object(n.b)("code",null,"afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890"))),Object(n.b)("h3",{id:"keystore-file"},"Keystore File"),Object(n.b)("ul",null,Object(n.b)("li",{id:"keystoref_l1"},"Encrypted version of your private key in JSON format (though it does not have a JSON extension)"),Object(n.b)("li",{id:"keystoref_l2"},"A fancy version of your private key that is protected by a password of your choosing."),Object(n.b)("li",{id:"keystoref_l3"},"When combined with the password, it has the private key."),Object(n.b)("li",{id:"keystoref_l4"},"Safer than a private key because you need the password."),Object(n.b)("li",{id:"keystoref_l5"},"File name usually is in the format ",Object(n.b)("code",null,"UTC")," + ",Object(n.b)("code",null,"--")," + ",Object(n.b)("code",null,"DATE_CREATED")," + ",Object(n.b)("code",null,"--")," + ",Object(n.b)("code",null,"YOUR_ADDRESS_WITHOUT_THE_OX")),Object(n.b)("li",{id:"keystoref_l6"},"Example of File Name: ",Object(n.b)("code",null,"UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee")),Object(n.b)("li",{id:"keystoref_l7"},"Example of Contents: ",Object(n.b)("code",null,'{"version":3,"id":"aa811d53-fe9a-44a2-bd1c-e737007b5591","address":"06a85356dcb5b307096726fb86a78c59d38e08ee","Crypto":{"ciphertext":"f5a7cc8d4b8cf93510b0d0d057f3a52ac79fd48e619e0638c4ffd978ca180248","cipherparams":{"iv":"975ab00192e2dd74170e91ca59c0b0bd"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"0210f0d0b99e440dfbceb36373304638bac093a367ee7da6411cd165f7aa907a","n":1024,"r":8,"p":1},"mac":"8197a747a3855a10546a2ff939c36470daed78e393b670efa0c12fe3b23dd7e3"}}')),Object(n.b)("li",{id:"keystoref_l8"},"(pw: ",Object(n.b)("code",null,"mypassword"),")")),Object(n.b)("h3",{id:"mnemonic-phrase--seed-phrase--seed-words"},"Mnemonic Phrase / Seed Phrase / Seed Words"),Object(n.b)("ul",null,Object(n.b)("li",{id:"mphrase_l1"},"Another fancy version of your private key, that is actually used to derive multiple private keys."),Object(n.b)("li",{id:"mphrase_l2"},"A (typically) 12 or 24 word phrase that allows you to access infinite number of accounts."),Object(n.b)("li",{id:"mphrase_l3"},"Used by Ledger, TREZOR, Conflux Portal, Jaxx, and others."),Object(n.b)("li",{id:"mphrase_l4"},"Originates from ",Object(n.b)("a",{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank"},"BIP 39 Spec"),"."),Object(n.b)("li",{id:"mphrase_l5"},'The accounts you can access with this phrase are determined by the "path".'),Object(n.b)("li",{id:"mphrase_l6"},"Example 12-words: ",Object(n.b)("code",null,"brain surround have swap horror body response double fire dumb bring hazard")),Object(n.b)("li",{id:"mphrase_l7"},"Example 24-words: ",Object(n.b)("code",null,"card enrich gesture connect kick topple fan body blind engine lemon swarm venue praise addict agent unaware equal bean sing govern income link leg"))),Object(n.b)("h3",{id:"hardware-wallet"},"Hardware Wallet:"),Object(n.b)("ul",null,Object(n.b)("li",{id:"hardwarew_l1"},'Typically, a single-purpose device that "holds" your private key(s), ensuring your private keys are safe.'),Object(n.b)("li",{id:"hardwarew_l2"},"Typically, they use a 24-word phrase. This phrase you should write down (not on your computer) and store separately from your hardware wallet."),Object(n.b)("li",{id:"hardwarew_l3"},"If you lose your hardware wallet, you can still gain access to your accounts & funds via the word-phrase you wrote down."),Object(n.b)("li",{id:"hardwarew_l4"},"Never type the word-phrase on your computer. It defeats the purpose of your hardware wallet."),Object(n.b)("li",{id:"hardwarew_l5"},Object(n.b)("a",{href:"https://kb.myetherwallet.com/hardware-wallets/",target:"_blank"}," See here for more information about Hardware Wallets"))),Object(n.b)("h3",{id:"identicon--addressidenticon--addressicon"},"Identicon / AddressIdenticon / AddressIcon:"),Object(n.b)("ul",null,Object(n.b)("li",{id:"addressIdent_l1"},"The colorful blob of colors that corresponds to your address."),Object(n.b)("li",{id:"addressIdent_l2"},"It is an easy way to see if your address is correct."),Object(n.b)("li",{id:"addressIdent_l3"},Object(n.b)("a",{href:"http://i.imgur.com/lHUrIiZ.jpg",target:""}," Example 1 ")),Object(n.b)("li",{id:"addressIdent_l4"},Object(n.b)("a",{href:"http://i.imgur.com/FvyLewS.jpg",target:""}," Example 2 ")),Object(n.b)("li",{id:"addressIdent_l5"},Object(n.b)("em",null,"Note: the above addresses are a single character different but have remarkably different icons & colors. Magic!"))),Object(n.b)("h3",{id:"hexadecimal"},"Hexadecimal"),Object(n.b)("ul",null,Object(n.b)("li",{id:"hexadecimal_l"},"Used all over Conflux for a variety of things, a hexadecimal string is comprised of the numbers ",Object(n.b)("code",null,"0 1 2 3 4 5 6 7 8 9")," and ",Object(n.b)("code",null,"A B C D E F"))),Object(n.b)("h3",{id:"seed"},"Seed"),Object(n.b)("ul",null,Object(n.b)("li",{id:"seed_l1"},"The input given to derive a private key. This should always be generated in a truly random way, not something you make up with your measly human brain."),Object(n.b)("li",{id:"seed_l2"},"If you chose the seed, it is known as a ",Object(n.b)("code",null,"brain wallet"))),Object(n.b)("h3",{id:"brain-wallet"},"Brain Wallet"),Object(n.b)("ul",null,Object(n.b)("li",{id:"bw_l1"},"An account generated from a seed or password or passphrase of your choosing."),Object(n.b)("li",{id:"bw_l2"},"Humans are not capable of generating enough entropy and therefore the wallets derived from these phrases are insecure."),Object(n.b)("li",{id:"bw_l3"},"Brain wallets can be brute forced by super fast computers."),Object(n.b)("li",{id:"bw_l4"},Object(n.b)("a",{href:"https://www.reddit.com/r/metamask/comments/45y8m7/brain_wallets_are_now_generally_shunned_by/",target:"_blank"}," Brain wallet are insecure. ")),Object(n.b)("li",{id:"bw_l5"},"Don't use brain wallets.")),Object(n.b)("h3",{id:"entropy"},"Entropy"),Object(n.b)("ul",null,Object(n.b)("li",{id:"entropy_l1"},'Also known as "randomness".'),Object(n.b)("li",{id:"entropy_l2"},"The more random something is, the more entropy it has, and the more secure it is."),Object(n.b)("li",{id:"entropy_l3"},'Usually defined in "bits of entropy" or the number of years it would take to brute-force a ',Object(n.b)("b",null,"\\_\\_\\_\\_")," (e.g. private key) derived with that much entropy."),Object(n.b)("li",{id:"entropy_l4"},"Conflux private keys are 256-bit keys"),Object(n.b)("li",{id:"entropy_l5"},"24-Word mnemonic phrases are also 256 bits of entropy. 2048 words in the dictionary. 11 bits of entropy (the words). ",Object(n.b)("code",null,"11 * 24 = 264"),". The last word is a checksum.")),Object(n.b)("h3",{id:"derive--derivation"},"Derive / Derivation"),Object(n.b)("ul",null,Object(n.b)("li",{id:"deriveDeriv_l1"},"To derive something is to obtain it from an original source."),Object(n.b)("li",{id:"deriveDeriv_l2"},"For example, if we were to derive a Keystore from a private key and a password, this means that the Keystore is made from these two sources."),Object(n.b)("li",{id:"deriveDeriv_l3"},"The Keystore is a product of the two, thus it is derived from them.")),Object(n.b)("h3",{id:"encryption"},"Encryption"),Object(n.b)("ul",null,Object(n.b)("li",{id:"encryption_l1"},"Encryption is the act of taking a string of letters/numbers, like your private key, and turning them into another string of letters/numbers through a method of private translation."),Object(n.b)("li",{id:"encryption_l2"},"There are various different encryption methods."),Object(n.b)("li",{id:"encryption_l3"},"Encryption offers protection against those trying to steal your information!")),Object(n.b)("h3",{id:"encrypted-vs-unencrypted-keys"},"Encrypted vs Unencrypted Keys"),Object(n.b)("ul",null,Object(n.b)("li",{id:"encvunenc_l1"},"An unencrypted private key is 64 characters long, and it is used to unlock or restore wallets."),Object(n.b)("li",{id:"encvunenc_l2"},"An encrypted key is also 64 letters long and is a regular private key that has gone through the process of encryption, as defined above."),Object(n.b)("li",{id:"encvunenc_l3"},"For example, if the world \u2018Apple\u2019 was your shortened private key, then it was encrypted three letters down the alphabet, your new shortened encrypted key would be \u2018Dssoh\u2019. Since you know the way to encrypt this key, you could derive the original private key from it by reversing the method of encryption."),Object(n.b)("li",{id:"encvunenc_l4"},"Usually encrypted private keys are kept within the extension or device they are encrypted by, and they remain out of sight from the user. This is meant to add another layer of security to keep a user\u2019s wallet information safe.")),Object(n.b)("h3",{id:"decentralize--decentralization"},"Decentralize / Decentralization"),Object(n.b)("ul",null,Object(n.b)("li",{id:"decentralize_l"},"The process of transferring authority of a single entity (ex. Government or large corporation) to multiple smaller entities.")),Object(n.b)("h3",{id:"trustless"},"Trustless"),Object(n.b)("ul",null,Object(n.b)("li",{id:"trustless_l"},"A distributed trustless consensus which the blockchain is responsible for. Since everyone has a copy of the ledger of all transactions ever executed, there is no need for a third-party. You can verify the transactions yourself, however the Conflux blockchain and Bitcoin blockchain were created to ensure rules and agreements between all parties are executed when all conditions are met.")),Object(n.b)("h3",{id:"smart-contracts"},"Smart Contracts"),Object(n.b)("ul",null,Object(n.b)("li",{id:"sc_l"},"A piece of code (or program) that is stored on the blockchain network. Conditions of the contract are predefined by the users, if all conditions are met, certain actions are executed by the contract (program).")),Object(n.b)("h3",{id:"blockchain"},"Blockchain"),Object(n.b)("ul",null,Object(n.b)("li",{id:"blockchain_l"},"A decentralized publicly owned ledger.")),Object(n.b)("p",{id:"fixGlossary"},"All feedback, rewrites, clarification, typo-fixing, and requests for additions are more than welcome. ?"))}s.isMDXComponent=!0},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=s(r),h=a,p=b["".concat(o,".").concat(h)]||b[h]||u[h]||n;return r?i.a.createElement(p,l({ref:t},d,{components:r})):i.a.createElement(p,l({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<n;d++)o[d]=r[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);