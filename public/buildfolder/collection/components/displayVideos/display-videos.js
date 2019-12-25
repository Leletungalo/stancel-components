import { h } from "@stencil/core";
export class displayVideos {
    constructor() {
        this.heading = "This is a heading";
        this.data = [];
    }
    connectedCallback() {
    }
    componentWillUpdate() {
        //  console.log(this.data);
        const sideTemp = this.el.shadowRoot.querySelector("aside");
        for (let i = 5; i < 10; i++) {
            const imag = document.createElement("img");
            const div = document.createElement("div");
            div.className = "con";
            imag.className = "testImage";
            //   imag.src = this.data[i].name;
            const he1 = document.createElement("h1");
            he1.className = "heading";
            he1.textContent = this.data[i].name;
            div.appendChild(imag);
            div.appendChild(he1);
            sideTemp.appendChild(div);
        }
    }
    render() {
        return (h("div", { class: "mainDiv" },
            h("nav", null,
                h("h1", { class: "heading" }, this.heading)),
            h("main", null,
                h("img", { src: "../images/images6.jpeg" })),
            h("aside", null),
            h("footer", null,
                h("h2", null, "COS 212 binary tree"),
                h("p", null, "Lorem ipsum dolor sit amet."))));
    }
    static get is() { return "display-video"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["displayVideo.css"]
    }; }
    static get styleUrls() { return {
        "$": ["displayVideo.css"]
    }; }
    static get properties() { return {
        "heading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "heading",
            "reflect": false,
            "defaultValue": "\"This is a heading\""
        },
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "src",
            "reflect": false
        },
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "any[]",
                "resolved": "any[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        }
    }; }
    static get states() { return {
        "sideArr": {}
    }; }
    static get elementRef() { return "el"; }
}
