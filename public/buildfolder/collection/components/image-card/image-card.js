import { h } from "@stencil/core";
export class imageCard {
    render() {
        return (h("div", { id: "elementId", class: "image-container" },
            h("img", { class: "image", src: this.src, width: "25" }),
            h("div", { class: "image-discription" },
                h("h1", { id: "image-name" }, this.heading),
                h("span", { class: "prince" },
                    "R ",
                    this.prince),
                h("h3", { id: "sub-heading" },
                    " ",
                    this.sub_heading),
                h("p", { id: "description" }, this.description))));
    }
    static get is() { return "image-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["image-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["image-card.css"]
    }; }
    static get properties() { return {
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
            "reflect": false
        },
        "sub_heading": {
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
            "attribute": "sub_heading",
            "reflect": false
        },
        "description": {
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
            "attribute": "description",
            "reflect": false
        },
        "prince": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "prince",
            "reflect": false
        }
    }; }
}
