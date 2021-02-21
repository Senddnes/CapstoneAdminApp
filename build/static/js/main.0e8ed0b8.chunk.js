(this["webpackJsonpcap-admin"]=this["webpackJsonpcap-admin"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),i=(a(27),a(8)),o=a(9),l=a(12),u=a.n(l);a(33),a(35);u.a.initializeApp({apiKey:"AIzaSyAtHDxZ3n9J3iClkza0Nd82VWpvhNBO2sc",authDomain:"capadmin-641ae.firebaseapp.com",databaseURL:"https://capadmin-641ae.firebaseio.com",projectId:"capadmin-641ae",storageBucket:"capadmin-641ae.appspot.com",messagingSenderId:"190755946574",appId:"1:190755946574:web:7b19f349d2b4818f02831f"});var m=u.a.auth(),d=(u.a.database(),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],d=l[1],p=Object(n.useState)(null),h=Object(o.a)(p,2),f=h[0],E=h[1],v=function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a?s(n):"userPassword"===a&&d(n)};return r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("div",null,null!==f&&r.a.createElement("div",null,f),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"userEmail",className:"block"},"Email:"),r.a.createElement("input",{type:"email",name:"userEmail",value:a,placeholder:"E.g: dylan123@gmail.com",id:"userEmail",onChange:function(e){return v(e)}}),r.a.createElement("label",{htmlFor:"userPassword",className:"block"},"Password:"),r.a.createElement("input",{type:"password",name:"userPassword",value:u,placeholder:"Your Password",id:"userPassword",onChange:function(e){return v(e)}}),r.a.createElement("button",{onClick:function(e){!function(e,t,a){e.preventDefault(),m.signInWithEmailAndPassword(t,a).catch((function(e){E("Error signing in with password and email!"),console.error("Error signing in with password and email",e)})),console.log("no sign in error")}(e,a,u)}},"Sign in")),r.a.createElement("p",null,"or"),r.a.createElement("p",null,r.a.createElement("br",null)," ",r.a.createElement(i.a,{to:"passwordReset"},"Forgot Password?"))))}),p=a(1),h=a.n(p),f=a(6),E=a(2),v=a(3),b=a(5),g=a(4),y=Object(n.createContext)({user:null});function j(e){return e?{uid:e.uid,email:e.email}:null}m.setPersistence("none");var C=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.componentDidMount=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m.onAuthStateChanged(function(){var t=Object(f.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(a);case 2:n=t.sent,e.setState({user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state.user},this.props.children)}}]),a}(n.Component),O=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={clicked:!1},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"NavbarItems"},r.a.createElement("ul",null,r.a.createElement(i.a,{to:"/"},"Home"),r.a.createElement(i.a,{to:"/posts"},"Posts"),r.a.createElement(i.a,{to:"/users"},"Users")))}}]),a}(n.Component),k=function(){Object(n.useContext)(y);return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("h1",null,"Home"),r.a.createElement("button",{onClick:function(){m.signOut()}},"Sign out"))},w=a(7),x=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={removed:n.props.removed},n.handleRemoveComment=n.handleRemoveComment.bind(Object(w.a)(n)),n}return Object(v.a)(a,[{key:"handleRemoveComment",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"DELETE",headers:{auth:m.currentUser.uid}},a="https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/hideComment/".concat(this.props.postId,"/").concat(this.props.id),e.next=4,fetch(a,t).then((function(){n.setState({removed:!0})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.removed?r.a.createElement("div",null,r.a.createElement("h2",null,"Comment Removed")):r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"userHbox"},r.a.createElement("h1",null,"Comment"),r.a.createElement("h3",null,this.props.displayName)),r.a.createElement("p",null,this.props.content),r.a.createElement("small",null,this.props.timestamp),r.a.createElement("div",{className:"userHbox"},r.a.createElement("button",{onClick:this.handleRemoveComment},"Remove Comment")))}}]),a}(r.a.Component);function N(){return(N=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{auth:m.currentUser.uid}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={isLoading:!0},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),function(e){return N.apply(this,arguments)}("https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getComments/".concat(this.props.id)).then((function(e){return e.json()})).then((function(t){var a=t.map((function(t){return r.a.createElement(x,{key:t.id,id:t.id,content:t.comment.content,displayName:t.comment.displayName,timestamp:t.comment.timestamp,postId:e.props.id,removed:t.comment.removed})}));e.setState({comments:a,isLoading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"commentContainer"},this.state.isLoading?r.a.createElement("h1",null,"Loading..."):this.state.comments)}}]),a}(r.a.Component),S=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleRemovePost=n.handleRemovePost.bind(Object(w.a)(n)),n.handleToggleComments=n.handleToggleComments.bind(Object(w.a)(n)),n.state={removed:!1,comments:!1},n}return Object(v.a)(a,[{key:"handleRemovePost",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"DELETE",headers:{auth:m.currentUser.uid,uid:this.props.uid}},a="https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/hidePost/".concat(this.props.id),e.next=4,fetch(a,t).then((function(){n.setState({removed:!0})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleToggleComments",value:function(){this.setState({comments:!this.state.comments})}},{key:"render",value:function(){var e;return e=this.state.comments?r.a.createElement(P,{id:this.props.id}):r.a.createElement("div",null,"notLoaded"),this.state.removed?r.a.createElement("div",null,r.a.createElement("h2",null,"Post Removed")):r.a.createElement("div",{className:"postFrame"},r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"userHbox"},r.a.createElement("img",{src:"data:image/png;base64,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",width:"50",height:"50"}),r.a.createElement("h3",null,this.props.displayName),r.a.createElement("p",null,this.props.uid)),r.a.createElement("p",null,this.props.content),r.a.createElement("div",{className:"userHbox"},r.a.createElement("button",{onClick:this.handleToggleComments},"View Comments"),r.a.createElement("button",{onClick:this.handleRemovePost},"Remove Post"))),e)}}]),a}(r.a.Component);function L(e){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{auth:m.currentUser.uid}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={isLoading:!0},n.handleLoadNextPosts=n.handleLoadNextPosts.bind(Object(w.a)(n)),n.handleRemovePost=n.handleRemovePost.bind(Object(w.a)(n)),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});L("https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getPosts/start").then((function(e){return e.json()})).then((function(t){var a=t.map((function(e){return r.a.createElement(S,{key:e.id,id:e.id,displayName:e.post.displayName,content:e.post.content,likes:e.post.likes,uid:e.post.uid})}));e.setState({posts:a,isLoading:!1,lastPost:t[t.length-1].id})}))}},{key:"handleRemovePost",value:function(){var e=Object(f.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{auth:m.currentUser.uid,uid:a}},r="https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/hidePost/".concat(t),e.next=4,fetch(r,n).then((function(){}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleLoadNextPosts",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L("https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getPosts/".concat(this.state.lastPost)).then((function(e){return e.json()})).then((function(e){for(var a=e.map((function(e){return r.a.createElement(S,{key:e.id,id:e.id,displayName:e.post.displayName,content:e.post.content,likes:e.post.likes,uid:e.post.uid})})),n=[],s=1;s<4;s++)n.push(a[s]);var c=t.state.posts.concat(n);t.setState({posts:c,lastPost:e[e.length-1].id})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.profile?r.a.createElement("div",{className:"postContainer"},this.state.isLoading?r.a.createElement("h1",null,"Loading..."):this.state.posts):r.a.createElement("div",{className:"postContainer"},this.state.isLoading?r.a.createElement("h1",null,"Loading..."):this.state.posts,r.a.createElement("button",{onClick:this.handleLoadNextPosts},"Load Next 3 Posts"))}}]),a}(r.a.Component),H=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("h1",null,"Posts"),r.a.createElement(F,null),r.a.createElement("button",{onClick:function(){m.signOut()}},"Sign out"))},I=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),l=Object(o.a)(c,2),u=l[0],m=(l[1],Object(n.useState)(null)),d=Object(o.a)(m,2),p=d[0];d[1];return r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",{className:"text-xl text-center font-bold mb-3"},"Reset your Password"),r.a.createElement("div",{className:"border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},r.a.createElement("form",{action:""},u&&r.a.createElement("div",{className:"py-3 bg-green-400 w-full text-white text-center mb-3"},"An email has been sent to you!"),null!==p&&r.a.createElement("div",{className:"py-3 bg-red-600 w-full text-white text-center mb-3"},p),r.a.createElement("label",{htmlFor:"userEmail",className:"w-full block"},"Email:"),r.a.createElement("input",{type:"email",name:"userEmail",id:"userEmail",value:a,placeholder:"Input your email",onChange:function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a&&s(n)},className:"mb-3 w-full px-1 py-2"}),r.a.createElement("button",{className:"w-full bg-blue-400 text-white py-3"},"Send me a reset link")),r.a.createElement(i.a,{to:"/",className:"my-2 text-blue-700 hover:text-blue-800 text-center block"},"\u2190 back to sign in page")))},R=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={disabled:e.disabled},n.handleDisable=n.handleDisable.bind(Object(w.a)(n)),n}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{style:{position:"relative",left:"10vh"}},r.a.createElement("span",{style:{paddingRight:"10px"}},"uid: ",this.props.uid),r.a.createElement("span",{style:{paddingRight:"10px"}},"displayName: ",this.props.displayName),r.a.createElement("span",{style:{paddingRight:"10px"}},"email: ",this.props.email),r.a.createElement("span",{style:{paddingRight:"10px"}},"signUpDate: ",this.props.signUpDate),r.a.createElement("span",{style:{paddingRight:"10px"}},"disabled: ",this.state.disabled),r.a.createElement("span",{style:{paddingRight:"10px"}},r.a.createElement("button",{onClick:function(t){return e.handleDisable(t)}},"Disable this user")))))}},{key:"handleDisable",value:function(e){var t=this,a=this.props.uid;console.log(a);var n="https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/disableUser/".concat(a);fetch(n,{method:"POST",headers:{auth:m.currentUser.uid}}).then((function(e){t.setState({disabled:"true"})}))}}]),a}(r.a.Component);function B(){return(B=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{auth:m.currentUser.uid}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,search:null},n.searchSpace=n.searchSpace.bind(Object(w.a)(n)),n.render=n.render.bind(Object(w.a)(n)),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});(function(e){return B.apply(this,arguments)})("https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getUsers").then((function(e){return e.json()})).then((function(t){var a=t;e.setState({users:a,isLoading:!1})}))}},{key:"searchSpace",value:function(e){var t=e.target.value;this.setState({search:t})}},{key:"render",value:function(){var e=this,t=[];this.state.isLoading||(t=this.state.users.filter((function(t){return null==e.state.search||t.displayName.toLowerCase().includes(e.state.search.toLowerCase())||t.email.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).map((function(e){var t="false";return e.disabled&&(t="true"),r.a.createElement(R,{key:e.uid,uid:e.uid,email:e.email,displayName:e.displayName,signUpDate:e.signUpDate,disabled:t})})));return r.a.createElement("div",{className:"userSearch"},r.a.createElement("h3",null,"Search:"),r.a.createElement("input",{type:"text",placeholder:"Enter item to be searched",style:{border:"solid",borderRadius:"10px",left:"10vh",height:"3vh",width:"20vh",marginTop:"25px",marginBottom:"25px"},onChange:function(t){return e.searchSpace(t)}}),this.state.isLoading?r.a.createElement("h1",null,"Loading..."):t)}}]),a}(r.a.Component),D=function(){Object(n.useContext)(y);return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("h1",null,"Users"),r.a.createElement(J,null),r.a.createElement("button",{onClick:function(){m.signOut()}},"Sign out"))};var T=function(){return Object(n.useContext)(y)?r.a.createElement(i.b,null,r.a.createElement(k,{path:"/"}),r.a.createElement(H,{path:"/posts"}),r.a.createElement(D,{path:"/users"})):r.a.createElement(i.b,null,r.a.createElement(d,{path:"/"}),r.a.createElement(I,{path:"passwordReset"}))};var K=function(){return r.a.createElement(C,null,r.a.createElement(T,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0e8ed0b8.chunk.js.map