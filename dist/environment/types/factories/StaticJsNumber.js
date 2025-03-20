import { StaticJsEnvNumber } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export default function StaticJsNumber(value) {
    if (staticJsInstanceOf(value) === "number") {
        return value;
    }
    if (typeof value !== "number") {
        throw new Error("Not a number");
    }
    return new StaticJsEnvNumber(value);
}
