(this.webpackJsonpmyblog=this.webpackJsonpmyblog||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},137:function(e,t){},173:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(21),r=a.n(c),s=(a(104),a(105),a(198)),o=a(25),l=a(46),d=a(47),j=a(56),u=a(55),b=a(178),h=a(208),m=a(199),x=a(209),f=a(203),p=a(200),O=a(201),g=a(211),v=a(24),y=a.n(v),D=a(3),C=Object(s.a)((function(e){return{DetailHeader:{marginTop:"24px",marginBottom:"24px",width:"80%",position:"absolute",left:"50%",transform:"translate(-50%, 0)"},Overlay:{padding:"80px",backgroundColor:"rgba(0, 0, 0, 0.3)"},Header:{width:"100%",color:"#f0f0f0"}}})),k=function(e){var t=C();return Object(D.jsx)("div",{children:Object(D.jsx)(m.a,{className:t.DetailHeader,children:Object(D.jsx)(p.a,{image:e.image,title:"Thumbnail",children:Object(D.jsx)("div",{className:t.Overlay,children:Object(D.jsx)(O.a,{className:t.CardContent,children:Object(D.jsx)(b.a,{variant:"h3",className:t.Header,children:e.title})})})})})})},_=a(41);a(111),a(174);_.a.initializeApp({apiKey:"AIzaSyCHjhNAexRjS3ks79rgzyYizB2fzbLWsX8",authDomain:"blog-36dc2.firebaseapp.com",projectId:"blog-36dc2",storageBucket:"blog-36dc2.appspot.com",messagingSenderId:"907713744766",appId:"1:907713744766:web:e5f3831b4c240cfbd1ad2f"});_.a.auth();var S=_.a.firestore(),I=(_.a,a(202)),w=a(88),N=a.n(w),A=function(e){return e.children},B=a(42),T=a.n(B),F=a(53),M=a.n(F),P=function(e){return Object(D.jsxs)(A,{children:[Object(D.jsx)(b.a,{className:T.a.Main,variant:"h6",children:e.title}),Object(D.jsx)("div",{className:T.a.Divider}),Object(D.jsx)(b.a,{variant:"subtitle1",color:"textSecondary",className:T.a.Date,children:Object(D.jsx)(M.a,{format:"MMM. D, YYYY",children:e.date})}),Object(D.jsx)("div",{className:T.a.Text,children:e.children})]})},H=a(89),Y=a(170),z=function(e){return Object(D.jsxs)("div",{children:[Object(D.jsx)("br",{}),Object(D.jsx)(H.a,{videoId:Y(e.url),opts:{height:"390",width:"640",playerVars:{autoplay:0}}})]})},G=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={otherPosts:[],currentItem:null},e.handleClick=function(t){e.props.history.push({pathname:"/blog/".concat(t)})},e.unsubscribeBlogPosts=null,e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=window.location.href,t=e.substring(e.lastIndexOf("/")+1);this.createSubscriptionsForItem(t)}},{key:"createSubscriptionsForItem",value:function(e){var t=this;S.collection("Artikel").get().then((function(a){var n=[];a.forEach((function(a){var i=a.data();if(a.id!==e){var c=Object(o.a)(Object(o.a)({},i),{},{date:new Date(1e3*i.Datum.seconds),id:a.id});n.push(c)}else if(a.id===e){var r=Object(o.a)(Object(o.a)({},i),{},{date:new Date(1e3*i.Datum.seconds)});t.setState({currentItem:r})}})),n.sort((function(e,t){return e.date.getTime()-t.date.getTime()})),t.setState({otherPosts:n})})).catch((function(e){return console.log(e)}))}},{key:"createOtherPostsFeed",value:function(){var e=this,t=null;return null!=this.state.otherPosts&&(t=this.state.otherPosts.map((function(t){return Object(D.jsx)("div",{className:y.a.BlogCardSpacing,children:Object(D.jsx)(q,{hideImg:!0,item:t,onClick:e.handleClick})},t.id)}))),t}},{key:"render",value:function(){return null!=this.state.currentItem?Object(D.jsxs)("div",{className:y.a.Container,children:[Object(D.jsx)(k,{title:this.state.currentItem.Titel,image:this.state.currentItem.Hintergrundbild}),Object(D.jsxs)(I.a,{container:!0,spacing:0,children:[Object(D.jsx)(I.a,{item:!0,md:9,xs:12,children:Object(D.jsxs)("div",{className:y.a.DetailSpacing,children:[Object(D.jsx)(P,{title:this.state.currentItem.Titel,date:this.state.currentItem.date,children:N()(this.state.currentItem.Content)}),Object(D.jsx)(z,{url:this.state.currentItem.Video})]})}),Object(D.jsxs)(I.a,{item:!0,md:3,xs:12,children:[Object(D.jsx)("div",{className:y.a.Divider}),this.createOtherPostsFeed()]})]}),Object(D.jsx)("div",{className:y.a.Footer})]}):null}}]),a}(n.Component),V=function(e,t){if(e.length>t){for(;" "!==e[t];)t++;e=e.substring(0,t)+"..."}return e},W=a(10),X=Object(s.a)((function(e){return{card:{maxWidth:"100%"},media:{height:240},cardActions:{display:"flex",margin:"0 10px",justifyContent:"space-between"},author:{display:"flex"}}})),q=function(e){var t,a=Object(W.f)(),n=X();return Object(D.jsx)("div",{children:Object(D.jsxs)(m.a,{className:n.card,onClick:function(){a.push("/".concat(e.item.id)),window.location.reload()},children:[Object(D.jsxs)(x.a,{children:[!0===e.hideImg?null:Object(D.jsx)(p.a,{className:n.media,image:e.item.Hintergrundbild,title:e.item.Titel}),Object(D.jsxs)(O.a,{children:[Object(D.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.item.Titel}),Object(D.jsx)(b.a,{variant:"body",color:"textSecondary",component:"p",children:V((t=e.item.Content,t.replace(/<\/?[^>]+(>|$)/g,"")),100)})]})]}),Object(D.jsx)(f.a,{className:n.cardActions,children:Object(D.jsxs)(h.a,{className:n.author,children:[Object(D.jsx)(g.a,{src:e.item.Profilbild}),Object(D.jsxs)(h.a,{ml:2,children:[Object(D.jsx)(b.a,{variant:"subtitle2",component:"p",children:e.item.Autor}),Object(D.jsx)(b.a,{variant:"subtitle2",color:"textSecondary",component:"p",children:Object(D.jsx)(M.a,{format:"DD MMM YYYY",children:e.item.date})})]})]})})]})})},E=a(210),J=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={Artikel:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.collection("Artikel").get().then((function(t){var a=[];t.forEach((function(e){var t=e.data(),n=Object(o.a)(Object(o.a)({},t),{},{date:new Date(1e3*t.Datum.seconds),id:e.id});a.push(n)})),e.setState({Artikel:a})})).catch((function(e){return console.log(e)}))}},{key:"createBlogFeed",value:function(){return this.state.Artikel.sort((function(e,t){return t.date.getTime()-e.date.getTime()})).map((function(e){var t=Object(o.a)({},e);return Object(D.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(D.jsx)(q,{item:t})},t.id)}))}},{key:"render",value:function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)("br",{}),Object(D.jsx)(E.a,{in:!0,timeout:{enter:1e3},children:Object(D.jsxs)("div",{className:y.a.Container,children:[Object(D.jsx)(I.a,{container:!0,spacing:3,children:this.createBlogFeed()}),Object(D.jsx)("div",{className:y.a.Footer})]})})]})}}]),a}(i.a.Component),K=a(45),L=a(204),R=a(205),U=a(206);var $=function(){return Object(W.f)(),Object(D.jsx)("div",{children:Object(D.jsx)(L.a,{position:"fixed",children:Object(D.jsx)(R.a,{variant:"regular",children:Object(D.jsx)(h.a,{display:"flex",flexGrow:1,children:Object(D.jsx)(b.a,{variant:"h6",children:Object(D.jsx)(U.a,{href:"/",style:{textDecoration:"none",color:"#b8b3ae"},children:"Redivivus"})})})})})})},Q=Object(s.a)((function(e){return{appBar:{backgroundColor:"#fff"},hero:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1553367989-1f8a5d29ee08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')",height:"500px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",fontSize:"4rem"},blogsContainer:{paddingTop:e.spacing(3)},blogTitle:{fontWeight:800,paddingBottom:e.spacing(3)}}}));var Z=function(){return Q(),Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)($,{}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)(K.a,{children:Object(D.jsxs)(W.c,{children:[Object(D.jsx)(W.a,{exact:!0,path:"/",component:J}),Object(D.jsx)(W.a,{exact:!0,path:"/:blogID",component:G})]})})]})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,213)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))},te=a(207),ae=a(93),ne=Object(ae.a)({palette:{primary:{main:"#3e3f4c"}},background:{default:"#fff"}});r.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(te.a,{theme:ne,children:Object(D.jsx)(Z,{})})}),document.getElementById("root")),ee()},24:function(e,t,a){e.exports={Container:"DataStyle_Container__3oqpH",Footer:"DataStyle_Footer__3142m",Divider:"DataStyle_Divider__1cKK3",DetailSpacing:"DataStyle_DetailSpacing__FMPwc",BlogCardSpacing:"DataStyle_BlogCardSpacing__2ncry"}},42:function(e,t,a){e.exports={Divider:"DetailContent_Divider__abGUB",Text:"DetailContent_Text__Aq3FN",Date:"DetailContent_Date__2X-AX",Main:"DetailContent_Main__3rJuV"}}},[[173,1,2]]]);
//# sourceMappingURL=main.f7142b45.chunk.js.map