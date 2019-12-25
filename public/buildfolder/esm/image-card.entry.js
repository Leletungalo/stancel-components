import { r as registerInstance, h } from './core-91182070.js';

const imageCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { id: "elementId", class: "image-container" }, h("img", { class: "image", src: this.src, width: "25" }), h("div", { class: "image-discription" }, h("h1", { id: "image-name" }, this.heading), h("span", { class: "prince" }, "R ", this.prince), h("h3", { id: "sub-heading" }, " ", this.sub_heading), h("p", { id: "description" }, this.description))));
    }
    static get style() { return "*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;font-family:sans-serif;width:50rem;height:10rem}.image-container{background-color:#fff;display:grid;grid-template-columns:1fr 3fr;grid-gap:10px;padding:10px 20px;width:100%;height:100%;margin:5px 7px;-webkit-box-shadow:3px 2px 5px #e6e6e6;box-shadow:3px 2px 5px #e6e6e6}.image-container .image{width:15rem;height:90%}.image-container .image-discription{position:relative;padding:10px 20px;font-size:1.3rem;width:100%;height:100%}.image-container #image-name{display:inline-block;padding-bottom:.6rem}.prince{position:absolute;background-color:#ffe6ff;color:#ff1aff;font-weight:800;font-size:25px;padding:5px;border-radius:5px;right:20px}"; }
};

export { imageCard as image_card };
