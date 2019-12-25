'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-2d89db74.js');

const imageCard = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { id: "elementId", class: "image-container" }, core.h("img", { class: "image", src: this.src, width: "25" }), core.h("div", { class: "image-discription" }, core.h("h1", { id: "image-name" }, this.heading), core.h("span", { class: "prince" }, "R ", this.prince), core.h("h3", { id: "sub-heading" }, " ", this.sub_heading), core.h("p", { id: "description" }, this.description))));
    }
    static get style() { return "*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;font-family:sans-serif;width:50rem;height:10rem}.image-container{background-color:#fff;display:grid;grid-template-columns:1fr 3fr;grid-gap:10px;padding:10px 20px;width:100%;height:100%;margin:5px 7px;-webkit-box-shadow:3px 2px 5px #e6e6e6;box-shadow:3px 2px 5px #e6e6e6}.image-container .image{width:15rem;height:90%}.image-container .image-discription{position:relative;padding:10px 20px;font-size:1.3rem;width:100%;height:100%}.image-container #image-name{display:inline-block;padding-bottom:.6rem}.prince{position:absolute;background-color:#ffe6ff;color:#ff1aff;font-weight:800;font-size:25px;padding:5px;border-radius:5px;right:20px}"; }
};

exports.image_card = imageCard;
