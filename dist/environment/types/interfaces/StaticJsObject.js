import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export function isStaticJsObject(value) {
    return value[StaticJsTypeSymbol] === "object";
}
