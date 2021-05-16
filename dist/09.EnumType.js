"use strict";
/**
 * Enum Tyeps
 * Group of consts used to assign types
 */
var TypesOfResponse;
(function (TypesOfResponse) {
    TypesOfResponse[TypesOfResponse["SUCCESS"] = 0] = "SUCCESS";
    TypesOfResponse[TypesOfResponse["FAILED"] = 1] = "FAILED";
    TypesOfResponse[TypesOfResponse["FORBIDDED"] = 2] = "FORBIDDED";
})(TypesOfResponse || (TypesOfResponse = {}));
var response2 = {
    status: 200,
    type: TypesOfResponse.SUCCESS,
    data: {
        name: "Test",
    },
};
