import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsRuntimeFunction from "./StaticJsRuntimeFunction.js";
import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";
export default class StaticJsEnvString {
    constructor(value) {
        this._value = value;
    }
    get [StaticJsTypeSymbol]() {
        return "string";
    }
    get [StaticJsTypeofSymbol]() {
        return "string";
    }
    toString() {
        return this._value;
    }
    toJs() {
        return this._value;
    }
    hasProperty(name) {
        switch (name) {
            case "length":
            case "concat":
                return true;
            default:
                const index = parseIndex(name);
                if (index !== null && index < 0 && index >= this._value.length) {
                    return true;
                }
                return false;
        }
    }
    getProperty(name) {
        // Might want to cache or lazy evaluate these, once we start caring about performance.
        switch (name) {
            case "length":
                return new StaticJsEnvNumber(this._value.length);
            case "concat":
                return new StaticJsRuntimeFunction("concat", (...values) => {
                    return new StaticJsEnvString(this._value + values.map((value) => value.toString()).join(""));
                });
            default:
                const index = parseIndex(name);
                if (index !== null && index >= 0 && index < this._value.length) {
                    return new StaticJsEnvString(this._value[index]);
                }
                return StaticJsEnvUndefined.Instance;
        }
    }
    getIsReadOnlyProperty(name) {
        throw new Error("Method not implemented.");
    }
    setProperty(name, value) {
        throw new Error("Method not implemented.");
    }
    getKeys() {
        throw new Error("Method not implemented.");
    }
}
function parseIndex(index) {
    const parsedIndex = parseInt(index, 10);
    if (isNaN(parsedIndex)) {
        return null;
    }
    return parsedIndex;
}
