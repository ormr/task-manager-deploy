(this["webpackJsonptask-manager-client"]=this["webpackJsonptask-manager-client"]||[]).push([[0],{51:function(t,e,r){},52:function(t,e,r){},57:function(t,e,r){},76:function(t,e,r){},77:function(t,e,r){},78:function(t,e,r){},80:function(t,e,r){},81:function(t,e,r){},82:function(t,e,r){},83:function(t,e,r){},84:function(t,e,r){},85:function(t,e,r){},86:function(t,e,r){},87:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r(0),c=r.n(a),i=r(17),d=r.n(i),s=(r(51),r(16)),o=r(5),l=(r(52),r(90)),u=r(44),b=r(9),p=r(6),f=r(41),j=r(19),O=r(3),v="FETCH_BOARDS_PREVIEW",h="FETCH_BOARDS_PREVIEW_SUCCESS",I="FETCH_BOARDS_PREVIEW_FAILURE",x="CREATE_BOARD",m="REMOVE_BOARD",y="BOARD_ERROR",g="DRAG_HAPPENED",E="ADD_CARD",w="EDIT_CARD_TEXT",k="REMOVE_CARD",C="CARD_ERROR",R="FETCH_BOARD",_="FETCH_BOARD_SUCCESS",S="FETCH_BOARD_FAILURE",D="ADD_LIST",A="REMOVE_LIST",N="EDIT_LIST_TITLE",B="LIST_ERROR",T={loading:!1,error:!1,boards:[]},L={loading:!1,error:!1,title:"",lists:[]},P=Object(p.combineReducers)({boards:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return{loading:!0,error:!1,boards:[]};case h:return{loading:!1,error:!1,boards:e.payload};case I:return{loading:!1,error:!0,boards:[]};case x:var r=e.payload,n=r.boardId,a=r.title;return Object(O.a)(Object(O.a)({},t),{},{boards:[].concat(Object(j.a)(t.boards),[{boardId:n,title:a}])});case m:var c=e.payload.boardId,i=t.boards.filter((function(t){return t.boardId!==c}));return Object(O.a)(Object(O.a)({},t),{},{boards:i});default:return t}},board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case R:return Object(O.a)(Object(O.a)({},t),{},{loading:!0});case _:return{loading:!1,title:e.payload.title,error:!1,lists:e.payload.lists};case S:return Object(O.a)(Object(O.a)({},t),{},{error:!0});case D:var r=e.payload;return Object(O.a)(Object(O.a)({},t),{},{lists:r});case E:var n=e.payload;return Object(O.a)(Object(O.a)({},t),{},{lists:n});case g:var a=e.payload,c=a.droppableIdStart,i=a.droppableIdEnd,d=a.droppableIndexEnd,s=a.droppableIndexStart,o=a.type;if(!t.lists)return t;var l=Object(O.a)({},t);if("list"===o){var u,b=t.lists.splice(s,1);(u=t.lists).splice.apply(u,[d,0].concat(Object(j.a)(b)))}if(c===i){var p,f=t.lists.find((function(t){return c===t.listId}));if(!f)return t;var v=f.cards.splice(s,1);(p=f.cards).splice.apply(p,[d,0].concat(Object(j.a)(v)))}if(c!==i){var h,I=t.lists.find((function(t){return c===t.listId}));if(!I)return t;var x=I.cards.splice(s,1),m=t.lists.find((function(t){return i===t.listId}));if(!m)return t;(h=m.cards).splice.apply(h,[d,0].concat(Object(j.a)(x)))}return l;case N:if(!t.lists)return t;var y=Object(O.a)({},t),C=e.payload,B=C.listId,T=C.name,P=t.lists.find((function(t){return t.listId===B}));return P?(P.name=T,y):t;case w:if(!t.lists)return t;var V=Object(O.a)({},t),F=e.payload,H=F.listId,z=F.cardId,M=F.text,U=t.lists.find((function(t){return t.listId===H}));if(!U)return t;var W=U.cards.find((function(t){return t.cardId===z}));return W?(W.text=M,V):t;case A:if(!t.lists)return t;var K=e.payload.listId,J=t.lists.filter((function(t){return t.listId!==K}));return Object(O.a)(Object(O.a)({},t),{},{lists:J});case k:if(!t.lists)return t;var G=Object(O.a)({},t),X=e.payload,q=X.listId,Q=X.cardId,Y=G.lists.find((function(t){return t.listId===q}));if(!Y)return t;var Z=Y.cards.filter((function(t){return t.cardId!==Q}));return Y.cards=Z,G;default:return t}}}),V=[r(42).a],F=Object(p.createStore)(P,Object(f.composeWithDevTools)(p.applyMiddleware.apply(void 0,V))),H=(r(57),r(4)),z=r.n(H),M=r(11),U=r(43),W=r.n(U).a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}}),K=r(15),J=function(t,e){var r=function(r){t.current&&!t.current.contains(r.target)&&e()};c.a.useEffect((function(){return document.addEventListener("click",r),function(){document.removeEventListener("click",r)}}))},G=(r(76),Object(b.b)(null,{createBoard:function(t){var e=t.title;return function(){var t=Object(M.a)(z.a.mark((function t(r){var n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.post("/board",{title:e});case 3:n=t.sent,r({type:x,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r({type:y,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},addList:function(t){var e=t.boardId,r=t.name;return function(){var t=Object(M.a)(z.a.mark((function t(n){var a;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.put("/board/".concat(e,"/list"),{boardId:e,name:r});case 3:a=t.sent,n({type:D,payload:a.data.lists}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:B,payload:{msg:t.t0,status:t.t0}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){var e=t.boardId,r=t.item,a=t.createBoard,i=t.addList,d=c.a.useState(""),s=Object(K.a)(d,2),o=s[0],l=s[1],u=c.a.useState(!1),b=Object(K.a)(u,2),p=b[0],f=b[1],j=c.a.useRef();J(j,(function(){p&&f(!1)}));var O=function(t){"board"===r&&a({title:t}),"list"===r&&e&&i({boardId:e,name:t}),l("")};return p?Object(n.jsxs)("div",{ref:j,className:"add-item",children:[Object(n.jsx)("input",{type:"text",value:o,autoFocus:!0,placeholder:r.slice(0,1).toUpperCase()+r.slice(1)+" name",onKeyDown:function(t){"Enter"===t.key&&O(o)},onChange:function(t){return l(t.target.value)}}),Object(n.jsxs)("button",{className:"add-item-button",onClick:function(){o&&(O(o),f(!p))},children:["Add another ",r]})]}):Object(n.jsxs)("button",{className:"add-item-hidden",onClick:function(){f(!p)},children:["Add another ",r]})}))),X=(r(77),function(){return Object(n.jsx)("div",{className:"spinner-wrapper",children:Object(n.jsx)("div",{className:"loader",children:"Loading..."})})});r(78);function q(){return(q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function Q(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var Y=a.createElement("rect",{x:4,width:2,height:10,fill:"#A9ACBF"}),Z=a.createElement("rect",{y:6,width:2,height:10,transform:"rotate(-90 0 6)",fill:"#A9ACBF"});function $(t,e){var r=t.title,n=t.titleId,c=Q(t,["title","titleId"]);return a.createElement("svg",q({width:16,height:16,viewBox:"0 0 10 10",fill:"none",ref:e,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,Y,Z)}var tt=a.forwardRef($),et=(r.p,function(t){var e=t.boardId,r=t.title,a=t.onBoardClick;return Object(n.jsxs)("div",{className:"board",children:[Object(n.jsx)(s.b,{className:"board__link",to:"/board/".concat(e),children:Object(n.jsx)("h3",{children:r})}),Object(n.jsx)("button",{className:"delete-list--button",onClick:function(){return a()},children:Object(n.jsx)("span",{className:"delete-list--icon",children:Object(n.jsx)(tt,{})})})]})});function rt(){return(rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function nt(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var at=a.createElement("path",{d:"M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"});function ct(t,e){var r=t.title,n=t.titleId,c=nt(t,["title","titleId"]);return a.createElement("svg",rt({width:24,height:24,viewBox:"0 0 24 24",fill:"red",ref:e,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,at)}var it=a.forwardRef(ct),dt=(r.p,r(80),function(){return Object(n.jsxs)("div",{className:"error",children:[Object(n.jsx)(it,{}),Object(n.jsx)("h3",{children:"Some troubles with the server."})]})}),st=Object(b.b)((function(t){return{boards:t.boards}}),{getBoards:function(){return function(){var t=Object(M.a)(z.a.mark((function t(e){var r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:v,payload:[]}),t.next=4,W.get("/board/all");case 4:r=t.sent,e({type:h,payload:r.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:I,payload:[]});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},removeBoard:function(t){var e=t.boardId;return function(){var t=Object(M.a)(z.a.mark((function t(r){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.delete("/board/".concat(e));case 3:r({type:m,payload:{boardId:e}}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),r({type:y,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){var e=t.boards,r=e.boards,a=e.loading,i=e.error,d=t.getBoards,s=t.removeBoard;return c.a.useEffect((function(){d()}),[d]),a?Object(n.jsx)(X,{}):i?Object(n.jsx)(dt,{}):Object(n.jsxs)("div",{className:"boards",children:[r.map((function(t){var e=t.boardId,r=t.title;return Object(n.jsx)(et,{boardId:e,title:r,onBoardClick:function(){return s({boardId:e})}},e)})),Object(n.jsx)(G,{item:"board"})]})})),ot=r(14),lt=(r(81),r(82),r(83),function(t){var e=t.type,r=t.children,a=t.onValueChange,i=t.onItemDelete,d=c.a.useState({value:String(r),subValue:String(r),isEditing:!1}),s=Object(K.a)(d,2),o=s[0],l=s[1],u=function(){var t=o.value,r=o.subValue,n=o.isEditing;t&&r!==t&&a({type:e,value:t}),l(Object(O.a)(Object(O.a)({},o),{},{subValue:t,isEditing:!n}))},b=function(){i({type:e})},p=o.value,f=o.isEditing,j=Object(n.jsxs)("div",{className:"card-text__body",children:[Object(n.jsx)("div",{className:f?"card-text__inner active":"card-text__inner",onClick:function(){return f?null:l(Object(O.a)(Object(O.a)({},o),{},{isEditing:!f}))},children:r}),Object(n.jsx)("button",{onClick:b,className:"delete-item--button",children:Object(n.jsx)("span",{className:"delete-item--icon",children:Object(n.jsx)(tt,{})})})]}),v=Object(n.jsxs)("div",{className:"list-title__body",children:[Object(n.jsx)("h3",{onClick:function(){return f?null:l(Object(O.a)(Object(O.a)({},o),{},{isEditing:!f}))},children:r}),Object(n.jsx)("button",{className:"delete-item--button",onClick:b,children:Object(n.jsx)("span",{className:"delete-item--icon",children:Object(n.jsx)(tt,{})})})]});return Object(n.jsx)("div",{className:"list"===e?"list-title":"card-text",children:f?Object(n.jsx)("input",{maxLength:24,value:p,onKeyDown:function(t){if("Escape"===t.key){var e=o.subValue,r=o.isEditing;l(Object(O.a)(Object(O.a)({},o),{},{value:e,isEditing:!r}))}"Enter"===t.key&&u()},onBlur:u,onChange:function(t){return l(Object(O.a)(Object(O.a)({},o),{},{value:t.target.value}))},autoFocus:!0,onFocus:function(t){return t.target.select()},type:"text"}):"list"===e?v:j})}),ut=(r(84),function(t){var e=t.index,r=t.cardId,a=t.text,c=t.onValueChange,i=t.onItemDelete;return Object(n.jsx)(ot.b,{draggableId:r,index:e,children:function(t){return Object(n.jsx)("div",Object(O.a)(Object(O.a)(Object(O.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(n.jsx)(lt,{type:"card",onValueChange:function(t){return c(Object(O.a)({cardId:r},t))},onItemDelete:function(t){return i(Object(O.a)({cardId:r},t))},children:a})}))}})});r(85);function bt(){return(bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function pt(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var ft=a.createElement("rect",{x:4,width:2,height:10,fill:"#A9ACBF"}),jt=a.createElement("rect",{y:6,width:2,height:10,transform:"rotate(-90 0 6)",fill:"#A9ACBF"});function Ot(t,e){var r=t.title,n=t.titleId,c=pt(t,["title","titleId"]);return a.createElement("svg",bt({width:10,height:10,viewBox:"0 0 10 10",fill:"none",ref:e,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,ft,jt)}var vt=a.forwardRef(Ot),ht=(r.p,Object(b.b)(null,{addCardItem:function(t){var e=t.boardId,r=t.listId,n=t.text;return function(){var t=Object(M.a)(z.a.mark((function t(a){var c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.put("/board/".concat(e,"/list/").concat(r,"/card"),{text:n});case 3:c=t.sent,a({type:E,payload:c.data.lists}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:C,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){var e=t.boardId,r=t.listId,a=t.addCardItem,i=c.a.useState(""),d=Object(K.a)(i,2),s=d[0],o=d[1],l=c.a.useState(!1),u=Object(K.a)(l,2),b=u[0],p=u[1],f=c.a.useRef();J(f,(function(){b&&p(!1)}));var j=function(t,r){a({boardId:e,listId:t,text:r})};return Object(n.jsxs)("div",{className:"add-card-item",ref:f,children:[b?Object(n.jsx)("input",{type:"text",onKeyDown:function(t){"Enter"===t.key&&(j(r,s),o(""))},value:s,placeholder:"Card text",onChange:function(t){return o(t.target.value)}}):null,Object(n.jsxs)("button",{className:"add-card-button",onClick:function(){b?s&&(j(r,s),o("")):p(!b)},children:[Object(n.jsx)("span",{className:"add-card--icon",children:Object(n.jsx)(vt,{})}),"Add another card"]})]})}))),It=function(t){var e=t.cards,r=t.boardId,a=t.listId,i=t.title,d=t.index,s=t.onValueChange,o=t.onItemDelete,l=e?Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(lt,{type:"list",onValueChange:function(t){return s(Object(O.a)({listId:a},t))},onItemDelete:function(t){return o(Object(O.a)({listId:a},t))},children:i}),Object(n.jsx)("div",{className:"list-item-inner",children:e.map((function(t,e){return t?Object(n.jsx)(ut,{cardId:t.cardId,text:t.text,index:e,onValueChange:function(t){return s(Object(O.a)({listId:a},t))},onItemDelete:function(t){return o(Object(O.a)({listId:a},t))}},t.cardId):null}))})]}):null;return Object(n.jsx)(ot.b,{draggableId:a,index:d,children:function(t){return Object(n.jsx)("div",Object(O.a)(Object(O.a)(Object(O.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:Object(n.jsx)(ot.c,{droppableId:a,children:function(t){return Object(n.jsxs)("div",Object(O.a)(Object(O.a)({ref:t.innerRef},t.droppableProps),{},{className:"list-item",children:[l,t.placeholder,Object(n.jsx)(ht,{boardId:r,listId:a})]}))}})}))}})},xt=Object(b.b)((function(t){return{board:t.board}}),{moveCardItem:function(t){var e=t.boardId,r=t.droppableIdStart,n=t.droppableIdEnd,a=t.droppableIndexStart,c=t.droppableIndexEnd,i=t.draggableId,d=t.type;return function(){var t=Object(M.a)(z.a.mark((function t(s){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:g,payload:{boardId:e,droppableIdStart:r,droppableIdEnd:n,droppableIndexStart:a,droppableIndexEnd:c,draggableId:i,type:d}}),t.prev=1,t.next=4,W.put("/board/drag/".concat(e),{droppableIdStart:r,droppableIdEnd:n,droppableIndexStart:a,droppableIndexEnd:c,type:d});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},getLists:function(t){var e=t.boardId;return function(){var t=Object(M.a)(z.a.mark((function t(r){var n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:R,payload:{}}),t.next=4,W.get("/board/".concat(e));case 4:n=t.sent,r({type:_,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r({type:S,payload:{}});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},editCardItem:function(t){var e=t.boardId,r=t.listId,n=t.cardId,a=t.text;return function(){var t=Object(M.a)(z.a.mark((function t(c){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:w,payload:{boardId:e,listId:r,cardId:n,text:a}}),t.prev=1,t.next=4,W.put("/board/update/".concat(e,"/list/").concat(r,"/card/").concat(n),{text:a});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),c({type:C,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},editListItem:function(t){var e=t.boardId,r=t.listId,n=t.name;return function(){var t=Object(M.a)(z.a.mark((function t(a){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:N,payload:{boardId:e,listId:r,name:n}}),t.prev=1,t.next=4,W.put("/board/update/".concat(e,"/list/").concat(r),{name:n});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),a({type:B,payload:{msg:t.t0,status:t.t0}});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},removeCardItem:function(t){var e=t.boardId,r=t.listId,n=t.cardId;return function(){var t=Object(M.a)(z.a.mark((function t(a){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:k,payload:{listId:r,cardId:n}}),t.prev=1,t.next=4,W.delete("/board/".concat(e,"/list/").concat(r,"/card/").concat(n));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),a({type:C,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},removeListItem:function(t){var e=t.boardId,r=t.listId;return function(){var t=Object(M.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:A,payload:{listId:r}}),t.prev=1,t.next=4,W.delete("/board/".concat(e,"/list/").concat(r));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),n({type:B,payload:{msg:t.t0,status:t.t0}});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){var e=t.boardId,r=t.board,a=t.moveCardItem,i=t.getLists,d=t.editCardItem,s=t.editListItem,o=t.removeCardItem,l=t.removeListItem;c.a.useEffect((function(){i({boardId:e})}),[i,e]);if(!r.lists)return Object(n.jsx)(dt,{});if(r.loading)return Object(n.jsx)(X,{});return Object(n.jsx)(ot.a,{onDragEnd:function(t){var r=t.destination,n=t.source,c=t.draggableId,i=t.type;r&&a({boardId:e,droppableIdStart:n.droppableId,droppableIdEnd:r.droppableId,droppableIndexStart:n.index,droppableIndexEnd:r.index,draggableId:c,type:i})},children:Object(n.jsxs)("div",{className:"board-page",children:[Object(n.jsx)("h2",{children:r.title}),Object(n.jsx)(ot.c,{droppableId:"all-lists",direction:"horizontal",type:"list",children:function(t){return Object(n.jsxs)("div",Object(O.a)(Object(O.a)({className:"lists"},t.droppableProps),{},{ref:t.innerRef,children:[r.lists.map((function(t,r){var a=t.listId,c=t.cards,i=t.name;return Object(n.jsx)(It,{listId:a,boardId:e,cards:c,title:i,index:r,onValueChange:function(t){return function(t){var e=t.type;if("list"===e){var r=t.boardId,n=t.listId,a=t.value;s({boardId:r,listId:n,name:a})}if("card"===e){var c=t.boardId,i=t.listId,o=t.cardId,l=t.value;if(!o)return;d({boardId:c,listId:i,cardId:o,text:l})}}(Object(O.a)({boardId:e},t))},onItemDelete:function(t){return function(t){var e=t.type;if("list"===e){var r=t.boardId,n=t.listId;l({boardId:r,listId:n})}if("card"===e){var a=t.boardId,c=t.listId,i=t.cardId;if(!i)return;o({boardId:a,listId:c,cardId:i})}}(Object(O.a)({boardId:e},t))}},a)})),t.placeholder,Object(n.jsx)(G,{item:"list",boardId:e})]}))}})]})})})),mt=(r(86),function(){var t="/"!==Object(o.f)().pathname?Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)("button",{children:Object(n.jsx)("svg",{id:"Layer",enableBackground:"new 0 0 64 64",height:"24",viewBox:"0 0 64 64",width:"24",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fill:"#7A8193",d:"m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"})})})}):null;return Object(n.jsxs)("nav",{className:"nav",children:[t,Object(n.jsx)(s.b,{className:"nav__link",to:"/",children:Object(n.jsx)("h1",{children:"Task Manager"})})]})}),yt=function(){return Object(n.jsx)(b.a,{store:F,children:Object(n.jsx)(l.a,{backend:u.a,children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(mt,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",component:st,exact:!0}),Object(n.jsx)(o.a,{path:"/board/:id",render:function(t){var e=t.match.params.id;return Object(n.jsx)(xt,{boardId:e})}}),Object(n.jsx)(o.a,{component:dt})]})]})})})};d.a.render(Object(n.jsx)(yt,{}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.b87689de.chunk.js.map