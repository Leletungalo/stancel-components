import { Component,h ,Prop} from "@stencil/core";

@Component({
    tag: "video-card",
    styleUrl: "video-card.css",
    shadow: true
})

export class videoCard {

    @Prop() src:string;
    @Prop() heading:string = "this a headings";
    @Prop() sub_heading:string;
    @Prop() description:string = "the quick brown fox jumps very high";
    @Prop() prince:number = 500;
    @Prop() isloading:boolean = false;

    render(){
        return (
            <div class="video-card">
                <img src={this.src} class="video-image" alt=""/>
                <div class="video-discription-container">
                    <h2 class="video-heading">{this.heading}</h2>
                    <span class="prince">R {this.prince}</span>
                    <h4 class="second-heading"> {this.sub_heading}</h4>
                    <p class="vedio-descirption">{this.description}</p>
                </div>
                <div class="video-footer">
                    <h3 class="videio-footer-discription">engineering/peep videos</h3>
                </div>
            </div>);
    }
}