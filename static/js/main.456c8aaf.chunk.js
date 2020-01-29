(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/checkpoint_01_bouncing_ball.c63dc387.png"},43:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),c=a.n(l),i=a(79),o=a(78),m=a(76),u=a(80),s=a(52),d=a(36),p=a(33),f=a(81),h=a(75),g=a(37),E=function(e){var t=e.children,a=e.value,r=e.index,l=Object(g.a)(e,["children","value","index"]);return n.a.createElement(s.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==r,id:"vertical-tabpanel-".concat(r),"aria-labelledby":"vertical-tab-".concat(r)},l),a===r&&n.a.createElement(u.a,{p:3,pt:1},t))},b=a(73),v=a(83),x=a(74),y=function(e){var t=e.url,a=e.title;return n.a.createElement("iframe",{width:"560",height:"315",src:t,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:a})},j=function(e){var t=e.children,a=B();return n.a.createElement(u.a,{className:a.section},t)},k=function(e){var t=e.text;return n.a.createElement(s.a,{variant:"h6"},t)},w=function(e){var t=e.list,a=e.renderItem;return n.a.createElement(n.a.Fragment,null,t.map((function(e){return a(e)})))},B=Object(p.a)((function(e){return{root:{padding:"2rem",marginTop:0,maxWidth:"1000px",marginLeft:"1rem"},section:{marginTop:"1rem"},img:{maxHeight:"300px",borderRadius:"8px"}}})),O=function(e){var t=e.project,a=B(),r=t.title,l=t.group,c=t.description,i=t.code,o=t.videoLink,m=t.featureList,u=t.imageList,d=t.tools,p=t.otherResources;return n.a.createElement(b.a,{className:a.root},n.a.createElement(s.a,{variant:"h4",component:"h3",gutterBottom:!0},r),n.a.createElement(j,null,n.a.createElement(k,{text:"Group"}),n.a.createElement(w,{list:l,renderItem:function(e){return n.a.createElement(v.a,{key:e,disablePadding:!0},e)}})),n.a.createElement(j,null,n.a.createElement(k,{text:"Description"}),n.a.createElement(s.a,null,c)),n.a.createElement(j,null,n.a.createElement(k,{text:"Code"}),n.a.createElement(x.a,{href:i,target:"_blank",rel:"noreferrer"},i)),n.a.createElement(j,null,n.a.createElement(k,{text:"Video"}),n.a.createElement(y,{url:o,title:r})),n.a.createElement(j,null,n.a.createElement(k,{text:"Features"}),n.a.createElement(w,{list:m,renderItem:function(e){return n.a.createElement(v.a,{key:e,disablePadding:!0},e)}})),n.a.createElement(j,null,n.a.createElement(k,{text:"Images"}),n.a.createElement(w,{list:u,renderItem:function(e){var t=e.url,r=e.alt;return n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:t,alt:r,className:a.img}),n.a.createElement(s.a,{variant:"subtitle2"},r))}})),n.a.createElement(j,null,n.a.createElement(k,{text:"Tools and Libraries"}),n.a.createElement(w,{list:d,renderItem:function(e){var t=e.title,a=e.url;return n.a.createElement(x.a,{href:a,target:"_blank",rel:"noreferrer"},t)}})),p&&n.a.createElement(j,null,n.a.createElement(k,{text:"Additional Resources"}),n.a.createElement(w,{list:p,renderItem:function(e){var t=e.title,a=e.url;return n.a.createElement(x.a,{href:a,target:"_blank",rel:"noreferrer"},t)}})))},I=[{title:"Checkpoint #1 - 3D Bouncing Ball",group:["Rafi Barash (baras015@umn.edu)"],description:"This is the checkpoint for project #1. Very rough simulation of a ball bouncing around in 3D. \n  The ball's movements are computed using Eulerian Numerical Integration.\n  Whenever the mouse hits the ball with some velocity, the ball will move according to the direction and magnitude of the hit.",code:"https://github.com/rafibarash/csci5611-portfolio/tree/master/src/projects/proj1/BouncingBall_3D",videoLink:"https://www.youtube.com/embed/FP6W6uRTXOc",featureList:["0:06 - Ball changes direction off wall collision","0:12 - Ball changes direction from mouse hit"],imageList:[{url:a(34),alt:"Bouncing Ball"}],tools:[{title:"Processing",url:"https://processing.org/"}],otherResources:null}],L=Object(p.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex"},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),R=function(e){return{id:"project-tab-".concat(e),"aria-controls":"project-tabpanel-".concat(e)}},C=function(){console.log(I);var e=L(),t=Object(r.useState)(0),a=Object(d.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",{className:e.root},n.a.createElement(f.a,{orientation:"vertical",value:l,onChange:function(e,t){c(t)},"aria-label":"Project Tabs",indicatorColor:"primary",className:e.tabs},I.map((function(e,t){return n.a.createElement(h.a,Object.assign({label:e.title},R(t),{key:e.title}))}))),I.map((function(e,t){return n.a.createElement(E,{value:l,index:t,key:e.title},n.a.createElement(O,{project:e}))})))},T=function(){return n.a.createElement(m.a,{maxWidth:"lg"},n.a.createElement(u.a,{my:4,textAlign:"center"},n.a.createElement(s.a,{variant:"h3",component:"h1",gutterBottom:!0},"Rafi Barash's CSCI 5611 Portfolio")),n.a.createElement(C,null))},_=a(23),N=a(77),P=a(22),D=a(24),F=a(82),W=a(35),A=Object(F.a)(Object(W.a)({palette:{primary:{main:_.a[500]},secondary:{main:N.a[300]},error:{main:P.a.A400},success:{main:D.a[400]},background:{default:"#fff"}},overrides:{},typography:{}}));c.a.render(n.a.createElement(o.a,{theme:A},n.a.createElement(i.a,null),n.a.createElement(T,null)),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.456c8aaf.chunk.js.map