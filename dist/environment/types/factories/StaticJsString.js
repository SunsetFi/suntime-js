import { StaticJsEnvString } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export default function StaticJsString(value) {
    if (staticJsInstanceOf(value) === "string") {
        return value;
    }
    if (typeof value !== "string") {
        throw new Error("Not a string");
    }
    return new StaticJsEnvString(value);
}
