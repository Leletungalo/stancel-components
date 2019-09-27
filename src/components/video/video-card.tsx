import { Component,h } from "@stencil/core";

@Component({
    tag: "video-player",
    shadow: true
})

export class videoPlayer {

    render(){
        return(
        <div>
            <video preload="preload" controls width="500" height="400">
                <source src="https://www.youtube.com/watch?v=hE2Ira-Cwxo" />
            </video> 
        </div>)
    }
    
}