(self.webpackChunkstrapi_test=self.webpackChunkstrapi_test||[]).push([[3884,7001],{29327:g=>{function u(s,t,l,_){for(var r=l-1,P=s.length;++r<P;)if(_(s[r],t))return r;return-1}g.exports=u},20920:(g,u,s)=>{var t=s(87864),l=s(80151),_=s(29327),r=s(52689),P=s(76299),R=Array.prototype,h=R.splice;function I(i,p,A,Y){var Z=Y?_:l,z=-1,H=p.length,E=i;for(i===p&&(p=P(p)),A&&(E=t(i,r(A)));++z<H;)for(var W=0,L=p[z],S=A?A(L):L;(W=Z(E,S,W,Y))>-1;)E!==i&&h.call(E,W,1),h.call(i,W,1);return i}g.exports=I},34542:(g,u,s)=>{var t=s(87864),l=s(45353),_=s(29884),r=s(82261);function P(R,h){var I=r(R)?t:_;return I(R,l(h,3))}g.exports=P},92173:(g,u,s)=>{var t=s(39226),l=s(76610),_=t(l);g.exports=_},76610:(g,u,s)=>{var t=s(20920);function l(_,r){return _&&_.length&&r&&r.length?t(_,r):_}g.exports=l},61468:(g,u,s)=>{var t=s(52196);function l(_){var r=_==null?0:_.length;return r?t(_,1,r):[]}g.exports=l},71503:(g,u,s)=>{"use strict";s.d(u,{ProtectedCreateView:()=>cs});var t=s(92132),l=s(2129),_=s(82437),r=s(91417),P=s(17001),R=s(21272),h=s(72810),I=s(18022),i=s(41525),p=s(15126),A=s(63299),Y=s(67014),Z=s(59080),z=s(79275),H=s(14718),E=s(61535),W=s(5790),L=s(12083),S=s(35223),N=s(5409),b=s(74930),k=s(2600),K=s(48940),os=s(41286),is=s(56336),ls=s(13426),_s=s(84624),ds=s(77965),Q=s(54257),rs=s(71210),V=s(51187),Es=s(39404),ss=s(58692),As=s(501),Ts=s(57646),hs=s(23120),ms=s(44414),gs=s(25962),ps=s(14664),Cs=s(42588),vs=s(90325),Is=s(62785),us=s(87443),Rs=s(41032),Ls=s(22957),ys=s(93179),Bs=s(73055),Us=s(15747),xs=s(85306),fs=s(26509),Ws=s(32058),Ks=s(81185),js=s(82261),Ss=s(55059),Ns=s(60247),ks=s(34542),Vs=s(61468),$s=s(24092),Fs=s(92173);const cs=()=>{const Ps=(0,_.d4)(r.s);return(0,t.jsx)(l.kz,{permissions:Ps.settings?.["api-tokens"].create,children:(0,t.jsx)(P.w,{})})}},17001:(g,u,s)=>{"use strict";s.d(u,{ProtectedEditView:()=>rt,w:()=>Ms});var t=s(92132),l=s(21272),_=s(94061),r=s(83997),P=s(30893),R=s(90151),h=s(68074),I=s(38413),i=s(55356),p=s(85963),A=s(4198),Y=s(57237),Z=s(60888),z=s(44604),H=s(4181),E=s(2129),W=s(61535),L=s(54894),S=s(17703),N=s(41525),b=s(55059),k=s(99831),K=s(60247),os=s(89032),is=s(54514),ls=s(20415),_s=s(34542),ds=s(61468),Q=s(79793),rs=s(24092),V=s(12083),Es=s(88761),ss=s(92173),As=s(15126),Ts=s(63299),hs=s(67014),ms=s(59080),gs=s(79275),ps=s(14718),Cs=s(82437),vs=s(5790),Is=s(35223),us=s(5409),Rs=s(74930),Ls=s(2600),ys=s(48940),Bs=s(41286),Us=s(56336),xs=s(13426),fs=s(84624),Ws=s(77965),Ks=s(54257),js=s(71210),Ss=s(51187),Ns=s(39404),ks=s(58692),Vs=s(501),$s=s(57646),Fs=s(23120),cs=s(44414),Ps=s(25962),ht=s(14664),mt=s(42588),gt=s(90325),pt=s(62785),Ct=s(87443),vt=s(41032),It=s(22957),ut=s(93179),Rt=s(73055),Lt=s(15747),yt=s(85306),Bt=s(26509),Ut=s(32058),xt=s(81185),ft=s(82261);const Gs=N.n.injectEndpoints({endpoints:n=>({getPermissions:n.query({query:()=>"/admin/content-api/permissions",transformResponse:e=>e.data}),getRoutes:n.query({query:()=>"/admin/content-api/routes",transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetPermissionsQuery:Ys,useGetRoutesQuery:zs}=Gs,[Hs,Qs]=(0,os.q)("ApiTokenPermissionsContext"),Js=({children:n,...e})=>(0,t.jsx)(Hs,{...e,children:n}),ts=()=>Qs("useApiTokenPermissions"),Xs=({errors:n={},onChange:e,canEditInputs:a,isCreating:c,values:o={},apiToken:M={},onDispatch:d,setHasChangedPermissions:f})=>{const{formatMessage:m}=(0,L.A)(),x=({target:{value:y}})=>{f(!1),y==="full-access"&&d({type:"SELECT_ALL_ACTIONS"}),y==="read-only"&&d({type:"ON_CHANGE_READ_ONLY"})},J=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,t.jsx)(_.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(P.o,{variant:"delta",as:"h2",children:m({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(R.x,{gap:5,children:[(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.T,{error:n.name,value:o.name,canEditInputs:a,onChange:e})},"name"),(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.a,{error:n.description,value:o.description,canEditInputs:a,onChange:e})},"description"),(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.L,{isCreating:c,error:n.lifespan,value:o.lifespan,onChange:e,token:M})},"lifespan"),(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:y=>{x({target:{value:y}}),e({target:{name:"type",value:y}})},options:J,canEditInputs:a})},"type")]})]})})},Zs=({apiTokenName:n=null})=>{const{formatMessage:e}=(0,L.A)();return(0,E.L4)(),(0,t.jsxs)(I.g,{"aria-busy":"true",children:[(0,t.jsx)(E.x7,{name:"API Tokens"}),(0,t.jsx)(i.Q,{primaryAction:(0,t.jsx)(p.$,{disabled:!0,startIcon:(0,t.jsx)(is.A,{}),type:"button",size:"L",children:e({id:"global.save",defaultMessage:"Save"})}),title:n||e({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,t.jsx)(A.s,{children:(0,t.jsx)(E.Bl,{})})]})},bs=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},ws=(0,Q.Ay)(_.a)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,qs=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:e}=(0,L.A)(),{method:a,handler:c,path:o}=n,M=o?ds(o.split("/")):[],[d="",f=""]=c?c.split("."):[],m=bs(n.method);return(0,t.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsxs)(P.o,{variant:"delta",as:"h3",children:[e({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,t.jsx)("span",{children:d}),(0,t.jsxs)(P.o,{variant:"delta",textColor:"primary600",children:[".",f]})]}),(0,t.jsxs)(r.s,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,t.jsx)(ws,{background:m.background,borderColor:m.border,padding:2,children:(0,t.jsx)(P.o,{fontWeight:"bold",textColor:m.text,children:a})}),(0,t.jsx)(_.a,{paddingLeft:2,paddingRight:2,children:_s(M,x=>(0,t.jsxs)(P.o,{textColor:x.includes(":")?"neutral600":"neutral900",children:["/",x]},x))})]})]})},st=()=>{const{value:{selectedAction:n,routes:e}}=ts(),{formatMessage:a}=(0,L.A)(),c=n?.split(".")[0];return(0,t.jsx)(h.E,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,t.jsx)(r.s,{direction:"column",alignItems:"stretch",gap:2,children:c&&c in e&&e[c].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,t.jsx)(qs,{route:o},o.handler):null)}):(0,t.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.o,{variant:"delta",as:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,t.jsx)(P.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Os=(0,Q.AH)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,tt=(0,Q.Ay)(_.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&Os}
  &:hover {
    ${Os}
  }
`,et=Q.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,nt=({controllers:n=[],label:e,orderNumber:a=0,disabled:c=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:M=null})=>{const{value:{onChangeSelectAll:d,onChange:f,selectedActions:m,setSelectedAction:x,selectedAction:J}}=ts(),[y,w]=l.useState(!1),{formatMessage:X}=(0,L.A)(),C=()=>{w(T=>!T),o(a)};l.useEffect(()=>{M!==null&&M!==a&&y&&w(!1)},[M,a,y]);const Ds=T=>T===J;return(0,t.jsxs)(Y.n,{expanded:y,onToggle:C,variant:a%2?"primary":"secondary",children:[(0,t.jsx)(Z.P,{title:rs(e)}),(0,t.jsx)(z.u,{children:n?.map(T=>{const B=T.actions.every(v=>m.includes(v.actionId)),U=T.actions.some(v=>m.includes(v.actionId));return(0,t.jsxs)(_.a,{children:[(0,t.jsxs)(r.s,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,t.jsx)(_.a,{paddingRight:4,children:(0,t.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:T?.controller})}),(0,t.jsx)(et,{}),(0,t.jsx)(_.a,{paddingLeft:4,children:(0,t.jsx)(H.S,{value:B,indeterminate:!B&&U,onValueChange:()=>{d({target:{value:[...T.actions]}})},disabled:c,children:X({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,t.jsx)(R.x,{gap:4,padding:4,children:T?.actions&&T?.actions.map(v=>(0,t.jsx)(h.E,{col:6,children:(0,t.jsxs)(tt,{isActive:Ds(v.actionId),padding:2,hasRadius:!0,children:[(0,t.jsx)(H.S,{value:m.includes(v.actionId),name:v.actionId,onValueChange:()=>{f({target:{value:v.actionId}})},disabled:c,children:v.action}),(0,t.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>x({target:{value:v.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,t.jsx)(ls.A,{})})]})},v.actionId))})]},`${e}.${T?.controller}`)})})]})},at=({section:n=null,...e})=>{const[a,c]=l.useState(null),o=M=>c(M);return(0,t.jsx)(_.a,{padding:4,background:"neutral0",children:n&&n.map((M,d)=>(0,t.jsx)(nt,{label:M.label,controllers:M.controllers,orderNumber:d,indexExpandendCollapsedContent:a,onExpanded:o,...e},M.apiId))})},ot=({...n})=>{const{value:{data:e}}=ts(),{formatMessage:a}=(0,L.A)();return(0,t.jsxs)(R.x,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,t.jsxs)(h.E,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,t.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.o,{variant:"delta",as:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,t.jsx)(P.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),e?.permissions&&(0,t.jsx)(at,{section:e?.permissions,...n})]}),(0,t.jsx)(st,{})]})},it=V.Ik().shape({name:V.Yj().max(100).required(E.iW.required),type:V.Yj().oneOf(["read-only","full-access","custom"]).required(E.iW.required),description:V.Yj().nullable(),lifespan:V.ai().integer().min(0).nullable().defined(E.iW.required)}),lt=n=>{const e={allActionsIds:[],permissions:[]};return e.permissions=Object.entries(n).map(([a,c])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(c.controllers).map(o=>({controller:o,actions:o in c.controllers?c.controllers[o].map(M=>{const d=`${a}.${o}.${M}`;return a.includes("api::")&&e.allActionsIds.push(d),{action:M,actionId:d}}).flat():[]})).flat()})),e},_t={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},dt=(n,e)=>(0,Es.Ay)(n,a=>{switch(e.type){case"ON_CHANGE":{a.selectedActions.includes(e.value)?ss(a.selectedActions,e.value):a.selectedActions.push(e.value);break}case"SELECT_ALL_IN_PERMISSION":{e.value.every(o=>a.selectedActions.includes(o.actionId))?e.value.forEach(o=>{ss(a.selectedActions,o.actionId)}):e.value.forEach(o=>{a.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const c=a.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));a.selectedActions=[...c];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=lt(e.value);break}case"UPDATE_ROUTES":{a.routes={...e.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...e.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=e.value;break}default:return a}}),Ms=()=>{(0,E.L4)();const{formatMessage:n}=(0,L.A)(),e=(0,E.hN)(),{lockApp:a,unlockApp:c}=(0,E.MA)(),{state:o}=(0,S.zy)(),M=(0,N.j)(O=>O.admin_app.permissions),[d,f]=l.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:m}=(0,E.z1)(),{setCurrentStep:x}=(0,E.Cx)(),{allowedActions:{canCreate:J,canUpdate:y,canRegenerate:w}}=(0,E.ec)(M.settings?.["api-tokens"]),[X,C]=l.useReducer(dt,_t),T=(0,S.W5)("/settings/api-tokens/:id")?.params?.id,B=T==="create",{_unstableFormatAPIError:U,_unstableFormatValidationErrors:v}=(0,E.wq)(),Et=(0,S.W6)(),$=Ys(),F=zs();l.useEffect(()=>{$.error&&e({type:"warning",message:U($.error)})},[$.error,U,e]),l.useEffect(()=>{F.error&&e({type:"warning",message:U(F.error)})},[F.error,U,e]),l.useEffect(()=>{$.data&&C({type:"UPDATE_PERMISSIONS_LAYOUT",value:$.data})},[$.data]),l.useEffect(()=>{F.data&&C({type:"UPDATE_ROUTES",value:F.data})},[F.data]),l.useEffect(()=>{d&&(d.type==="read-only"&&C({type:"ON_CHANGE_READ_ONLY"}),d.type==="full-access"&&C({type:"SELECT_ALL_ACTIONS"}),d.type==="custom"&&C({type:"UPDATE_PERMISSIONS",value:d?.permissions}))},[d]),l.useEffect(()=>{m(B?"didAddTokenFromList":"didEditTokenFromList",{tokenType:k.A})},[B,m]);const{data:j,error:es,isLoading:ct}=(0,b.b)(T,{skip:!T||B||!!d});l.useEffect(()=>{es&&e({type:"warning",message:U(es)})},[es,U,e]),l.useEffect(()=>{j&&(f(j),j.type==="read-only"&&C({type:"ON_CHANGE_READ_ONLY"}),j.type==="full-access"&&C({type:"SELECT_ALL_ACTIONS"}),j.type==="custom"&&C({type:"UPDATE_PERMISSIONS",value:j?.permissions}))},[j]);const[Pt]=(0,b.c)(),[Ot]=(0,b.d)(),Mt=async(O,G)=>{m(B?"willCreateToken":"willEditToken",{tokenType:k.A}),a();try{if(B){const D=await Pt({...O,lifespan:O?.lifespan||null,permissions:O.type==="custom"?X.selectedActions:null});if("error"in D){(0,N.x)(D.error)&&D.error.name==="ValidationError"?G.setErrors(v(D.error)):e({type:"warning",message:U(D.error)});return}e({type:"success",message:n({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),m("didCreateToken",{type:D.data.type,tokenType:k.A}),Et.replace(`/settings/api-tokens/${D.data.id}`,{apiToken:D.data}),x("apiTokens.success")}else{const D=await Ot({id:T,name:O.name,description:O.description,type:O.type,permissions:O.type==="custom"?X.selectedActions:null});if("error"in D){(0,N.x)(D.error)&&D.error.name==="ValidationError"?G.setErrors(v(D.error)):e({type:"warning",message:U(D.error)});return}e({type:"success",message:n({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),m("didEditToken",{type:D.data.type,tokenType:k.A})}}catch{e({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{c()}},[Dt,ns]=l.useState(!1),At={...X,onChange:({target:{value:O}})=>{ns(!0),C({type:"ON_CHANGE",value:O})},onChangeSelectAll:({target:{value:O}})=>{ns(!0),C({type:"SELECT_ALL_IN_PERMISSION",value:O})},setSelectedAction:({target:{value:O}})=>{C({type:"SET_SELECTED_ACTION",value:O})}},as=y&&!B||J&&B;return ct?(0,t.jsx)(Zs,{apiTokenName:d?.name}):(0,t.jsx)(Js,{value:At,children:(0,t.jsxs)(I.g,{children:[(0,t.jsx)(E.x7,{name:"API Tokens"}),(0,t.jsx)(W.l1,{validationSchema:it,validateOnChange:!1,initialValues:{name:d?.name||"",description:d?.description||"",type:d?.type,lifespan:d?.lifespan},enableReinitialize:!0,onSubmit:(O,G)=>Mt(O,G),children:({errors:O,handleChange:G,isSubmitting:D,values:q,setFieldValue:Tt})=>(Dt&&q?.type!=="custom"&&Tt("type","custom"),(0,t.jsxs)(E.lV,{children:[(0,t.jsx)(K.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:d,setToken:f,canEditInputs:as,canRegenerate:w,isSubmitting:D,regenerateUrl:"/admin/api-tokens/"}),(0,t.jsx)(A.s,{children:(0,t.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(d?.name)&&(0,t.jsx)(K.c,{token:d?.accessKey,tokenType:k.A}),(0,t.jsx)(Xs,{errors:O,onChange:G,canEditInputs:as,isCreating:B,values:q,apiToken:d,onDispatch:C,setHasChangedPermissions:ns}),(0,t.jsx)(ot,{disabled:!as||q?.type==="read-only"||q?.type==="full-access"})]})})]}))})]})})},rt=()=>{const n=(0,N.j)(e=>e.admin_app.permissions.settings?.["api-tokens"].read);return(0,t.jsx)(E.kz,{permissions:n,children:(0,t.jsx)(Ms,{})})}},55059:(g,u,s)=>{"use strict";s.d(u,{a:()=>R,b:()=>r,c:()=>P,d:()=>h,u:()=>_});var t=s(41525);const l=t.n.injectEndpoints({endpoints:I=>({getAPITokens:I.query({query:()=>"/admin/api-tokens",transformResponse:i=>i.data,providesTags:(i,p)=>[...i?.map(({id:A})=>({type:"ApiToken",id:A}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:I.query({query:i=>`/admin/api-tokens/${i}`,transformResponse:i=>i.data,providesTags:(i,p,A)=>[{type:"ApiToken",id:A}]}),createAPIToken:I.mutation({query:i=>({url:"/admin/api-tokens",method:"POST",data:i}),transformResponse:i=>i.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:I.mutation({query:i=>({url:`/admin/api-tokens/${i}`,method:"DELETE"}),transformResponse:i=>i.data,invalidatesTags:(i,p,A)=>[{type:"ApiToken",id:A}]}),updateAPIToken:I.mutation({query:({id:i,...p})=>({url:`/admin/api-tokens/${i}`,method:"PUT",data:p}),transformResponse:i=>i.data,invalidatesTags:(i,p,{id:A})=>[{type:"ApiToken",id:A}]})}),overrideExisting:!1}),{useGetAPITokensQuery:_,useGetAPITokenQuery:r,useCreateAPITokenMutation:P,useDeleteAPITokenMutation:R,useUpdateAPITokenMutation:h}=l}}]);
