import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'up-load-form',
  styleUrl: 'up-load-form.css',
  shadow: true
})
export class MyComponent {
  @State() data: Array<string> = [];

  onUpLoad = (event: Event) => {
    event.preventDefault();
    const {target} = event;
    if(target["title"].value != ""){
      this.data.push(target["title"].value);
    }else{
      console.log("title is requered");
    }

    if(target["prince"].value != ""){
      this.data.push(target["prince"].value);
    }else{
      console.log("title is requered");
    }

    if(target["Univesity"].value != ""){
      this.data.push(target["Univesity"].value);
    }else{
      console.log("Univesity is requered");
    }

    if(target["Module"].value != ""){
      this.data.push(target["Module"].value);
    }else{
      console.log("Module is requered");
    }
    return false;
  }

  render() {
    return [
    <div class="mainDiv">
      <nav class="FormNav">
      <h1 class="Heading">Upload you Form</h1>
      </nav>
      <form action="localhost://3000/videoUpload" class="upLoadForm" method="post">
        <label class="details-labels">Notes title</label> 
        <input name="title" class="details" required/> 
        <label class="details-labels">Prince (ZAR) </label> 
        <select name="prince" class="details" required> 
          <option value="25">R25</option> 
          <option value="50">R50</option> 
          <option value="150">R150</option>
          <option value="250">R250</option>
          <option value="350">R350</option> 
        </select> 
          <label class="details-labels">University</label> 
          <input name="Univesity" class="details" required/> 
          <label class="details-labels">Department</label> 
          <input name="department" class="details" required/>
          <label class="details-labels">Module</label> 
          <input name="Module" class="details" required/> 
          <input class="details-labels" required type="file" name="video"/> 
        <div>
          <input type="checkbox" name="terms" required/>
          <label class="details-labels" >Agree to terms and Conditions</label>
        </div>
        <div>
          <input type="checkbox" name="fees" required/>
          <label class="details-labels" >Agree to terms and Conditions</label>
        </div>
        <input type="submit" value="uplaod" class="btn"/>
      </form>
    </div>,<div class="backDrop"></div>];
  }
}
