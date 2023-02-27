"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),k=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),s=k(a),c=l,N=s["".concat(o,".").concat(c)]||s[c]||u[c]||i;return a?n.createElement(N,p(p({ref:t},m),{},{components:a})):n.createElement(N,p({ref:t},m))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,p=new Array(i);p[0]=c;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[s]="string"==typeof e?e:l,p[1]=r;for(var k=2;k<i;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8710:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const i={id:"Explorer_API",title:"Explorer API",sidebar_label:"Explorer API"},p=void 0,r={unversionedId:"Explorer_API",id:"Explorer_API",isDocsHomePage:!1,title:"Explorer API",description:"PlatEye\uff08plateye.com\uff09\u662fPlatON\u7f51\u7edc\u4e0a\u529f\u80fd\u5f3a\u5927\u3001\u5e94\u7528\u5e7f\u6cdb\u7684\u533a\u5757\u94fe\u6d4f\u89c8\u5668\u3002\u7531\u4e8ePlatON\u8282\u70b9\u63d0\u4f9b\u7684API\u529f\u80fd\u6709\u9650\uff0c\u4e3a\u6b64PlatEye\u4e5f\u63d0\u4f9b\u4e86API\u670d\u52a1\uff0c\u4e3a\u5404\u79cd\u94b1\u5305\u3001\u5de5\u5177\u3001Dapp\u7b49\u5e94\u7528\u63d0\u4f9b\u4e86\u7a33\u5b9a\u5b9e\u65f6\u7684\u94fe\u4e0a\u6570\u636e\u652f\u6301\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/Explorer-API.md",sourceDirName:".",slug:"/Explorer_API",permalink:"/docs/zh-CN/Explorer_API",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/Explorer-API.md",version:"current",frontMatter:{id:"Explorer_API",title:"Explorer API",sidebar_label:"Explorer API"},sidebar:"docs",previous:{title:"GraphQL Server",permalink:"/docs/zh-CN/GraphQL_Server"},next:{title:"Samurai API",permalink:"/docs/zh-CN/Samurai_API"}},o=[{value:"\u63a5\u53e3\u4f7f\u7528\u89c4\u8303",id:"\u63a5\u53e3\u4f7f\u7528\u89c4\u8303",children:[]},{value:"\u516c\u5f00API\u914d\u7f6e",id:"\u516c\u5f00api\u914d\u7f6e",children:[]},{value:"\u6d4f\u89c8\u5668\u516c\u5f00API\u4f7f\u7528\u8bf4\u660e",id:"\u6d4f\u89c8\u5668\u516c\u5f00api\u4f7f\u7528\u8bf4\u660e",children:[]},{value:"\u901a\u8fc7shell\u547d\u4ee4\u8bf7\u6c42api\u6570\u636e",id:"\u901a\u8fc7shell\u547d\u4ee4\u8bf7\u6c42api\u6570\u636e",children:[]},{value:"\u63a5\u53e3\u4f7f\u7528\u6837\u4f8b",id:"\u63a5\u53e3\u4f7f\u7528\u6837\u4f8b",children:[]},{value:"FAQ",id:"faq",children:[]}],k={toc:o},m="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"PlatEye\uff08plateye.com\uff09\u662fPlatON\u7f51\u7edc\u4e0a\u529f\u80fd\u5f3a\u5927\u3001\u5e94\u7528\u5e7f\u6cdb\u7684\u533a\u5757\u94fe\u6d4f\u89c8\u5668\u3002\u7531\u4e8ePlatON\u8282\u70b9\u63d0\u4f9b\u7684API\u529f\u80fd\u6709\u9650\uff0c\u4e3a\u6b64PlatEye\u4e5f\u63d0\u4f9b\u4e86API\u670d\u52a1\uff0c\u4e3a\u5404\u79cd\u94b1\u5305\u3001\u5de5\u5177\u3001Dapp\u7b49\u5e94\u7528\u63d0\u4f9b\u4e86\u7a33\u5b9a\u5b9e\u65f6\u7684\u94fe\u4e0a\u6570\u636e\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u5bf9PlatEye\u533a\u5757\u94fe\u6d4f\u89c8\u5668\uff08plateye.com\uff09\u63d0\u4f9b\u7684API\u63a5\u53e3\u529f\u80fd\u548c\u4f7f\u7528\u8fdb\u884c\u7b80\u8981\u5f52\u7eb3\u8bf4\u660e\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5feb\u901f\u4e86\u89e3\u548c\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u63a5\u53e3\u4f7f\u7528\u89c4\u8303"},"\u63a5\u53e3\u4f7f\u7528\u89c4\u8303"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u89c4\u8303\u539f\u5219"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u5373\u663e\u793a\uff1a\u524d\u7aef\u4ec5\u505a\u6e32\u67d3\u903b\u8f91\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u5173\u6ce8\u4ea4\u4e92\u3001\u6e32\u67d3\u903b\u8f91\uff0c\u5c3d\u91cf\u907f\u514d\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u7684\u51fa\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u54cd\u5e94\u4f20\u8f93\u6570\u636e\u683c\u5f0f\uff1aJSON\uff0cJSON\u6570\u636e\u5c3d\u91cf\u7b80\u5355\u8f7b\u91cf"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u683c\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GET\u8bf7\u6c42\u3001POST\u8bf7\u6c42\uff0c\u5fc5\u987b\u5305\u542bkey\u4e3abody\u7684\u5165\u53c2\uff0c\u6240\u6709\u8bf7\u6c42\u6570\u636e\u5305\u88c5\u4e3aJSON\u683c\u5f0f\uff0c\u5e76\u5b58\u653e\u5230\u5165\u53c2body\u4e2d"),(0,l.kt)("li",{parentName:"ul"},'\u4f8b: body: {"nodeID": "1423", "pageNo": 0, "pageSize": 0}'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u54cd\u5e94\u57fa\u672c\u683c\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'{code: 200, data: {message: "success", data: {}}}'),(0,l.kt)("li",{parentName:"ul"},"code: \u8bf7\u6c42\u5904\u7406\u72b6\u6001\uff08200\u4e3a\u6210\u529f\uff09"),(0,l.kt)("li",{parentName:"ul"},'data.message: \u8bf7\u6c42\u5904\u7406\u4fe1\u606f \uff08code=200&data.message="success"\uff0c\u8bf7\u6c42\u5904\u7406\u6210\u529f\uff09')))),(0,l.kt)("h2",{id:"\u516c\u5f00api\u914d\u7f6e"},"\u516c\u5f00API\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863\u8bf4\u660e: ",(0,l.kt)("a",{parentName:"li",href:"https://api.plateye.com/origin/docs/#/home"},"https://api.plateye.com/origin/docs/#/home")),(0,l.kt)("li",{parentName:"ul"},"BasePath: ",(0,l.kt)("a",{parentName:"li",href:"https://api.plateye.com/platon-api/"},"https://api.plateye.com/platon-api/")),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528postman\u8fdb\u884c\u63a5\u53e3\u7684\u6d4b\u8bd5")),(0,l.kt)("h2",{id:"\u6d4f\u89c8\u5668\u516c\u5f00api\u4f7f\u7528\u8bf4\u660e"},"\u6d4f\u89c8\u5668\u516c\u5f00API\u4f7f\u7528\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u9875\u63a5\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u6570\u636e: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/home/chainStatistic"),"\u3002\u63a8\u9001LAT\u57fa\u7840\u6570\u636e\uff0c\u5982\u5f53\u524d\u9ad8\u5ea6\u3001\u51fa\u5757\u8282\u70b9ID\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fa\u5757\u8d8b\u52bf: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/home/blockStatistic"),"\u3002\u63a8\u9001\u6700\u65b0\u768450\u6761\u51fa\u5757\u8d8b\u52bf\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u4eba\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/home/stakingList"),"\u3002\u63a8\u9001\u6700\u65b08\u6761\u9a8c\u8bc1\u4eba\u4fe1\u606f\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u63a5\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/address/details"),"\u3002\u8fd4\u56de\u6307\u5b9a\u5730\u5740\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u9501\u4ed3\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/address/rpplanDetail"),"\u3002\u67e5\u8be2\u94fe\u4e0a\u5b9e\u65f6\u9501\u4ed3\u4f59\u989d\u4fe1\u606f\u53ca\u9501\u4ed3\u8ba1\u5212\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u533a\u5757\u63a5\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u533a\u5757\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/block/blockList"),"\u3002\u63a8\u9001\u5168\u90e8\u51fa\u5757\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u533a\u5757\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/block/blockListByNodeId"),"\u3002\u6307\u5b9a\u8282\u70b9\u5168\u90e8\u51fa\u5757\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u533a\u5757\u5217\u8868\u5bfc\u51fa: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/block/blockListByNodeIdDownload"),"\u3002\u6839\u636e\u8fc7\u6ee4\u6761\u4ef6\u5bfc\u6307\u5b9a\u8282\u70b9\u7684\u533a\u5757\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u533a\u5757\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/block/blockDetails"),"\u3002\u8fd4\u56de\u6307\u5b9a\u533a\u5757\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u6848\u63a5\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u6848\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/proposal/proposalList"),"\u3002\u8fd4\u56de\u63d0\u6848\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u6848\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/proposal/proposalDetails"),"\u3002\u8fd4\u56de\u6307\u5b9a\u63d0\u6848\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6295\u7968\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/proposal/voteList"),"\u3002\u8fd4\u56de\u6307\u5b9a\u63d0\u6848\u7684\u6295\u7968\u4fe1\u606f\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u63a5\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6c47\u603b\u6570\u636e: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/statistic"),"\u3002\u63a8\u9001LAT\u5168\u90e8\u8282\u70b9\u7684\u6c47\u603b\u6570\u636e\uff0c5\u79d2\u63a8\u9001\u4e00\u6b21\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u8282\u70b9\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/aliveStakingList"),"\u3002\u63a8\u9001\u5168\u90e8\u5b9e\u65f6\u9a8c\u8bc1\u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5386\u53f2\u8282\u70b9\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/historyStakingList"),"\u3002\u63a8\u9001\u9000\u51fa\u8282\u70b9\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u9501\u5b9a\u8282\u70b9\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/lockedStakingList"),"\u3002\u63a8\u9001\u96f6\u51fa\u5757\u60e9\u7f5a\u4e2d\u8282\u70b9\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/stakingDetails"),"\u3002\u63d0\u4f9b\u9a8c\u8bc1\u8282\u70b9\u8be6\u7ec6\u4fe1\u606f\u67e5\u770b\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u64cd\u4f5c\u8bb0\u5f55: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/stakingOptRecordList"),"\u3002\u63d0\u4f9b\u8282\u70b9\u64cd\u4f5c\u8bb0\u5f55\u67e5\u8be2\u529f\u80fd\uff0c\u4f8b\u5982\u521b\u5efa\u63d0\u6848\uff0c\u6295\u7968\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u59d4\u6258\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/delegationListByStaking"),"\u3002\u8282\u70b9\u76f8\u5173\u7684\u59d4\u6258\u5217\u8868\u67e5\u8be2\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u59d4\u6258\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/staking/delegationListByAddress"),"\u3002\u5730\u5740\u76f8\u5173\u7684\u59d4\u6258\u5217\u8868\u67e5\u8be2\u529f\u80fd\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u63a5\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/transaction/transactionList"),"\u3002\u63a8\u9001\u5168\u90e8\u4ea4\u6613\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u533a\u5757\u4ea4\u6613\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/transaction/transactionListByBlock"),"\u3002\u63a8\u9001\u533a\u5757\u76f8\u5173\u7684\u4ea4\u6613\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u4ea4\u6613\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/transaction/transactionListByAddress"),"\u3002\u63a8\u9001\u5730\u5740\u76f8\u5173\u7684\u4ea4\u6613\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u5730\u5740\u4ea4\u6613\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/transaction/addressTransactionDownload"),"\u3002\u6839\u636e\u8fc7\u6ee4\u6761\u4ef6\u5bfc\u51fa\u6307\u5b9a\u5730\u5740\u7684\u4ea4\u6613\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/transaction/transactionDetails"),"\u3002\u8fd4\u56de\u6307\u5b9a\u4ea4\u6613\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u9886\u53d6\u5956\u52b1\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/transaction/queryClaimByAddress"),"\u3002\u8fd4\u56de\u5f53\u524d\u5730\u5740\u4e0b\u6240\u6709\u8282\u70b9\u9886\u53d6\u5956\u52b1\u60c5\u51b5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u76f8\u5173\u9886\u53d6\u5956\u52b1\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/transaction/queryClaimByStaking"),"\u3002\u8282\u70b9\u76f8\u5173\u7684\u9886\u53d6\u5956\u52b1\u5217\u8868\u67e5\u8be2\u529f\u80fd\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u4ee4\u724c\u63a5\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Token\u4ee4\u724c\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/list"),"\u3002\u8fd4\u56deToken\u4ee4\u724c\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"Token\u4ee4\u724c\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/detail"),"\u3002\u8fd4\u56deToken\u4ee4\u724c\u8be6\u60c5\u3002"),(0,l.kt)("li",{parentName:"ul"},"PRC20\u4ea4\u6613\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/arc20-tx/list"),"\u3002\u5982\u679c\u4f20\u5165\u5408\u7ea6\u5730\u5740\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5408\u7ea6\u5185\u7684\u6240\u6709\u8f6c\u8d26\u8bb0\u5f55\uff1b\u5982\u679c\u4f20\u5165\u7528\u6237\u5730\u5740\uff0c\u5219\u8fd4\u56de\u8be5\u5730\u5740\u4f5c\u4e3a\u8f6c\u8d26\u6263\u9664\u8fd9\u6216\u8005\u63a5\u6536\u8005\u7684\u4ee3\u5e01\u8f6c\u8d26\u8bb0\u5f55\uff1b\u5982\u679c\u540c\u65f6\u5b58\u5728\uff0c\u5219\u8fd4\u56de\u5730\u5740\u5728\u5f53\u524d\u5408\u7ea6\u5185\u7684\u8f6c\u8d26\u8bb0\u5f55\uff1b\u5982\u679c\u5408\u7ea6\u5730\u5740\u548c\u7528\u6237\u5730\u5740\uff0c\u5219\u8fd4\u56de\u6240\u6709\u8f6c\u8d26\u8bb0\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"PRC20\u4ea4\u6613\u5217\u8868\u5bfc\u51fa: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/arc20-tx/export"),"\u3002\u5bfc\u51faPRC20\u4ea4\u6613\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"PRC721\u4ea4\u6613\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/arc721-tx/list"),"\u3002\u5982\u679c\u4f20\u5165\u5408\u7ea6\u5730\u5740\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5408\u7ea6\u5185\u7684\u6240\u6709\u8f6c\u8d26\u8bb0\u5f55\uff1b\u5982\u679c\u4f20\u5165\u7528\u6237\u5730\u5740\uff0c\u5219\u8fd4\u56de\u8be5\u5730\u5740\u4f5c\u4e3a\u8f6c\u8d26\u6263\u9664\u8fd9\u6216\u8005\u63a5\u6536\u8005\u7684\u4ee3\u5e01\u8f6c\u8d26\u8bb0\u5f55\uff1b\u5982\u679c\u4f20\u5165\u5408\u7ea6\u5730\u5740\u548ctokenId\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5408\u7ea6\u5185tokenId\u7684\u6240\u6709\u8f6c\u8d26\u8bb0\u5f55\uff1b\u5982\u679c\u540c\u65f6\u5b58\u5728\uff0c\u5219\u8fd4\u56de\u5730\u5740\u5728\u5f53\u524d\u5408\u7ea6\u5185\u7684\u8f6c\u8d26\u8bb0\u5f55\uff08\u6682\u65e0\u6b64\u573a\u666f\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"PRC721\u4ea4\u6613\u5217\u8868\u5bfc\u51fa: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/arc721-tx/export"),"\u3002\u5bfc\u51faPRC721\u4ea4\u6613\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"Token\u4ee4\u724c\u6301\u6709\u4eba\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/holder/list"),"\u3002\u8fd4\u56deToken\u4ee4\u724c\u6301\u6709\u4eba\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"Token\u4ee4\u724c\u6301\u6709\u4eba\u5217\u8868\u5bfc\u51fa: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/holder/export"),"\u3002\u5bfc\u51faToken\u4ee4\u724c\u6301\u6709\u4eba\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u6709\u8005\u7684Token\u4ee4\u724c\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/holder-token/list"),"\u3002\u5982\u4f20\u5165\u5408\u7ea6\u5730\u5740\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5408\u7ea6\u5185\u7684\u6240\u6709\u6301\u6709\u4eba\u8bb0\u5f55\uff1b\u5982\u679c\u4f20\u5165\u7528\u6237\u5730\u5740\uff0c\u5219\u8fd4\u56de\u8be5\u5730\u5740\u6301\u6709\u7684token\u8bb0\u5f55"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u6709\u8005\u7684Token\u4ee4\u724c\u5217\u8868\u5bfc\u51fa: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/holder-token/export"),"\u3002\u5bfc\u51fa\u6301\u6709\u8005\u7684Token\u4ee4\u724c\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"PRC721\u5e93\u5b58\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/arc721-inventory/list"),"\u3002\u5982\u679c\u4f20\u5165\u5408\u7ea6\u5730\u5740\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5408\u7ea6\u5185\u7684\u6240\u6709tokenId\u8bb0\u5f55\uff1b\u5982\u679c\u4f20\u5165\u5408\u7ea6\u5730\u5740\u548ctokenId\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5408\u7ea6\u5185tokenId\u7684\u8bb0\u5f55\uff1b\u5982\u679c\u4f20\u5165\u7528\u6237\u5730\u5740\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5408\u7ea6\u5185\u7684\u6240\u6709tokenId\u8bb0\u5f55"),(0,l.kt)("li",{parentName:"ul"},"PRC721\u5e93\u5b58\u5217\u8868\u5bfc\u51fa: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/arc721-inventory/export"),"\u3002\u5bfc\u51faARC721\u5e93\u5b58\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"PRC721\u5e93\u5b58\u8be6\u60c5: ",(0,l.kt)("inlineCode",{parentName:"li"},"/platon-api/token/arc721-inventory/detail"),"\u3002\u8fd4\u56deARC721\u5e93\u5b58\u8be6\u60c5\u3002")))),(0,l.kt)("h2",{id:"\u901a\u8fc7shell\u547d\u4ee4\u8bf7\u6c42api\u6570\u636e"},"\u901a\u8fc7shell\u547d\u4ee4\u8bf7\u6c42api\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8bed\u6cd5: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709\u53c2\u6570: curl ",(0,l.kt)("a",{parentName:"li",href:"https://api.plateye.com/%7Bapi%7D"},"https://api.plateye.com/{api}"),' -H "Accept: application/json" -H "Content-Type: application/json" -d \'{params}\''),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u53c2\u6570: curl -i -X POST -H \"'Content-type': 'application/json'\" ",(0,l.kt)("a",{parentName:"li",href:"https://api.plateye.com/%7Bapi%7D"},"https://api.plateye.com/{api}")))),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u5206\u91cd\u8981\u63a5\u53e3\u4e3e\u4f8b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u533a\u5757\u8be6\u60c5: curl ",(0,l.kt)("a",{parentName:"li",href:"https://api.plateye.com/platon-api/block/blockDetails"},"https://api.plateye.com/platon-api/block/blockDetails"),' -H "Accept: application/json" -H "Content-Type: application/json" -d \'{"number":"0"}\''),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u5217\u8868: curl -i -X POST -H \"'Content-type': 'application/json'\" ",(0,l.kt)("a",{parentName:"li",href:"https://api.plateye.com/platon-api/home/stakingList"},"https://api.plateye.com/platon-api/home/stakingList"))))),(0,l.kt)("h2",{id:"\u63a5\u53e3\u4f7f\u7528\u6837\u4f8b"},"\u63a5\u53e3\u4f7f\u7528\u6837\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8282\u70b9\u5217\u8868",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528api: /platon-api/staking/aliveStakingList"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8be6\u7ec6\u683c\u5f0f:\n",(0,l.kt)("inlineCode",{parentName:"li"},"POST https://api.plateye.com/platon-api/home/stakingList"),(0,l.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json"),(0,l.kt)("inlineCode",{parentName:"li"},"body={'pageNo': 0, 'pageSize': 0, 'queryStatus': 'all'}")))),(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u8be6\u60c5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528api: /platon-api/address/details"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8be6\u7ec6\u683c\u5f0f:\n",(0,l.kt)("inlineCode",{parentName:"li"},"POST https://api.plateye.com/platon-api/address/details"),(0,l.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json"),(0,l.kt)("inlineCode",{parentName:"li"},"body={'address': 'atp14zljtap2lvntcurr4v3rzysyt30t3ww3fnpdvw'}"))))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Q: VUE\u9879\u76ee\u8bf7\u6c42\u63a5\u53e3\u65f6\u63d0\u793aCORS\u5934\u7f3a\u5c11"Access-Control-Allow-Origin"\u662f\u4ec0\u4e48\u539f\u56e0\uff1f',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A: \u8fd9\u662f\u7531\u4e8e\u8de8\u57df\u8bf7\u6c42\u9020\u6210\u7684\u95ee\u9898\u3002\u9700\u8981\u914d\u7f6eproxyTable\uff0c\u5982\u679c\u8bf7\u6c42\u5730\u5740\u4ee5/api,\u6216\u8005/XXapi \u5f00\u5934\uff0c\u5219\u81ea\u52a8\u52a0\u4e0atarget\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Q: Gas station\u53ca\u65b0\u529f\u80fd\u76f8\u5173\u63a5\u53e3\u540e\u7eed\u4f1a\u6709\u8ba1\u5212\u5417\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A: \u6211\u4eec\u7684PlatEye\u9879\u76ee\u6b63\u5728\u63a8\u8fdb\u4e2d\uff0c\u540e\u9762\u4f1a\u9646\u7eed\u4e0a\u7ebfGas station\u53ca\u65b0\u529f\u80fd\u76f8\u5173\u63a5\u53e3\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Q: \u4e00\u6b21\u8bf7\u6c42\u7684\u6570\u636e\u8fc7\u591a\u5bfc\u81f4\u7f51\u7ad9\u54cd\u5e94\u5f88\u6162\u600e\u4e48\u89e3\u51b3\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A: \u6211\u4eec\u540e\u53f0\u6570\u636e\u5e93\u4f7f\u7528\u4e86\u5206\u9875\u7684\u65b9\u5f0f\uff0c\u5728\u4f7f\u7528api\u8fdb\u884c\u67e5\u8be2\u65f6\u4e5f\u53ef\u4ee5\u8bbe\u7f6epageSize\u8fdb\u884c\u5206\u9875\u67e5\u8be2\uff0c\u4f46\u662f\u6ce8\u610f\u8981\u548c\u524d\u7aef\u7684\u663e\u793a\u9875\u9762\u914d\u5408\u597d\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Q: API\u4e3b\u8981\u7528\u4e8e\u7684\u9879\u76ee\u573a\u666f\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A: \u53ef\u4ee5\u7528\u4e8e\u7b2c\u4e09\u65b9\u94b1\u5305\u7684\u4fe1\u606f\u5c55\u793a\uff0c\u6bd4\u5982\u83b7\u53d6\u5730\u5740\u7684\u4f59\u989d\u548c\u4ea4\u6613\u4fe1\u606f\u7b49\uff1b\u83b7\u53d6\u94fe\u4e0a\u6570\u636e\uff0c\u7528\u4e8e\u6570\u636e\u5206\u6790\u7b49\u3002")))))}s.isMDXComponent=!0}}]);