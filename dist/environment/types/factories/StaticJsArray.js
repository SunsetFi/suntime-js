import { StaticJsEnvArray } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import toStaticJsValue from "../utils/to-static-js-value.js";
export default function StaticJsArray(value) {
    if (staticJsInstanceOf(value) === "array") {
        return value;
    }
    if (!Array.isArray(value)) {
        throw new Error("Not an array");
    }
    const items = value.map(toStaticJsValue);
    return new StaticJsEnvArray(items);
}
