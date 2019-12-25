import { h } from "@stencil/core";
export class MyComponent {
    constructor() {
        this.data = [];
        this.onUpLoad = (event) => {
            event.preventDefault();
            const { target } = event;
            if (target["title"].value != "") {
                this.data.push(target["title"].value);
            }
            else {
                console.log("title is requered");
            }
            if (target["prince"].value != "") {
                this.data.push(target["prince"].value);
            }
            else {
                console.log("title is requered");
            }
            if (target["Univesity"].value != "") {
                this.data.push(target["Univesity"].value);
            }
            else {
                console.log("Univesity is requered");
            }
            if (target["Module"].value != "") {
                this.data.push(target["Module"].value);
            }
            else {
                console.log("Module is requered");
            }
            return false;
        };
    }
    render() {
        return (h("div", null,
            h("nav", { class: "FormNav" },
                h("h1", { class: "Heading" }, "Upload you Form")),
            h("form", { action: "localhost://3000/videoUpload", class: "upLoadForm", method: "post" },
                h("label", { class: "details-labels" }, "Notes title"),
                h("input", { name: "title", class: "details", required: true }),
                h("label", { class: "details-labels" }, "Prince (ZAR) "),
                h("select", { name: "prince", class: "details", required: true },
                    h("option", { value: "25" }, "R25"),
                    h("option", { value: "50" }, "R50"),
                    h("option", { value: "150" }, "R150"),
                    h("option", { value: "250" }, "R250"),
                    h("option", { value: "350" }, "R350")),
                h("label", { class: "details-labels" }, "University"),
                h("input", { name: "Univesity", class: "details", required: true }),
                h("label", { class: "details-labels" }, "Department"),
                h("input", { name: "department", class: "details", required: true }),
                h("label", { class: "details-labels" }, "Module"),
                h("input", { name: "Module", class: "details", required: true }),
                h("input", { class: "details-labels", required: true, type: "file", name: "video" }),
                h("div", null,
                    h("input", { type: "checkbox", name: "terms", required: true }),
                    h("label", { class: "details-labels" }, "Agree to terms and Conditions")),
                h("div", null,
                    h("input", { type: "checkbox", name: "fees", required: true }),
                    h("label", { class: "details-labels" }, "Agree to terms and Conditions")),
                h("input", { type: "submit", value: "uplaod", class: "btn" }))));
    }
    static get is() { return "up-load-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["up-load-form.css"]
    }; }
    static get styleUrls() { return {
        "$": ["up-load-form.css"]
    }; }
    static get states() { return {
        "data": {}
    }; }
}
