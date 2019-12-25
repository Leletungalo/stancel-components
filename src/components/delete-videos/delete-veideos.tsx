import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'delete-videos',
  styleUrl: 'deleteVideos.css',
  shadow: true
})
export class MyComponent {
  @Prop() name:string = "Video";
  @Prop({reflectToAttr:true,mutable:true}) open;
  @State() data: Array<string> = [];

  close = () => {
      this.open = false;
  }

  render() {
    let contect = null;
    if(this.open){contect = [
      <div class="mainDiv">
        <nav class="FormNav">
      <h1 class="Heading">Delete {this.name}</h1>
        </nav>
        <form action="/videoUpload" class="upLoadForm" method="post">
          <label class="details-labels">Are you sure</label>  
          <div class="buttonContainer">
          <input type="button" onClick={this.close} value="close" class="btn closeButton"/>
          <input type="submit" value="uplaod" class="btn uploadButton"/>
          </div>
        </form>
      </div>,<div onClick={this.close} class="backDrop"></div>];
    }
    return contect; 
  }
}
