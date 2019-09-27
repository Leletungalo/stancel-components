import { Component,h, State,Element } from "@stencil/core";

@Component({
    tag: "dash-board-display",
    styleUrl: "./dashboard-display.css",
    shadow: true
})

export class dashBoardDisplay{
    @Element() el:HTMLElement;
    @State() userInput:string;
    @State() data;

    connectedCallback(){
        
    }
    
    async getData() {
        const response = await fetch("https://tutors123.herokuapp.com/testing#");
        const jsonResponse = await response.json();
        console.log(jsonResponse);
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

    componentDidLoad(){
       const div = this.el.shadowRoot.querySelector("p");
       this.getData()
            .then((jjj) => {
                this.data = jjj;
                const img = document.createElement("img");
                img.setAttribute("src", jjj[3].ThumbnailPath);
                div.appendChild(img);
            });
    }

    render(){
        return (
        <div class="mainDiv">
            <input name="search"  
            placeholder="Search" 
            value={this.userInput} 
            class="inputSearch" />
            <div id="container"><p></p>
            </div>
        </div>);
    }
}