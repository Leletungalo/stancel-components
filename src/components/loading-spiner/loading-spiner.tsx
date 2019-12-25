import { Component,h} from "@stencil/core";

@Component({
    tag: "loading-spiner",
    styleUrl: "loadingSpiner.css",
    shadow: true
})

export class loadingSpiner {
    render(){
        return (<div class="contener"> <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>)
    }
}