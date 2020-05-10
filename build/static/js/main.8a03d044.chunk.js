(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{130:function(e,a,t){e.exports=t(408)},134:function(e,a,t){},135:function(e,a,t){e.exports=t.p+"static/media/banner.7971da3c.png"},408:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(13),c=t.n(l),i=(t(134),t(135),t(71)),s=t.n(i),o=t(124),m=t(20),d=t(21),u=t(23),E=t(22),p=t(125),v=t.n(p),h=t(16),b=t.n(h),f=(t(34),function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){b.a.init({duration:1e3});var e=this.props,a=e.summary,t=e.currentDate;return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"boxes-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row flex space-between"},r.a.createElement("div",{className:"box-4 TotalRecovered","data-aos":"fade-up"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"Total Recovered"),r.a.createElement("p",null,a.TotalRecovered),r.a.createElement("date",null,new Date(t).toDateString()))),r.a.createElement("div",{className:"box-4 TotalConfirmed","data-aos":"fade-up"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"Total Confirmed"),r.a.createElement("p",null,a.TotalConfirmed),r.a.createElement("date",null,new Date(t).toDateString()))),r.a.createElement("div",{className:"box-4 NewDeaths","data-aos":"fade-up"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"New Deaths"),r.a.createElement("p",null,a.NewDeaths),r.a.createElement("date",null,new Date(t).toDateString()))),r.a.createElement("div",{className:"box-4 TotalDeaths","data-aos":"fade-up"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"Total Deaths"),r.a.createElement("p",null,a.TotalDeaths),r.a.createElement("date",null,new Date(t).toDateString()))),r.a.createElement("div",{className:"box-4 NewRecovered","data-aos":"fade-up"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"New Recovered"),r.a.createElement("p",null,a.NewRecovered),r.a.createElement("date",null,new Date(t).toDateString()))),r.a.createElement("div",{className:"box-4 NewConfirmed","data-aos":"fade-up"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"New Confirmed"),r.a.createElement("p",null,a.NewConfirmed),r.a.createElement("date",null,new Date(t).toDateString())))))),r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"https://i.ibb.co/Wz6CMP1/Screenshot-21.png","data-aos":"fade-up"})),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex space-center"},r.a.createElement("div",{className:"width50"},r.a.createElement("img",{src:"https://i.ibb.co/86JqGHZ/Pngtree-covid-2019-new-coronavirus-pneumonia-medical-5326896.png","data-aos":"fade-up"})),r.a.createElement("div",{className:"width40"},r.a.createElement("img",{src:"https://i.ibb.co/r2qPVsR/united-nations-covid-19-response-o2h-Ms-Iyjb-GE-unsplash.jpg","data-aos":"fade-up"})))))))}}]),t}(r.a.Component)),w=(t(152),function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){b.a.init({duration:1e3});var e=this.props.countries;return r.a.createElement("tr",null,r.a.createElement("td",null,e.Country),r.a.createElement("td",{class:"mix"},e.TotalConfirmed),r.a.createElement("td",{class:"mix2"},e.NewConfirmed),r.a.createElement("td",{className:"green"},e.TotalRecovered),r.a.createElement("td",{className:"red"},e.TotalDeaths))}}]),t}(r.a.Component)),N=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={countries:[],global:[],currentDate:null,loading:!0},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.covid19api.com/summary");case 2:a=e.sent,console.log(a),this.setState({countries:a.data.Countries}),this.setState({global:a.data.Global}),this.setState({currentDate:a.data.Date}),this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return b.a.init({duration:1e3}),this.state.loading?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",null,r.a.createElement(f,{summary:this.state.global,currentDate:this.state.currentDate}),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{"data-aos":"fade-up"},"According to Countries"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tablewrapper"},r.a.createElement("table",{"data-aos":"fade-up"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Countries"),r.a.createElement("th",null,"Total Confirmed"),r.a.createElement("th",null,"New Confirmed"),r.a.createElement("th",null,"Total Recovered"),r.a.createElement("th",null,"Total Deaths"))),r.a.createElement("tbody",null,this.state.countries.map((function(e){return r.a.createElement(w,{countries:e,key:e.Country})})))))))}}]),t}(r.a.Component),g=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){b.a.init({duration:1e3});var e=this.props;e.summary,e.currentDate;return r.a.createElement("div",null,r.a.createElement("div",{className:""},r.a.createElement("h2",{"data-aos":"fade-up"},"Connect With Me on: ")),r.a.createElement("div",{className:"social-icon flex","data-aos":"fade-up"},r.a.createElement("a",{class:"button-wrap facebook",href:"https://www.facebook.com/golu746",target:"_blank"},r.a.createElement("div",{class:"button-inner-wrap"},r.a.createElement("i",{class:"icon-facebook inactive"}),r.a.createElement("i",{class:"icon-facebook active"}))),r.a.createElement("a",{class:"button-wrap instagram",href:"https://www.instagram.com/priyank_tyagi_/",target:"_blank"},r.a.createElement("div",{class:"button-inner-wrap"},r.a.createElement("i",{class:"icon-instagram inactive"}),r.a.createElement("i",{class:"icon-instagram active"}))),r.a.createElement("a",{class:"button-wrap twitter",href:"https://twitter.com/Priyank22432355",target:"_blank"},r.a.createElement("div",{class:"button-inner-wrap"},r.a.createElement("i",{class:"icon-twitter inactive"}),r.a.createElement("i",{class:"icon-twitter active"})))),r.a.createElement("div",{className:"designedandeveloped"},r.a.createElement("h3",{"data-aos":"fade-up"},"Designed & Developed by ",r.a.createElement("span",null,"Priyank Tyagi")),r.a.createElement("img",{src:"https://i.ibb.co/k4GChHC/IMG-20200503-195513-230-1.jpg","data-aos":"fade-up"})))}}]),t}(r.a.Component);"undefined"!==typeof window&&(window.loader=!0);var D=function(){return b.a.init({duration:1e3}),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"banner"},r.a.createElement("img",{src:"https://i.ibb.co/D5H5jcb/volodymyr-hryshchenko-XLNo-18vq-Dg-unsplash-1.jpg",alt:"banner"})),r.a.createElement(N,null),r.a.createElement(g,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.8a03d044.chunk.js.map