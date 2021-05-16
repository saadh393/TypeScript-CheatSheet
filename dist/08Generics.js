"use strict";
/**
 * Generics in TypeScript
 *
 * It is used to define Type of a variable.
 * Whenever we are not sure about the type, we can use Generic as a Type
 *
 */
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
/** Example 1 */
var addID = function (obj) {
    var id = Math.floor(Math.random() * 10);
    return __assign(__assign({}, obj), { id: id });
};
var userD = addID({
    name: "Saad",
    age: 10,
});
console.log(userD);
var response = {
    status: 200,
    data: {
        name: "Test",
    },
};
