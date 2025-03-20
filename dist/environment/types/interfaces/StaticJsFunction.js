import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export function isStaticJsFunction(value) {
    return staticJsInstanceOf(value) === "function";
}
