(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),i=n.n(r),c=(n(14),n(1)),l=n(2),u=n(4),o=n(3),h=n(5),m=(n(6),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={name:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h1",null,this.props.author,"\ub2d8\uc758 \ud638\ubd88\ud638\uc640 \ube44\uad50\ud574 \ubcf4\uc138\uc694!"),s.a.createElement("p",null,"\uc9c8\ubb38\ub4e4\uc5d0 \ub300\ud574 \uc5ec\ub7ec\ubd84\uc758 \ucde8\ud5a5\ub300\ub85c \ub2f5\ud574\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4!"),s.a.createElement("hr",null),s.a.createElement("form",{onSubmit:function(){return e.props.handleUserName(e.state.name)}},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"username"},"\ub2f9\uc2e0\uc758 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),s.a.createElement("br",null),s.a.createElement("input",{id:"username",placeholder:"\uc774\ub984",className:"form-control",type:"text",required:!0,value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),s.a.createElement("br",null),s.a.createElement("input",{className:"stbtn",type:"submit",value:"\uc2dc\uc791\ud558\uae30!"})))}}]),t}(a.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"answer",value:function(e){this.props.handleAnswer({subject:this.props.subject,choice:e})}},{key:"render",value:function(){var e=Math.floor((this.props.qindex+1)/this.props.qcount*1e3)/10,t={width:e+"%"};return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},this.props.author),s.a.createElement("div",{className:"status"},this.props.qindex+1," / ",this.props.qcount),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"bar",style:t},e,"%"))),s.a.createElement("br",null),s.a.createElement("h1",null,this.props.subject),s.a.createElement("br",null),s.a.createElement("input",{className:"ybtn",type:"button",value:"\ud638",onClick:this.answer.bind(this,"like")}),s.a.createElement("br",null),s.a.createElement("input",{className:"nbtn",type:"button",value:"\ubd88\ud638",onClick:this.answer.bind(this,"dislike")}))}}]),t}(a.Component),b={like:"like",dislike:"dislike"},d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"ans"},s.a.createElement("span",{className:b[this.props.choice]},this.props.subject))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props.authorAnswer.reduce(function(e,n,a){return n.choice===t.props.userAnswer[a].choice?e+1:e},0),a=this.props.authorAnswer.length,r=Math.round(100*n/a);return 100===r&&(e=s.a.createElement("b",null,"\uc640!! \uc800\ub791 \uc644\ubcbd\ud558\uac8c \uc77c\uce58\ud558\uc2dc\ub294\uad70\uc694! ",s.a.createElement("br",null),"\uc800\ub791 \ub9db\uc788\ub294\uac70 \uba39\uc73c\ub7ec \uac00\uc694!! \uc2a4\ud06c\ub9b0\uc0f7\uacfc \ud568\uaed8 \uc5f0\ub77d\uc8fc\uc138\uc694!!")),s.a.createElement("div",null,s.a.createElement("h1",null,this.props.author,"\ub2d8\uacfc\uc758 \ud638\ubd88\ud638 \uc77c\uce58\ub3c4\uc785\ub2c8\ub2e4!"),s.a.createElement("div",{className:"text-center"},s.a.createElement("span",{className:"display-1"},r),"\uc810",s.a.createElement("br",null),s.a.createElement("span",{className:"display-6"},"\ucd1d ",a,"\uac1c \uc911 ",n,"\uac1c \uc77c\uce58")),e,s.a.createElement("hr",null),s.a.createElement("h3",null,this.props.user," \ub2d8\uc758 \ud638\ubd88\ud638:\xa0",this.props.userAnswer.map(function(e,t){return s.a.createElement(d,Object.assign({key:t},e))})),s.a.createElement("div",null,s.a.createElement("input",{className:"stbtn",type:"button",value:"\ub2e4\uc2dc\ud558\uae30!",onClick:this.props.reset})))}}]),t}(a.Component),j=function(){return{qindex:0,user:"",userAnswer:[]}},v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).state=j(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"reset",value:function(){this.setState(j())}},{key:"handleUserName",value:function(e){this.setState({user:e})}},{key:"handleAnswer",value:function(e){this.setState({qindex:this.state.qindex+1,userAnswer:this.state.userAnswer.concat(e)})}},{key:"render",value:function(){var e=this.props.questions.length;return s.a.createElement("div",{className:"app-container"},this.state.user?this.state.qindex<e?s.a.createElement(p,Object.assign({},this.props.questions[this.state.qindex],{author:this.props.author,qindex:this.state.qindex,qcount:e,handleAnswer:this.handleAnswer.bind(this)})):s.a.createElement(E,{author:this.props.author,authorAnswer:this.props.questions,user:this.state.user,userAnswer:this.state.userAnswer,reset:this.reset.bind(this)}):s.a.createElement(m,{author:this.props.author,handleUserName:this.handleUserName.bind(this)}))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={author:"\uc774\uc131\ucc2c",questions:[{subject:"\ub9c8\uce74\ub871",choice:"dislike"},{subject:"\ub3fc\uc9c0\uaecd\ub370\uae30",choice:"dislike"},{subject:"\uba54\ubc00\uc18c\ubc14",choice:"like"},{subject:"\uacf1\ucc3d",choice:"like"},{subject:"\ub370\uc790\uc640",choice:"dislike"},{subject:"\ubbfc\ud2b8 \ucd08\ucf54 \uc544\uc774\uc2a4\ud06c\ub9bc",choice:"like"},{subject:"\ud68c",choice:"like"},{subject:"\uc624\uc774",choice:"like"}]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(v,this.state))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.5da96574.chunk.js.map