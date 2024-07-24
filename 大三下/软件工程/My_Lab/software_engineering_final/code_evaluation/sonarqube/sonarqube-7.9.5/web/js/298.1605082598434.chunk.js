(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1057:function(e,t,n){"use strict";var r,i=n(695),o=n(717),a=n(28),l=n(762),s=n(1004),c=n(721),p=n(797),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleLanguageClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.rule.lang&&t.props.onFilterChange({languages:[t.props.rule.lang]})},t.handleTypeClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onFilterChange({types:[t.props.rule.type]})},t.handleSeverityClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.rule.severity&&t.props.onFilterChange({severities:[t.props.rule.severity]})},t.handleTagClick=function(e){e.preventDefault(),e.currentTarget.blur();var n=e.currentTarget.dataset.tag;n&&t.props.onFilterChange({tags:[n]})},t}return u(t,e),t.prototype.render=function(){var e=this,t=this.props.rule,n=t.tags,r=void 0===n?[]:n,u=t.sysTags,d=void 0===u?[]:u,m=t.severity,f=r.concat(d);return i.createElement(o.b,{className:"display-inline-block",overlay:i.createElement(i.Fragment,null,i.createElement("ul",{className:"menu"},i.createElement("li",{className:"menu-header"},Object(a.l)("coding_rules.filter_similar_rules")),i.createElement("li",null,i.createElement("a",{"data-field":"language",href:"#",onClick:this.handleLanguageClick},t.langName)),i.createElement("li",null,i.createElement("a",{"data-field":"type",href:"#",onClick:this.handleTypeClick},Object(a.l)("issue.type",t.type))),m&&i.createElement("li",null,i.createElement("a",{"data-field":"severity",href:"#",onClick:this.handleSeverityClick},i.createElement(l.a,{severity:t.severity}))),f.length>0&&i.createElement(i.Fragment,null,i.createElement("li",{className:"divider"}),f.map(function(t){return i.createElement("li",{key:t},i.createElement("a",{"data-field":"tag","data-tag":t,href:"#",onClick:e.handleTagClick},i.createElement(p.a,{className:"icon-half-transparent little-spacer-right text-middle"}),i.createElement("span",{className:"text-middle"},t)))}))))},i.createElement("a",{className:"js-rule-filter link-no-underline spacer-left dropdown-toggle",href:"#",title:Object(a.l)("coding_rules.filter_similar_rules")},i.createElement(s.a,{className:"icon-half-transparent"}),i.createElement(c.a,{className:"icon-half-transparent"})))},t}(i.PureComponent);t.a=d},1124:function(e,t,n){"use strict";n.r(t),t.default="Custom rules are created by administrators from templates, and are the only fully-editable rules.\n"},1125:function(e,t,n){var r=n(1126);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(699)(r,i);r.locals&&(e.exports=r.locals)},1126:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".coding-rules-extended-view .coding-rules-list{display:none}.coding-rules-extended-view .coding-rules-details{display:block}.coding-rules-detail-title{position:relative;display:inline-block;margin:16px 0;font-size:16px;font-weight:400}.coding-rules-detail-quality-profile-parameter{display:block;height:100%;padding-top:0;padding-right:10px}.coding-rules-detail-quality-profile-parameter .key,.coding-rules-detail-quality-profile-parameter .sep,.coding-rules-detail-quality-profile-parameter .value{display:inline;vertical-align:top}.coding-rules-detail-quality-profile-parameter .value{display:inline-block;vertical-align:top;line-height:23px;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace}.coding-rules-detail-quality-profile-parameter+.coding-rules-detail-quality-profile-parameter{margin-top:0}.coding-rules-detail-properties{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.coding-rules-detail-properties+.coding-rules-detail-properties{margin-top:-10px}.coding-rules-detail-property{display:flex;align-items:center;margin-right:16px;margin-bottom:8px;font-size:12px}.coding-rules-detail-tag+.coding-rules-detail-tag{margin-left:10px}.coding-rules-detail-tags-change{cursor:pointer}.coding-rules-detail-tags-change:hover span{text-decoration:underline}.coding-rules-detail-tag-edit{line-height:1}.coding-rules-details-tag-edit-cancel{vertical-align:middle}.coding-rules-detail-description{margin:20px 0}.coding-rules-detail-description-extra{margin-top:-10px}.coding-rules-detail-extend-description-form{margin:10px 0}.coding-rules-detail-parameters{width:100%;margin:10px 0 20px}.coding-rules-detail-parameter-name{width:1px;vertical-align:top;padding:5px 10px 5px 0;font-weight:700}.coding-rules-detail-parameter-description{vertical-align:top;padding:5px}.coding-rules-detail-parameter-value{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;word-break:break-all}.coding-rules-detail-list,.coding-rules-detail-quality-profiles{width:100%;line-height:22px}.coding-rules-detail-list td,.coding-rules-detail-quality-profiles td{border-top:1px solid #e6e6e6}.coding-rules-detail-list tr:first-child td,.coding-rules-detail-quality-profiles tr:first-child td{border-top:none}.coding-rules-detail-list-name,.coding-rules-detail-quality-profile-name{vertical-align:top;width:1px;padding:8px 5px 8px 0;font-weight:600;white-space:nowrap}.coding-rules-detail-list-severity,.coding-rules-detail-quality-profile-severity{vertical-align:top;width:1px;padding:8px 5px;white-space:nowrap}.coding-rules-detail-quality-profile-severity i{margin-top:2px}.coding-rules-detail-list-parameters,.coding-rules-detail-quality-profile-parameters{vertical-align:top;padding:8px 5px}.coding-rules-detail-list-actions,.coding-rules-detail-quality-profile-actions{vertical-align:top;width:1px;padding:8px 0 8px 5px;text-align:right;white-space:nowrap}.coding-rules-detail-quality-profile-inheritance{font-size:12px;font-weight:400}.coding-rules-detail-quality-profiles-activation{margin-top:-3px;margin-left:10px}.coding-rules-most-violated-projects td{border-top-color:transparent}.coding-rules-most-violated-projects tr:first-child+tr td{border-top-color:#e6e6e6}.coding-rules-most-violated-projects .coding-rules-detail-list-name{font-weight:400}.coding-rule{padding:8px 10px 8px 8px;border:1px solid transparent;background-color:#fff}.coding-rule.selected{border-color:#4b9fd5!important}.coding-rule+.coding-rule{border-top-color:#e6e6e6}.coding-rule.selected+.coding-rule{border-top-color:transparent}.coding-rule-table{width:100%}.coding-rule-table td{vertical-align:top}.coding-rule-table+.coding-rule-table{margin-top:5px}.coding-rule-table-meta-cell{width:1px;white-space:nowrap}@media (max-width:1320px){.coding-rule-table .tags-list span{max-width:100px}}.coding-rule-title{line-height:20px;font-size:13px}.coding-rule-meta{padding:2px 2px 2px 30px;font-size:12px}.coding-rule-activation{width:40px;line-height:19.5px}.coding-rule-activation-actions{padding-left:20px}.coding-rule-section-separator{height:0;margin:10px 0;border-top:1px solid #e6e6e6}",""])},1225:function(e,t,n){"use strict";var r=n(695),i=n(1056),o=n(28),a=n(697),l=n(985),s=n(700);function c(e){var t=e.className,n=e.fill,i=void 0===n?"currentColor":n,o=e.size;return r.createElement(s.a,{className:t,size:o},r.createElement("path",{d:"M8 8.509v3.56c0 .138-.05.257-.151.357-.1.101-.22.151-.358.151a.489.489 0 0 1-.357-.15l-1.145-1.145-2.638 2.639a.251.251 0 0 1-.366 0l-.906-.906a.251.251 0 0 1 0-.366l2.639-2.638-1.144-1.145a.489.489 0 0 1-.151-.357c0-.138.05-.257.15-.358.101-.1.22-.151.358-.151h3.56c.138 0 .257.05.358.151.1.1.151.22.151.358zm6-5.34c0 .068-.026.129-.08.182l-2.638 2.638 1.144 1.145c.101.1.151.22.151.357 0 .138-.05.257-.15.358-.101.1-.22.151-.358.151h-3.56a.489.489 0 0 1-.358-.151A.489.489 0 0 1 8 7.491v-3.56c0-.138.05-.257.151-.357.1-.101.22-.151.358-.151.137 0 .257.05.357.15l1.145 1.145 2.638-2.639a.251.251 0 0 1 .366 0l.906.906c.053.053.079.114.079.183z",style:{fill:i}}))}function p(e){var t=e.className,n=e.fill,i=void 0===n?"currentColor":n,o=e.size;return r.createElement(s.a,{className:t,size:o},r.createElement("path",{d:"M7.898 9.25a.247.247 0 0 1-.078.18l-2.593 2.593 1.125 1.125a.48.48 0 0 1 .148.352.48.48 0 0 1-.148.352A.48.48 0 0 1 6 14H2.5a.48.48 0 0 1-.352-.148A.48.48 0 0 1 2 13.5V10a.48.48 0 0 1 .148-.352A.48.48 0 0 1 2.5 9.5a.48.48 0 0 1 .352.148l1.125 1.125L6.57 8.18a.247.247 0 0 1 .36 0l.89.89a.247.247 0 0 1 .078.18zM14 2.5V6a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148.48.48 0 0 1-.352-.148l-1.125-1.125L9.43 7.82a.247.247 0 0 1-.36 0l-.89-.89a.247.247 0 0 1 0-.36l2.593-2.593-1.125-1.125A.48.48 0 0 1 9.5 2.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 10 2h3.5a.48.48 0 0 1 .352.148A.48.48 0 0 1 14 2.5z",style:{fill:i}}))}function u(e){var t=e.className,n=e.fill,i=void 0===n?"currentColor":n,o=e.size;return r.createElement(s.a,{className:t,size:o},r.createElement("path",{d:"M14 12.1v1.267c0 .176-.08.325-.239.448a.918.918 0 0 1-.58.185H2.819a.918.918 0 0 1-.58-.185C2.08 13.692 2 13.543 2 13.367V12.1c0-.176.08-.326.239-.449a.918.918 0 0 1 .58-.185h10.363c.227 0 .42.062.58.185.158.123.238.273.238.449z",style:{fill:i}}))}var d,m=(d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleDrag=function(e,n){t.props.onResize(n.deltaY)},t}return m(t,e),t.prototype.render=function(){return r.createElement("header",{className:"workspace-viewer-header"},r.createElement("h6",{className:"workspace-viewer-name"},this.props.children),r.createElement(i.DraggableCore,{offsetParent:document.body,onDrag:this.handleDrag},r.createElement("div",{className:"workspace-viewer-resize js-resize"})),r.createElement("div",{className:"workspace-viewer-actions"},r.createElement(g,{icon:u,onClick:this.props.onCollapse,tooltip:"workspace.minimize"}),this.props.maximized?r.createElement(g,{icon:c,onClick:this.props.onMinimize,tooltip:"workspace.normal_size"}):r.createElement(g,{icon:p,onClick:this.props.onMaximize,tooltip:"workspace.full_window"}),r.createElement(g,{icon:l.a,onClick:this.props.onClose,tooltip:"workspace.close"})))},t}(r.PureComponent);t.a=f;function g(e){var t=e.icon,n=e.onClick,i=e.tooltip;return r.createElement(a.b,{className:"workspace-header-icon",color:"#fff",onClick:n,tooltip:Object(o.l)(i)},r.createElement(t,{fill:void 0}))}},1226:function(e,t,n){"use strict";var r,i=n(695),o=n(701),a=n(789),l=n.n(a),s=n(771),c=n.n(s),p=n(746),u=n.n(p),d=n(941),m=n(764),f=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=10,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={searchResult:[]},t.onSearch=function(e){return Object(m.d)({q:e,ps:Math.min(t.props.tags.length+g,100),organization:t.props.organization}).then(function(e){t.mounted&&t.setState({searchResult:u.a.apply(void 0,[e].concat(t.props.sysTags))})},function(){})},t.onSelect=function(e){t.props.setTags(c()(t.props.tags.concat([e])))},t.onUnselect=function(e){t.props.setTags(u()(t.props.tags,e))},t}return f(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=l()(this.state.searchResult,this.props.tags);return i.createElement(d.a,{listSize:g,onSearch:this.onSearch,onSelect:this.onSelect,onUnselect:this.onUnselect,selectedTags:this.props.tags,tags:e})},t}(i.PureComponent),y=n(1057),v=n(729),b=n(725),E=n(717),x=n(759),_=n(884),O=n(700);function w(e){var t=e.className,n=e.fill,r=void 0===n?"currentColor":n,o=e.size;return i.createElement(O.a,{className:t,size:o},i.createElement("path",{d:"M8 3.071c2.724 0 4.929 2.204 4.929 4.929s-2.204 4.929-4.929 4.929c-2.724 0-4.929-2.204-4.929-4.929s2.204-4.929 4.929-4.929zM8 1.357c-3.669 0-6.643 2.974-6.643 6.643s2.974 6.643 6.643 6.643 6.643-2.974 6.643-6.643-2.974-6.643-6.643-6.643zM8 6.286c0.945 0 1.714 0.769 1.714 1.714s-0.769 1.714-1.714 1.714-1.714-0.769-1.714-1.714 0.769-1.714 1.714-1.714zM8 4.571c-1.893 0-3.429 1.535-3.429 3.429s1.535 3.429 3.429 3.429 3.429-1.535 3.429-3.429-1.535-3.429-3.429-3.429z",style:{fill:r}}))}var C=n(762),N=n(863),k=n(704),j=n(697),S=n(782),D=n(702),z=n(28),P=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),T="external_",F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderType=function(){var e=t.props.ruleDetails;return i.createElement(k.a,{overlay:Object(z.l)("coding_rules.type.tooltip",e.type)},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"type"},i.createElement(x.a,{className:"little-spacer-right",query:e.type}),Object(z.l)("issue.type",e.type)))},t.renderSeverity=function(){return i.createElement(k.a,{overlay:Object(z.l)("default_severity")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"severity"},i.createElement(C.a,{className:"display-inline-flex-center",severity:t.props.ruleDetails.severity})))},t.renderStatus=function(){var e=t.props.ruleDetails;return"READY"===e.status?null:i.createElement(k.a,{overlay:Object(z.l)("status")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"status"},i.createElement("span",{className:"badge badge-normal-size badge-danger-light"},Object(z.l)("rules.status",e.status))))},t.renderTags=function(){var e=t.props,n=e.canWrite,r=e.ruleDetails,o=r.sysTags,a=void 0===o?[]:o,l=r.tags,s=void 0===l?[]:l,c=a.concat(s);return i.createElement("li",{className:"coding-rules-detail-property","data-meta":"tags"},t.props.canWrite?i.createElement(E.b,{closeOnClick:!1,closeOnClickOutside:!0,overlay:i.createElement(h,{organization:t.props.organization,setTags:t.props.onTagsChange,sysTags:a,tags:s}),overlayPlacement:S.b.BottomLeft},i.createElement(j.c,null,i.createElement(N.a,{allowUpdate:n,tags:c.length>0?c:[Object(z.l)("coding_rules.no_tags")]}))):i.createElement(N.a,{allowUpdate:n,className:"display-flex-center",tags:c.length>0?c:[Object(z.l)("coding_rules.no_tags")]}))},t.renderCreationDate=function(){return i.createElement("li",{className:"coding-rules-detail-property","data-meta":"available-since"},i.createElement("span",{className:"little-spacer-right"},Object(z.l)("coding_rules.available_since")),i.createElement(v.a,{date:t.props.ruleDetails.createdAt}))},t.renderRepository=function(){var e=t.props,n=e.referencedRepositories,r=e.ruleDetails,o=n[r.repo];return o?i.createElement(k.a,{overlay:Object(z.l)("coding_rules.repository_language")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"repository"},o.name," (",r.langName,")")):null},t.renderTemplate=function(){return t.props.ruleDetails.isTemplate?i.createElement(k.a,{overlay:Object(z.l)("coding_rules.rule_template.title")},i.createElement("li",{className:"coding-rules-detail-property"},Object(z.l)("coding_rules.rule_template"))):null},t.renderParentTemplate=function(){var e=t.props.ruleDetails;return e.templateKey?i.createElement("li",{className:"coding-rules-detail-property"},Object(z.l)("coding_rules.custom_rule")," (",i.createElement(o.Link,{to:Object(D.B)(e.templateKey,t.props.organization)},Object(z.l)("coding_rules.show_template")),")",i.createElement(b.a,{className:"little-spacer-left",doc:Promise.resolve().then(n.bind(null,1124))})):null},t.renderRemediation=function(){var e=t.props.ruleDetails;return e.debtRemFnType?i.createElement(k.a,{overlay:Object(z.l)("coding_rules.remediation_function")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"remediation-function"},Object(z.l)("coding_rules.remediation_function",e.debtRemFnType),":",void 0!==e.debtRemFnOffset&&" "+e.debtRemFnOffset,void 0!==e.debtRemFnCoeff&&" +"+e.debtRemFnCoeff,void 0!==e.effortToFixDescription&&" "+e.effortToFixDescription)):null},t.renderScope=function(){var e=t.props.ruleDetails.scope||"MAIN";return i.createElement(k.a,{overlay:Object(z.l)("coding_rules.scope.title")},i.createElement("li",{className:"coding-rules-detail-property"},i.createElement(w,{className:"little-spacer-right"}),Object(z.l)("coding_rules.scope",e)))},t.renderExternalBadge=function(){var e=t.props.ruleDetails;if(!e.repo)return null;var n=e.repo.replace(new RegExp("^"+T),"");return n?i.createElement(k.a,{overlay:Object(z.m)("coding_rules.external_rule.engine",n)},i.createElement("li",{className:"coding-rules-detail-property"},i.createElement("div",{className:"outline-badge badge-tiny-height spacer-left text-text-top"},n))):null},t}return P(t,e),t.prototype.renderKey=function(){var e=this.props.ruleDetails,t=e.key.startsWith("external_")?e.key.substr("external_".length):e.key;return i.createElement("span",{className:"note text-middle"},t)},t.prototype.render=function(){var e=this.props.ruleDetails,t=!e.isExternal||"UNKNOWN"!==e.type;return i.createElement("div",{className:"js-rule-meta"},i.createElement("header",{className:"page-header"},i.createElement("div",{className:"pull-right"},this.renderKey(),!e.isExternal&&i.createElement(o.Link,{className:"coding-rules-detail-permalink link-no-underline spacer-left text-middle",title:Object(z.l)("permalink"),to:Object(D.B)(e.key,this.props.organization)},i.createElement(_.a,null)),!this.props.hideSimilarRulesFilter&&i.createElement(y.a,{onFilterChange:this.props.onFilterChange,rule:e})),i.createElement("h3",{className:"page-title coding-rules-detail-header"},i.createElement("big",null,e.name))),t&&i.createElement("ul",{className:"coding-rules-detail-properties"},this.renderType(),this.renderSeverity(),!e.isExternal&&i.createElement(i.Fragment,null,this.renderStatus(),this.renderScope()),this.renderTags(),!e.isExternal&&this.renderCreationDate(),this.renderRepository(),!e.isExternal&&i.createElement(i.Fragment,null,this.renderTemplate(),this.renderParentTemplate(),this.renderRemediation()),e.isExternal&&this.renderExternalBadge()))},t}(i.PureComponent);t.a=F},1230:function(e,t,n){"use strict";var r=n(892),i=n(695),o=n(719),a=n(697),l=n(28);function s(e){var t=e.onCancel,n=e.onSubmit,r=Object(l.l)("coding_rules.remove_extended_description");return i.createElement(o.a,{header:r,onClose:t,onSubmit:n},function(e){var t=e.onCloseClick,n=e.onFormSubmit,o=e.submitting;return i.createElement("form",{onSubmit:n},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,r)),i.createElement("div",{className:"modal-body"},Object(l.l)("coding_rules.remove_extended_description.confirm")),i.createElement("footer",{className:"modal-foot"},o&&i.createElement("i",{className:"spinner spacer-right"}),i.createElement(a.i,{className:"button-red",disabled:o},Object(l.l)("remove")),i.createElement(a.h,{onClick:t},Object(l.l)("cancel"))))})}var c,p=n(764),u=n(943),d=(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={description:"",descriptionForm:!1,submitting:!1,removeDescriptionModal:!1},t.handleDescriptionChange=function(e){return t.setState({description:e.currentTarget.value})},t.handleCancelClick=function(){t.setState({descriptionForm:!1})},t.handleSaveClick=function(){t.updateDescription(t.state.description)},t.handleRemoveDescriptionClick=function(){t.setState({removeDescriptionModal:!0})},t.handleCancelRemoving=function(){return t.setState({removeDescriptionModal:!1})},t.handleConfirmRemoving=function(){t.setState({removeDescriptionModal:!1}),t.updateDescription("")},t.updateDescription=function(e){t.setState({submitting:!0}),Object(p.h)({key:t.props.ruleDetails.key,markdown_note:e,organization:t.props.organization}).then(function(e){t.props.onChange(e),t.mounted&&t.setState({submitting:!1,descriptionForm:!1})},function(){t.mounted&&t.setState({submitting:!1})})},t.handleExtendDescriptionClick=function(){t.setState({description:t.props.ruleDetails.mdNote||"",descriptionForm:!0})},t.renderDescription=function(){return i.createElement("div",{id:"coding-rules-detail-description-extra"},void 0!==t.props.ruleDetails.htmlNote&&i.createElement("div",{className:"rule-desc spacer-bottom markdown",dangerouslySetInnerHTML:{__html:Object(r.sanitize)(t.props.ruleDetails.htmlNote)}}),t.props.canWrite&&i.createElement(a.a,{id:"coding-rules-detail-extend-description",onClick:t.handleExtendDescriptionClick},Object(l.l)("coding_rules.extend_description")))},t.renderForm=function(){return i.createElement("div",{className:"coding-rules-detail-extend-description-form"},i.createElement("table",{className:"width-100"},i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",{colSpan:2},i.createElement("textarea",{autoFocus:!0,className:"width-100 little-spacer-bottom",id:"coding-rules-detail-extend-description-text",onChange:t.handleDescriptionChange,rows:4,value:t.state.description}))),i.createElement("tr",null,i.createElement("td",null,i.createElement(a.a,{disabled:t.state.submitting,id:"coding-rules-detail-extend-description-submit",onClick:t.handleSaveClick},Object(l.l)("save")),void 0!==t.props.ruleDetails.mdNote&&i.createElement(i.Fragment,null,i.createElement(a.a,{className:"button-red spacer-left",disabled:t.state.submitting,id:"coding-rules-detail-extend-description-remove",onClick:t.handleRemoveDescriptionClick},Object(l.l)("remove")),t.state.removeDescriptionModal&&i.createElement(s,{onCancel:t.handleCancelRemoving,onSubmit:t.handleConfirmRemoving})),i.createElement(a.h,{className:"spacer-left",disabled:t.state.submitting,id:"coding-rules-detail-extend-description-cancel",onClick:t.handleCancelClick},Object(l.l)("cancel")),t.state.submitting&&i.createElement("i",{className:"spinner spacer-left"})),i.createElement("td",{className:"text-right"},i.createElement(u.a,null))))))},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.ruleDetails,t=!e.isExternal||"UNKNOWN"!==e.type;return i.createElement("div",{className:"js-rule-description"},t?i.createElement("div",{className:"coding-rules-detail-description rule-desc markdown",dangerouslySetInnerHTML:{__html:Object(r.sanitize)(e.htmlDesc||"")}}):i.createElement("div",{className:"coding-rules-detail-description rule-desc markdown"},Object(l.m)("issue.external_issue_description",e.name)),!e.templateKey&&i.createElement("div",{className:"coding-rules-detail-description coding-rules-detail-description-extra"},!this.state.descriptionForm&&this.renderDescription(),this.state.descriptionForm&&this.props.canWrite&&this.renderForm()))},t}(i.PureComponent);t.a=m},1232:function(e,t,n){"use strict";var r=n(695),i=n(700);function o(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,a=e.size;return r.createElement(i.a,{className:t,size:a},r.createElement("path",{d:"M10.042 5.083a.3.3 0 0 1-.292.292.3.3 0 0 1-.292-.292c0-.629-.975-.875-1.458-.875a.3.3 0 0 1-.292-.291A.3.3 0 0 1 8 3.625c.848 0 2.042.447 2.042 1.458zm1.458 0c0-1.823-1.85-2.916-3.5-2.916S4.5 3.26 4.5 5.083c0 .584.237 1.194.62 1.641.173.2.373.392.556.602.647.774 1.194 1.686 1.285 2.716h2.078c.091-1.03.638-1.942 1.285-2.716.183-.21.383-.402.556-.602.383-.447.62-1.057.62-1.64zm1.167 0c0 .94-.31 1.75-.94 2.443-.628.693-1.457 1.668-1.53 2.643a.876.876 0 0 1 .428.748.852.852 0 0 1-.228.583.852.852 0 0 1 .228.583c0 .301-.155.575-.41.739a.89.89 0 0 1 .118.428c0 .592-.465.875-.993.875A1.479 1.479 0 0 1 8 15a1.479 1.479 0 0 1-1.34-.875c-.528 0-.993-.283-.993-.875 0-.146.045-.3.118-.428a.876.876 0 0 1-.41-.739c0-.218.082-.428.228-.583a.852.852 0 0 1-.228-.583c0-.301.164-.593.428-.748-.073-.975-.902-1.95-1.53-2.643a3.507 3.507 0 0 1-.94-2.443C3.333 2.604 5.694 1 8 1c2.306 0 4.667 1.604 4.667 4.083z",style:{fill:o}}))}var a=n(703);function l(e){var t=e.limited,n=e.rule.name,i=void 0===n?"—":n;return r.createElement(r.Fragment,null,r.createElement(o,{className:"little-spacer-right",fill:a.blue}),t?r.createElement("span",{className:"text-limited"},i):i)}n.d(t,"a",function(){return l})},2057:function(e,t,n){"use strict";n.r(t);var r,i=n(695),o=n(1225),a=n(802),l=n.n(a),s=n(859),c=n(707),p=n(1226),u=n(1230),d=n(764),m=(n(1125),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,referencedRepositories:{}},t.fetchRuleDetails=function(){t.setState({loading:!0}),Promise.all([Object(d.e)({organization:t.props.organizationKey}),Object(d.c)({key:t.props.ruleKey,organization:t.props.organizationKey})]).then(function(e){var n=e[0].repositories,r=e[1].rule;t.mounted&&(t.setState({loading:!1,referencedRepositories:l()(n,"key"),ruleDetails:r}),t.props.onLoad({name:r.name}))},function(){t.mounted&&t.setState({loading:!1})})},t.noOp=function(){},t}return m(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchRuleDetails()},t.prototype.componentDidUpdate=function(e){e.ruleKey===this.props.ruleKey&&e.organizationKey===this.props.organizationKey||this.fetchRuleDetails()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.organizationKey,t=this.props.appState.organizationsEnabled?e:void 0;return i.createElement(c.a,{loading:this.state.loading},this.state.ruleDetails&&i.createElement(i.Fragment,null,i.createElement(p.a,{canWrite:!1,hideSimilarRulesFilter:!0,onFilterChange:this.noOp,onTagsChange:this.noOp,organization:t,referencedRepositories:this.state.referencedRepositories,ruleDetails:this.state.ruleDetails}),i.createElement(u.a,{canWrite:!1,onChange:this.noOp,organization:t,ruleDetails:this.state.ruleDetails})))},t}(i.PureComponent),g=Object(s.a)(f),h=n(1232),y=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0},t.handleClose=function(){t.props.onClose(t.props.rule.key)},t.handleLoaded=function(e){t.props.onLoad({key:t.props.rule.key,name:e.name}),setTimeout(function(){t.setState({loading:!1})},1e3)},t}return y(t,e),t.prototype.componentDidUpdate=function(e){e.rule.key!==this.props.rule.key&&this.setState({loading:!0})},t.prototype.render=function(){var e=this.props.rule,t=this.state.loading;return i.createElement("div",{className:"workspace-viewer"},i.createElement(o.a,{maximized:this.props.maximized,onClose:this.handleClose,onCollapse:this.props.onCollapse,onMaximize:this.props.onMaximize,onMinimize:this.props.onMinimize,onResize:this.props.onResize},i.createElement(h.a,{rule:e})),i.createElement("div",{"aria-busy":t,"aria-live":"polite",className:"workspace-viewer-container",style:{height:this.props.height}},i.createElement(g,{onLoad:this.handleLoaded,organizationKey:e.organization,ruleKey:e.key})))},t}(i.PureComponent);t.default=v},714:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(695),i=n(696),o=n(704),a=n(752),l=n(703);n(723);function s(e){var t=e.children,n=void 0===t?r.createElement(a.a,{fill:l.gray71,size:12}):t,s=e.tagName,c=void 0===s?"div":s;return r.createElement(c,{className:i("help-tooltip",e.className)},r.createElement(o.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},n)))}},719:function(e,t,n){"use strict";var r,i=n(695),o=n(709),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return a(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,a=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return i.createElement(o.a,l({contentLabel:n,onRequestClose:r},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.a=c},723:function(e,t,n){var r=n(724);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(699)(r,i);r.locals&&(e.exports=r.locals)},724:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},725:function(e,t,n){"use strict";var r,i=n(695),o=n(714),a=n(710),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=Object(a.a)(function(){return Promise.all([n.e(8),n.e(10)]).then(n.bind(null,824))}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={open:!1},t.close=function(){t.mounted&&t.setState({open:!1})},t}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.doc.then(function(t){var n=t.default;e.mounted&&e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?i.createElement(o.a,{className:this.props.className,overlay:i.createElement("div",{className:"abs-width-300"},i.createElement(s,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(i.PureComponent);t.a=c},764:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"f",function(){return a}),n.d(t,"g",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return u}),n.d(t,"h",function(){return d});var r=n(38),i=n(713);function o(e){return Object(r.getJSON)("/api/rules/app",e).catch(i.a)}function a(e){return Object(r.getJSON)("/api/rules/search",e).catch(i.a)}function l(e,t){var n=e.facets.find(function(e){return e.property===t});return n?n.values:[]}function s(e){return Object(r.getJSON)("/api/rules/show",e).catch(i.a)}function c(e){return Object(r.getJSON)("/api/rules/tags",e).then(function(e){return e.tags},i.a)}function p(e){return Object(r.postJSON)("/api/rules/create",e).then(function(e){return e.rule},function(e){return e&&e.response&&409===e.response.status?Promise.reject(e.response):Object(i.a)(e)})}function u(e){return Object(r.post)("/api/rules/delete",e).catch(i.a)}function d(e){return Object(r.postJSON)("/api/rules/update",e).then(function(e){return e.rule},i.a)}},829:function(e,t,n){var r;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var i=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},859:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r,i=n(695),o=n(705),a=n(787),l=n(708),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function p(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.render=function(){return i.createElement(e,c({},this.props))},n.displayName=Object(a.a)(e,"withAppState"),n}(i.Component);return Object(o.connect)(function(e){return{appState:Object(l.getAppState)(e)}})(t)}}}]);
//# sourceMappingURL=298.1605082598434.chunk.js.map