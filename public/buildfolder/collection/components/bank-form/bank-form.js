import { h } from "@stencil/core";
export class bankForm {
    constructor() {
        this.bankUpload = (event) => {
            const { target } = event;
            if (target["acountNumber"].value.length > 14) {
                alert("not accoutn Number too long");
                event.preventDefault();
            }
        };
    }
    render() {
        return (h("div", null,
            h("nav", { class: "FormNav" },
                h("h1", null, "Account Details")),
            h("form", { action: "localhost://3000/videoUpload", class: "upLoadForm", onSubmit: this.bankUpload },
                h("label", { class: "details-labels", htmlFor: "email" }, "E-mail"),
                h("input", { type: "email", class: "details", name: "email", required: true }),
                h("label", { class: "details-labels", htmlFor: "bank" }, "Bank"),
                h("input", { class: "details", name: "bank", required: true }),
                h("label", { class: "details-labels", htmlFor: "branchCode" }, "Branch Code"),
                h("input", { class: "details", name: "branchCode", required: true }),
                h("label", { class: "details-labels", htmlFor: "acountNumber" }, "Account Number"),
                h("input", { type: "text", class: "details", name: "acountNumber", required: true }),
                h("input", { type: "submit", value: "Submit", class: "btn", required: true }))));
    }
    static get is() { return "bank-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["../my-component/up-load-form.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../my-component/up-load-form.css"]
    }; }
}
