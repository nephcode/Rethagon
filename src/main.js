"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS =======================================================//
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
// COMPONENTS ====================================================//  
var Footer_1 = __importDefault(require("./layouts/Footer"));
var Header_1 = __importDefault(require("./layouts/Header"));
// PAGES =========================================================//
var Home_1 = __importDefault(require("./pages/Home"));
// STYLES ========================================================//
require("./styles/main.scss");
// RENDER APPLICATION ============================================//
var container = document.getElementById('root');
var root = (0, client_1.createRoot)(container);
root.render(react_1.default.createElement(react_2.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) })),
        react_1.default.createElement(Footer_1.default, null))));
// END OF APPLICATION RENDER =====================================//
