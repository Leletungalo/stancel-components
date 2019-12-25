import { r as registerInstance, h } from './core-91182070.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, h("nav", { class: "FormNav" }, h("h1", { class: "Heading" }, "Upload you Form")), h("form", { action: "localhost://3000/videoUpload", class: "upLoadForm", method: "post" }, h("label", { class: "details-labels" }, "Notes title"), h("input", { name: "title", class: "details", required: true }), h("label", { class: "details-labels" }, "Prince (ZAR) "), h("select", { name: "prince", class: "details", required: true }, h("option", { value: "25" }, "R25"), h("option", { value: "50" }, "R50"), h("option", { value: "150" }, "R150"), h("option", { value: "250" }, "R250"), h("option", { value: "350" }, "R350")), h("label", { class: "details-labels" }, "University"), h("input", { name: "Univesity", class: "details", required: true }), h("label", { class: "details-labels" }, "Department"), h("input", { name: "department", class: "details", required: true }), h("label", { class: "details-labels" }, "Module"), h("input", { name: "Module", class: "details", required: true }), h("input", { class: "details-labels", required: true, type: "file", name: "video" }), h("div", null, h("input", { type: "checkbox", name: "terms", required: true }), h("label", { class: "details-labels" }, "Agree to terms and Conditions")), h("div", null, h("input", { type: "checkbox", name: "fees", required: true }), h("label", { class: "details-labels" }, "Agree to terms and Conditions")), h("input", { type: "submit", value: "uplaod", class: "btn" }))));
    }
    static get style() { return "*{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}:host{font-family:sans-serif;width:35rem;display:block;border:2px solid #e2e2e2;border-radius:3px}.FormNav{font-family:inherit;display:inline-block;background-color:#f7f7f7;padding:10px 20px;width:100%;height:3rem;border-bottom:1px solid #e2e2e2}.upLoadForm{padding:10px 17px}.upLoadForm .btn{background-color:#ff0091;padding:10px 20px;margin:1.2rem 0}.upLoadForm{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upLoadForm .details-labels{font-size:1.2rem;padding:1rem 0}.upLoadForm .details{display:inline-block;height:2rem;font-size:1.2rem;border-radius:5px}"; }
};

export { MyComponent as up_load_form };
