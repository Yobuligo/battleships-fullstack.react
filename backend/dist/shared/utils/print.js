"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
const print = (element, text) => {
    let propText = "";
    for (const propName in element) {
        element[propName];
        propText += `${propName}:${element[propName]} `;
    }
    console.log(`${text}: ${propText}`);
};
exports.print = print;
//# sourceMappingURL=print.js.map