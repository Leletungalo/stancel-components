import { Component,h, Prop } from "@stencil/core";

@Component({
    tag: "image-card",
    styleUrl: "image-card.css",
    shadow: true
})

export class imageCard {
    @Prop() src:string;
    @Prop() heading:string;
    @Prop() sub_heading:string;
    @Prop() description:string;
    @Prop() prince:number;


    render(){
        return (
        <div id="elementId" class="image-container">
            <img class="image" src={this.src} width="25"/>
            <div class="image-discription">
                <h1 id="image-name">{this.heading}</h1>
                <span class="prince">R {this.prince}</span>
                <h3 id="sub-heading"> {this.sub_heading}</h3>
                <p id="description">{this.description}</p>
            </div>
        </div>);
    }

}