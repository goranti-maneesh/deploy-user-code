(this["webpackJsonpjobby-app"]=this["webpackJsonpjobby-app"]||[]).push([[0],{39:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(30),i=a.n(c),r=a(7),o=a(4),l=a(14),j=a(17),m=a(8),b=a(9),d=a(11),u=a(10),p=a(6),h=a.n(p),g=(a(39),a(1)),O=function(e){function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={username:"",password:"",errorMsgStatus:!1,errorMessage:""},e.onChangeUsername=function(t){console.log(t.target.value),e.setState({username:t.target.value})},e.onChangePassword=function(t){console.log(t.target.value),e.setState({password:t.target.value})},e.onSubmissonSuccessful=function(t){var a=e.props.history;h.a.set("jwt_token",t,{expires:30,path:"/"}),a.replace("/")},e.onSubmissionFailure=function(t){e.setState({errorMsgStatus:!0,errorMessage:t}),console.log(t)},e.fromSubmitted=function(){var t=Object(j.a)(Object(l.a)().mark((function t(a){var n,s,c,i,r,o,j;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,s=n.username,c=n.password,i={username:s,password:c},"https://apis.ccbp.in/login",r={method:"POST",body:JSON.stringify(i)},t.next=7,fetch("https://apis.ccbp.in/login",r);case 7:return o=t.sent,t.next=10,o.json();case 10:j=t.sent,!0===o.ok?e.onSubmissonSuccessful(j.jwt_token):(console.log(j.error_msg),e.onSubmissionFailure(j.error_msg));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.errorMsgStatus,s=e.errorMessage;return void 0!==h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/"}):Object(g.jsxs)("div",{className:"bg-login-container",children:[Object(g.jsx)("p",{className:"text",children:"UserName : rahul"}),Object(g.jsx)("p",{className:"text",children:"Password : rahul@2021"}),Object(g.jsxs)("form",{className:"login-form",type:"submit",onSubmit:this.fromSubmitted,children:[Object(g.jsx)("img",{className:"logo-image",src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",alt:"website logo"}),Object(g.jsxs)("div",{className:"input-container",children:[Object(g.jsxs)("div",{className:"input-details-container",children:[Object(g.jsx)("label",{className:"input-lable",htmlFor:"username",children:"USERNAME"}),Object(g.jsx)("input",{type:"text",className:"input-text",id:"username",onChange:this.onChangeUsername,value:t,placeholder:"Username"})]}),Object(g.jsxs)("div",{className:"input-details-container",children:[Object(g.jsx)("label",{className:"input-lable",htmlFor:"password",children:"PASSWORD"}),Object(g.jsx)("input",{type:"text",className:"input-text",id:"password",onChange:this.onChangePassword,value:a,placeholder:"Password"})]})]}),Object(g.jsxs)("div",{className:"button-container",children:[Object(g.jsx)("button",{className:"login-btn",type:"submit",onClick:this.fromSubmitted,children:"Login"}),n&&Object(g.jsx)("p",{className:"error-msg",children:s})]})]})]})}}])}(n.Component),x=O,f=(a(46),Object(o.g)((function(e){return Object(g.jsxs)("div",{className:"header-container",children:[Object(g.jsx)(r.b,{to:"/",className:"link",children:Object(g.jsx)("img",{className:"header-logo-image",src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",alt:"website logo"})}),Object(g.jsx)("div",{className:"options-container-one",children:Object(g.jsxs)("ul",{className:"options-container",children:[Object(g.jsx)(r.b,{to:"/",className:"link",children:Object(g.jsx)("li",{className:"header-text",children:"Home"})}),Object(g.jsx)(r.b,{to:"/jobs",className:"link",children:Object(g.jsx)("li",{className:"header-text",children:"Jobs"})})]})}),Object(g.jsx)("div",{className:"options-container-two",children:Object(g.jsx)("button",{className:"logout-btn",type:"button",onClick:function(){var t=e.history;console.log(t),h.a.remove("jwt_token"),t.replace("/login")},children:"Logout"})})]})}))),y=(a(47),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,t,arguments)}return Object(u.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsx)(f,{}),Object(g.jsx)("div",{className:"home-page",children:Object(g.jsxs)("div",{className:"home-page-text",children:[Object(g.jsx)("h1",{className:"home-heading",children:"Find The Job That Fits Your Life"}),Object(g.jsx)("p",{className:"home-text",children:"Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential."}),Object(g.jsx)(r.b,{to:"/jobs",children:Object(g.jsx)("button",{className:"find-jobs-btn",type:"button",children:"Find Jobs"})})]})})]})}}])}(n.Component)),N=y,v=a(33),S=a(20),k=a.n(S),w=a(18),I=a(21),D=a(22),L=(a(66),function(e){function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).onClickJobItemDetails=function(e){console.log(e.target.value)},e}return Object(u.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.jobitemDetails,t=e.companyLogoUrl,a=e.employmentType,n=e.jobDescription,s=e.location,c=e.packagePerAnnum,i=e.rating,o=e.title,l=e.id;return Object(g.jsx)(r.b,{to:"/jobs/".concat(l),className:"link",children:Object(g.jsxs)("li",{className:"job-details-container",children:[Object(g.jsxs)("div",{className:"logo-title-rating-container",children:[Object(g.jsx)("img",{className:"logo",alt:"job details company logo",src:t}),Object(g.jsxs)("div",{className:"title-rating-container",children:[Object(g.jsx)("h1",{className:"title-heading",children:o}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)(w.a,{className:"star-rating"}),Object(g.jsx)("p",{className:"rating-text",children:i})]})]})]}),Object(g.jsxs)("div",{className:"location-internship-salary-container",children:[Object(g.jsxs)("div",{className:"location-internship-container",children:[Object(g.jsxs)("div",{className:"employment-location-container",children:[Object(g.jsx)(I.a,{className:"location-icon"}),Object(g.jsx)("p",{className:"employment-location-text",children:s})]}),Object(g.jsxs)("div",{className:"employment-type-container",children:[Object(g.jsx)(D.b,{}),Object(g.jsx)("p",{className:"employment-location-text",children:a})]})]}),Object(g.jsx)("p",{className:"package-text",children:c})]}),Object(g.jsx)("hr",{className:"line"}),Object(g.jsx)("h1",{className:"description-heading",children:"Description"}),Object(g.jsx)("p",{className:"description-para",children:n})]})})}}])}(n.Component)),_=L,T=(a(67),[{label:"Full Time",employmentTypeId:"FULLTIME"},{label:"Part Time",employmentTypeId:"PARTTIME"},{label:"Freelance",employmentTypeId:"FREELANCE"},{label:"Internship",employmentTypeId:"INTERNSHIP"}]),R=function(e){function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).getEmpTypeList=function(){return T.map((function(t){var a=e.props.employmentSelected;return Object(g.jsxs)("li",{onChange:function(e){return a(e.target.value)},children:[Object(g.jsx)("input",{className:"emp-check-box",type:"checkbox",id:t.employmentTypeId,name:t.employmentTypeId,value:t.employmentTypeId}),Object(g.jsx)("label",{className:"emp-type-lable",htmlFor:t.employmentTypeId,children:t.label})]},t.employmentTypeId)}))},e}return Object(u.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{children:this.getEmpTypeList()})}}])}(n.Component),C=R,J=(a(68),[{salaryRangeId:"1000000",label:"10 LPA and above"},{salaryRangeId:"2000000",label:"20 LPA and above"},{salaryRangeId:"3000000",label:"30 LPA and above"},{salaryRangeId:"4000000",label:"40 LPA and above"}]),F=function(e){function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).getSalaryRangeList=function(){return J.map((function(t){var a=e.props,n=a.salarayRangeSelected,s=a.salaryRange;console.log("getSalaryRangeList",s);return Object(g.jsxs)("li",{onChange:function(e){return n(e.target.value)},children:[Object(g.jsx)("input",{className:"emp-check-box",type:"radio",id:t.salaryRangeId,name:"Salary",value:t.salaryRangeId}),Object(g.jsx)("label",{className:"emp-type-lable",htmlFor:t.salaryRangeId,children:t.label})]},t.salaryRangeId)}))},e}return Object(u.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{children:this.getSalaryRangeList()})}}])}(n.Component),A=F,P=(a(69),"FAILURE"),U="SUCCESS",E="INITIAL",V="LOADING",M=function(e){function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={profileStatus:E},e.getprofileDetails=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i,r;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({profileStatus:V}),t.prev=1,"https://apis.ccbp.in/profile",a=h.a.get("jwt_token"),n={method:"GET",headers:{Authorization:"Bearer ".concat(a)}},t.next=7,fetch("https://apis.ccbp.in/profile",n);case 7:return s=t.sent,t.next=10,s.json();case 10:c=t.sent,i=c.profile_details,r={name:i.name,profileImageUrl:i.profile_image_url,shortBio:i.short_bio},e.setState({profileDetails:r,profileStatus:U}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0),e.setState({profileStatus:P});case 20:case"end":return t.stop()}}),t,null,[[1,16]])}))),e.renderProfileSuccess=function(){var t=e.state.profileDetails,a=t.name,n=t.profileImageUrl,s=t.shortBio;return Object(g.jsxs)("div",{className:"profile-container",children:[Object(g.jsx)("img",{className:"profile-image",alt:"profile",src:n}),Object(g.jsx)("h1",{className:"profile-name",children:a}),Object(g.jsx)("p",{className:"profile-description",children:s})]})},e.onClickRetry=function(){e.renderProfileSuccess()},e.renderProfileFailure=function(){return Object(g.jsx)("div",{className:"profile-failuer-container",children:Object(g.jsx)("button",{className:"retry-btn",type:"button",onClick:e.onClickRetry,children:"Retry"})})},e.renderLoading=function(){return Object(g.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(g.jsx)(k.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderProfilePage=function(){var t=e.state.profileStatus;switch(console.log(t),t){case U:return e.renderProfileSuccess();case P:return e.renderProfileFailure();case V:return e.renderLoading();default:return null}},e}return Object(u.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getprofileDetails()}},{key:"render",value:function(){return Object(g.jsx)("div",{children:this.renderProfilePage()})}}])}(n.Component),W=M,B=(a(70),"FAILURE"),G="INITIAL",z="SUCCESS",K="IN_PROGRESS",H=function(e){function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={jobsList:[],apiStatus:G,searchValue:"",empType:[],salaryRange:"0"},e.getUpDatedJobsData=function(e){return{companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,id:e.id,jobDescription:e.job_description,location:e.location,packagePerAnnum:e.package_per_annum,rating:e.rating,title:e.title}},e.onClickRetry=function(){e.getJobItemDetails()},e.renderLoading=function(){return Object(g.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(g.jsx)(k.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.getJobItemDetails=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i,r,o,j,m,b;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:K}),t.prev=1,a=e.state,n=a.empType,s=a.salaryRange,c=a.searchValue,i="https://apis.ccbp.in/jobs?employment_type=".concat(n.join(),"&minimum_package=").concat(s,"&search=").concat(c),r=h.a.get("jwt_token"),o={method:"GET",headers:{Authorization:"Bearer ".concat(r)}},t.next=8,fetch(i,o);case 8:return j=t.sent,t.next=11,j.json();case 11:m=t.sent,b=m.jobs.map((function(t){return e.getUpDatedJobsData(t)})),e.setState({jobsList:b,apiStatus:z}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),console.log("Error",t.t0),e.setState({apiStatus:B});case 20:case"end":return t.stop()}}),t,null,[[1,16]])}))),e.onChangeSearchValue=function(t){e.setState({searchValue:t.target.value})},e.onKeyDownSearchValue=function(t){"Enter"===t.key&&e.getJobItemDetails()},e.salarayRangeSelected=function(t){e.setState({salaryRange:t},e.getJobItemDetails)},e.employmentSelected=function(t){var a=e.state.empType,n=a.includes(t);if(console.log(n),n){var s=a.filter((function(e){return e!==t}));e.setState({empType:s},e.getJobItemDetails)}else e.setState((function(e){return{empType:[].concat(Object(v.a)(e.empType),[t])}}),e.getJobItemDetails)},e.renderJobsListFailureView=function(){return Object(g.jsxs)("div",{className:"no-jobs-failure-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"failure-image"}),Object(g.jsx)("h1",{className:"failure-heading",children:"Oops something went wrong!"}),Object(g.jsx)("p",{className:"failure-text",children:"We cannot seem to find the page you are looking for"}),Object(g.jsx)("button",{className:"retry-btn",type:"button",onClick:e.onClickRetry,children:"Retry"})]})},e.renderJobsListFetched=function(){var t=e.state.jobsList;return t.length>0?Object(g.jsx)("ul",{children:t.map((function(e){return Object(g.jsx)(_,{jobitemDetails:e},e.id)}))}):Object(g.jsxs)("div",{className:"no-jobs-container",children:[Object(g.jsx)("img",{className:"no-jobs-image",src:"https://assets.ccbp.in/frontend/react-js/no-jobs-img.png",alt:"no jobs"}),Object(g.jsx)("h1",{className:"no-jobs-heading",children:"No Jobs Found"}),Object(g.jsx)("p",{className:"no-jobs-text",children:"We could not find any jobs. Try other filters"})]})},e.renderJobsDetailsPage=function(){switch(e.state.apiStatus){case z:return e.renderJobsListFetched();case B:return e.renderJobsListFailureView();case K:return e.renderLoading();default:return null}},e}return Object(u.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getJobItemDetails()}},{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.empType,n=e.salaryRange;return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsxs)("div",{className:"jobs-list-container",children:[Object(g.jsx)(f,{}),Object(g.jsxs)("div",{className:"jobs-page",children:[Object(g.jsxs)("div",{className:"jobs-page-left",children:[Object(g.jsx)(W,{}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"emp-type-container",children:[Object(g.jsx)("h1",{className:"text-heading",children:"Type of Employment"}),Object(g.jsx)("ul",{children:Object(g.jsx)(C,{employmentSelected:this.employmentSelected,empType:a})}),Object(g.jsx)("hr",{}),Object(g.jsx)("h1",{className:"text-heading",children:"Salary Range"}),Object(g.jsx)("ul",{children:Object(g.jsx)(A,{salarayRangeSelected:this.salarayRangeSelected,salaryRange:n})})]})]}),Object(g.jsxs)("div",{className:"jobs-page-right",children:[Object(g.jsxs)("div",{className:"search-container",children:[Object(g.jsx)("input",{type:"search",placeholder:"Search",className:"search-text",onChange:this.onChangeSearchValue,onKeyDown:this.onKeyDownSearchValue,value:t}),Object(g.jsx)("button",{className:"search-button",type:"button","aria-label":"Search",onClick:this.getJobItemDetails,"data-testid":"searchButton",children:Object(g.jsx)(w.b,{className:"search-icon"})})]}),Object(g.jsx)("ul",{children:this.renderJobsDetailsPage()})]})]}),")"]})}}])}(n.Component),q=H,Y=a(32),Q=(a(71),function(e){var t=e.jobDetails,a=t.companyLogoUrl,n=t.employmentType,s=t.jobDescription,c=t.location,i=t.title,r=t.rating;return Object(g.jsxs)("li",{className:"similar-list-docs",children:[Object(g.jsxs)("div",{className:"logo-container",children:[Object(g.jsx)("img",{src:a,alt:"similar job company logo",className:"company-logo-url"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"company-logo-title",children:i}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)(w.a,{className:"star-rating"}),Object(g.jsx)("p",{className:"count-rating",children:r})]})]})]}),Object(g.jsx)("h1",{className:"similar-desc-heading",children:"Description"}),Object(g.jsx)("p",{className:"similar-desc",children:s}),Object(g.jsxs)("div",{className:"location-container-flex-justify",children:[Object(g.jsxs)("div",{className:"responsive",children:[Object(g.jsx)(I.a,{className:"location-logo"}),Object(g.jsx)("p",{className:"location-desc",children:c})]}),Object(g.jsxs)("div",{className:"responsive",children:[Object(g.jsx)(D.a,{className:"location-logo-brief"}),Object(g.jsx)("p",{className:"location-desc",children:n})]})]})]})}),X=(a(72),function(e){var t=e.skillDetails,a=t.name,n=t.imageUrl;return Object(g.jsx)("li",{className:"skill-list-items",children:Object(g.jsxs)("div",{className:"skill-container",children:[Object(g.jsx)("img",{src:n,alt:a,className:"skill-image"}),Object(g.jsx)("p",{className:"image-name",children:a})]})})}),Z=(a(73),"INITIAL"),$="INPROGRESS",ee="SUCCESS",te="FAILURE",ae=function(e){function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={jobItemList:{},similarJobItemList:[],apiStatus:Z},e.getFormattedSkillData=function(e){return{companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,jobDescription:e.job_description,id:e.id,rating:e.rating,location:e.location,title:e.title}},e.getFormattedData=function(e){return{companyLogoUrl:e.company_logo_url,companyWebsiteUrl:e.company_website_url,employmentType:e.employment_type,id:e.id,jobDescription:e.job_description,lifeAtCompany:{description:e.life_at_company.description,imageUrl:e.life_at_company.image_url},location:e.location,rating:e.rating,title:e.title,packagePerAnnum:e.package_per_annum,skills:e.skills.map((function(e){return{imageUrl:e.image_url,name:e.name}}))}},e.getJobItem=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i,r,o,j,m,b;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:$}),t.prev=1,a=e.props.match,n=a.params,s=n.id,c=h.a.get("jwt_token"),i="https://apis.ccbp.in/jobs/".concat(s),r={headers:{Authorization:"Bearer ".concat(c)},method:"GET"},t.next=10,fetch(i,r);case 10:return o=t.sent,t.next=13,o.json();case 13:j=t.sent,console.log(j),m=e.getFormattedData(j.job_details),b=j.similar_jobs.map((function(t){return e.getFormattedSkillData(t)})),console.log(m),console.log(b),e.setState({jobItemList:m,similarJobItemList:b,apiStatus:ee}),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(1),console.log("catch"),e.setState({apiStatus:te});case 26:case"end":return t.stop()}}),t,null,[[1,22]])}))),e.renderJobItemDetails=function(){var t=e.state,a=t.jobItemList,n=t.similarJobItemList,s=a.companyLogoUrl,c=a.companyWebsiteUrl,i=a.employmentType,r=a.jobDescription,o=a.location,l=a.title,j=a.rating,m=a.packagePerAnnum,b=a.lifeAtCompany,d=a.skills,u=b.description,p=b.imageUrl;return Object(g.jsxs)("div",{className:"full-job-item-container",children:[Object(g.jsxs)("div",{className:"job-items-container",children:[Object(g.jsxs)("div",{className:"logo-image-container",children:[Object(g.jsx)("img",{src:s,alt:"job details company logo",className:"company-logo-justify"}),Object(g.jsxs)("div",{className:"title-container",children:[Object(g.jsx)("h1",{className:"company-title-head",children:l}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)(w.a,{className:"star-rating"}),Object(g.jsx)("p",{className:"rating-text",children:j})]})]})]}),Object(g.jsxs)("div",{className:"location-type-salary-container",children:[Object(g.jsxs)("div",{className:"location-container",children:[Object(g.jsxs)("div",{className:"responsive",children:[Object(g.jsx)(I.a,{className:"location-logo"}),Object(g.jsx)("p",{className:"location-desc",children:o})]}),Object(g.jsxs)("div",{className:"responsive",children:[Object(g.jsx)(D.a,{className:"location-logo-brief"}),Object(g.jsx)("p",{className:"location-desc",children:i})]})]}),Object(g.jsx)("p",{className:"package-desc",children:m})]}),Object(g.jsx)("hr",{className:"line"}),Object(g.jsxs)("div",{className:"description-container",children:[Object(g.jsx)("h1",{className:"heading-text",children:"Description"}),Object(g.jsxs)("a",{className:"visit-link",href:c,children:["Visit",Object(g.jsx)(Y.a,{className:"bi-link"})]})]}),Object(g.jsx)("p",{className:"job-story-desc",children:r}),Object(g.jsx)("h1",{className:"skill-heading",children:"Skills"}),Object(g.jsx)("ul",{className:"skill-container",children:d.map((function(e){return Object(g.jsx)(X,{skillDetails:e},e.id)}))}),Object(g.jsx)("h1",{className:"life-company-heading",children:"Life at company"}),Object(g.jsxs)("div",{className:"life-at-company-container",children:[Object(g.jsx)("p",{className:"life-company-desc",children:u}),Object(g.jsx)("img",{src:p,alt:"life at company",className:"company-logo"})]})]}),Object(g.jsx)("h1",{className:"similar-job-heading",children:"Similar Jobs"}),Object(g.jsx)("ul",{className:"similar-cards",children:n.map((function(e){return Object(g.jsx)(Q,{jobDetails:e},e.id)}))})]})},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"render-loading-view",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"failure-view"}),Object(g.jsx)("h1",{className:"failure-heading",children:"Oops! Something Went Wrong "}),Object(g.jsx)("p",{className:"failure-text",children:"We cannot seem to find the page you are looking for"}),Object(g.jsx)("button",{type:"button",className:"retry-button",onClick:e.getJobItem,children:"Retry"})]})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"profile-loader-container",children:Object(g.jsx)(k.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderJobViews=function(){switch(e.state.apiStatus){case ee:return e.renderJobItemDetails();case te:return e.renderFailureView();case $:return e.renderLoadingView();default:return null}},e}return Object(u.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getJobItem()}},{key:"render",value:function(){return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{}),Object(g.jsx)("div",{className:"get-products-details-container",children:this.renderJobViews()})]})}}])}(n.Component),ne=ae,se=a(34),ce=function(e){return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"login"}):Object(g.jsx)(o.b,Object(se.a)({},e))},ie=(a(74),function(){return Object(g.jsxs)("div",{className:"not-found-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png",alt:"not found",className:"not-found-image"}),Object(g.jsx)("h1",{className:"not-found-heading",children:"Page Not Found"}),Object(g.jsx)("p",{className:"not-desc",children:"we're sorry, the page you requested could not be found"})]})}),re=(a(75),function(){return Object(g.jsx)(r.a,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exaxt:!0,path:"/login",component:x}),Object(g.jsx)(ce,{exact:!0,path:"/",component:N}),Object(g.jsx)(ce,{exact:!0,path:"/jobs",component:q}),Object(g.jsx)(ce,{exact:!0,path:"/jobs/:id",component:ne}),Object(g.jsx)(o.b,{path:"/not-found",component:ie}),Object(g.jsx)(o.a,{to:"not-found"})]})})});i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(r.a,{children:Object(g.jsx)(re,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.f0b7a021.chunk.js.map