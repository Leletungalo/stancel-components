import { Component,h } from "@stencil/core";

@Component({
    tag: "bank-form",
    styleUrl: '../my-component/up-load-form.css',
    shadow: true
})

export class bankForm {
    bankUpload = (event:Event) => {
        const {target} = event;
        if(target["acountNumber"].value.length > 14 ){
            alert("not accoutn Number too long");
            event.preventDefault();
        }
      
    }
    render(){
        return (<div>
            <nav class="FormNav">
                <h1>Account Details</h1>
            </nav>
            <form action="localhost://3000/videoUpload" class="upLoadForm" onSubmit={this.bankUpload}>
                <label class="details-labels" htmlFor="email">E-mail</label>
                <input type="email" class="details" name="email" required />
                <label class="details-labels" htmlFor="bank">Bank</label>
                <input class="details" name="bank" required />
                <label class="details-labels" htmlFor="branchCode">Branch Code</label>
                <input class="details" name="branchCode" required />
                <label class="details-labels" htmlFor="acountNumber">Account Number</label>
                <input type="text" class="details" name="acountNumber" required />
                <input type="submit" value="Submit" class="btn" required/>
            </form>
        </div>)
    }

}