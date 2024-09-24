"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var rethagon_logo_svg_1 = __importDefault(require("/rethagon-logo.svg"));
var home_module_scss_1 = __importDefault(require("./home.module.scss"));
function Home() {
    return (react_1.default.createElement("main", { className: home_module_scss_1.default.home },
        react_1.default.createElement("div", null,
            react_1.default.createElement("a", { href: "#", target: "_blank" },
                react_1.default.createElement("img", { src: rethagon_logo_svg_1.default, className: home_module_scss_1.default.hero, alt: "Rethagon logo" }))),
        react_1.default.createElement("p", { className: home_module_scss_1.default.beta }, "Coming soon...")));
}
exports.default = Home;
