(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),s=n(2),r=n(3),o=n(5),c=n(4),m=n(1),l=n.n(m),u=(n(12),n(13),n(0)),h=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={position:0},t.handlePrevButton=function(){var e=t.props,n=e.images,a=e.step,i=e.frameSize,s=t.state.position,r=n.length-i,o=s-a;0===s&&(o=r),o<0&&(o=0),t.setState({position:o})},t.handleNextButton=function(){var e=t.props,n=e.images,a=e.step,i=e.frameSize,s=t.state.position,r=n.length-i,o=s+a;s===r&&(o=0),o>r&&(o=r),t.setState({position:o})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.frameSize,a=t.itemWidth,i=t.animationDuration,s=t.infinite,r=this.state.position,o=r<=0&&!s,c=r>=e.length-n&&!s;return Object(u.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*a,"px"),transition:"".concat(i,"ms")},children:[Object(u.jsx)("ul",{className:"Carousel__list",children:e.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{style:{transform:"translateX(".concat(-r*a,"px)"),transition:"".concat(i,"ms")},src:t,alt:"".concat(e.indexOf(t)),width:a})},t)}))}),Object(u.jsxs)("div",{className:"Carousel__buttons",children:[Object(u.jsx)("button",{type:"button",className:"Carousel__button",disabled:o,onClick:this.handlePrevButton,children:"\u2190 Prev"}),Object(u.jsx)("button",{"data-cy":"next",type:"button",className:"Carousel__button",disabled:c,onClick:this.handleNextButton,children:"Next \u2192"})]})]})}}]),n}(l.a.Component),p=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.setStep=function(e){t.setState({step:+e.target.value})},t.setItemWidth=function(e){t.setState({itemWidth:+e.target.value})},t.setFrameSize=function(e){t.setState({frameSize:+e.target.value})},t.setAnimationDuration=function(e){t.setState({animationDuration:+e.target.value})},t.setInfinite=function(e){t.setState({infinite:e.target.checked})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,a=t.frameSize,i=t.itemWidth,s=t.animationDuration,r=t.infinite;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{children:["Carousel with ",e.length," images"]}),Object(u.jsxs)("form",{action:"/",children:[Object(u.jsxs)("label",{className:"form__label",htmlFor:"itemId",children:["Item Width",Object(u.jsx)("input",{type:"number",className:"form__input",name:"itemWidth",id:"itemId",min:130,max:260,value:i,onChange:this.setItemWidth})]}),Object(u.jsxs)("label",{className:"form__label",htmlFor:"frameId",children:["Frame Size",Object(u.jsx)("input",{type:"number",className:"form__input",name:"frameSize",id:"frameId",min:3,max:e.length,step:1,value:a,onChange:this.setFrameSize})]}),Object(u.jsxs)("label",{className:"form__label",htmlFor:"stepId",children:["Step",Object(u.jsx)("input",{type:"number",className:"form__input",name:"step",id:"stepId",min:3,max:10,value:n,onChange:this.setStep})]}),Object(u.jsxs)("label",{className:"form__label",htmlFor:"animationDurationId",children:["Animation Duration",Object(u.jsx)("input",{type:"number",className:"form__input",name:"step",id:"animationDurationId",min:1e3,max:3e3,step:500,value:s,onChange:this.setAnimationDuration})]}),Object(u.jsxs)("label",{className:"form__label",htmlFor:"checkboxId",children:["Infinite",Object(u.jsx)("input",{type:"checkbox",className:"form__input",name:"checkbox",id:"checkboxId",onChange:this.setInfinite})]})]}),Object(u.jsx)(h,{images:e,step:n,frameSize:a,itemWidth:i,animationDuration:s,infinite:r})]})}}]),n}(l.a.Component),b=p;i.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9309f0d9.chunk.js.map