(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__pyNXF",Modal:"Modal_Modal__I9_B0"}},22:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__1m-iC"}},23:function(e,a,t){e.exports={Button:"Button_Button__34aoG"}},25:function(e,a,t){e.exports={App:"App_App__2M7-c"}},27:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(11),i=t(3),s=t(4),u=t(6),m=t(5),h=t(7),d=t(8),p=t.n(d),g=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={query:""},t.handleChange=function(e){t.setState({query:e.target.value})},t.handleSubmite=function(e){e.preventDefault(),t.props.onSubmit(t.state.query),t.setState({query:""})},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:p.a.Searchbar},r.a.createElement("form",{className:p.a.SearchForm,onSubmit:this.handleSubmite},r.a.createElement("button",{type:"submit",className:p.a.SearchForm_button},r.a.createElement("span",{className:p.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:p.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),a}(n.Component),_=t(9),f=t.n(_),y=function(e){var a=e.data,t=e.onClick;return r.a.createElement("li",{onClick:t,className:f.a.ImageGalleryItem},r.a.createElement("img",{src:a.webformatURL,id:a.id,alt:a.tags,className:f.a.ImageGalleryItem_image}))},b=t(22),v=t.n(b),S=function(e){var a=e.images,t=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:v.a.ImageGallery},a.length>0&&a.map(function(e){return r.a.createElement(y,{data:e,key:e.id,onClick:t})})))},O=t(23),I=t.n(O),E=function(e){var a=e.onLoadMore;return r.a.createElement("button",{className:I.a.Button,onClick:a},"Load More")},M=t(24),k=t.n(M),j=(t(53),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})}}]),a}(r.a.Component)),C=t(10),w=t.n(C),F=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.handleCloseModal=function(e){var a=t.props.onClick;"Escape"===e.code&&a()},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModal)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleCloseModal)}},{key:"render",value:function(){var e=this.props,a=e.onClick,t=e.children;return r.a.createElement("div",{className:w.a.Overlay,onClick:a},r.a.createElement("div",{className:w.a.Modal},t))}}]),a}(n.Component),q=t(25),L=t.n(q),N=t(26),G=t.n(N),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return G.a.get("".concat("https://pixabay.com/api/?q=").concat(e,"&page=").concat(a,"&key=").concat("15807739-09fa85d701810a3ee4e99cc27").concat("&image_type=photo&orientation=horizontal&per_page=12"))},x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={images:[],query:"",page:1,isLOading:!1,isModal:!1,idImage:""},t.fetchImages=function(){var e=t.state,a=e.images,n=e.query,r=e.page,o=document.documentElement.scrollHeight,c=r>1?o:0;t.setState({isLOading:!0}),B(n,r).then(function(e){var n=e.data;t.setState({images:[].concat(Object(l.a)(a),Object(l.a)(n.hits))})}).catch(function(e){return console.error(e)}).finally(function(){t.setState({isLOading:!1}),window.scrollTo({top:c,behavior:"smooth"})})},t.handleOnSubmit=function(e){t.setState({images:[],query:e,page:1})},t.loadMore=function(){var e=t.state.page;t.setState({page:e+1})},t.getLargeURL=function(){var e=t.state,a=e.images,n=e.idImage,r=e.isModal,o=a.find(function(e){return e.id===Number(n)});return r?o.largeImageURL:""},t.openModal=function(e){t.setState({isModal:!0,idImage:e.target.id})},t.closeModal=function(){t.setState({isModal:!1})},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.query,r=t.page;a.page===r&&a.query===n||""!==n&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLOading,n=e.isModal;return r.a.createElement("div",{className:L.a.App},r.a.createElement(g,{onSubmit:this.handleOnSubmit}),r.a.createElement(S,{images:a,onClick:this.openModal}),t&&r.a.createElement(j,null),a.length>0&&r.a.createElement(E,{onLoadMore:this.loadMore}),n&&r.a.createElement(F,{onClick:this.closeModal},r.a.createElement("img",{src:this.getLargeURL(),alt:""})))}}]),a}(n.Component);c.a.render(r.a.createElement(x,null),document.querySelector("#root"))},8:function(e,a,t){e.exports={Searchbar:"SearchBar_Searchbar__38E1X",SearchForm:"SearchBar_SearchForm__3-XDx",SearchForm_button:"SearchBar_SearchForm_button__2qB_q",SearchForm_button_label:"SearchBar_SearchForm_button_label__309QN",SearchForm_input:"SearchBar_SearchForm_input__1kz4n"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1uqOI",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__2gAVc"}}},[[27,1,2]]]);
//# sourceMappingURL=main.e43ec748.chunk.js.map