import { Component,h, State,Element} from "@stencil/core";

@Component({
    tag: "home-page",
    styleUrl: "home-page.css",
    shadow: true
})

export class homePage{
    @State() data;
    @State() shown:number = 4;
    @Element() el:HTMLElement;
    connectedCallback(){
        console.log("connected");
        this.getData();
    }

    async getData(){
        const response = await fetch("https://content-123tutors.herokuapp.com/api/courses");
        const tojson = await response.json();
        console.log(tojson);
        this.data = tojson;
    }

    componentWillUpdate(){
        const videoPackage = this.el.shadowRoot.querySelector("#videoPackages");
        const notePacke = this.el.shadowRoot.querySelector("#notesPackages");
        videoPackage.innerHTML = " ";
        notePacke.innerHTML = " ";
        let x = window.matchMedia("(max-width: 650px)");
        
        if(x.matches){
            for(let i = 0; i < 2;i++){
                const vidCard = document.createElement("video-card");
                vidCard.setAttribute("src",this.data[i].LogoPath);
                vidCard.setAttribute("heading", this.data[i].CommunityName);
                videoPackage.appendChild(vidCard);
            }

            for(let i = 0; i < 2;i++){
                const vidCard = document.createElement("video-card");
                vidCard.setAttribute("src",this.data[i].LogoPath);
                vidCard.setAttribute("heading", this.data[i].CommunityName);
                notePacke.appendChild(vidCard);
            }
        }else{
            for(let i = 0; i < this.shown;i++){
                const vidCard = document.createElement("video-card");
                vidCard.setAttribute("src",this.data[i].LogoPath);
                vidCard.setAttribute("heading", this.data[i].CommunityName);
                videoPackage.appendChild(vidCard);
            }

            for(let i = 0; i < 4;i++){
                const vidCard = document.createElement("video-card");
                vidCard.setAttribute("src",this.data[i].LogoPath);
                vidCard.setAttribute("heading", this.data[i].CommunityName);
                notePacke.appendChild(vidCard);
            }
        }
    }

    seeMore = () => {
        const contanier = document.createElement("div");
        contanier.className = "seeMoreContanier";
        this.data.map((element) => {
            const vidCard = document.createElement("video-card");
            vidCard.setAttribute("src",element.LogoPath);
            vidCard.setAttribute("heading", element.name);
        })
    }

    render(){
        return (
        <div id="mainDiv">
            <p class="summary">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, numquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam reprehenderit aliquid minus soluta esse, earum iste a vero mollitia nostrum distinctio sed asperiores quam quos quisquam voluptates ad cum quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem corporis accusamus? Eius quasi quam veniam amet at adipisci modi?
            </p>
            <h2 class="heading">Store</h2>
            <input class="storeSearch" placeholder="Search here" type="text"/>
            <input class="storeSearchButton" type="button" value="search"/>
            <h3 class="subHeading">Video parkages</h3> 
            <button onClick={() => (this.shown += 4)} class="seeMore">see more</button>
            
            <div id="videoPackages" class="packagesContainer">
                <loading-spiner></loading-spiner>
                <loading-spiner></loading-spiner>
                <loading-spiner></loading-spiner>
                <loading-spiner></loading-spiner>
            </div>
            
            <h3 class="subHeading" >Note packages</h3>
            <button class="seeMore">see more</button>
            <div id="notesPackages" class="packagesContainer">
                <loading-spiner></loading-spiner>
                <loading-spiner></loading-spiner>
                <loading-spiner></loading-spiner>
                <loading-spiner></loading-spiner>
            </div>
        </div>)
    }
}