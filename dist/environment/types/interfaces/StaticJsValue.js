import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export function isStaticJsValue(value) {
    if (typeof value !== "object" ||
        value === null ||
        typeof value[StaticJsTypeSymbol] !== "string") {
        throw new Error("Not a StaticJsValue");
    }
}
