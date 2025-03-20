import { StaticJsRuntimeFunction } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export default function StaticJsFunction(nameOrFunc, evaluate) {
    if (staticJsInstanceOf(nameOrFunc) === "function") {
        return nameOrFunc;
    }
    if (typeof nameOrFunc === "function") {
        return new StaticJsRuntimeFunction("f", nameOrFunc);
    }
    if (typeof nameOrFunc !== "string") {
        throw new Error("Invalid function name");
    }
    if (typeof evaluate !== "function") {
        throw new Error("Invalid function evaluate");
    }
    return new StaticJsRuntimeFunction(nameOrFunc, evaluate);
}
