(()=>{var e,t,o,r={9143:(e,t,o)=>{"use strict";o.r(t);var r=o(1609);const i=window.wp.blocks;var n=o(7723);const a=window.wp.blockEditor;var s=o(6465);const c=window.wc.wcSettings;var l,p,d,u,g,m,f,w,v,b;const O=(0,c.getSetting)("wcBlocksConfig",{pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),S=(O.pluginUrl,O.pluginUrl,null===(l=c.STORE_PAGES.shop)||void 0===l||l.permalink,null===(p=c.STORE_PAGES.checkout)||void 0===p?void 0:p.id),k=(null===(d=c.STORE_PAGES.checkout)||void 0===d||d.permalink,null===(u=c.STORE_PAGES.privacy)||void 0===u||u.permalink,null===(g=c.STORE_PAGES.privacy)||void 0===g||g.title,null===(m=c.STORE_PAGES.terms)||void 0===m||m.permalink,null===(f=c.STORE_PAGES.terms)||void 0===f||f.title,null===(w=c.STORE_PAGES.cart)||void 0===w?void 0:w.id),y=(null===(v=c.STORE_PAGES.cart)||void 0===v||v.permalink,null!==(b=c.STORE_PAGES.myaccount)&&void 0!==b&&b.permalink?c.STORE_PAGES.myaccount.permalink:(0,c.getSetting)("wpLoginUrl","/wp-login.php"),(0,c.getSetting)("localPickupEnabled",!1),(0,c.getSetting)("shippingMethodsExist",!1),(0,c.getSetting)("countries",{})),E=(0,c.getSetting)("countryData",{}),h=(Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowBilling)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowBilling)).map((e=>[e,E[e].states||[]]))),Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowShipping)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowShipping)).map((e=>[e,E[e].states||[]]))),Object.fromEntries(Object.keys(E).map((e=>[e,E[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]});(0,c.getSetting)("addressFieldsLocations",h).address,(0,c.getSetting)("addressFieldsLocations",h).contact,(0,c.getSetting)("addressFieldsLocations",h).order,(0,c.getSetting)("additionalOrderFields",{}),(0,c.getSetting)("additionalContactFields",{}),(0,c.getSetting)("additionalAddressFields",{});var _=o(6087);const j=JSON.parse('{"name":"woocommerce/page-content-wrapper","version":"1.0.0","title":"WooCommerce Page","description":"Displays WooCommerce page content.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","supports":{"html":false,"multiple":false,"inserter":false},"attributes":{"page":{"type":"string","default":""}},"providesContext":{"postId":"postId","postType":"postType"},"apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}');o(687),(0,i.registerBlockType)(j,{icon:{src:s.A},edit:({attributes:e,setAttributes:t})=>{const o=(0,a.useBlockProps)({className:"wp-block-woocommerce-page-content-wrapper"});return(0,_.useEffect)((()=>{if(!e.postId&&e.page){let o=0;"checkout"===e.page&&(o=S),"cart"===e.page&&(o=k),o&&t({postId:o,postType:"page"})}}),[e,t]),(0,r.createElement)("div",{...o},(0,r.createElement)(a.InnerBlocks,{template:[["core/post-title",{align:"wide",level:1}],["core/post-content",{align:"wide"}]]}))},save:()=>(0,r.createElement)(a.InnerBlocks.Content,null),variations:[{name:"checkout-page",title:(0,n.__)("Checkout Page","woocommerce"),attributes:{page:"checkout"},isActive:(e,t)=>e.page===t.page},{name:"cart-page",title:(0,n.__)("Cart Page","woocommerce"),attributes:{page:"cart"},isActive:(e,t)=>e.page===t.page}]})},687:()=>{},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}n.m=r,e=[],n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,r,i]=e[p],s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var i=Object.create(null);n.r(i);var a={};t=t||[null,o({}),o([]),o(o)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,n.d(i,a),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=7960,(()=>{var e={7960:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[a,s,c]=o,l=0;if(a.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var p=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},o=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=n.O(void 0,[94],(()=>n(9143)));a=n.O(a),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["page-content-wrapper"]=a})();