(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return h});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(159),c=a.n(s),l=a(162),p=a(191),m=a(230),u=a(158),g=a.n(u),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement("div",{className:"index-container"},o.a.createElement(c.a,{title:g.a.siteTitle}),o.a.createElement("div",null,g.a.siteTitle),o.a.createElement(m.a,null),o.a.createElement(p.a,{postEdges:t})))},e}(o.a.Component);e.default=d;var h="1014838814"},158:function(t,e){t.exports={siteTitle:"孙志勇的个人网站",siteTitleShort:"孙志勇的个人网站",siteTitleAlt:"孙志勇的个人网站",siteLogo:"/logos/logo-1024.jpg",siteUrl:"https://zhiyongsun.github.io",pathPrefix:"/gatsby-advanced-starter",siteDescription:"孙志勇的个人网站",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"孙志勇",userTwitter:"",userLocation:"Shanghai, China",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"前端开发",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2018. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},162:function(t,e,a){"use strict";a.d(e,"a",function(){return m});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(159),c=a.n(s),l=a(158),p=a.n(l),m=(a(163),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",{className:"container"},o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:p.a.siteDescription})),t)},e}(o.a.Component))},163:function(t,e,a){},188:function(t,e,a){var n,r,i;i=function(){return function(){return function(t){var e=[];if(t[0].match(/^[^\/:]+:\/*$/)&&t.length>1){var a=t.shift();t[0]=a+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^\/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<t.length;n++){var r=t[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<t.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),e.push(r))}var i=e.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},void 0!==t&&t.exports?t.exports=i():void 0===(r="function"==typeof(n=i)?n.call(e,a,e,t):n)||(t.exports=r)},191:function(t,e,a){"use strict";a(57),a(83),a(84);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(43),c=a(192).getDate,l=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:c(e.node.fields.date),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},a.render=function(){var t=this.getPostList();return o.a.createElement("div",null,t.map(function(t){return o.a.createElement("div",null,t.date,"：",o.a.createElement(s.Link,{to:t.path,key:t.title},t.title))}))},e}(o.a.Component);e.a=l},192:function(t,e){t.exports={getDate:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1;n<10&&(n="0"+n);var r=e.getDate();return r<10&&(r="0"+r),a+"."+n+"."+r}}},230:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(159),c=a.n(s),l=a(188),p=a.n(l),m=a(158),u=a.n(m),g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,a,n,r=this.props,i=r.postNode,s=r.postPath,l=r.postSEO;if(l){var m=i.frontmatter;t=m.title,e=m.description?m.description:i.excerpt,a=m.cover,n=p()(u.a.siteUrl,u.a.pathPrefix,s)}else t=u.a.siteTitle,e=u.a.siteDescription,a=u.a.siteLogo;a=a&&p()(u.a.siteUrl,u.a.pathPrefix,a);var g=p()(u.a.siteUrl,u.a.pathPrefix),d=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:t,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:t,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:t,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:a},description:e}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:e}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),o.a.createElement("meta",{property:"og:url",content:l?n:g}),l?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:e}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:e}),o.a.createElement("meta",{name:"twitter:image",content:a}))},e}(i.Component);e.a=g}}]);
//# sourceMappingURL=component---src-pages-index-jsx-cd857ea2cb4fd21d98e2.js.map