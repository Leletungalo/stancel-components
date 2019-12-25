'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-2d89db74.js');

const displayVideos = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return (core.h("div", { class: "mainDiv" }, core.h("nav", null, core.h("h1", { class: "heading" }, this.heading)), core.h("main", null, core.h("img", { src: "../images/images6.jpeg" })), core.h("aside", null), core.h("footer", null, core.h("h2", null, "COS 212 binary tree"), core.h("p", null, "Lorem ipsum dolor sit amet."))));
    }
    get el() { return core.getElement(this); }
    static get style() { return "*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif}.mainDiv{display:grid;height:88vh;grid-template-columns:3fr 1fr;grid-template-rows:60px 2fr 1fr;grid-template-areas:\"nav nav\" \"main aside\" \"foot aside\"}nav{grid-area:nav;width:100%;height:60px;border-radius:15px;border:1px solid grey;margin-bottom:20px}nav .heading{padding:13px 20px;font-size:1.5rem}main{grid-area:main;height:100%;border:2px solid #000}main img{width:100%;height:100%}aside{grid-area:aside;width:350px;height:100%;overflow-y:auto}aside .con{display:-ms-flexbox;display:flex;direction:horizontal;margin:10px;padding:5px;-webkit-box-shadow:2px 1px 5px pink;box-shadow:2px 1px 5px pink}aside .testImage{width:40%;padding:5px 10px}footer{grid-area:foot;background-color:brown}"; }
};

exports.display_video = displayVideos;
