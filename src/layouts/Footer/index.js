"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import ================================================================//
var react_1 = __importDefault(require("react"));
var footer_module_scss_1 = __importDefault(require("./footer.module.scss"));
// Footer component ======================================================//
var Footer = function () {
    return (react_1.default.createElement("footer", { className: footer_module_scss_1.default.footer },
        react_1.default.createElement("p", null, "Rethagon // Forecast Game in Battle Rap")));
};
exports.default = Footer;
// End of Footer component ==============================================//
