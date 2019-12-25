import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'create-course',
  styleUrl: 'createCourse.css',
  shadow: true
})

export class MyComponent {
  @Prop({reflectToAttr:true,mutable:true}) open:boolean= false;
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
    let content = null;
    if(this.open){
      content = [
      <div class="mainDiv">
        <nav class="FormNav">
          <h1 class="Heading">Create new course</h1>
        </nav>
        <form action="/videoUpload" class="upLoadForm" method="post">
          <label class="details-labels">title</label> 
          <input name="title" class="details" required/>
          <div class="buttonContainer">
          <input type="button" onClick={this.close} value="close" class="btn closeButton"/>
          <input type="submit" value="uplaod" class="btn uploadButton"/>
          </div>
          </form>
          </div>,<div onClick={this.close} class="backDrop"></div>];
    }
    return content;
  }
}
