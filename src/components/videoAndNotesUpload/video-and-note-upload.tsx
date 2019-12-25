import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'video-and-note',
  styleUrl: 'videoAndNoteUpload.css',
  shadow: true
})
export class MyComponent {
  @Prop() name:string = "Video";
  @Prop({reflectToAttr:true,mutable:true}) open;
  @State() data: Array<string> = [];

  onUpLoad = (event: Event) => {
    event.preventDefault();
    const {target} = event;

    if(target["title"].value != ""){
      this.data.push(target["title"].value);
    }else{
      console.log("title is requered");
    }
    return false;
  }

  close = () => {
      this.open = false;
  }

  render() {
    let contect = null;
    if(this.open){contect = [
      <div class="mainDiv">
        <nav class="FormNav">
      <h1 class="Heading">Add new {this.name}</h1>
        </nav>
        <form action="/videoUpload" class="upLoadForm" method="post">
          <label class="details-labels">{this.name} title</label> 
          <input name="title" class="details" required/>  
          <input name="discription" class="details bigArea" required/>  
          <input class="details-labels" required type="file" name="video"/> 
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
