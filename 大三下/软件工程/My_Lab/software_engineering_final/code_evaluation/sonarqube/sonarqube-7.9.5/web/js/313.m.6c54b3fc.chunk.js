(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1002:function(e,t,a){var i=a(1430);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(369)(i,n);i.locals&&(e.exports=i.locals)},1428:function(e,t,a){var i=a(1429);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(369)(i,n);i.locals&&(e.exports=i.locals)},1429:function(e,t,a){(e.exports=a(368)(!1)).push([e.i,".manual-project-create{max-width:650px}.manual-project-create .visibility-select-option{margin-left:0!important;margin-bottom:8px;display:flex;align-items:center;font-size:14px}.manual-project-create .visibility-details{display:block;margin:8px 0}.manual-project-create .visibility-select-wrapper{padding:8px 0 16px}.manual-project-create .button{margin-top:8px}",""])},1430:function(e,t,a){(e.exports=a(368)(!1)).push([e.i,".create-project{display:flex!important;justify-content:space-between}.create-project-repository{display:flex;align-items:center;min-width:500px;height:40px;border:1px solid #e6e6e6;padding:8px 16px;margin-bottom:8px;box-sizing:border-box;cursor:pointer;transition:all .3s ease}.create-project-repository.disabled{background-color:#ebebeb;border-color:#ddd;cursor:default}.create-project-repository.imported{cursor:default}.create-project-repository.selected{background-color:#cae3f2;border-color:#236a97}.create-project-repository:not(.imported):not(.disabled):active,.create-project-repository:not(.imported):not(.disabled):focus,.create-project-repository:not(.imported):not(.disabled):hover{border-color:#4b9fd5;box-shadow:none}.create-project-side-with-search{margin-top:32px}.create-project-side-sticky{position:-webkit-sticky;position:sticky;top:68px}.create-project-setup{display:flex;overflow:hidden;opacity:0;flex-direction:column;height:0;width:450px;margin-bottom:0;color:#fff;background-color:#0b3c62;border:none;border-radius:3px;transition:height .5s ease,opacity .4s ease-out,margin-bottom .5s ease-in}.create-project-setup.open{opacity:1;height:160px;margin-bottom:20px}.create-project-setup h2{color:#fff;font-weight:700;font-size:16px}.create-project-setup .boxed-group-inner{display:flex;flex-direction:column;flex-grow:1}.create-project-setup .button{border-color:#4c9bd6;background-color:#4c9bd6;color:#fff;transition:border-color .2s ease,box-shadow .2s ease,background-color .2s ease}.create-project-setup .button:focus,.create-project-setup .button:hover{border-color:#327bb3;background-color:#327bb3}.create-project-actions{min-width:500px;display:flex;justify-content:space-between;align-items:center;padding:8px 0 8px 16px;border-left:1px solid transparent}.create-project-actions .icon-checkbox{margin-right:8px}",""])},1692:function(e,t,a){"use strict";a.r(t);var i=a(365),n=a(377),r=a(381),o=a.n(r),s=a(473),l=a.n(s),c=a(366),p=a(55),d=a.n(p),h=a(359),m=a(371),u=a(373),g=a(398),b=a(590),j=a(374),v=a(372),y=a(0),f=a(704);class O extends i.PureComponent{constructor(){super(...arguments),this.handleMouseEnter=()=>{this.props.highlightUpgradeBox(!0)},this.handleMouseLeave=()=>{this.props.highlightUpgradeBox(!1)},this.handleToggle=()=>{this.props.disabled||this.props.repository.linkedProjectKey||this.props.toggleRepository(this.props.repository)}}render(){const e=this.props,t=e.disabled,a=e.identityProvider,n=e.repository,r=e.selected,o=Boolean(n.linkedProjectKey);return i.createElement(j.a,{overlay:t?Object(y.l)("onboarding.create_project.subscribe_to_import_private_repositories"):void 0},i.createElement("li",null,i.createElement("div",{className:c("create-project-repository",{disabled:t,imported:o,selected:r}),onClick:this.handleToggle,onMouseEnter:t?this.handleMouseEnter:void 0,onMouseLeave:t?this.handleMouseLeave:void 0,role:"listitem"},i.createElement("div",{className:"flex-1 display-flex-center"},t?i.createElement(f.a,{fill:u.disableGrayText}):i.createElement(g.a,{checked:r||o,disabled:t||o,onCheck:d.a}),i.createElement("img",{alt:a.name,className:c("spacer-left",{"icon-half-transparent":t}),height:14,src:"".concat(Object(v.b)(),"/images/sonarcloud/").concat(a.key,".svg"),width:14}),i.createElement("span",{className:"spacer-left"},this.props.repository.label),n.private&&i.createElement("div",{className:"outline-badge spacer-left"},Object(y.l)("visibility.private"))),n.linkedProjectKey&&i.createElement("span",null,i.createElement(b.a,{className:"little-spacer-right",fill:u.green}),i.createElement(h.FormattedMessage,{defaultMessage:Object(y.l)("onboarding.create_project.repository_imported"),id:"onboarding.create_project.repository_imported",values:{link:i.createElement(m.Link,{to:Object(v.v)(n.linkedProjectKey)},Object(y.l)("onboarding.create_project.see_project"))}})))))}}var E=a(530),k=a.n(E),z=a(375),_=a(367),C=a(548);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],i=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(e){n=!0,r=e}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}class N extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.canSubmit=()=>!this.state.submitting&&this.props.selectedRepositories.length>0,this.handleFormSubmit=e=>{if(e.preventDefault(),this.canSubmit()){const e=this.props.selectedRepositories;this.setState({submitting:!0}),Object(C.g)({installationKeys:e.map(e=>e.installationKey),organization:this.props.organization.key}).then(e=>{let t=e.projects;return this.props.onProjectCreate(t.map(e=>e.projectKey),this.props.organization.key)},this.handleProvisionFail)}},this.handleProvisionFail=()=>this.props.onProvisionFail().then(()=>{this.mounted&&this.setState({submitting:!1})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.selectedRepositories,t=e.length>0,a=x(k()(e,e=>e.private),2),n=a[0],r=void 0===n?[]:n,o=a[1],s=void 0===o?[]:o;return i.createElement("form",{className:c("create-project-setup boxed-group",{open:t}),onSubmit:this.handleFormSubmit},i.createElement("div",{className:"boxed-group-header"},i.createElement("h2",{className:"spacer-top"},e.length>1?Object(y.m)("onboarding.create_project.x_repositories_selected",e.length):Object(y.l)("onboarding.create_project.1_repository_selected"))),i.createElement("div",{className:"boxed-group-inner"},i.createElement("div",{className:"flex-1"},1===s.length&&i.createElement("p",null,Object(y.l)("onboarding.create_project.1_repository_created_as_public")),s.length>1&&i.createElement("p",null,Object(y.m)("onboarding.create_project.x_repository_created_as_public",s.length)),1===r.length&&i.createElement("p",null,Object(y.l)("onboarding.create_project.1_repository_created_as_private")),r.length>1&&i.createElement("p",null,Object(y.m)("onboarding.create_project.x_repository_created_as_private",r.length))),i.createElement("div",null,i.createElement(_.i,{className:"button-large",disabled:this.state.submitting},Object(y.l)("set_up")),i.createElement(z.a,{className:"spacer-left",loading:this.state.submitting}))))}}var S=a(416),P=a(652),U=a(385),w=a(508),M=a(525);class R extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={checkAllRepositories:!1,highlight:!1,loading:!0,repositories:[],search:"",selectedRepositories:{},successfullyUpgraded:!1},this.fetchRepositories=()=>{const e=this.props.organization;return Object(C.e)({organization:e.key}).then(e=>{let t=e.repositories;this.mounted&&this.setState({loading:!1,repositories:t})},()=>{this.mounted&&this.setState({loading:!1})})},this.filterBySearch=e=>t=>t.label.toLowerCase().includes(e.toLowerCase()),this.handleHighlightUpgradeBox=e=>{this.setState({highlight:e})},this.handleOrganizationUpgrade=()=>{this.props.onOrganizationUpgrade(),this.mounted&&this.setState({successfullyUpgraded:!0})},this.handleProvisionFail=()=>this.fetchRepositories().then(()=>{this.mounted&&this.setState(e=>{let t=e.repositories,a=e.selectedRepositories;const i={};return Object.keys(a).forEach(e=>{const a=t.find(t=>t.installationKey===e);a&&!a.linkedProjectKey&&(i[a.installationKey]=a)}),{selectedRepositories:i}})}),this.handleSearch=e=>{this.setState({search:e,checkAllRepositories:!1,selectedRepositories:{}})},this.onCheckAllRepositories=()=>{this.setState(e=>{let t=e.checkAllRepositories,a=e.repositories,i=e.search;const n=this.props.organization,r=Object(w.c)(n),o={selectedRepositories:{},checkAllRepositories:!t};if(o.checkAllRepositories){const e=a.filter(e=>this.filterBySearch(i)(e)&&(e=>!!r||!e.private)(e)&&(e=>!e.linkedProjectKey)(e));o.selectedRepositories=l()(e,"installationKey")}return o})},this.toggleRepository=e=>{this.setState(t=>{let a=t.selectedRepositories;return{selectedRepositories:Object.assign({},a,{[e.installationKey]:a[e.installationKey]?void 0:e})}})}}componentDidMount(){this.mounted=!0,this.fetchRepositories()}componentDidUpdate(e){e.organization.key!==this.props.organization.key&&(this.setState({loading:!0,selectedRepositories:{}}),this.fetchRepositories())}componentWillUnmount(){this.mounted=!1}render(){const e=this.state,t=e.highlight,a=e.loading,n=e.repositories,r=e.search,o=e.selectedRepositories,s=this.props,l=s.almApplication,p=s.organization,d=Object(w.c)(p),h=n.some(e=>Boolean(e.private)),m=n.length>5,u=n.length>1,b=!d&&h&&p.actions&&p.actions.admin,j=n.filter(this.filterBySearch(r));return i.createElement("div",{className:"create-project"},i.createElement("div",{className:"flex-1 huge-spacer-right"},i.createElement("div",{className:"spacer-bottom create-project-actions"},i.createElement("div",null,u&&i.createElement(g.a,{checked:this.state.checkAllRepositories,disabled:0===j.length,onCheck:this.onCheckAllRepositories},Object(y.l)("onboarding.create_project.select_all_repositories"))),m&&i.createElement(S.a,{minLength:1,onChange:this.handleSearch,placeholder:Object(y.l)("search.search_for_repositories"),value:this.state.search})),this.state.successfullyUpgraded&&i.createElement(U.a,{variant:"success"},Object(y.m)("onboarding.create_project.subscribtion_success_x",p.name)),i.createElement(z.a,{loading:a},i.createElement("ul",null,0===j.length&&i.createElement("li",{className:"big-spacer-top note"},b?Object(y.m)("no_results_for_x",r):Object(y.l)("onboarding.create_project.no_repositories")),j.map(e=>i.createElement(O,{disabled:Boolean(e.private&&!d),highlightUpgradeBox:this.handleHighlightUpgradeBox,identityProvider:l,key:e.installationKey,repository:e,selected:Boolean(o[e.installationKey]),toggleRepository:this.toggleRepository}))))),p&&i.createElement("div",{className:c({"create-project-side-with-search":m})},i.createElement("div",{className:"create-project-side-sticky"},i.createElement(N,{onProjectCreate:this.props.onProjectCreate,onProvisionFail:this.handleProvisionFail,organization:p,selectedRepositories:Object.keys(o).map(e=>o[e]).filter(M.a)}),b&&i.createElement(P.a,{className:c({highlight:t}),onOrganizationUpgrade:this.handleOrganizationUpgrade,organization:p}))))}}var K=a(965),F=a(490),A=a(1);var D=Object(m.withRouter)(class extends i.PureComponent{constructor(){super(...arguments),this.handleLinkClick=e=>{e.preventDefault(),e.stopPropagation(),Object(A.c)(F.d,Date.now().toString(10)),this.props.router.push({pathname:"/create-organization",state:{tab:this.props.autoImport?"auto":"manual"}})}}render(){const e=this.props,t=e.autoImport,a=e.onChange,n=e.organization,r=e.organizations;return i.createElement("div",{className:"form-field spacer-bottom"},i.createElement("label",{htmlFor:"select-organization"},i.createElement("span",{className:"text-middle"},i.createElement("strong",null,Object(y.l)("onboarding.create_project.organization")),i.createElement("em",{className:"mandatory"},"*"))),i.createElement(K.a,{hideIcons:!t,onChange:a,organization:n,organizations:r}),i.createElement("a",{className:"big-spacer-left js-new-org",href:"#",onClick:this.handleLinkClick},t?Object(y.l)("onboarding.create_project.import_new_org"):Object(y.l)("onboarding.create_project.create_new_org")))}}),B=a(636);class T extends i.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleInstallAppClick=()=>{Object(A.c)(F.c,Date.now().toString(10)),Object(A.c)(F.d,Date.now().toString(10))},this.handleOrganizationSelect=e=>{let t=e.key;this.setState({selectedOrganization:t})},this.state={selectedOrganization:this.getInitialSelectedOrganization(e)}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}getInitialSelectedOrganization(e){return e.organization?e.organization:1===e.boundOrganizations.length?e.boundOrganizations[0].key:""}render(){const e=this.props,t=e.almApplication,a=e.boundOrganizations,n=e.onProjectCreate;if(0===a.length)return i.createElement(i.Fragment,null,i.createElement("p",{className:"spacer-bottom"},Object(y.l)("onboarding.create_project.install_app_description",t.key)),i.createElement(B.a,{className:"display-inline-block",identityProvider:t,onClick:this.handleInstallAppClick,small:!0,url:t.installationUrl},Object(y.l)("onboarding.import_organization.choose_organization_button",t.key)));const r=this.state.selectedOrganization,o=a.find(e=>e.key===r);return i.createElement(i.Fragment,null,i.createElement(D,{autoImport:!0,onChange:this.handleOrganizationSelect,organization:r,organizations:this.props.boundOrganizations}),o&&i.createElement(R,{almApplication:t,onOrganizationUpgrade:this.props.onOrganizationUpgrade,onProjectCreate:n,organization:o}))}}var I=a(409),L=a(425),V=a.n(L),W=a(724);class q extends i.PureComponent{constructor(e){super(e),this.mounted=!1,this.checkFreeKey=e=>(this.setState({validating:!0}),Object(I.f)({component:e}).then(t=>{this.mounted&&e===this.props.value&&(t?this.setState({error:Object(y.l)("onboarding.create_project.project_key.taken"),touched:!0,validating:!1}):this.setState({error:void 0,validating:!1}))}).catch(()=>{this.mounted&&e===this.props.value&&this.setState({error:void 0,validating:!1})})),this.handleChange=e=>{const t=e.currentTarget.value;this.setState({touched:!0}),this.validateKey(t),this.props.onChange(t)},this.state={error:void 0,touched:!1,validating:!1},this.checkFreeKey=V()(this.checkFreeKey,250)}componentDidMount(){this.mounted=!0,this.props.value&&this.validateKey(this.props.value)}componentWillUnmount(){this.mounted=!1}validateKey(e){e.length>400||!/^[\w-.:]*[a-zA-Z]+[\w-.:]*$/.test(e)?this.setState({error:Object(y.l)("onboarding.create_project.project_key.error"),touched:!0}):this.checkFreeKey(e)}render(){const e=this.state.touched&&void 0!==this.state.error,t=this.state.touched&&!this.state.validating&&void 0===this.state.error;return i.createElement(W.a,{className:this.props.className,description:Object(y.l)("onboarding.create_project.project_key.description"),error:this.state.error,help:Object(y.l)("onboarding.create_project.project_key.help"),id:"project-key",isInvalid:e,isValid:t,label:Object(y.l)("onboarding.create_project.project_key"),required:!0},i.createElement("input",{autoFocus:!0,className:c("input-super-large",{"is-invalid":e,"is-valid":t}),id:"project-key",maxLength:400,minLength:1,onChange:this.handleChange,type:"text",value:this.props.value}))}}var H=a(703),J=a(384),G=a(14);a(1428);class Z extends i.PureComponent{constructor(e){super(e),this.mounted=!1,this.canChoosePrivate=e=>Boolean(e&&"PAID"===e.subscription),this.getInitialSelectedOrganization=e=>e.organization?this.getOrganization(e.organization):e.userOrganizations&&1===e.userOrganizations.length?e.userOrganizations[0]:void 0,this.getOrganization=e=>this.props.userOrganizations&&this.props.userOrganizations.find(t=>{return t.key===e}),this.handleFormSubmit=e=>{e.preventDefault();const t=this.state;this.canSubmit(t)&&(this.setState({submitting:!0}),Object(I.c)({project:t.projectKey,name:(t.projectName||t.projectKey).trim(),organization:t.selectedOrganization&&t.selectedOrganization.key,visibility:this.state.selectedVisibility}).then(e=>{let t=e.project;return this.props.onProjectCreate([t.key])},()=>{this.mounted&&this.setState({submitting:!1})}))},this.handleOrganizationSelect=e=>{let t=e.key;const a=this.getOrganization(t);let i=this.state.selectedVisibility;void 0===i&&(i=this.canChoosePrivate(a)?"private":"public"),this.setState({selectedOrganization:a,selectedVisibility:i})},this.handleOrganizationUpgrade=()=>{this.props.fetchMyOrganizations().then(()=>{this.setState(e=>{if(e.selectedOrganization){return{selectedOrganization:this.getOrganization(e.selectedOrganization.key)}}return null})},()=>{})},this.handleProjectNameChange=e=>{const t=e.currentTarget.value;this.setState({projectName:t,projectNameChanged:!0})},this.handleProjectKeyChange=e=>{this.setState(t=>({projectKey:e,projectName:t.projectNameChanged?t.projectName:e||""}))},this.handleVisibilityChange=e=>{this.setState({selectedVisibility:e})},this.state={projectKey:"",projectName:"",projectNameChanged:!1,selectedOrganization:this.getInitialSelectedOrganization(e),submitting:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}canSubmit(e){return Boolean(e.projectKey&&e.projectName&&(!Object(G.isSonarCloud)()||e.selectedOrganization))}render(){const e=this.state,t=e.selectedOrganization,a=e.submitting,n=this.canChoosePrivate(t);return i.createElement("div",{className:"create-project"},i.createElement("div",{className:"flex-1 huge-spacer-right"},i.createElement("form",{className:"manual-project-create",onSubmit:this.handleFormSubmit},Object(G.isSonarCloud)()&&this.props.userOrganizations&&i.createElement(D,{onChange:this.handleOrganizationSelect,organization:t?t.key:"",organizations:this.props.userOrganizations}),i.createElement(q,{className:"form-field",onChange:this.handleProjectKeyChange,value:this.state.projectKey}),i.createElement("div",{className:"form-field"},i.createElement("label",{htmlFor:"project-name"},i.createElement("span",{className:"text-middle"},i.createElement("strong",null,Object(y.l)("onboarding.create_project.display_name")),i.createElement("em",{className:"mandatory"},"*")),i.createElement(J.a,{className:"spacer-left",overlay:Object(y.l)("onboarding.create_project.display_name.help")})),i.createElement("div",{className:"little-spacer-top spacer-bottom"},i.createElement("input",{className:"input-super-large",id:"project-name",maxLength:255,minLength:1,onChange:this.handleProjectNameChange,type:"text",value:this.state.projectName})),i.createElement("div",{className:"note abs-width-400"},Object(y.l)("onboarding.create_project.display_name.description"))),Object(G.isSonarCloud)()&&t&&i.createElement("div",{className:c("visibility-select-wrapper",{open:Boolean(this.state.selectedOrganization)})},i.createElement(H.a,{canTurnToPrivate:n,onChange:this.handleVisibilityChange,showDetails:!0,visibility:n?this.state.selectedVisibility:"public"})),i.createElement(_.i,{disabled:!this.canSubmit(this.state)||a},Object(y.l)("set_up")),i.createElement(z.a,{className:"spacer-left",loading:a}))),Object(G.isSonarCloud)()&&t&&i.createElement("div",{className:"create-project-side-sticky"},i.createElement(P.a,{className:c("animated",{open:!n}),onOrganizationUpgrade:this.handleOrganizationUpgrade,organization:t})))}}var $=a(966),Q=a(529),X=a(637),Y=a(424),ee=a(404),te=a(502);a(1002);const ae={skipOnboarding:te.g};var ie=Object(Q.a)(Object(X.a)(Object(n.connect)(null,ae)(class extends i.PureComponent{constructor(){var e;super(...arguments),e=this,this.mounted=!1,this.state={loading:!0},this.handleProjectCreate=(e,t)=>{this.props.skipOnboarding(),e.length>1?this.props.router.push({pathname:(t?Object(v.r)(t):"")+"/projects"}):1===e.length&&this.props.router.push(Object(v.v)(e[0]))},this.fetchAlmApplication=()=>Object(C.b)().then(e=>{let t=e.application;this.mounted&&this.setState({almApplication:t,loading:!1})},()=>{this.mounted&&this.setState({loading:!1})}),this.onTabChange=e=>{this.updateUrl({tab:e})},this.updateUrl=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.props.router.replace({pathname:e.props.location.pathname,query:e.props.location.query,state:Object.assign({},e.props.location.state||{},t)})}}componentDidMount(){this.mounted=!0,Object(Y.c)(this.props.currentUser)?this.fetchAlmApplication():this.setState({loading:!1}),Object(ee.b)()}componentWillUnmount(){this.mounted=!1,Object(ee.d)()}render(){const e=this.props,t=e.currentUser,a=e.location,n=e.userOrganizations,r=this.state,s=r.almApplication,l=r.loading,c=a.state||{},p=Object(y.l)("onboarding.create_project.header"),d="manual"===c.tab;return i.createElement(i.Fragment,null,i.createElement(o.a,{title:p,titleTemplate:"%s"}),i.createElement("div",{className:"page page-limited huge-spacer-top huge-spacer-bottom"},i.createElement("header",{className:"page-header huge-spacer-bottom"},i.createElement("h1",{className:"page-title huge"},i.createElement("strong",null,p))),l?i.createElement(z.a,null):i.createElement(i.Fragment,null,s&&i.createElement($.a,{onChange:this.onTabChange,selected:c.tab||"auto",tabs:[{key:"auto",node:Object(y.l)("onboarding.create_project.select_repositories")},{key:"manual",node:Object(y.l)("onboarding.create_project.setup_manually")}]}),d||!s?i.createElement(Z,{currentUser:t,fetchMyOrganizations:this.props.fetchMyOrganizations,onProjectCreate:this.handleProjectCreate,organization:c.organization,userOrganizations:n.filter(e=>{let t=e.actions;return(void 0===t?{}:t).provision})}):i.createElement(T,{almApplication:s,boundOrganizations:n.filter(e=>{let t=e.alm,a=e.actions;return t&&(void 0===a?{}:a).provision}),onOrganizationUpgrade:this.props.fetchMyOrganizations,onProjectCreate:this.handleProjectCreate,organization:c.organization}))))}})));var ne=Object(Q.a)(class extends i.PureComponent{constructor(){super(...arguments),this.handleProjectCreate=e=>{1===e.length&&this.props.router.push(Object(v.v)(e[0]))}}componentDidMount(){Object(ee.b)()}componentWillUnmount(){Object(ee.d)()}render(){const e=this.props.currentUser,t=Object(y.l)("my_account.create_new.TRK");return i.createElement(i.Fragment,null,i.createElement(o.a,{title:t,titleTemplate:"%s"}),i.createElement("div",{className:"page page-limited huge-spacer-top huge-spacer-bottom"},i.createElement("header",{className:"page-header bordered-bottom big-spacer-bottom"},i.createElement("h1",{className:"page-title huge big-spacer-bottom"},i.createElement("strong",null,t))),i.createElement(Z,{currentUser:e,onProjectCreate:this.handleProjectCreate})))}}),re=a(403);function oe(e){return i.createElement(i.Fragment,null,i.createElement(re.a,{anchor:"create_project_main"}),Object(G.isSonarCloud)()?i.createElement(ie,Object.assign({},e)):i.createElement(ne,Object.assign({},e)))}a.d(t,"default",function(){return oe})},378:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var i=a(365),n=a(405),r=a(366);function o(e){return i.createElement(n,Object.assign({className:r("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:r("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}n.setAppElement("#content")},398:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var i=a(365),n=a(366),r=a(375);class o extends i.PureComponent{constructor(){super(...arguments),this.handleClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.disabled||this.props.onCheck(!this.props.checked,this.props.id)}}render(){const e=this.props,t=e.checked,a=e.children,o=e.disabled,s=e.id,l=e.loading,c=e.right,p=e.thirdState,d=e.title,h=n("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-single":p,"icon-checkbox-disabled":o});return a?i.createElement("a",{"aria-checked":t,className:n("link-checkbox",this.props.className,{note:o,disabled:o}),href:"#",id:s,onClick:this.handleClick,role:"checkbox",title:d},c&&a,i.createElement(r.a,{loading:Boolean(l)},i.createElement("i",{className:h})),!c&&a):l?i.createElement(r.a,null):i.createElement("a",{"aria-checked":t,className:n(h,this.props.className),href:"#",id:s,onClick:this.handleClick,role:"checkbox",title:d})}}o.defaultProps={thirdState:!1}},508:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o});var i=a(392);function n(e){return Boolean(e&&"PAID"===e.subscription)}function r(e,t,a){return!n(t)||o(e,t,a)}function o(e,t,a){return Boolean(t&&Object(i.b)(e)&&(t.actions&&t.actions.admin||a.some(e=>e.key===t.key)))}},530:function(e,t,a){var i=a(465)(function(e,t,a){e[a?0:1].push(t)},function(){return[[],[]]});e.exports=i},652:function(e,t,a){"use strict";var i=a(365),n=a(359),r=a(371),o=a(612),s=a(725),l=a(375),c=a(378),p=a(367),d=a(516),h=a(439),m=a(0);const u=Object(d.a)(s.a);class g extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={ready:!1}}componentDidMount(){this.mounted=!0,Object(h.a)("billing/billing").then(()=>{this.mounted&&this.setState({ready:!0})},()=>{})}componentWillUnmount(){this.mounted=!1}render(){const e=Object(m.l)("billing.upgrade_box.upgrade_to_paid_plan");return this.state.ready?i.createElement(c.a,{contentLabel:e,noBackdrop:this.props.insideModal,onRequestClose:this.props.onClose,shouldCloseOnOverlayClick:!1,size:"medium"},i.createElement("div",{className:"modal-head"},i.createElement("h2",null,e)),i.createElement(u,{onCommit:this.props.onUpgradeDone,organizationKey:this.props.organization.key,subscriptionPlans:this.props.subscriptionPlans},e=>{let t=e.onSubmit,a=e.processingUpgrade,r=e.renderFormFields,s=e.renderNextCharge,c=e.renderRecap,d=e.renderSubmitButton;return i.createElement("form",{id:"organization-paid-plan-form",onSubmit:t},i.createElement("div",{className:"modal-body modal-container"},i.createElement("div",{className:"huge-spacer-bottom"},i.createElement("p",{className:"spacer-bottom"},i.createElement(n.FormattedMessage,{defaultMessage:Object(m.l)("billing.upgrade.org_x_advantages"),id:"billing.coupon.description",values:{org:i.createElement("strong",null,this.props.organization.name)}})),i.createElement(o.a,null)),r(),i.createElement("div",{className:"big-spacer-top"},c())),i.createElement("footer",{className:"modal-foot display-flex-center display-flex-space-between"},s()||i.createElement("span",null),i.createElement("div",null,i.createElement(l.a,{loading:a}),d(),i.createElement(p.h,{onClick:this.props.onClose},Object(m.l)("cancel")))))})):null}}var b=a(628),j=a(490),v=a(639);a.d(t,"a",function(){return y});class y extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={subscriptionPlans:[],upgradeOrganizationModal:!1},this.fetchSubscriptionPlans=()=>Object(v.a)().then(e=>{this.mounted&&this.setState({subscriptionPlans:e})}),this.handleUpgradeClick=()=>{this.setState({upgradeOrganizationModal:!0})},this.handleUpgradeOrganizationModalClose=()=>{this.mounted&&this.setState({upgradeOrganizationModal:!1})},this.handleOrganizationUpgrade=()=>{this.props.onOrganizationUpgrade(),this.handleUpgradeOrganizationModalClose()}}componentDidMount(){this.mounted=!0,this.fetchSubscriptionPlans()}componentWillUnmount(){this.mounted=!1}render(){if(!Object(m.i)("billing.upgrade_box.header"))return null;const e=this.state,t=e.subscriptionPlans,a=e.upgradeOrganizationModal,s=t[0]&&t[0].price;return i.createElement(i.Fragment,null,i.createElement(b.a,{className:this.props.className,title:Object(m.l)("billing.upgrade_box.header"),titleInfo:void 0!==s&&i.createElement(n.FormattedMessage,{defaultMessage:Object(m.l)("billing.price_from_x"),id:"billing.price_from_x",values:{price:i.createElement("span",{className:"big"},Object(j.f)(s))}})},i.createElement(i.Fragment,null,i.createElement(o.a,null),i.createElement("div",{className:"big-spacer-left"},i.createElement(p.a,{className:"js-upgrade-organization",onClick:this.handleUpgradeClick},Object(m.l)("billing.paid_plan.upgrade")),i.createElement(r.Link,{className:"spacer-left",target:"_blank",to:"/about/pricing"},Object(m.l)("billing.pricing.learn_more"))))),a&&i.createElement(g,{insideModal:this.props.insideModal,onClose:this.handleUpgradeOrganizationModalClose,onUpgradeDone:this.handleOrganizationUpgrade,organization:this.props.organization,subscriptionPlans:t}))}}},703:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var i=a(365),n=a(366),r=a(0);class o extends i.PureComponent{constructor(){super(...arguments),this.handlePublicClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onChange("public")},this.handlePrivateClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onChange("private")}}render(){return i.createElement("div",{className:n("visibility-select",this.props.className)},i.createElement("a",{className:"link-base-color link-no-underline visibility-select-option",href:"#",id:"visibility-public",onClick:this.handlePublicClick},i.createElement("i",{className:n("icon-radio",{"is-checked":"public"===this.props.visibility})}),i.createElement("span",{className:"spacer-left"},Object(r.l)("visibility.public"))),this.props.showDetails&&i.createElement("span",{className:"visibility-details note"},Object(r.l)("visibility.public.description.long")),this.props.canTurnToPrivate?i.createElement(i.Fragment,null,i.createElement("a",{className:"link-base-color link-no-underline huge-spacer-left visibility-select-option",href:"#",id:"visibility-private",onClick:this.handlePrivateClick},i.createElement("i",{className:n("icon-radio",{"is-checked":"private"===this.props.visibility})}),i.createElement("span",{className:"spacer-left"},Object(r.l)("visibility.private"))),this.props.showDetails&&i.createElement("span",{className:"visibility-details note"},Object(r.l)("visibility.private.description.long"))):i.createElement(i.Fragment,null,i.createElement("span",{className:"huge-spacer-left text-muted cursor-not-allowed visibility-select-option",id:"visibility-private"},i.createElement("i",{className:n("icon-radio",{"is-checked":"private"===this.props.visibility})}),i.createElement("span",{className:"spacer-left"},Object(r.l)("visibility.private"))),this.props.showDetails&&i.createElement("span",{className:"visibility-details note"},Object(r.l)("visibility.private.description.long"))))}}},704:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var i=a(365),n=a(370);function r(e){let t=e.className,a=e.fill,r=void 0===a?"currentColor":a,o=e.size;return i.createElement(n.a,{className:t,size:o},i.createElement("path",{d:"M5.455 7.364h5.09v-1.91A2.55 2.55 0 0 0 8 2.91a2.55 2.55 0 0 0-2.545 2.546v1.909zm8.272.954v5.727a.955.955 0 0 1-.954.955H3.227a.955.955 0 0 1-.954-.955V8.318c0-.527.427-.954.954-.954h.318v-1.91C3.545 3.01 5.554 1 8 1s4.455 2.009 4.455 4.455v1.909h.318c.527 0 .954.427.954.954z",style:{fill:r}}))}}}]);
//# sourceMappingURL=313.m.6c54b3fc.chunk.js.map