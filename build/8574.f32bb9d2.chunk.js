"use strict";(self.webpackChunkstrapi_test=self.webpackChunkstrapi_test||[]).push([[8574],{48574:(x,D,s)=>{s.d(D,{ProtectedSSO:()=>F});var t=s(92132),g=s(42455),R=s(38413),h=s(55356),L=s(85963),m=s(4198),A=s(83997),v=s(30893),M=s(90151),E=s(68074),C=s(7441),c=s(43739),I=s(95336),O=s(56654),o=s(2129),B=s(54514),W=s(61535),j=s(54894),d=s(12083),r=s(41525),y=s(47492),q=s(15126),ss=s(63299),ts=s(67014),as=s(59080),os=s(79275),_s=s(14718),ns=s(21272),ls=s(82437),es=s(5790),Es=s(35223),is=s(5409),ds=s(74930),rs=s(2600),Ms=s(48940),Os=s(41286),Ps=s(56336),Ds=s(13426),gs=s(84624),Rs=s(77965),hs=s(54257),Ls=s(71210),ms=s(51187),As=s(39404),vs=s(58692),Cs=s(501),cs=s(57646),Is=s(23120),Bs=s(44414),Ws=s(25962),Ts=s(14664),Us=s(42588),Ks=s(90325),fs=s(62785),us=s(87443),xs=s(41032),js=s(22957),ys=s(93179),Ss=s(73055),ps=s(15747),Fs=s(85306),zs=s(26509),Ns=s(32058),Vs=s(81185),Js=s(82261);const S=d.Ik().shape({autoRegister:d.lc().required(o.iW.required),defaultRole:d.gl().when("autoRegister",(a,_)=>a?_.required(o.iW.required):_.nullable()),ssoLockedRoles:d.YO().nullable().of(d.gl().when("ssoLockedRoles",(a,_)=>a?_.required(o.iW.required):_.nullable()))}),p=()=>{(0,o.L4)();const{formatMessage:a}=(0,j.A)(),_=(0,r.j)(e=>e.admin_app.permissions),{lockApp:z,unlockApp:N}=(0,o.MA)(),T=(0,o.hN)(),{_unstableFormatAPIError:V,_unstableFormatValidationErrors:J}=(0,o.wq)(),{isLoading:Q,data:Y}=(0,r.W)(),[X,{isLoading:$}]=(0,r.X)(),{isLoading:G,allowedActions:{canUpdate:U,canReadRoles:H}}=(0,o.ec)({..._.settings?.sso,readRoles:_.settings?.roles.read??[]}),{roles:f,isLoading:Z}=(0,y.u)(void 0,{skip:!H}),k=async(e,P)=>{z();try{const n=await X(e);if("error"in n){(0,r.x)(n.error)&&n.error.name==="ValidationError"?P.setErrors(J(n.error)):T({type:"warning",message:V(n.error)});return}T({type:"success",message:{id:"notification.success.saved"}})}catch{T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred, please try again."}})}finally{N()}},u=Z||G||Q;return(0,t.jsxs)(g.P,{children:[(0,t.jsx)(o.x7,{name:"SSO"}),(0,t.jsx)(R.g,{"aria-busy":$||u,tabIndex:-1,children:(0,t.jsx)(W.l1,{onSubmit:k,initialValues:Y||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},validationSchema:S,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:e,isSubmitting:P,values:n,setFieldValue:b,dirty:w,errors:i})=>(0,t.jsxs)(o.lV,{children:[(0,t.jsx)(h.Q,{primaryAction:(0,t.jsx)(L.$,{disabled:!w,loading:P,startIcon:(0,t.jsx)(B.A,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(m.s,{children:P||u?(0,t.jsx)(o.Bl,{}):(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(v.o,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(M.x,{gap:4,children:[(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(C.l,{disabled:!U,checked:n.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:e})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(c.l,{disabled:!U,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole,defaultMessage:i.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:l=>e({target:{name:"defaultRole",value:l}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:n.defaultRole,children:f.map(({id:l,name:K})=>(0,t.jsx)(I.c,{value:l.toString(),children:K},l))})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(O.KF,{disabled:!U,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles,defaultMessage:i.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:l=>e({target:{value:l,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>b("ssoLockedRoles",[]),value:n.ssoLockedRoles||[],withTags:!0,children:f.map(({id:l,name:K})=>(0,t.jsx)(O.fe,{value:l.toString(),children:K},l))})})]})]})})]})})})]})},F=()=>{const a=(0,r.j)(_=>_.admin_app.permissions.settings?.sso?.main);return(0,t.jsx)(o.kz,{permissions:a,children:(0,t.jsx)(p,{})})}},47492:(x,D,s)=>{s.d(D,{u:()=>L});var t=s(21272),g=s(2129),R=s(54894),h=s(41525);const L=(m={},A)=>{const{locale:v}=(0,R.A)(),M=(0,g.QM)(v,{sensitivity:"base"}),{data:E,error:C,isError:c,isLoading:I,refetch:O}=(0,h.z)(m,A);return{roles:t.useMemo(()=>[...E??[]].sort((B,W)=>M.compare(B.name,W.name)),[E,M]),error:C,isError:c,isLoading:I,refetch:O}}}}]);
