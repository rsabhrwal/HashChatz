(this.webpackJsonpcomarch=this.webpackJsonpcomarch||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/ui.97647e53.png"},49:function(e,a,t){e.exports=t.p+"static/media/google.1b943d72.png"},51:function(e,a,t){e.exports=t(80)},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(40),l=t.n(r),o=(t(56),t(9)),i=(t(57),t(58),t(96)),s=Object(n.createContext)(),m=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(s.Provider,{value:Object(n.useReducer)(a,t)},r)},u=function(){return Object(n.useContext)(s)},d=t(26),h=t.n(d);var E=function(){var e=u(),a=Object(o.a)(e,1)[0].user;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement("img",{className:"cmlogo",src:h.a,alt:"Logo"}),c.a.createElement("h1",null,"CoMarch")),c.a.createElement("div",{className:"header__right"},c.a.createElement(i.a,{className:"header__avatar",alt:null===a||void 0===a?void 0:a.displayName,src:null===a||void 0===a?void 0:a.photoURL})))},p=(t(62),t(44)),v=t.n(p),f=t(45),g=t.n(f),b=(t(63),t(3)),_=t(18),N=t.n(_),O=N.a.initializeApp({apiKey:"AIzaSyD5NSqT2vYJoszxKe_j-bTEigqhWLBYfM8",authDomain:"comarch-c27dc.firebaseapp.com",databaseURL:"https://comarch-c27dc.firebaseio.com",projectId:"comarch-c27dc",storageBucket:"comarch-c27dc.appspot.com",messagingSenderId:"75509912384",appId:"1:75509912384:web:5b53e74955fd5c99f760a5",measurementId:"G-PCFMQG97GG"}).firestore(),j=N.a.auth(),C=new N.a.auth.GoogleAuthProvider,S=O;var I=function(e){var a=e.Icon,t=e.title,n=e.id,r=e.addChannelOption,l=Object(b.f)();return c.a.createElement("div",{className:"sidebarOption",onClick:r?function(){var e=prompt("Enter Channel Name");e&&S.collection("rooms").add({name:e})}:function(){n?l.push("/room/".concat(n)):l.push(t)}},a&&c.a.createElement(a,{className:"sidebarOption__icon"}),a?c.a.createElement("h3",null,t):c.a.createElement("h3",{className:"sidebarOption__channel"},c.a.createElement("span",{className:"sidebarOption__hash"},"#"),t))},w=t(46),y=t.n(w);var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=u(),i=Object(o.a)(l,1)[0].user;return Object(n.useEffect)((function(){S.collection("rooms").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h3",null,c.a.createElement(v.a,null),null===i||void 0===i?void 0:i.displayName)),c.a.createElement(g.a,null)),c.a.createElement("hr",null),c.a.createElement(I,{className:"add",Icon:y.a,addChannelOption:!0,title:"Add Topic"}),c.a.createElement("hr",null),t.map((function(e){return c.a.createElement(I,{title:e.name,id:e.id})})))},T=(t(76),t(47)),G=t.n(T),L=t(48),R=t.n(L);t(77);var x=function(e){var a=e.message,t=e.timestamp,n=e.user,r=e.userImg;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:r,alt:"img"}),c.a.createElement("div",null,c.a.createElement("h4",null,n," ",c.a.createElement("span",{className:"message__timestamp"},new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString())),c.a.createElement("p",null,a)))};t(78);var D=function(e){var a=e.channelName,t=e.channelId,r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],s=l[1],m=u(),d=Object(o.a)(m,1)[0].user;return c.a.createElement("div",{className:"ChatInput"},c.a.createElement("form",null,c.a.createElement("div",{className:"chat__message"},c.a.createElement("input",{className:"input__field",value:i,onChange:function(e){return s(e.target.value)}}),c.a.createElement("div",{className:"btn"},c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),t&&(s(""),S.collection("rooms").doc(t).collection("messages").add({message:i,time:N.a.firestore.FieldValue.serverTimestamp(),user:d.displayName,userimg:d.photoURL}))}},"Message ",a)))))};var M=function(){var e=Object(b.g)().roomId,a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){e&&S.collection("rooms").doc(e).onSnapshot((function(e){l(e.data())})),S.collection("rooms").doc(e).collection("messages").orderBy("time","asc").onSnapshot((function(e){u(e.docs.map((function(e){return e.data()})))}))}),[e]),console.log(m),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerLeft"},c.a.createElement("h4",{className:"chat__channelName"},c.a.createElement("strong",null,"#",null===r||void 0===r?void 0:r.name),c.a.createElement(G.a,null))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement("p",null,c.a.createElement(R.a,null),"Details"))),c.a.createElement("div",{className:"chat__messages"},m.map((function(e){var a=e.message,t=e.time,n=e.user,r=e.userimg;return c.a.createElement(x,{message:a,timestamp:t,user:n,userImg:r})}))),c.a.createElement(D,{channelName:null===r||void 0===r?void 0:r.name,channelId:e}))},A=(t(79),t(34)),B="SET_USER",U=function(e,a){switch(console.log(a),a.type){case B:return Object(A.a)(Object(A.a)({},e),{},{user:a.user});default:return e}},P=t(49),W=t.n(P);var z=function(){var e=u(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:h.a,alt:"logo"}),c.a.createElement("h1",null," CoMarch "),c.a.createElement("div",{className:"google__signin",onClick:function(e){j.signInWithPopup(C).then((function(e){t({type:B,user:e.user})})).catch((function(e){alert(e.message)}))}},c.a.createElement("h1",null,"Sign in with"),c.a.createElement("img",{src:W.a,alt:"GOOGLE"}))))},F=t(25);var J=function(){return c.a.createElement("div",null,"Choose Topic to Chat OR Create Topic")};var q=function(){var e=u(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"App"},c.a.createElement(F.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(k,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/room/:roomId"},c.a.createElement(M,null)),c.a.createElement(b.a,{path:"/"},c.a.createElement(J,null))))):c.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,{initialState:{user:null},reducer:U},c.a.createElement(q,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.4b6fe36a.chunk.js.map