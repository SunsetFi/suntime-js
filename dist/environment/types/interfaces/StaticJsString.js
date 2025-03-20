import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export function isStaticJsString(value) {
    return staticJsInstanceOf(value) === "string";
}
