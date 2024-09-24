"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var header_module_scss_1 = __importDefault(require("./header.module.scss")); // Ensure you have a type declaration for SCSS modules
var Header = function () {
    return (react_1.default.createElement("header", { className: header_module_scss_1.default.header },
        react_1.default.createElement("p", { className: header_module_scss_1.default.beta }, "Beta early access only - v 0.2.1")));
};
exports.default = Header;
