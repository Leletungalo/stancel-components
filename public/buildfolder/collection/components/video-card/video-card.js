import { h } from "@stencil/core";
export class videoCard {
    render() {
        return (h("div", { class: "video-card" },
            h("img", { src: this.src, class: "video-image" }),
            h("div", { class: "video-discription-container" },
                h("h2", { class: "video-heading" }, this.heading),
                h("span", { class: "prince" },
                    "R ",
                    this.prince),
                h("h4", { class: "second-heading" },
                    " ",
                    this.sub_heading),
                h("p", { class: "vedio-descirption" }, this.description)),
            h("div", { class: "video-footer" },
                h("h3", { class: "videio-footer-discription" }, "engineering/peep videos"))));
    }
    static get is() { return "video-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["video-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["video-card.css"]
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
