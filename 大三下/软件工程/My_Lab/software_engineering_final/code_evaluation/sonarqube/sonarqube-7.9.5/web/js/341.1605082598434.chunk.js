(window.webpackJsonp=window.webpackJsonp||[]).push([[341,23,345,369],{1258:function(e,t,n){"use strict";n.r(t);var r=n(695),o=n(705),a=n(856),i=n(783),c=n(708);t.default=Object(o.connect)(function(e){return{globalPages:Object(c.getAppState)(e).globalPages}})(function(e){var t=e.params,n=t.extensionKey,o=t.pluginKey,c=(e.globalPages||[]).find(function(e){return e.key===o+"/"+n});return c?r.createElement(a.a,{extension:c}):r.createElement(i.default,{withContainer:!1})})},1970:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return a});var r=n(695),o=n(1258);function a(){return r.createElement(o.default,{params:{pluginKey:"governance",extensionKey:"portfolios"}})}},768:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(695),o=n(835),a=n(703),i=n(806);function c(e){var t=e.children;return r.createElement("div",{className:"global-container"},r.createElement("div",{className:"page-wrapper",id:"container"},r.createElement(i.a,{className:"navbar-global",height:a.globalNavHeightRaw}),t),r.createElement(o.a,null))}},769:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l});var r=n(702),o=n(83),a=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})},i=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=!1;function s(e,t){return void 0===t&&(t="body"),new Promise(function(n){var o=document.createElement("script");o.src=""+Object(r.b)()+e,o.onload=n,document.getElementsByTagName(t)[0].appendChild(o)})}function l(e){return a(this,void 0,void 0,function(){var t,r;return i(this,function(a){switch(a.label){case 0:return(t=Object(o.a)(e))?[2,Promise.resolve(t)]:c?[3,2]:[4,Promise.all([n.e(0),n.e(1),n.e(3),n.e(15),n.e(286)]).then(n.bind(null,913))];case 1:(0,a.sent().default)(),c=!0,a.label=2;case 2:return[4,s("/static/"+e+".js")];case 3:return a.sent(),(r=Object(o.a)(e))?[2,r]:[2,Promise.reject()]}})})}},783:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var r=n(695),o=n(711),a=n(701),i=n(768),c=n(28);function s(e){var t=e.withContainer,n=void 0===t||t?i.default:r.Fragment;return r.createElement(n,null,r.createElement(o.Helmet,{defaultTitle:Object(c.l)("404_not_found"),defer:!1}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:"page-simple",id:"nonav"},r.createElement("h2",{className:"big-spacer-bottom"},Object(c.l)("page_not_found")),r.createElement("p",{className:"spacer-bottom"},Object(c.l)("address_mistyped_or_page_moved")),r.createElement("p",null,r.createElement(a.Link,{to:"/"},Object(c.l)("go_back_to_homepage"))))))}},856:function(e,t,n){"use strict";var r,o=n(695),a=n(711),i=n.n(a),c=n(689),s=n(705),l=n(758),u=n(735),p=n(769),f=n(751),d=n(28),h=n(708),m=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.handleStart=function(e){var n=Object(l.default)(),r=e(b({store:n,el:t.container,currentUser:t.props.currentUser,intl:t.props.intl,location:t.props.location,router:t.props.router},t.props.options));o.isValidElement(r)?t.setState({extensionElement:r}):t.stop=r},t.handleFailure=function(){t.props.onFail(Object(d.l)("page_extension_failed"))},t}return m(t,e),t.prototype.componentDidMount=function(){this.startExtension()},t.prototype.componentDidUpdate=function(e){e.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):e.location!==this.props.location&&this.startExtension()},t.prototype.componentWillUnmount=function(){this.stopExtension()},t.prototype.startExtension=function(){Object(p.a)(this.props.extension.key).then(this.handleStart,this.handleFailure)},t.prototype.stopExtension=function(){this.stop&&(this.stop(),this.stop=void 0)},t.prototype.render=function(){var e=this;return o.createElement("div",null,o.createElement(i.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:o.createElement("div",{ref:function(t){return e.container=t}}))},t}(o.PureComponent),y={onFail:f.a};t.a=Object(c.injectIntl)(Object(u.a)(Object(s.connect)(function(e){return{currentUser:Object(h.getCurrentUser)(e)}},y)(v)))}}]);
//# sourceMappingURL=341.1605082598434.chunk.js.map