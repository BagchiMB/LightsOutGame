(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),l=(n(14),n(2)),c=n(3),i=n(5),u=n(4),h=n(6),p=n(1),d=(n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe(this.props.keys)}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),m=(n(18),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n.flipCellsAround=n.flipCellsAround.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){var t,n=this.props,a=n.ncols,r=n.nrows,s=this.state.board,o=parseInt(e.split("-")[0]),l=parseInt(e.split("-")[1]);function c(e,t){t>=0&&t<a&&e>=0&&e<r&&(s[e][t]=!s[e][t])}c(o,l),c(o,l-1),c(o,l+1),c(o-1,l),c(o+1,l);for(var i=0;i<r;i++)for(var u=0;u<a;u++)!0===s[i][u]&&(t=s[i][u]);var h=!t;this.setState({board:s,hasWon:h})}},{key:"render",value:function(){if(this.state.hasWon)return r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"Winner"},r.a.createElement("span",{className:"neon-orange"},"YOU"),r.a.createElement("span",{className:"neon-blue"},"WIN!")));for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++){var s=t+"-"+a;n.push(r.a.createElement(d,{key:s,keys:s,isLit:this.state.board[t][a],flipCellsAroundMe:this.flipCellsAround}))}e.push(r.a.createElement("tr",{key:t},n))}return r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,e)))}}]),t}(a.Component));m.defaultProps={nrows:5,ncols:5,chanceLightsOn:.25};var f=m,b=(n(20),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.d496a819.chunk.js.map