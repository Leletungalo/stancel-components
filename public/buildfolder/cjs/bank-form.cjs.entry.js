'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-2d89db74.js');

const bankForm = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.bankUpload = (event) => {
            const { target } = event;
            if (target["acountNumber"].value.length > 14) {
                alert("not accoutn Number too long");
                event.preventDefault();
            }
        };
    }
    render() {
        return (core.h("div", null, core.h("nav", { class: "FormNav" }, core.h("h1", null, "Account Details")), core.h("form", { action: "localhost://3000/videoUpload", class: "upLoadForm", onSubmit: this.bankUpload }, core.h("label", { class: "details-labels", htmlFor: "email" }, "E-mail"), core.h("input", { type: "email", class: "details", name: "email", required: true }), core.h("label", { class: "details-labels", htmlFor: "bank" }, "Bank"), core.h("input", { class: "details", name: "bank", required: true }), core.h("label", { class: "details-labels", htmlFor: "branchCode" }, "Branch Code"), core.h("input", { class: "details", name: "branchCode", required: true }), core.h("label", { class: "details-labels", htmlFor: "acountNumber" }, "Account Number"), core.h("input", { type: "text", class: "details", name: "acountNumber", required: true }), core.h("input", { type: "submit", value: "Submit", class: "btn", required: true }))));
    }
    static get style() { return "*{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}:host{font-family:sans-serif;width:35rem;display:block;border:2px solid #e2e2e2;border-radius:3px}.FormNav{font-family:inherit;display:inline-block;background-color:#f7f7f7;padding:10px 20px;width:100%;height:3rem;border-bottom:1px solid #e2e2e2}.upLoadForm{padding:10px 17px}.upLoadForm .btn{background-color:#ff0091;padding:10px 20px;margin:1.2rem 0}.upLoadForm{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upLoadForm .details-labels{font-size:1.2rem;padding:1rem 0}.upLoadForm .details{display:inline-block;height:2rem;font-size:1.2rem;border-radius:5px}"; }
};

exports.bank_form = bankForm;
