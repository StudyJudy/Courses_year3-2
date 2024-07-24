(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1849:function(e,t,n){"use strict";n.r(t);var a=n(539),r=n(556),o=n.n(r),c=n(557),l=n.n(c),i=n(545),s=n(881),u=n(594),m=n(585),p=n(595),d=n(549),f=n(4);function h(e){var t=e.project,n=l()(t.links,"type"),r=t.lastAnalysisDate;return a.createElement("div",{className:"account-project-card clearfix"},a.createElement("aside",{className:"account-project-side"},void 0!==r?a.createElement("div",{className:"account-project-analysis"},a.createElement(u.a,{date:r},function(e){return a.createElement(d.a,{overlay:a.createElement(m.a,{date:r})},a.createElement("span",null,Object(f.m)("my_account.projects.analyzed_x",e)))})):a.createElement("div",{className:"account-project-analysis"},Object(f.l)("my_account.projects.never_analyzed")),void 0!==t.qualityGate&&a.createElement("div",{className:"account-project-quality-gate"},a.createElement(p.a,{level:t.qualityGate}))),a.createElement("h3",{className:"account-project-name"},a.createElement(i.Link,{to:{pathname:"/dashboard",query:{id:t.key}}},t.name)),n.length>0&&a.createElement("div",{className:"account-project-links"},a.createElement("ul",{className:"list-inline"},n.map(function(e){return a.createElement("li",{key:e.type},a.createElement("a",{className:"link-with-icon",href:e.href,rel:"nofollow",target:"_blank",title:e.name},a.createElement(s.a,{type:e.type})))}))),a.createElement("div",{className:"account-project-key"},t.key),!!t.description&&a.createElement("div",{className:"account-project-description"},t.description))}var v=n(583);function y(e){var t=e.projects;return a.createElement("div",{id:"account-projects"},0===t.length?a.createElement("div",{className:"js-no-results"},Object(f.l)("my_account.projects.no_results")):a.createElement("p",null,Object(f.l)("my_account.projects.description")),t.length>0&&a.createElement("ul",{className:"account-projects-list"},t.map(function(e){return a.createElement("li",{key:e.key},a.createElement(h,{project:e}))})),t.length>0&&a.createElement(v.a,{count:t.length,loadMore:e.loadMore,ready:!e.loading,total:e.total||0}))}var b,g=n(579),E=(b=function(e,t){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,page:1},t.loadMore=function(){t.loadProjects(t.state.page+1)},t}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadProjects()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.loadProjects=function(e){var t=this;void 0===e&&(e=this.state.page),this.setState({loading:!0});var n={p:e,ps:100};return Object(g.r)(n).then(function(n){var a=n.paging,r=n.projects;t.setState(function(t){return{projects:e>1?(t.projects||[]).concat(r):r,loading:!1,page:a.pageIndex,total:a.total}})})},t.prototype.render=function(){var e=a.createElement(o.a,{title:Object(f.l)("my_account.projects")});return null==this.state.projects?a.createElement("div",{className:"text-center"},e,a.createElement("i",{className:"spinner spinner-margin"})):a.createElement("div",{className:"account-body account-container"},e,a.createElement(y,{loadMore:this.loadMore,loading:this.state.loading,projects:this.state.projects,total:this.state.total}))},t}(a.PureComponent);t.default=j},583:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(539),r=n(540),o=n(552),c=n(4),l=n(550),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function s(e){var t=e.ready,n=void 0===t||t,s=i(e,["ready"]),u=s.total&&s.total>s.count,m=a.createElement("a",{className:"spacer-left",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),s.loadMore&&s.loadMore()}},Object(c.l)("show_more")),p=r("spacer-top note text-center",{"new-loading":!n},s.className);return a.createElement("footer",{className:p},Object(c.m)("x_of_y_shown",Object(l.formatMeasure)(s.count,"INT",null),Object(l.formatMeasure)(s.total,"INT",null)),null!=s.loadMore&&u?m:null,s.loading&&a.createElement(o.a,{className:"vertical-bottom spacer-left position-absolute"}))}},585:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(539),r=n(534),o=n(75),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function i(e){var t=e.children,n=e.date;return a.createElement(r.FormattedDate,c({value:Object(o.e)(n)},l),t)}},594:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(539),r=n(534),o=n(75);function c(e){var t=e.children,n=e.date;return a.createElement(r.FormattedRelative,{value:Object(o.e)(n)},t)}},595:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(539),r=n(540),o=n(550);n(618);function c(e){var t=Object(o.formatMeasure)(e.level,"LEVEL"),n=r(e.className,"level","level-"+e.level,{"level-small":e.small,"level-muted":e.muted});return a.createElement("span",{className:n},t)}},618:function(e,t,n){var a=n(619);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(543)(a,r);a.locals&&(e.exports=a.locals)},619:function(e,t,n){(e.exports=n(542)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2018 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.level {\n  display: inline-block;\n  width: auto;\n  min-width: 80px;\n  padding-left: 9px;\n  padding-right: 9px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  color: #fff;\n  letter-spacing: 0.02em;\n  font-size: 13px;\n  font-weight: 400;\n  text-align: center;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.35);\n}\n\n.level-small {\n  width: auto;\n  min-width: 64px;\n  padding-left: 9px;\n  padding-right: 9px;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n}\n\n.level-muted {\n  background-color: #bdbdbd !important;\n}\n\na > .level {\n  margin-bottom: -1px;\n  border-bottom: 1px solid;\n  transition: all 0.2s ease;\n}\n\na > .level:hover {\n  opacity: 0.8;\n}\n\n.level-OK {\n  background-color: #00aa00;\n}\n\n.level-WARN {\n  background-color: #ed7d20;\n}\n\n.level-ERROR {\n  background-color: #d4333f;\n}\n\n.level-NONE {\n  background-color: #b4b4b4;\n}\n",""])},669:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(539),r=n(544);function o(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,c=e.size;return a.createElement(r.a,{className:t,size:c},a.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:o}}))}},881:function(e,t,n){"use strict";var a=n(539),r=n(544);function o(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,c=e.size;return a.createElement(r.a,{className:t,size:c},a.createElement("path",{d:"M13.5 9.5c1.003.033 1.466 1.952 0 2h-2.618L9.685 9.107 8 14.162 6.096 8.45l-.832 3.05-2.829-.002c-.984-.097-1.369-1.951.065-1.998h1.236l2.168-7.95L8 7.838l1.315-3.945L12.118 9.5H13.5z",style:{fill:o}}))}function c(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,c=e.size;return a.createElement(r.a,{className:t,size:c},a.createElement("path",{d:"M13.002 8.848v4.168a.56.56 0 0 1-.556.555H9.11v-3.334H6.89v3.334H3.554a.56.56 0 0 1-.556-.555V8.848c0-.018.01-.035.01-.052L8 4.68l4.993 4.116c.009.017.009.034.009.052zm1.936-.6l-.538.643a.289.289 0 0 1-.183.096h-.026a.273.273 0 0 1-.182-.061L8 3.916l-6.009 5.01a.297.297 0 0 1-.208.06.289.289 0 0 1-.183-.095l-.538-.642a.285.285 0 0 1 .035-.391L7.34 2.656a1.07 1.07 0 0 1 1.32 0l2.119 1.772V2.735c0-.157.121-.278.278-.278h1.667c.156 0 .278.121.278.278v3.542l1.901 1.58c.113.096.13.279.035.392z",style:{fill:o}}))}function l(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,c=e.size;return a.createElement(r.a,{className:t,size:c},a.createElement("path",{d:"M13.805 9.25c0 .016 0 .04-.008.055C13.133 12.07 10.852 14 7.969 14c-1.524 0-3-.602-4.11-1.656l-1.007 1.008a.497.497 0 0 1-.352.148.504.504 0 0 1-.5-.5V9.5c0-.273.227-.5.5-.5H6c.273 0 .5.227.5.5a.497.497 0 0 1-.148.352l-1.07 1.07a3.988 3.988 0 0 0 6.125-.828c.187-.305.28-.602.413-.914.04-.11.117-.18.235-.18h1.5c.14 0 .25.117.25.25zM14 3v3.5c0 .273-.227.5-.5.5H10a.504.504 0 0 1-.5-.5c0-.133.055-.258.148-.352l1.079-1.078A4.019 4.019 0 0 0 8 4c-1.39 0-2.68.719-3.406 1.906-.188.305-.282.602-.414.914-.04.11-.117.18-.235.18H2.391a.252.252 0 0 1-.25-.25v-.055C2.812 3.922 5.117 2 8 2c1.531 0 3.023.61 4.133 1.656l1.015-1.008A.497.497 0 0 1 13.5 2.5c.273 0 .5.227.5.5z",style:{fill:o}}))}function i(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,c=e.size;return a.createElement(r.a,{className:t,size:c},a.createElement("path",{d:"M12.557 4.545c.241.247.443.743.443 1.098v7.714c0 .355-.28.643-.625.643h-8.75A.634.634 0 0 1 3 13.357V2.643C3 2.288 3.28 2 3.625 2h5.833c.345 0 .827.208 1.068.455l2.031 2.09zM9.667 2.91v2.518h2.448a.86.86 0 0 0-.144-.275L9.934 3.058a.823.823 0 0 0-.267-.147zm2.5 10.232V6.286H9.458a.634.634 0 0 1-.625-.643V2.857h-5v10.286h8.334z",style:{fill:o}}))}var s=n(669);n.d(t,"a",function(){return p});var u=function(){return(u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function p(e){var t=e.type,n=m(e,["type"]);switch(t){case"issue":return a.createElement(o,u({},n));case"homepage":return a.createElement(c,u({},n));case"ci":return a.createElement(l,u({},n));case"scm":return a.createElement(i,u({},n));default:return a.createElement(s.a,u({},n))}}}}]);
//# sourceMappingURL=316.0250ceb0.chunk.js.map