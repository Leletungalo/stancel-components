import{r as a,h as t,g as s}from"./p-9750b1f4.js";const e=class{constructor(t){a(this,t),this.nav_heading="Main heaidng"}connectedCallback(){this.getData().then(a=>this.data=a)}async getData(){const a=await fetch("https://tutors123.herokuapp.com/testing#");return await a.json()}componentDidLoad(){}render(){return t("div",{class:"mainDiv"},t("nav",{class:"topBar"},t("h1",{class:"main-header"},this.nav_heading," ")),t("input",{name:"search",placeholder:"Search",value:this.userInput,class:"inputSearch"}))}get el(){return s(this)}static get style(){return"*{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}nav{height:75px}nav .main-header{font-size:3rem;font-weight:700;display:inline-block;padding:10px 20px;color:#ee5690}.mainDiv{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.mainDiv .inputSearch{display:inline-block;width:50%;height:2rem;font-size:1.2rem;border-radius:5px}"}};export{e as dash_board_display};