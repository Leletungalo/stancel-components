import { Component,h, Prop, State,Element } from "@stencil/core";

@Component({
    tag:"display-video",
    styleUrl: "displayVideo.css",
    shadow: true
})

export class displayVideos {
    @Prop() heading:string = "This is a heading";@Prop() id:string;
    @Element() el:HTMLElement;

    @State() data = [];
    @State() discription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ducimus repudiandae consectetur fugit, incidunt, maiores unde at iste possimus omnis pariatur perferendis illo dolorum nobis! Cumque praesentium rerum ipsum eligendi.";
    @State() comments = []
   // @State() sideArr ;
    
    connectedCallback(){
        console.log("connected");
        this.getData()
            .then(tojson => this.data = tojson);
    }

    async getData(){
        const response = await fetch(`/courseID/${this.id}`);
        const tojson = await response.json();
        return tojson;
    }

    componentWillUpdate(){
        console.log("component will load");
        console.log(this.data);
        this.playVideo(this.data[0].EmbedURL);
        this.makePlaylist();
    }

    makePlaylist = () => {
        const sideTemp = this.el.shadowRoot.querySelector(".listDisplay");
        sideTemp.innerHTML = "";
        if(this.data.length > 0){
            for(let i = 0; i < this.data.length ;i++){
                const imag = document.createElement("img");
                const div = document.createElement("div");
                div.className = "con";
                div.addEventListener("click",() => {
                    this.playVideo(this.data[i]);
                })
                imag.className = "testImage";
                imag.src = this.data[i].ThumbnailPath;
                const he1 = document.createElement("h1");
                he1.className = "heading"
                he1.textContent = this.data[i].ContentTitle;
                div.appendChild(imag);
                div.appendChild(he1);
                sideTemp.appendChild(div);
            }
        }else{
            alert("empty")
        }
    }

    makeComments = () =>{
       /* const aside = this.el.shadowRoot.querySelector(".container");
        aside.innerHTML = "";
        this.comments.map((element) => {
            const h1 = document.createElement("h1");
            h1.textContent = element.name;
            const p = document.createElement("p");
            p.textContent = element.comments;
            const div = document.createElement("div");
            div.appendChild(h1);
            div.appendChild(p);
            aside.appendChild(div);
        });*/
    }

    buttonClicked = (event) => {
        const {value} = event.target;
        if(value === "Playlist"){
            this.makePlaylist();
        }else{
            this.makeComments();
        }
    }

    addVideo = (event) => {
        const {value} = event.target;
       
        const main = this.el.shadowRoot.querySelector(".mainDiv");
        let and = null;
            if(value === "addVideo"){
                and = document.createElement("video-and-note");
            }else{
                and = document.createElement("delete-videos");
            }
        main.appendChild(and);
        //@ts-ignore
        and.open = true;
    }

    playVideo(video){
        console.log(video);
        const discriptionContanier =  this.el.shadowRoot.querySelector(".autorsName");
        discriptionContanier.innerHTML = "";
        discriptionContanier.insertAdjacentHTML("afterbegin",video.ContentDescription);
        const mama = this.el.shadowRoot.querySelector("main");
        mama.innerHTML = "";
        mama.insertAdjacentHTML("afterbegin",video.EmbedURL);
    }
    
    render(){
        return (
            <div class="mainDiv">
            <nav>
                <h1 class="heading">{this.heading}</h1>
            </nav>
            <div class="wrapper">
                <div class="leftSide">
                <main>
                    <loading-spiner></loading-spiner>
                </main>
                <footer>
                    <h2>{this.heading}</h2>
                    <h3 class="autorsName">{this.discription}</h3>
                    <button onClick={this.addVideo} value="delete" class="btn delete">Delete</button>
                </footer>
                </div>
                <div class="rightSide">
                    <button class="btn addVideo" value="addVideo" onClick={this.addVideo} >+ add new video</button>
                    <div class="navButtonContainer">
                        <button class="navButton btn" onClick={this.buttonClicked} value="Playlist">Playlist</button>
                        <button class="navButton btn" onClick={this.buttonClicked} value="comments">Comments </button>
                    </div> 
                    <aside>  
                    <div class="listDisplay">
                    </div>
                    </aside>
                </div>
            </div>
            </div>
        )
    }
}