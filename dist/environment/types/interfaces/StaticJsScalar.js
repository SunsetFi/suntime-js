import StaticJsTypeSymbol, { staticJsInstanceOf, } from "../StaticJsTypeSymbol.js";
export function isStaticJsNumber(value) {
    return staticJsInstanceOf(value) === "number";
}
export function isStaticJsBoolean(value) {
    return staticJsInstanceOf(value) === "boolean";
}
export function isStaticJsNull(value) {
    return staticJsInstanceOf(value) === "null";
}
export function isStaticJsUndefined(value) {
    return staticJsInstanceOf(value) === "undefined";
}
