import { StaticJsEnvBoolean } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export default function StaticJsBoolean(value) {
    if (staticJsInstanceOf(value) === "boolean") {
        return value;
    }
    if (typeof value !== "boolean") {
        throw new Error("Not a boolean");
    }
    return new StaticJsEnvBoolean(value);
}
