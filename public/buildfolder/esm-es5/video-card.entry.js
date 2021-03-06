import { r as registerInstance, h } from './core-91182070.js';
var videoCard = /** @class */ (function () {
    function videoCard(hostRef) {
        registerInstance(this, hostRef);
    }
    videoCard.prototype.render = function () {
        return (h("div", { class: "video-card" }, h("img", { src: this.src, class: "video-image" }), h("div", { class: "video-discription-container" }, h("h2", { class: "video-heading" }, this.heading), h("span", { class: "prince" }, "R ", this.prince), h("h4", { class: "second-heading" }, " ", this.sub_heading), h("p", { class: "vedio-descirption" }, this.description)), h("div", { class: "video-footer" }, h("h3", { class: "videio-footer-discription" }, "engineering/peep videos"))));
    };
    Object.defineProperty(videoCard, "style", {
        get: function () { return "*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.video-card{background-color:#fff;position:relative;height:25rem;width:20rem;margin:20px;-webkit-box-shadow:2px 5px 5px #ffe6ff;box-shadow:2px 5px 5px #ffe6ff;border-radius:10px}.video-card .video-image{width:100%;height:45%}.video-discription-container{position:relative;padding:20px;border-radius:1px solid grey}.video-card .video-heading{display:inline-block;margin-right:30px;margin-bottom:10px;font-weight:700;font-size:1.6rem}.video-card .prince{position:absolute;background-color:#ffe6ff;color:#ff1aff;font-weight:800;padding:5px;border-radius:5px;right:2rem;font-size:1.3rem}.video-card .vedio-descirption{font-size:1.3rem;padding:10px 0}.video-card .video-footer{font-size:1.3rem;position:absolute;border-top:1px solid grey;bottom:0;width:80%;left:20px}"; },
        enumerable: true,
        configurable: true
    });
    return videoCard;
}());
export { videoCard as video_card };
