'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-2d89db74.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["bank-form.cjs",[[1,"bank-form"]]],["dash-board-display.cjs",[[1,"dash-board-display",{"userInput":[32],"data":[32],"nav_heading":[32]}]]],["display-video.cjs",[[1,"display-video",{"heading":[1],"src":[1],"data":[16],"sideArr":[32]}]]],["image-card.cjs",[[1,"image-card",{"src":[1],"heading":[1],"sub_heading":[1],"description":[1],"prince":[2]}]]],["up-load-form.cjs",[[1,"up-load-form",{"data":[32]}]]],["video-card.cjs",[[1,"video-card",{"src":[1],"heading":[1],"sub_heading":[1],"description":[1],"prince":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
