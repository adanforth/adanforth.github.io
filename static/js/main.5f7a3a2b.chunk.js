(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(19),r=n.n(s),o=n(20),a=n(2),l=n(9),d=n(10),j=n(7),h=n(12),b=n(11),u=(n(26),n(27),n(1)),O=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={resume:"/pdfs/Andy_Danforth_Resume.pdf"},i.openResume=i.openResume.bind(Object(j.a)(i)),i}return Object(d.a)(n,[{key:"openResume",value:function(){window.open(this.state.resume)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"about css-selector",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("button",{onClick:this.openResume,children:"RESUME"}),Object(u.jsxs)("div",{className:"grid-container",children:[Object(u.jsx)("div",{className:"grid-item contact",children:Object(u.jsx)("h2",{children:"contact"})}),Object(u.jsx)("div",{className:"grid-item about-desc",children:Object(u.jsx)("h2",{children:"About me"})})]})]})}}]),n}(c.a.Component),x=(n(29),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"hero",children:Object(u.jsxs)("h1",{children:["Andy Danforth",Object(u.jsx)("p",{children:"Welcome to my website!"})]})})}}]),n}(c.a.Component)),v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={scroll:window.scrollY,width:window.innerWidth,height:window.innerHeight},i.onScroll=i.onScroll.bind(Object(j.a)(i)),i.scrollTo=i.scrollTo.bind(Object(j.a)(i)),i.Navbar=i.Navbar.bind(Object(j.a)(i)),i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(j.a)(i)),i.home=c.a.createRef(),i.AboutMe=c.a.createRef(),i.links={Home:i.home,"About Me":i.AboutMe},i}return Object(d.a)(n,[{key:"Navbar",value:function(e,t){return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{id:t,className:e,children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:this.scrollTo,children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:this.scrollTo,children:"About Me"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Projects"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/yeet",children:"Yeet"})})]})})}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"scrollTo",value:function(e){this.links[e.target.innerText]&&this.links[e.target.innerText].current.scrollIntoView({behavior:"smooth"})}},{key:"onScroll",value:function(){this.setState({scroll:window.scrollY})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this.state.scroll>0?"scroll":"",t=this.state.width<900?"mobile-nav":"nav";return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{ref:this.home,children:Object(u.jsx)(x,{})}),Object(u.jsx)("div",{ref:this.AboutMe,children:Object(u.jsx)(O,{})}),Object(u.jsx)("div",{children:this.Navbar(e,t)})]})}}]),n}(c.a.Component);var m=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/",component:v,exact:!0}),Object(u.jsx)(a.a,{exact:!0,path:"/yeet",children:Object(u.jsx)("h1",{children:"yeet"})})]})})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5f7a3a2b.chunk.js.map