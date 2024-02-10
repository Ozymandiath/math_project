import './polyfills.server.mjs';
import{A as P,D as A,J as E,a as x,b as g,c as _,d as r,e as p,f as u,g as h,h as C,i as v,j as n,k as i,l as d,m as w,n as b,o as m,p as a,q as f,r as k,y as M,z as O}from"./chunk-2BB6756S.mjs";import"./chunk-HQUS2UUF.mjs";function B(e,t){e&1&&(n(0,"div",7)(1,"p"),a(2,"\u0412\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u0412\u0415\u0420\u041D\u041E!"),i()())}function j(e,t){e&1&&(n(0,"div",8)(1,"p"),a(2,"\u0412\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u041D\u0415\u0412\u0415\u0420\u041D\u041E!"),i()())}function F(e,t){if(e&1){let o=w();n(0,"button",9),b("click",function(){let l=g(o).$implicit,D=m(2);return _(D.answerClick(l))}),n(1,"div",10),a(2),i(),d(3,"img",11),i()}if(e&2){let o=t.$implicit;r(2),f(o)}}function I(e,t){if(e&1&&(n(0,"div",1),d(1,"div",2),n(2,"h1"),a(3),i()(),n(4,"div",3)(5,"p"),a(6,"\u0412\u042B\u0411\u0415\u0420\u0418\u0422\u0415 \u041E\u0422\u0412\u0415\u0422"),i(),p(7,B,3,0,"div",4)(8,j,3,0,"div",5),i(),n(9,"div",6),C(10,F,4,1,"button",null,h),i()),e&2){let o=m();r(3),f(o.exercise[o.index].example),r(4),u(7,o.rightAnswer?7:-1),r(),u(8,o.fakeAnswer?8:-1),r(2),v(o.exercise[o.index].fake)}}function R(e,t){e&1&&(n(0,"div",12)(1,"h1"),a(2,"\u041A\u043E\u043D\u0435\u0446 ..."),i()())}var y=(()=>{let t=class t{constructor(){this.title="math_project",this.rightAnswer=!1,this.fakeAnswer=!1,this.exercise=[{example:"3 + 3 =",answer:6,fake:[2,3,4,6]},{example:"5 * 20 =",answer:100,fake:[1e3,60,100,36]},{example:"25 + 84 =",answer:109,fake:[112,109,103,99]},{example:"36 / 3 =",answer:12,fake:[12,13,10,21]},{example:"37 * 3 =",answer:111,fake:[91,94,110,111]}],this.index=0,this.endExercise=!1}ngOnInit(){}next(){return this.exercise[this.index++].example}hasNext(){return this.index<this.exercise.length-1}enumerationExample(){this.hasNext()?setTimeout(()=>{this.rightAnswer=!1,this.fakeAnswer=!1,this.next()},800):this.endExercise=!0}answerClick(c){if(this.exercise[this.index].answer===c){this.rightAnswer=!0,this.enumerationExample();return}this.fakeAnswer=!0,setTimeout(()=>{this.fakeAnswer=!1},500)}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=x({type:t,selectors:[["app-root"]],standalone:!0,features:[k],decls:3,vars:1,consts:[[1,"container"],[1,"main"],[1,"back"],[1,"text"],["class","right-status"],["class","fake-status"],[1,"answer"],[1,"right-status"],[1,"fake-status"],[3,"click"],[1,"but-text"],["src","../assets/image/box.svg","alt","\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"],[1,"end"]],template:function(s,l){s&1&&(n(0,"div",0),p(1,I,12,3)(2,R,3,0),i()),s&2&&(r(),u(1,l.endExercise?2:1))},styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:70vh;row-gap:30px}.main[_ngcontent-%COMP%]{text-align:center;padding:20vh 0;font-size:30px;display:flex;justify-content:center;align-items:center}.back[_ngcontent-%COMP%]{position:absolute;width:35%;height:40%;background:linear-gradient(#79efff38 0,#68b2c92f);border-radius:200px;filter:blur(25px);z-index:-1}.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{filter:blur(0);z-index:99}.text[_ngcontent-%COMP%]{text-align:left;width:55%;display:flex;align-items:center;column-gap:20px;flex-direction:column}.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:22px;font-weight:600;padding:3vh 0}.right-status[_ngcontent-%COMP%]{position:absolute;border-radius:10px;border:1px solid green;background-color:#2fcc63;text-align:center;padding:0vh 8vh;margin:0 auto}.right-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-size:20px!important}.fake-status[_ngcontent-%COMP%]{position:absolute;border-radius:10px;border:1px solid red;background-color:#cf4128;text-align:center;padding:0vh 8vh;margin:0 auto}.fake-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px!important;color:#fff}.answer[_ngcontent-%COMP%]{display:flex;width:60%;justify-content:space-around;align-items:center}.answer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:transparent;cursor:pointer}.answer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:-1}.but-text[_ngcontent-%COMP%]{position:relative;z-index:99;font-size:28px;top:10px}.answer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{font-weight:600}"]});let e=t;return e})();var S=[];var T={providers:[E(S),P()]};var V={providers:[A()]},z=M(T,V);var N=()=>O(y,z),te=N;export{te as default};