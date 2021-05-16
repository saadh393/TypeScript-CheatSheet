"use strict";
/**
 * InterFace
 */
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.getString = function () {
        return this.name + " is " + this.age + " years old.";
    };
    return UserAccount;
}());
function getArea(data) {
    return data.width * data.length;
}
console.log(getArea({ length: 10, width: 10 }));
