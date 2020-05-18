(this["webpackJsonpreact-firebase-authentication"]=this["webpackJsonpreact-firebase-authentication"]||[]).push([[0],{34:function(e,t,n){e.exports=n(54)},39:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),o=n.n(l);n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(6),s=n(4),i=r.a.createContext(null),c=function(e){return function(t){return r.a.createElement(i.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},m=i,h=n(5),p=n(19),d=n.n(p),f=(n(43),n(45),{apiKey:"AIzaSyDu2cg8mD6hfEUXT1yA_9ijWvYZisU7Wso",authDomain:"react-firebase-68027.firebaseapp.com",databaseURL:"https://react-firebase-68027.firebaseio.com",projectId:"react-firebase-68027",storageBucket:"react-firebase-68027.appspot.com",messagingSenderId:"246468063722",appId:"1:246468063722:web:04ba74c70d125e611c4293"}),b=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("user/".concat(e))},this.users=function(){return t.db.ref("users")},d.a.initializeApp(f),this.auth=d.a.auth(),this.db=d.a.database()},E=c((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"SignOut")})),v=r.a.createContext(null),g=n(8),w=n(10),O=n(9),j=function(e){var t=function(t){Object(w.a)(a,t);var n=Object(O.a)(a);function a(e){var t;return Object(h.a)(this,a),(t=n.call(this,e)).state={authUser:null},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmout",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(v.Provider,{value:this.state.authUser},r.a.createElement(e,this.props),";")}}]),a}(r.a.Component);return c(t)},S=n(15),y=function(e){return function(t){var n=function(n){Object(w.a)(l,n);var a=Object(O.a)(l);function l(){return Object(h.a)(this,l),a.apply(this,arguments)}return Object(g.a)(l,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(v.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n.props):null}))}}]),l}(r.a.Component);return Object(S.a)(s.e,c)(n)}},C=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/admin"},"Admin")),r.a.createElement("li",null,r.a.createElement(E,null)))},P=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/signin"},"Sign In")))},k=function(){return r.a.createElement("div",null,r.a.createElement(v.Consumer,null,(function(e){return e?r.a.createElement(C,null):r.a.createElement(P,null)})))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Landing"))},A=n(13),W=n(7),D={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},I=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,l=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(r,l).then((function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r})})).then((function(){a.setState(Object(W.a)({},D)),a.props.history.push("/home")})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},D),a}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,l=e.passwordTwo,o=e.error,u=a!==l||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:u,type:"submit"},"Sign Up"),o&&r.a.createElement("p",null," ",o.message," "))}}]),n}(a.Component),x=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(u.b,{to:"/signup"},"Sign Up"))},T=Object(S.a)(s.e,c)(I),M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(T,null))},R={email:"",error:null},L=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then((function(){a.setState(Object(W.a)({},R))})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},R),a}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null," ",n.message," "))}}]),n}(a.Component),B=function(){return r.a.createElement("p",null,r.a.createElement(u.b,{to:"/pw-forget"},"Forgot Password?"))},F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(H,null))},H=c(L),N={email:"",password:"",error:null},z=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then((function(){a.setState(Object(W.a)({},N)),a.props.history.push("/home")})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},N),a}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,l=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Sign In"),a&&r.a.createElement("p",null," ",a.message," "))}}]),n}(a.Component),J=Object(S.a)(s.e,c)(z),K=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(J,null),r.a.createElement(B,null),r.a.createElement(x,null))},X=y((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."))})),Y={passwordOne:"",passwordTwo:"",error:null},Z=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then((function(){a.setState(Object(W.a)({},Y))})).catch((function(e){a.setState({error:e})})),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},Y),a}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,l=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null," ",a.message," "))}}]),n}(a.Component),$=c(Z),_=y((function(e){return!!e}))((function(){return r.a.createElement(v.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(H,null),r.a.createElement($,null))}))})),q=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={loading:!1,users:[]},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",(function(t){var n=t.val(),a=Object.keys(n).map((function(e){return Object(W.a)(Object(W.a)({},n[e]),{},{uid:e})}));e.setState({users:a,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(G,{users:t}))}}]),n}(a.Component),G=function(e){var t=e.users;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))})))},Q=c(q),V=j((function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("hr",null),r.a.createElement(s.a,{exact:!0,path:"/",component:U}),r.a.createElement(s.a,{path:"/signup",component:M}),r.a.createElement(s.a,{path:"/signin",component:K}),r.a.createElement(s.a,{path:"/pw-forget",component:F}),r.a.createElement(s.a,{path:"/home",component:X}),r.a.createElement(s.a,{path:"/account",component:_}),r.a.createElement(s.a,{path:"/admin",component:Q})))}));o.a.render(r.a.createElement(m.Provider,{value:new b},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.be845edf.chunk.js.map