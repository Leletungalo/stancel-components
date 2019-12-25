import { h } from "@stencil/core";
export class dashBoardDisplay {
    constructor() {
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
        return (h("div", { class: "mainDiv" },
            h("nav", { class: "topBar" },
                h("h1", { class: "main-header" },
                    this.nav_heading,
                    " ")),
            h("input", { name: "search", placeholder: "Search", value: this.userInput, class: "inputSearch" })));
    }
    static get is() { return "dash-board-display"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./dashboard-display.css"]
    }; }
    static get styleUrls() { return {
        "$": ["dashboard-display.css"]
    }; }
    static get states() { return {
        "userInput": {},
        "data": {},
        "nav_heading": {}
    }; }
    static get elementRef() { return "el"; }
}
