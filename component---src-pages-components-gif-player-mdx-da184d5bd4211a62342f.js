(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),s=a.n(b),d=a("QH2O"),m=a.n(d),g=a("qKvR"),p=function(e){var t,a=e.title,A=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(g.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===A,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,A=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,o=n.baseUrl,r=n.subDirectory,i=o+"/edit/"+n.branch+r+"/src/pages"+t;return o?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),x=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,n=A.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===n,i=new RegExp(n+"/?(#.*)?$"),c=A.replace(i,a);return Object(g.b)("li",{key:e,className:s()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(g.b)(l.Link,{className:x.link,to:""+c},e))}));return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:x.list},o))))))},t}(n.a.Component),O=a("MjG9"),P=a("CzIb"),B=a("Asxa"),N=a("OIbQ"),E=a.n(N),Q=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(B.c,{className:E.a.row},Object(g.b)(B.a,null,Object(g.b)("div",{className:E.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,o=t.frontmatter,b=void 0===o?{}:o,s=t.relativePagePath,d=t.titleType,m=b.tabs,u=b.title,f=b.theme,x=b.description,B=b.keywords,N=b.date,E=Object(P.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,w=C?A.pathname.replace(C,""):A.pathname,T=m?w.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",I=f||E;return Object(g.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:u,pageDescription:x,pageKeywords:B,titleType:d},Object(g.b)(p,{title:n?Object(g.b)(n,null):u,label:"label",tabs:m,theme:I}),m&&Object(g.b)(y,{title:u,slug:w,tabs:m,currentTab:T}),Object(g.b)(O.a,{padded:!0},a,Object(g.b)(j,{relativePagePath:s}),Object(g.b)(Q,{date:N})),Object(g.b)(h.a,{pageContext:t,location:A,slug:w,tabs:m,currentTab:T}),Object(g.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"rj9+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return j}));var A=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=c("PageDescription"),s=c("Row"),d=c("Column"),m=c("Title"),g=c("GifPlayer"),p={_frontmatter:i},u=r.a;function j(e){var t=e.components,a=Object(n.a)(e,l);return Object(o.b)(u,Object(A.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<GifPlayer>")," component is used to pause and play images that are gif’s. It\nworks by replacing the gif with a static image on pause.")),Object(o.b)("h2",null,"Example"),Object(o.b)(s,{mdxType:"Row"},Object(o.b)(d,{colLg:"4",mdxType:"Column"},Object(o.b)(m,{mdxType:"Title"},"Light"),Object(o.b)(g,{mdxType:"GifPlayer"},Object(o.b)("img",{src:"/open-source-cloud-guide-carbon/eace5aec0b1ab4ae6425dc7088a68411/IBM_Cloud_Pictograms.gif",alt:"IBM Cloud Pictograms"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeAlbc5xNAAf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAIBEBEg/9oACAEBAAEFAjKUZcjj/8QAFhEAAwAAAAAAAAAAAAAAAAAAESAh/9oACAEDAQE/ATU//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAQUAAAAAAAAAAAAAAAAAEQABECAh/9oACAEBAAY/Ap1EtX//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhECBBkf/aAAgBAQABPyEBw4K11L562df/2gAMAwEAAgADAAAAEGAAAP/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAwEBPxCkY//EABcRAQADAAAAAAAAAAAAAAAAAAERICH/2gAIAQIBAT8QDJp//8QAHRABAQACAQUAAAAAAAAAAAAAAREhQQAQIDFhcf/aAAgBAQABPxB3DWVdcgUafJ0d2AjL4w2cREqXdLoPXb//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Pictograms",title:"IBM Cloud Pictograms",src:"/open-source-cloud-guide-carbon/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg",srcSet:["/open-source-cloud-guide-carbon/static/35f178dcd2991ea7403a3bf70ed0533d/69549/IBM_Cloud_Pictograms.jpg 288w","/open-source-cloud-guide-carbon/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg 480w"],sizes:"(max-width: 480px) 100vw, 480px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)(s,{mdxType:"Row"},Object(o.b)(d,{colLg:"8",mdxType:"Column"},Object(o.b)(m,{mdxType:"Title"},"Dark"),Object(o.b)(g,{color:"dark",mdxType:"GifPlayer"},Object(o.b)("img",{src:"/open-source-cloud-guide-carbon/4a9aad9f2d6ef59256ca8dfbb9936c5b/IBM_Cloud_Platform_Prototype.gif",alt:"IBM Cloud Platform Prototype"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1120px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFjQWksAf/EABoQAQACAwEAAAAAAAAAAAAAAAEQEQISExT/2gAIAQEAAQUCV9XPGKNrY//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAhBBERIhMZH/2gAIAQEABj8CYzPBCv2NrFrsx//EABwQAQACAQUAAAAAAAAAAAAAAAEAETEQQVHh8f/aAAgBAQABPyFFyNUGWd2jiNo4T3IYn//aAAwDAQACAAMAAAAQEA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAgEEAwAAAAAAAAAAAAABESEAEDFBUWHw8f/aAAgBAQABPxCvCggoPWG0fV5wIIuqvI+OLsB4M+00v//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Platform Prototype",title:"IBM Cloud Platform Prototype",src:"/open-source-cloud-guide-carbon/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg",srcSet:["/open-source-cloud-guide-carbon/static/80dd337880305f90105eb98c2fb1c156/69549/IBM_Cloud_Platform_Prototype.jpg 288w","/open-source-cloud-guide-carbon/static/80dd337880305f90105eb98c2fb1c156/473e3/IBM_Cloud_Platform_Prototype.jpg 576w","/open-source-cloud-guide-carbon/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)("h2",null,"Code"),Object(o.b)("p",null,"Place two images inside of the GifPlayer component. The first image will be used\nas the gif, the second image will be used as the static image on pause. Only\nprovide two images inside the component, do not place any other children inside\nthe component."),Object(o.b)(m,{mdxType:"Title"},"Light"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/GifPlayer/GifPlayer.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer",path:"components/GifPlayer/GifPlayer.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer":!0},"<Column colLg='4'>\n<GifPlayer>\n\n![IBM Cloud Pictograms](/images/IBM_Cloud_Pictograms.gif) // must be gif\n\n![IBM Cloud Pictograms](/images/IBM_Cloud_Pictograms.jpg) // must be static\nimage\n\n</GifPlayer>\n</Column>\n")),Object(o.b)(m,{mdxType:"Title"},"Dark"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/GifPlayer/GifPlayer.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer",path:"components/GifPlayer/GifPlayer.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer":!0},"<Column colLg='8'>\n<GifPlayer color='dark'>\n\n![IBM Cloud Platform Prototype](/images/IBM_Cloud_Platform_Prototype.gif) //\nmust be gif\n\n![IBM Cloud Platform Prototype](/images/IBM_Cloud_Platform_Prototype.jpg) //must\nbe static image\n\n</GifPlayer>\n</Column>\n")),Object(o.b)("h3",null,"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"property"),Object(o.b)("th",{parentName:"tr",align:null},"propType"),Object(o.b)("th",{parentName:"tr",align:null},"required"),Object(o.b)("th",{parentName:"tr",align:null},"default"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"children"),Object(o.b)("td",{parentName:"tr",align:null},"node"),Object(o.b)("td",{parentName:"tr",align:null},"yes"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Pass in the images that will be rendered. Only pass in the images, no other children")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"color"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"light")),Object(o.b)("td",{parentName:"tr",align:null},"Specify if the icon color should be light or dark")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"className"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Specify an optional className to be applied to the container node")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-gif-player-mdx-da184d5bd4211a62342f.js.map