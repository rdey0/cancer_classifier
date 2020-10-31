(this.webpackJsonpbreast_cancer_svm=this.webpackJsonpbreast_cancer_svm||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(8),r=a.n(i),o=(a(21),a(14)),l=a(3),h=a(4),d=a(6),j=a(5),p=(a(22),a.p+"static/media/graph.8f78b8bb.png"),b=a(2),u=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={value:e.variable_name},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){var t=this,a=this.props.id,n=e.target.value;this.setState({value:n},(function(){t.props.onChange(a,n)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"selector-container",children:[Object(n.jsx)("div",{className:"control-label",children:this.props.label}),Object(n.jsxs)("select",{className:"selector",value:this.state.value,onChange:this.handleChange,children:[Object(n.jsx)("option",{value:"mean concavity",children:"Mean Concavity"}),Object(n.jsx)("option",{value:"mean texture",children:"Mean Texture"}),Object(n.jsx)("option",{value:"mean compactness",children:"Mean Compactness"}),Object(n.jsx)("option",{value:"worst concavity",children:"Worst Concavity"}),Object(n.jsx)("option",{value:"worst texture",children:"Worst Texture"}),Object(n.jsx)("option",{value:"worst compactness",children:"Worst Compactness"})]})]})}}]),a}(c.a.Component),m=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={value:e.value},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){var t=this,a=this.props.id,n=e.target.value;this.setState({value:n},(function(){t.props.onChange(a,n)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"slide-container",children:[Object(n.jsx)("div",{className:"control-label",children:this.props.label}),Object(n.jsx)("input",{id:this.props.id,className:"slider",type:"range",min:this.props.min,max:this.props.max,value:this.props.value,onChange:this.handleChange})]})}}]),a}(c.a.Component);function g(e){return Object(n.jsxs)("div",{className:"App-header",children:[Object(n.jsx)("div",{className:"title-container",children:Object(n.jsx)("div",{className:"header-title",children:"Cancer Classifier"})}),Object(n.jsx)("div",{className:"header-item",onClick:e.showModal,children:Object(n.jsx)("div",{children:"Tutorial"})}),Object(n.jsx)("div",{className:"header-item",children:Object(n.jsx)("a",{href:e.src,download:!0,children:Object(n.jsx)("div",{children:"Download Graph"})})})]})}var v=a.p+"static/media/loading_indicator.fef9519a.svg";function O(e){return Object(n.jsxs)("div",{className:"plot",children:[e.isLoading&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"loading-indicator",children:Object(n.jsx)("img",{src:v,alt:"loading"})}),Object(n.jsx)("div",{className:"graph-overlay"})]}),Object(n.jsx)("img",{className:"graph",src:e.src,alt:"graph"})]})}var x=a(15),f=a.n(x),_={overlay:{backgroundColor:"rgba(136, 136, 136, 0.7)"},content:{height:"50%",width:"40%",border:"none",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",margin:"auto auto",overflow:"hidden"}};function y(e){return e.pages.filter((function(t,a){return a===e.pageNum-1})).map((function(e,t){return Object(n.jsx)("div",{className:"onboarding-content-container",children:Object(n.jsx)(e,{})},t)}))}var w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={modal_open:e.showModal,step_num:1,pages:e.pages,total_steps:e.pages.length},n.close_modal=n.close_modal.bind(Object(b.a)(n)),n.next_page=n.next_page.bind(Object(b.a)(n)),n.previous_page=n.previous_page.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"close_modal",value:function(){this.setState({modal_open:!1})}},{key:"next_page",value:function(){var e=this.state.step_num;e<this.state.total_steps&&this.setState({step_num:e+1})}},{key:"previous_page",value:function(){var e=this.state.step_num;e>1&&this.setState({step_num:e-1})}},{key:"render",value:function(){return Object(n.jsxs)(f.a,{isOpen:this.props.showModal,style:_,ariaHideApp:!1,children:[Object(n.jsxs)("div",{className:"onboarding-controls",children:[Object(n.jsx)("div",{className:"step-container",children:Object(n.jsxs)("div",{children:["Step ",this.state.step_num," / ",this.state.total_steps]})}),Object(n.jsxs)("div",{className:"change-page-container",children:[this.state.step_num>1&&Object(n.jsx)("div",{className:"change-page-back",onClick:this.previous_page,children:"Back"}),this.state.step_num<this.state.total_steps?Object(n.jsx)("div",{className:"change-page-next",onClick:this.next_page,children:"Next"}):Object(n.jsx)("div",{className:"change-page-next",onClick:this.props.closeModal,children:"Done"})]})]}),Object(n.jsx)(y,{pages:this.state.pages,pageNum:this.state.step_num})]})}}]),a}(c.a.Component);var N=[function(){return Object(n.jsxs)("div",{className:"onboarding-content",children:[Object(n.jsx)("h2",{children:"What is This?"}),Object(n.jsx)("p",{children:"Create your own machine learning model and have it classify cancer positive and cancer negative patients by drawing boundaries between the two"})]})},function(){return Object(n.jsxs)("div",{className:"onboarding-content",children:[Object(n.jsx)("h2",{children:"First Choose Your Data"}),Object(n.jsxs)("p",{children:["You can choose your ",Object(n.jsx)("b",{children:"X Variable"})," and ",Object(n.jsx)("b",{children:"Y Variable"})," data sets on the control panel to the right of the graph"]}),Object(n.jsx)("p",{children:"This is the data your machine learning model will learn from"}),Object(n.jsx)("p",{children:"Don't worry about which data set is the x variable and which is the y, the only thing that matters is the combination!"})]})},function(){return Object(n.jsxs)("div",{className:"onboarding-content",children:[Object(n.jsx)("h2",{children:"Choose Parameters"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Cost: "}),"Determines how heavily to punish your model for incorrectly classifying data points. The higher the cost, the greater the punishment."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Degree: "}),"Determines how flexible the decision boundary can be. The higher the degree, the 'curvier' the separating line may appear."]})]})},function(){return Object(n.jsxs)("div",{className:"onboarding-content",children:[Object(n.jsx)("h2",{children:"Update the Graph"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Graph: "}),"Creates your custom model which draws lines between cancer positive and cancer negative patients"]}),Object(n.jsx)("p",{children:"Blue regions are where your model thinks cancer positive patients are and red regions are where your model thinks cancer negative patients are"})]})},function(){return Object(n.jsxs)("div",{className:"onboarding-content",children:[Object(n.jsx)("h2",{children:"That's it!"}),Object(n.jsx)("p",{children:"Check out the updated graph and see how well you did"}),Object(n.jsx)("p",{children:"The higher the model accuracy, the better your model was able to predict the presence of cancer!"})]})}],C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={plot_src:p,x_var:"mean concavity",y_var:"worst concavity",degree:"1",cost:"1",model_accuracy:0,graph_loading:!1,show_modal:!1},e.handle_modal_open=function(){console.log("open modal"),e.setState({show_modal:!0})},e.handle_modal_close=function(){e.setState({show_modal:!1})},e.handle_field_change=function(t,a){e.setState(Object(o.a)({},t,a),(function(){console.log("app state:",e.state)}))},e.update_accuracy=function(){fetch("/accuracy",{headers:{"Content-Type":"application/json;charset=utf-8"},method:"GET"}).then((function(e){return e.json()})).then((function(t){var a=(100*parseFloat(t.accuracy)).toPrecision(4);e.setState({model_accuracy:a})}))},e.refresh_graph=function(){var t={headers:{"Content-Type":"application/json;charset=utf-8"},method:"POST",body:JSON.stringify(e.state),redirect:"follow"};e.setState({graph_loading:!0}),fetch("/graph",t).then((function(e){return e.blob()})).then((function(t){e.setState({plot_src:URL.createObjectURL(t)}),e.update_accuracy(),e.setState({graph_loading:!1})})).catch((function(e){return console.log("Error:",e)}))},e.optimize_graph=function(){var t={headers:{"Content-Type":"application/json;charset=utf-8"},method:"POST",body:JSON.stringify(e.state),redirect:"follow"};e.setState({graph_loading:!0}),fetch("/optimize_graph",t).then((function(e){return e.json()})).then((function(t){e.setState({degree:t.best_degree,cost:t.best_cost},(function(){e.refresh_graph(),console.log(e.state)}))})).catch((function(e){return console.log("Error:",e)}))},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(g,{src:this.state.plot_src,showModal:this.handle_modal_open}),Object(n.jsx)(w,{showModal:this.state.show_modal,pages:N,closeModal:this.handle_modal_close}),Object(n.jsxs)("div",{className:"gui-container",children:[Object(n.jsxs)("div",{className:"svm-display",children:[Object(n.jsx)(O,{src:this.state.plot_src,isLoading:this.state.graph_loading}),Object(n.jsxs)("div",{className:"graph-info-container",children:[Object(n.jsxs)("div",{className:"info-item",children:[Object(n.jsx)("div",{className:"control-label",children:" Model Accuracy"}),Object(n.jsxs)("div",{className:"metric",children:[this.state.model_accuracy,"%"]})]}),Object(n.jsxs)("div",{className:"info-item",children:[Object(n.jsx)("div",{className:"control-label",children:" Degree"}),Object(n.jsx)("div",{className:"metric",children:this.state.degree})]}),Object(n.jsxs)("div",{className:"info-item",children:[Object(n.jsx)("div",{className:"control-label",children:" Cost"}),Object(n.jsx)("div",{className:"metric",children:this.state.cost})]})]})]}),Object(n.jsxs)("div",{className:"controls",children:[Object(n.jsx)(u,{label:"X Variable",id:"x_var",variable_name:"mean concavity",onChange:this.handle_field_change}),Object(n.jsx)(u,{label:"Y Variable",id:"y_var",variable_name:"worst concavity",onChange:this.handle_field_change}),Object(n.jsx)(m,{label:"Degree",id:"degree",min:"1",max:"5",onChange:this.handle_field_change,value:this.state.degree}),Object(n.jsx)(m,{label:"Cost",id:"cost",min:"1",max:"10",onChange:this.handle_field_change,value:this.state.cost}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("div",{className:"update-graph",onClick:this.refresh_graph,children:"Graph"})})]})]})]})}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c223fd17.chunk.js.map