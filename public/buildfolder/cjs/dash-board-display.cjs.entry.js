'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-2d89db74.js');

const dashBoardDisplay = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.nav_heading = "Main heaidng";
    }
    connectedCallback() {
        this.getData().then(result => this.data = result);
    }
    async getData() {
        const response = await fetch("https://tutors123.herokuapp.com/testing#");
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    /* onInputCange = (event:Event) =>{
         const para = this.el.shadowRoot.querySelector("p");
         let bob = event.target.value;
         para.innerHTML = " ";
         this.data.map((element) =>{
             if(element.ContentTitle.includes(bob)){
                 para.innerHTML = element.ContentTitle;
             }
         })
     }*/
    componentDidLoad() {
        /*  const div = this.el.shadowRoot.querySelector("p");
          this.getData()
               .then((jjj) => {
                   this.data = jjj;
                   const img = document.createElement("img");
                   img.setAttribute("src", jjj[3].ThumbnailPath);
                   div.appendChild(img);
               });*/
    }
    render() {
        return (core.h("div", { class: "mainDiv" }, core.h("nav", { class: "topBar" }, core.h("h1", { class: "main-header" }, this.nav_heading, " ")), core.h("input", { name: "search", placeholder: "Search", value: this.userInput, class: "inputSearch" })));
    }
    get el() { return core.getElement(this); }
    static get style() { return "*{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}nav{height:75px}nav .main-header{font-size:3rem;font-weight:700;display:inline-block;padding:10px 20px;color:#ee5690}.mainDiv{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.mainDiv .inputSearch{display:inline-block;width:50%;height:2rem;font-size:1.2rem;border-radius:5px}"; }
};

exports.dash_board_display = dashBoardDisplay;
