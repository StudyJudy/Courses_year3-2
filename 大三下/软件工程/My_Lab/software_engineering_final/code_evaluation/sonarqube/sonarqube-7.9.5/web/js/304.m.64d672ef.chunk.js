(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{1431:function(e,t,o){var n=o(1432);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(369)(n,i);n.locals&&(e.exports=n.locals)},1432:function(e,t,o){(e.exports=o(368)(!1)).push([e.i,".login-form{width:300px;margin-left:auto;margin-right:auto}.login-input{width:100%!important;height:auto!important;padding:5px 12px!important;font-size:20px;font-weight:300}.login-label{display:none;margin-bottom:8px;font-size:15px}",""])},1433:function(e,t,o){var n=o(1434);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(369)(n,i);n.locals&&(e.exports=n.locals)},1434:function(e,t,o){(e.exports=o(368)(!1)).push([e.i,".oauth-providers>ul{width:200px;margin-left:auto;margin-right:auto}.oauth-providers>ul>li{position:relative;margin-bottom:30px}.oauth-providers-help{position:absolute;top:15px;right:-24px}.oauth-providers+.login-form{padding-top:30px;border-top:1px solid #e6e6e6}",""])},1435:function(e,t,o){var n=o(1436);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(369)(n,i);n.locals&&(e.exports=n.locals)},1436:function(e,t,o){(e.exports=o(368)(!1)).push([e.i,".login-page{padding-top:10vh}.login-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}",""])},1437:function(e,t,o){var n=o(1438);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(369)(n,i);n.locals&&(e.exports=n.locals)},1438:function(e,t,o){(e.exports=o(368)(!1)).push([e.i,".sonarcloud-login-alert{margin:10vh auto 5vh;width:256px}.sonarcloud-login-page{margin-top:15vh;width:216px;margin-left:auto;margin-right:auto;padding:32px 20px}.sonarcloud-login-alert~.sonarcloud-login-page{margin-top:0}.sonarcloud-login-page-large{width:300px}.sonarcloud-login-title{line-height:1.5;font-size:16px;font-weight:300;width:135px;margin:8px auto 24px}.sonarcloud-oauth-providers.oauth-providers>ul{width:186px}.sonarcloud-oauth-providers.oauth-providers>ul>li{margin-bottom:8px}.sonarcloud-oauth-providers.oauth-providers .oauth-providers-help{right:-22px}.sonarcloud-login-cancel{text-align:center}",""])},1703:function(e,t,o){"use strict";o.r(t);var n=o(365),i=o(377),a=o(375),r=o(367),l=o(0),s=o(372);o(1431);class c extends n.PureComponent{constructor(e){super(e),this.stopLoading=()=>{this.setState({loading:!1})},this.handleSubmit=e=>{e.preventDefault(),this.setState({loading:!0}),this.props.onSubmit(this.state.login,this.state.password).then(this.stopLoading,this.stopLoading)},this.handleMoreOptionsClick=e=>{e.preventDefault(),this.setState({collapsed:!1})},this.handleLoginChange=e=>this.setState({login:e.currentTarget.value}),this.handlePwdChange=e=>this.setState({password:e.currentTarget.value}),this.state={collapsed:Boolean(e.collapsed),loading:!1,login:"",password:""}}render(){return this.state.collapsed?n.createElement("div",{className:"text-center"},n.createElement("a",{className:"small text-muted js-more-options",href:"#",onClick:this.handleMoreOptionsClick},Object(l.l)("login.more_options"))):n.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},n.createElement("div",{className:"big-spacer-bottom"},n.createElement("label",{className:"login-label",htmlFor:"login"},Object(l.l)("login")),n.createElement("input",{autoFocus:!0,className:"login-input",id:"login",maxLength:255,name:"login",onChange:this.handleLoginChange,placeholder:Object(l.l)("login"),required:!0,type:"text",value:this.state.login})),n.createElement("div",{className:"big-spacer-bottom"},n.createElement("label",{className:"login-label",htmlFor:"password"},Object(l.l)("password")),n.createElement("input",{className:"login-input",id:"password",name:"password",onChange:this.handlePwdChange,placeholder:Object(l.l)("password"),required:!0,type:"password",value:this.state.password})),n.createElement("div",null,n.createElement("div",{className:"text-right overflow-hidden"},n.createElement(a.a,{className:"spacer-right",loading:this.state.loading}),n.createElement(r.i,{disabled:this.state.loading},Object(l.l)("sessions.log_in")),n.createElement("a",{className:"spacer-left",href:"".concat(Object(s.b)(),"/")},Object(l.l)("cancel")))))}}var d=o(366),p=o(384),u=o(636);o(1433);function h(e){const t=e.formatLabel||g;return n.createElement("section",{className:d("oauth-providers",e.className)},n.createElement("ul",null,e.identityProviders.map(o=>n.createElement(m,{format:t,identityProvider:o,key:o.key,returnTo:e.returnTo}))))}function m(e){let t=e.format,o=e.identityProvider,i=e.returnTo;return n.createElement("li",null,n.createElement(u.a,{identityProvider:o,url:"".concat(Object(s.b)(),"/sessions/init/").concat(o.key)+"?return_to=".concat(encodeURIComponent(i))},n.createElement("span",null,t(o.name))),o.helpMessage&&n.createElement(p.a,{className:"oauth-providers-help",overlay:o.helpMessage}))}function g(e){return Object(l.m)("login.login_with_x",e)}var v=o(907);o(1435);function b(e){let t=e.identityProviders,o=e.onSubmit,i=e.returnTo;return n.createElement("div",{className:"login-page",id:"login_form"},n.createElement("h1",{className:"login-title text-center"},Object(l.l)("login.login_to_sonarqube")),n.createElement(v.a,null),t.length>0&&n.createElement(h,{identityProviders:t,returnTo:i}),n.createElement(c,{collapsed:t.length>0,onSubmit:o,returnTo:i}))}var f=o(385);o(1437);function x(e){return Object(l.m)("login.with_x",e)}var E=Object(i.connect)(e=>({authorizationError:e.appState.authorizationError,authenticationError:e.appState.authenticationError}))(function(e){let t=e.showForm,o=e.identityProviders,i=e.returnTo,a=e.onSubmit,r=e.authorizationError,p=e.authenticationError;const u=t||o.length<=0,m=r||p;return n.createElement(n.Fragment,null,m&&n.createElement(f.a,{className:"sonarcloud-login-alert",display:"block",variant:"warning"},Object(l.l)("login.unauthorized_access_alert")),n.createElement("div",{className:d("sonarcloud-login-page boxed-group boxed-group-inner",{"sonarcloud-login-page-large":u}),id:"login_form"},n.createElement("div",{className:"text-center"},n.createElement("img",{alt:"SonarCloud logo",height:36,src:"".concat(Object(s.b)(),"/images/sonarcloud-square-logo.svg"),width:36}),n.createElement("h1",{className:"sonarcloud-login-title"},Object(l.l)("login.login_or_signup_to_sonarcloud"))),u?n.createElement(c,{onSubmit:a,returnTo:i}):n.createElement(h,{className:"sonarcloud-oauth-providers",formatLabel:x,identityProviders:o,returnTo:i}),m&&n.createElement("div",{className:"sonarcloud-login-cancel"},n.createElement("div",{className:"horizontal-pipe-separator"},n.createElement("div",{className:"horizontal-separator"}),n.createElement("span",{className:"note"},Object(l.l)("or")),n.createElement("div",{className:"horizontal-separator"})),n.createElement("a",{href:"".concat(Object(s.b)(),"/")},Object(l.l)("go_back_to_homepage")))))}),y=o(450),w=o(475),k=o(14);const N={doLogin:y.a};t.default=Object(i.connect)(null,N)(class extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.handleSuccessfulLogin=()=>{window.location.href=Object(s.A)(this.props.location)},this.handleSubmit=(e,t)=>this.props.doLogin(e,t).then(this.handleSuccessfulLogin,()=>{})}componentDidMount(){this.mounted=!0,Object(w.d)().then(e=>{this.mounted&&this.setState({identityProviders:e.identityProviders})},()=>{})}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.location,t=this.state.identityProviders;return t?Object(k.isSonarCloud)()?n.createElement(E,{identityProviders:t,onSubmit:this.handleSubmit,returnTo:Object(s.A)(e),showForm:void 0!==e.query.advanced}):n.createElement(b,{identityProviders:t,onSubmit:this.handleSubmit,returnTo:Object(s.A)(e)}):null}})},384:function(e,t,o){"use strict";o.d(t,"a",function(){return s});var n=o(365),i=o(366),a=o(374),r=o(423),l=o(373);o(393);function s(e){const t=e.children,o=void 0===t?n.createElement(r.a,{fill:l.gray71,size:12}):t,s=e.tagName,c=void 0===s?"div":s;return n.createElement(c,{className:i("help-tooltip",e.className)},n.createElement(a.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},n.createElement("span",{className:"display-inline-flex-center"},o)))}},393:function(e,t,o){var n=o(394);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(369)(n,i);n.locals&&(e.exports=n.locals)},394:function(e,t,o){(e.exports=o(368)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},636:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o(365),i=o(366),a=o(589),r=o(372);o(667);function l(e){let t=e.children,o=e.className,l=e.identityProvider,s=e.onClick,c=e.small,d=e.url;const p=c?14:20;return n.createElement("a",{className:i("identity-provider-link",{"dark-text":!Object(a.b)(l.backgroundColor),small:c},o),href:d,onClick:s,style:{backgroundColor:l.backgroundColor}},n.createElement("img",{alt:l.name,height:p,src:Object(r.b)()+l.iconPath,width:p}),t)}},667:function(e,t,o){var n=o(668);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(369)(n,i);n.locals&&(e.exports=n.locals)},668:function(e,t,o){(e.exports=o(368)(!1)).push([e.i,'a.identity-provider-link{display:block;width:auto;line-height:22px;padding:8px 12px;border:1px solid rgba(0,0,0,.15);border-radius:2px;box-sizing:border-box;background-color:#236a97;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}a.identity-provider-link.small{line-height:14px;padding:4px 8px}a.identity-provider-link:focus,a.identity-provider-link:hover{box-shadow:inset 0 0 0 100px hsla(0,0%,100%,.1)}a.identity-provider-link.dark-text{color:#777}a.identity-provider-link.dark-text:focus,a.identity-provider-link.dark-text:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}a.identity-provider-link>img{padding-right:12px}a.identity-provider-link.small>img{padding-right:8px}a.identity-provider-link>span:before{content:"";opacity:.4;border-left:1px solid #b4b4b4;margin-right:12px}',""])}}]);
//# sourceMappingURL=304.m.64d672ef.chunk.js.map