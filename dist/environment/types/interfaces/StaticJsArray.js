import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export function isStaticJsArray(value) {
    return staticJsInstanceOf(value) === "array";
}
