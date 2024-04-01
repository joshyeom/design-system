var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Back = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    opacity: ", ";\n    visibility: ", ";\n    transition: 0.2s ease-in-out;\n    background-color: rgba(0, 0, 0, 0.5);\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    opacity: ", ";\n    visibility: ", ";\n    transition: 0.2s ease-in-out;\n    background-color: rgba(0, 0, 0, 0.5);\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])), function (_a) {
    var isOpened = _a.isOpened;
    return isOpened ? 1 : 0;
}, function (_a) {
    var isOpened = _a.isOpened;
    return isOpened ? 'visible' : 'hidden';
});
export var Overlay = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 45%;\n    height: 55%;\n    background-color: white;\n    border-radius: 10px;\n    transform: ", ";\n    transition: 0.2s ease-in-out;\n"], ["\n    width: 45%;\n    height: 55%;\n    background-color: white;\n    border-radius: 10px;\n    transform: ", ";\n    transition: 0.2s ease-in-out;\n"])), function (_a) {
    var isOpened = _a.isOpened;
    return (isOpened ? 'scale(1)' : 'scale(0.95)');
});
export var Contents = styled.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n"], ["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n"])));
export var Title = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-weight: 600;\n    font-size: 20px;\n    padding: 16px 24px;\n"], ["\n    font-weight: 600;\n    font-size: 20px;\n    padding: 16px 24px;\n"])));
export var CloseButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    border-radius: 5px;\n    top: 0.75rem;\n    right: 0.75rem;\n    background-color: transparent;\n    border: none 10px;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s ease-in-out;\n    &:hover{\n        background-color: rgba(0,0,0,0.05);\n    }\n"], ["\n    position: absolute;\n    border-radius: 5px;\n    top: 0.75rem;\n    right: 0.75rem;\n    background-color: transparent;\n    border: none 10px;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s ease-in-out;\n    &:hover{\n        background-color: rgba(0,0,0,0.05);\n    }\n"])));
export var Body = styled.section(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: block;\n    flex-grow: 3;\n    padding: ", ";\n    font-size: ", ";\n"], ["\n    display: block;\n    flex-grow: 3;\n    padding: ", ";\n    font-size: ", ";\n"])), function (_a) {
    var space = _a.space;
    return space;
}, function (_a) {
    var size = _a.size;
    return size;
});
export var SubTitle = styled.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    margin-bottom: 1rem;\n    font-weight: 600;\n"], ["\n    margin-bottom: 1rem;\n    font-weight: 600;\n"])));
export var Paragraph = styled.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    unicode-bidi: isolate;\n    line-height: 24px;\n"], ["\n    unicode-bidi: isolate;\n    line-height: 24px;\n"])));
export var Footer = styled.footer(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n    padding: 16px 24px;\n"], ["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n    padding: 16px 24px;\n"])));
export var Button = styled.button(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    padding: ", ";\n    border-radius: 10px;\n    border: none;\n    color: white;\n    transition: 0.1s ease-in-out;\n    background-color: ", ";\n    &:hover{\n        background-color: ", ";\n    }\n"], ["\n    padding: ", ";\n    border-radius: 10px;\n    border: none;\n    color: white;\n    transition: 0.1s ease-in-out;\n    background-color: ", ";\n    &:hover{\n        background-color: ", ";\n    }\n"])), function (_a) {
    var space = _a.space;
    return space;
}, function (_a) {
    var primaryColor = _a.primaryColor;
    return primaryColor;
}, function (_a) {
    var hoverColor = _a.hoverColor;
    return hoverColor;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
