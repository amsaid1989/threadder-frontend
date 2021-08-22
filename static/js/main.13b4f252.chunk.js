(this["webpackJsonpthreadder-frontend"]=this["webpackJsonpthreadder-frontend"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),i=n.n(c),o=n(19),l=n(32),s=n(154),u=n(163),d=n(10),h=n.n(d),f=n(67),m={main:"#283845",light:"#395164",dark:"#22303c",contrastText:"#ffffff",contrastText2:"#e5e5e5"},j={paper:m.light,default:"#202c39"},x=Object(f.a)({palette:{primary:m,secondary:{main:"#ffc107",light:"#ffd147",dark:"#c97d02",hover:"#ffa042",inactive:"#432a01",contrastText:"#14213d",inactiveText:"#111111"},background:j},spacing:4,shape:{borderRadius:2}}),p=n(164),g=n(162),b=n(161),O=n(167),v=n(158),w=n(159),y=n(160),N=n(34),T=n(155),C=n(2),I=Object(s.a)((function(e){return{styledButton:{"&:disabled":{color:e.palette.secondary.inactiveText,backgroundColor:e.palette.secondary.inactive},"&:hover":{backgroundColor:e.palette.secondary.hover}}}}));function S(e){var t=I(),n=h()(e.className,t.styledButton);return Object(C.jsx)(T.a,Object(N.a)(Object(N.a)({},e),{},{className:n}))}var k=n(166),F=n(157),H=n(168),L=n(165),z=Object(s.a)((function(e){return{menuList:{border:"solid 1px ".concat(e.palette.primary.dark)}}}));function W(e){var t={paper:z().menuList};return Object(C.jsx)(L.a,Object(N.a)({classes:t},e))}var E=n(169),A=n(64),G=n.n(A),R=n(65),B=n.n(R),P=n(66);n.n(P).a.config();var U=280,V="https://threadder-app.herokuapp.com/",J="Untitled User";function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return G()({url:e,method:t,withCredentials:!0,baseURL:V,data:n||{}})}function Z(e){var t,n;return new Promise((function(r,a){t=setInterval((function(){var a=function(e){try{return B.a.parse(e.location.search)}catch(t){}}(e);a&&(clearTimeout(n),clearInterval(t),r(a))}),2e3),n=setTimeout((function(){clearInterval(t),a("Login failed")}),15e3)}))}function q(){return _("/request_token","get").then((function(e){var t,n=(t=e.data.redirect,window.open(t,"Login to Twitter","width=500,height=720,toolbar=no,status=no,menubar=no"));return Z(n).finally((function(){return n.close()}))}))}var D=Object(s.a)((function(e){return{menuList:{border:"solid 1px ".concat(e.palette.primary.dark)},menuItem:{color:e.palette.primary.contrastText,"&:hover":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main}}}}));function M(e){var t=D(),n=Object(r.useState)(null),a=Object(o.a)(n,2),c=a[0],i=a[1],l=function(){i(null)};return Object(C.jsxs)(k.a,{children:[Object(C.jsx)(F.a,{size:"small",onClick:function(e){i(e.currentTarget)},children:Object(C.jsx)(H.a,{src:e.user.profileImage,alt:"".concat(e.user.name," profile picture")})}),Object(C.jsxs)(W,{id:"account-settings-menu",getContentAnchorEl:null,anchorEl:c,anchorReference:"anchorEl",anchorOrigin:{horizontal:"center",vertical:"bottom"},transformOrigin:{horizontal:"center",vertical:"top"},open:Boolean(c),onClose:l,autoFocus:!1,children:[Object(C.jsx)(E.a,{className:t.menuItem,onClick:function(){l();var t=e.user.screenName;window.open("https://twitter.com/".concat(t),"_blank")},children:"Go to Twitter"}),Object(C.jsx)(E.a,{className:t.menuItem,onClick:function(){l(),_("/logout","get").then((function(){e.setLoggedOutState()})).catch((function(e){console.log(e)}))},children:"Log out"})]})]})}var $=Object(s.a)((function(e){return{toolbar:{height:"1em",padding:"1em 1.5em"},title:{flexGrow:1}}}));function K(e){var t=$(),n=Object(C.jsx)(S,{variant:"contained",color:"secondary",onClick:e.login,children:"Log in"});return Object(C.jsx)(v.a,{position:"relative",children:Object(C.jsxs)(w.a,{className:t.toolbar,children:[Object(C.jsx)(y.a,{variant:"h5",className:t.title,children:"Threadder"}),e.loggedIn?Object(C.jsx)(M,{user:e.user,setLoggedOutState:e.setLoggedOutState}):n]})})}var Q=Object(s.a)((function(e){return{root:{flexFlow:"column nowrap"},fullHeight:{height:"100%"},containerWithShadow:{boxShadow:e.shadows[4]},expandingFlexItem:{flex:1},fixedSizeFlexItem:{flex:0},textareaContainer:{padding:"1.5em",backgroundColor:e.palette.primary.main},threadTextarea:{fontFamily:"inherit",fontSize:"inherit",resize:"none",width:"100%",padding:"0.5em 0.75em",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,border:0,boxShadow:"inset 0px 0px 5px 0px rgba(0, 0, 0, 0.4)","&:focus":{border:0,outline:0}},statsContainer:{padding:"1em 1.5em",display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",backgroundColor:e.palette.primary.dark},statsText:{color:e.palette.primary.contrastText2}}})),X=a.a.forwardRef((function(e,t){var n=Q();return Object(C.jsxs)(b.a,{container:!0,spacing:2,className:h()(n.root,n.fullHeight),children:[Object(C.jsx)(b.a,{item:!0,xs:12,className:h()(n.expandingFlexItem,n.fullHeight),children:Object(C.jsx)(g.a,{className:h()(n.textareaContainer,n.fullHeight,n.containerWithShadow),children:Object(C.jsx)("textarea",{className:h()(n.threadTextarea,n.fullHeight),onChange:e.handleTweetInput,placeholder:"Type your tweet here...",value:e.tweetText,ref:t})})}),Object(C.jsx)(b.a,{item:!0,xs:12,className:n.fixedSizeFlexItem,children:Object(C.jsxs)(g.a,{className:h()(n.statsContainer,n.containerWithShadow),children:[Object(C.jsx)(y.a,{variant:"body2",className:n.statsText,children:"Characters: ".concat(e.tweetText.length)}),Object(C.jsx)(y.a,{variant:"body2",className:n.statsText,children:"Tweets: ".concat(e.thread.length)})]})}),Object(C.jsx)(O.a,{mdUp:!0,children:Object(C.jsx)(b.a,{item:!0,xs:12,className:n.fixedSizeFlexItem,children:Object(C.jsx)(S,{variant:"contained",color:"secondary",fullWidth:!0,onClick:e.viewThreadHandler,children:"View thread"})})})]})})),Y=Object(s.a)((function(e){return{root:{marginBottom:"1.5em",flexFlow:"row nowrap","&:last-child":{marginBottom:0}},expandingFlexItem:{flex:1},fixedSizeFlexItem:{flex:0},verticalGrid:{display:"flex",flexFlow:"column nowrap"},centerVerticalGridItems:{alignItems:"center"},threadLineContainer:{padding:0},threadLine:{width:"2px",height:"calc(100% + 1.5em)",backgroundColor:e.palette.background.default},tweetContainer:{marginLeft:"1em"},resetFont:{fontFamily:"inherit",fontSize:"inherit"},defaultTextColor:{color:e.palette.primary.contrastText},userName:{fontWeight:"bold"},userHandle:{color:e.palette.primary.contrastText2,marginLeft:"0.5em"},tweetText:{padding:0,margin:0,marginTop:"0.25em",whiteSpace:"pre-wrap",overflowWrap:"break-word"},hiddenOverflow:{overflow:"hidden"}}}));function ee(e){var t=Y();return Object(C.jsxs)(b.a,{container:!0,className:t.root,children:[Object(C.jsxs)(b.a,{container:!0,className:h()(t.fixedSizeFlexItem,t.verticalGrid,t.centerVerticalGridItems),children:[Object(C.jsx)(b.a,{item:!0,children:Object(C.jsx)(H.a,{src:e.user.profileImage,alt:"".concat(e.user.name," profile picture")})}),e.threadLine&&Object(C.jsx)(b.a,{item:!0,className:h()(t.expandingFlexItem,t.threadLineContainer),children:Object(C.jsx)("div",{className:t.threadLine})})]}),Object(C.jsxs)(b.a,{container:!0,className:h()(t.expandingFlexItem,t.verticalGrid,t.tweetContainer,t.hiddenOverflow),children:[Object(C.jsxs)(b.a,{item:!0,children:[Object(C.jsx)("span",{className:h()(t.resetFont,t.defaultTextColor,t.userName),children:e.user.name}),Object(C.jsx)("span",{className:h()(t.resetFont,t.userHandle),children:"@".concat(e.user.screenName)})]}),Object(C.jsx)(b.a,{item:!0,children:Object(C.jsx)("p",{className:h()(t.resetFont,t.defaultTextColor,t.tweetText),children:e.text})})]})]})}var te=Object(s.a)((function(e){return{root:{flexFlow:"column nowrap"},fullHeight:{height:"100%"},containerWithShadow:{boxShadow:e.shadows[4]},expandingFlexItem:{flex:1},fixedSizeFlexItem:{flex:0},autoOverflow:{overflow:"auto"},hiddenOverflow:{overflow:"hidden"},tweetsContainer:{padding:"1.5em",backgroundColor:e.palette.primary.main},buttonRowContainer:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",gap:"1em",margin:0,padding:0}}}));function ne(e){var t=te(),n=e.thread.map((function(t,n,r){return Object(C.jsx)(ee,{user:e.user,text:t,threadLine:n+1<r.length},t)}));return Object(C.jsxs)(b.a,{container:!0,spacing:2,className:h()(t.root,t.fullHeight,t.hiddenOverflow),children:[Object(C.jsx)(b.a,{item:!0,xs:12,className:h()(t.expandingFlexItem,t.fullHeight,t.hiddenOverflow),children:Object(C.jsx)(g.a,{className:h()(t.tweetsContainer,t.fullHeight,t.containerWithShadow,t.autoOverflow),children:n})}),Object(C.jsx)(b.a,{item:!0,xs:12,className:t.fixedSizeFlexItem,children:Object(C.jsxs)(g.a,{className:h()(t.buttonRowContainer,t.fullHeight),children:[Object(C.jsx)(O.a,{mdUp:!0,children:Object(C.jsx)(S,{variant:"contained",color:"secondary",fullWidth:!0,onClick:e.editThreadHandler,children:"Edit thread"})}),Object(C.jsx)(S,{variant:"contained",color:"secondary",onClick:e.publishHandler,disabled:!n.length>0,fullWidth:!0,children:"Publish thread"})]})})]})}function re(e){return e.replace(/^[ \t]*/,"").replace(/[ \t]*$/,"")}function ae(e){return e.split(/(\n)/).filter((function(e,t,n){return"\n"!==e||"\n"===e&&"\n"!==n[t]}))}function ce(e){return e.split(/((?<!\svs?)(?<=\s\w+[a-zA-Z]+)\.(?=\s*[a-zA-Z]+\w*)|(?<=\d+[\s./-]\d+|\s\d+)\.(?=\s*\W*[a-zA-Z]+\w*\W*)|\.$)/g).map((function(e,t,n){return"."===n[t+1]?"".concat(e,"."):"."===e?"":e})).filter((function(e){return""!==e})).map((function(e){return re(e)}))}function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(0===e.length)return[];for(var n=[],r=0;r<e.length;r++)if(0!==r){var a=n.length-1,c=n[a],i=e[r];c.length<=70||c.length+i.length<=U?(c+=i.startsWith("\n")?i:"".concat(t).concat(i),n[a]=c):n.push(e[r])}else n.push(e[r]);return n}var oe=n(49),le=n(42);function se(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];if(0!==n){var a=t.length-1,c=de(t[a]);c.length+r.length+1<=U?t[a]="".concat(c," ").concat(r):t.push(r)}else t.push(r)}return t}function ue(e){if(e.length<=U)return e;for(var t=Math.ceil(e.length/277),n=[],r=0;r<t;r++){var a=277*r,c=277*(r+1),i=e.slice(a,c)+"...";n.push(i)}return n}function de(e){return"..."===e.slice(e.length-3)?e.slice(0,e.length-3):e}function he(e){var t=e.trim().split("(---)").map((function(e){return e.trim()})).filter((function(e){return""!==e}));if(fe(t))return t;var n=t.map((function(e){return e.length<=U?e:function(e){var t=ie(ae(e),"\n");return t.every((function(e){return e.length<=U}))?t:ie(t.map((function(e){return e.length<=U?e:ce(e)})).flat().map((function(e){return e.trim()})))}(e)})).flat().map((function(e){return e.trim()}));return fe(n)?n:se(n.map((function(e){return e.length<=U?e:function(e){if(e.length<=U)return e;var t,n=e.split(" ").filter((function(e){return 0!==e.length})),r="",a=[],c=Object(le.a)(n);try{for(c.s();!(t=c.n()).done;){var i=t.value.trim();i.length>U?(r.length>0&&(a.push("".concat(r,"...")),r=""),a=[].concat(Object(oe.a)(a),Object(oe.a)(ue(i)))):0===r.length?r+=i:r.length+i.length+1<277?r+=" ".concat(i):(a.push("".concat(r,"...")),r=i)}}catch(l){c.e(l)}finally{c.f()}r.length>0&&a.push(r);var o=a.length-1;return a[o]=de(a[o]),a}(e)})).flat().map((function(e){return e.trim()}))).flat().map((function(e){return e.trim()}))}function fe(e){return e.every((function(e){return e.length<=U}))}function me(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function je(e){return JSON.parse(sessionStorage.getItem(e))}var xe=Object(s.a)((function(e){return{root:Object(l.a)({height:"100vh",maxHeight:"100vh"},e.breakpoints.down("sm"),{height:"93vh",maxHeight:"93vh"}),gridContainer:{flexFlow:"column nowrap",height:"100%"},appHeader:{flex:0},appView:Object(l.a)({flex:1},e.breakpoints.up("md"),{display:"flex",flexFlow:"row nowrap",gap:e.spacing(1.5)}),mainArea:{height:"100%"},hiddenOverflow:{overflow:"hidden"},loggedInSuccess:{color:e.palette.primary.contrastText,textAlign:"center",fontWeight:"normal"}}}));function pe(e){var t=xe(),n={name:J,screenName:"untitled_user",profileImage:""},a=Object(r.useState)(!1),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(r.useState)(je("loggedIn")||!1),d=Object(o.a)(s,2),f=d[0],m=d[1],j=Object(r.useState)(je("user")||n),v=Object(o.a)(j,2),w=v[0],y=v[1],N=Object(r.useState)(je("tweetText")||""),T=Object(o.a)(N,2),I=T[0],S=T[1],k=Object(r.useState)([]),F=Object(o.a)(k,2),H=F[0],L=F[1],z=Object(r.useState)(!0),W=Object(o.a)(z,2),E=W[0],A=W[1],G=Object(r.createRef)(),R=function(){A(!E)},B=function(){q().then((function(e){m(!0),y(e)})).catch((function(e){return console.log(e)}))},P=function(){(function(e){return _("/publish_thread","post",{tweets:e})})(H).then((function(){S("")})).catch((function(e){return console.log(e)}))};return Object(r.useEffect)((function(){""!==document.location.search&&l(!0)}),[]),Object(r.useEffect)((function(){G.current&&G.current.focus()}),[G]),Object(r.useEffect)((function(){je("toPublish")&&(me("toPublish",!1),P())})),Object(r.useEffect)((function(){var e,t=je("user");null!==t&&(e=t,Object.entries(e).length>0)&&function(e,t){var n,r=Object.keys(e),a=Object(le.a)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(!r.includes(c))return!1}}catch(i){a.e(i)}finally{a.f()}return!0}(t,["name","screenName","profileImage"])&&t.name!==J&&(m(!0),y(je("user")))}),[]),Object(r.useEffect)((function(){me("loggedIn",f)}),[f]),Object(r.useEffect)((function(){me("user",w)}),[w]),Object(r.useEffect)((function(){0===I.length?L([]):L(he(I)),me("tweetText",I)}),[I]),Object(r.useEffect)((function(){me("thread",H)}),[H]),Object(C.jsx)(u.a,{theme:x,children:Object(C.jsxs)(p.a,{children:[i&&Object(C.jsx)(g.a,{className:t.root,children:Object(C.jsx)("h2",{className:t.loggedInSuccess,children:"Logged in successfully"})}),!i&&Object(C.jsx)(g.a,{className:t.root,children:Object(C.jsxs)(b.a,{container:!0,spacing:3,className:t.gridContainer,children:[Object(C.jsx)(b.a,{item:!0,xs:12,className:t.appHeader,children:Object(C.jsx)(K,{user:w,loggedIn:f,setLoggedOutState:function(){m(!1),y(n)},login:B})}),Object(C.jsxs)(b.a,{item:!0,xs:12,className:h()(t.appView,t.hiddenOverflow),children:[Object(C.jsx)(O.a,{smDown:!E,children:Object(C.jsx)(b.a,{item:!0,xs:12,md:7,className:h()(t.mainArea,t.hiddenOverflow),children:Object(C.jsx)(X,{tweetText:I,handleTweetInput:function(e){var t=e.target.value;S(t)},thread:H,viewThreadHandler:R,ref:G})})}),Object(C.jsx)(O.a,{smDown:E,children:Object(C.jsx)(b.a,{item:!0,xs:12,md:5,className:h()(t.mainArea,t.hiddenOverflow),children:Object(C.jsx)(ne,{user:w,thread:H,editThreadHandler:R,publishHandler:function(){f?P():(me("toPublish",!0),B())}})})})]})]})})]})})}n(122);i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(pe,{})}),document.querySelector("#root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.13b4f252.chunk.js.map