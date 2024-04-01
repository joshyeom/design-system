var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as MS from "./Modal.styles";
import { Button } from "./Modal.styles";
import { useToggle } from "./useToggle";
var Modal = function (_a) {
    var primaryColor = _a.primaryColor, hoverColor = _a.hoverColor, size = _a.size, space = _a.space, subTitle = _a.subTitle, sentence = _a.sentence, title = _a.title, res = __rest(_a, ["primaryColor", "hoverColor", "size", "space", "subTitle", "sentence", "title"]);
    var _b = useToggle(), toggle = _b[0], toggleState = _b[1];
    return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ primaryColor: primaryColor, hoverColor: hoverColor, onClick: toggleState, space: space }, { children: "\uBAA8\uB2EC" })), _jsx(MS.Back, __assign({ isOpened: toggle, onClick: toggleState }, { children: _jsx(MS.Overlay, __assign({ isOpened: toggle, onClick: function (e) { return e.stopPropagation(); } }, { children: _jsxs(MS.Contents, { children: [_jsx(MS.Title, { children: title }), _jsx(MS.CloseButton, __assign({ "aria-label": "close", onClick: toggleState }, { children: _jsxs("svg", __assign({ width: "100", height: "100", viewBox: "0 0 100 100" }, { children: [_jsx("line", { x1: "10", y1: "10", x2: "90", y2: "90", stroke: "black", "stroke-width": "6" }), _jsx("line", { x1: "90", y1: "10", x2: "10", y2: "90", stroke: "black", "stroke-width": "6" })] })) })), _jsxs(MS.Body, __assign({ size: size, space: space }, { children: [_jsx(MS.SubTitle, { children: subTitle }), _jsx(MS.Paragraph, { children: sentence })] })), _jsxs(MS.Footer, { children: [_jsx(Button, __assign({ onClick: toggleState, primaryColor: primaryColor, hoverColor: hoverColor, space: space }, { children: "Close" })), _jsx(Button, __assign({ primaryColor: primaryColor, hoverColor: hoverColor, space: space }, { children: "Secondary Action" }))] })] }) })) }))] }));
};
export default Modal;
