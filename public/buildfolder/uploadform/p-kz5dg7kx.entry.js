import{r as s,h as t,g as e}from"./p-9750b1f4.js";const i=class{constructor(t){s(this,t),this.heading="This is a heading",this.data=[]}connectedCallback(){}componentWillUpdate(){const s=this.el.shadowRoot.querySelector("aside");for(let t=5;t<10;t++){const e=document.createElement("img"),i=document.createElement("div");i.className="con",e.className="testImage";const n=document.createElement("h1");n.className="heading",n.textContent=this.data[t].name,i.appendChild(e),i.appendChild(n),s.appendChild(i)}}render(){return t("div",{class:"mainDiv"},t("nav",null,t("h1",{class:"heading"},this.heading)),t("main",null,t("img",{src:"../images/images6.jpeg"})),t("aside",null),t("footer",null,t("h2",null,"COS 212 binary tree"),t("p",null,"Lorem ipsum dolor sit amet.")))}get el(){return e(this)}static get style(){return"*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif}.mainDiv{display:grid;height:88vh;grid-template-columns:3fr 1fr;grid-template-rows:60px 2fr 1fr;grid-template-areas:\"nav nav\" \"main aside\" \"foot aside\"}nav{grid-area:nav;width:100%;height:60px;border-radius:15px;border:1px solid grey;margin-bottom:20px}nav .heading{padding:13px 20px;font-size:1.5rem}main{grid-area:main;height:100%;border:2px solid #000}main img{width:100%;height:100%}aside{grid-area:aside;width:350px;height:100%;overflow-y:auto}aside .con{display:-ms-flexbox;display:flex;direction:horizontal;margin:10px;padding:5px;-webkit-box-shadow:2px 1px 5px pink;box-shadow:2px 1px 5px pink}aside .testImage{width:40%;padding:5px 10px}footer{grid-area:foot;background-color:brown}"}};export{i as display_video};