(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{25:function(n,e,t){n.exports=t(37)},37:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),i=t(12),o=t(13),a=t(3),u=t(17),f=t(43),l=t(4),s=t(15),d=t(38),b=t(41),v=t(40),O=t(42),m=t(39),j=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],p=function(n,e){return e.indexOf(n)>-1},g=function(n,e){return p(n,e)?e.filter((function(e){return e!==n})):[n].concat(Object(s.a)(e))},w=function(n){var e=n.active,t=n.rows,r=n.cols,c=Object.assign([],e);return function(n,e){return Object(d.a)(Object(b.a)(0,n),Object(b.a)(0,e))}(t,r).forEach((function(n){var i=Object(l.a)(n,2),o=i[0],a=i[1],u=o*r+a,f=function(n,e){return n.filter((function(n){return p(n,e)})).length}(function(n,e,t,r){return j.map((function(t){var r=Object(l.a)(t,2),c=r[0],i=r[1];return[c+n,i+e]})).filter((function(n){var e=Object(l.a)(n,2);return function(n,e,t,r){return n>=0&&n<t&&e>=0&&e<r}(e[0],e[1],t,r)})).map((function(n){var e=Object(l.a)(n,2),t=e[0],c=e[1];return t*r+c}))}(o,a,t,r),e);f<2||f>3?-1!==c.indexOf(u)&&c.splice(c.indexOf(u),1):p(u,e)||3!==f||c.push(u)})),c},E=function(n){return Object(v.a)(O.a,Object(m.a)((function(n){return Math.random()>.8&&n}),n))},h={rows:40,cols:30},k={rows:30,cols:70},y=Object(u.a)(Object(u.a)({},k),{},{active:[]}),_=t(9),x=t(10),z=function(n){return{type:"resize",rows:n.rows,cols:n.cols}};function C(){var n=Object(_.a)(["\n  background: transparent;\n  border: 1px solid #0003;\n  color: #0007;\n  height: 2em;\n  font-size: 1em;\n  margin: 0.5em;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    width: 15em;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    :hover {\n      background: #dedbd2;\n    }\n  }\n\n  ",";\n"]);return C=function(){return n},n}function S(){var n=Object(_.a)(["\n  margin: 5% 0 5% 5%;\n  display: flex;\n  flex-direction: row;\n"]);return S=function(){return n},n}var A=x.a.div(S()),I=x.a.button(C(),(function(n){return n.isActive&&"background: #ee6c4d; color: #fff"})),D=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1],o=Object(a.b)();return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){return clearInterval(n)}}}),[e])}((function(){return o({type:"tick"})}),t?100:null),c.a.createElement(A,null,c.a.createElement(I,{onClick:function(){return o({type:"tick"})}},"tick"),c.a.createElement(I,{isActive:t,onClick:function(){return i(!t)}},t?"pause":"play"),c.a.createElement(I,{onClick:function(){return o({type:"randomize"})}},"randomize"))};function L(){var n=Object(_.a)(['\n  border: 1px solid #0003;\n  margin: 0.5px;\n  cursor: pointer;\n\n  display: grid;\n  place-items: center;\n\n  &::before {\n    content: "";\n    display: block;\n    padding-bottom: 100%;\n    grid-area: 1 / 1 / 2 / 2;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    :hover {\n      background: #dedbd2;\n    }\n  }\n\n  ',";\n"]);return L=function(){return n},n}function N(){var n=Object(_.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  margin: 5%;\n"]);return N=function(){return n},n}var T=x.a.div(N(),(function(n){return n.cols})),X=x.a.div(L(),(function(n){return n.isActive&&"background: #ee6c4d;"})),R=function(n){var e=n.id,t=n.onClick,r=Object(a.c)((function(n){return n.active.indexOf(e)>-1}));return c.a.createElement(X,{isActive:r,onClick:function(){return t(e)}})},J=function(n){var e=n.cols,t=n.rows,r=n.toggleCell;return c.a.createElement(T,{cols:e},Object(s.a)(Array(t*e).keys()).map((function(n){return c.a.createElement(R,{key:n,id:n,onClick:r})})))},U=function(){return{width:V?window.innerWidth:void 0,height:V?window.innerHeight:void 0}},V="object"===typeof window,B=function(){var n=function(){var n=Object(r.useState)(U),e=Object(l.a)(n,2),t=e[0],c=e[1],i=function(){return c(U())};return Object(r.useEffect)((function(){return!!V&&(window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)})})),t}().width,e=Object(a.b)(),t=Object(a.c)((function(n){return n.rows})),i=Object(a.c)((function(n){return n.cols}));return Object(r.useEffect)((function(){n>768&&70!==i&&e(z(k)),n<=768&&30!==i&&e(z(h))}),[n,i,e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(J,{cols:i,rows:t,toggleCell:function(n){return e({type:"toggle",id:n})}}))},F=Object(o.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"resize":return Object(f.a)(n,{rows:e.rows,cols:e.cols});case"toggle":return Object(f.a)(n,{active:g(e.id,n.active)});case"tick":return Object(f.a)(n,{active:w(n)});case"randomize":return Object(f.a)(n,{active:E(n.rows*n.cols)});default:return n}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(i.render)(c.a.createElement(a.a,{store:F},c.a.createElement(B,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8c563944.chunk.js.map