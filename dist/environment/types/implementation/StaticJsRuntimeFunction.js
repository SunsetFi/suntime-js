import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvString from "./StaticJsEnvString.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";
export default class StaticJsRuntimeFunction {
    constructor(name, _evaluate) {
        this._evaluate = _evaluate;
        this._name = new StaticJsEnvString(name);
    }
    get [StaticJsTypeSymbol]() {
        return "function";
    }
    get [StaticJsTypeofSymbol]() {
        return "function";
    }
    toString() {
        return `function ${this._name}() { [native code] }`;
    }
    toJs() {
        throw new Error("Cannot convert a runtime function to JS.");
    }
    evaluate(...args) {
        return this._evaluate(...args);
    }
    hasProperty(name) {
        switch (name) {
            case "name":
            case "length":
                return true;
            default:
                return false;
        }
    }
    getProperty(name) {
        switch (name) {
            case "name":
                return this._name;
            case "length":
                return new StaticJsEnvNumber(this._evaluate.length);
            default:
                return StaticJsEnvUndefined.Instance;
        }
    }
    getIsReadOnlyProperty(name) {
        return true;
    }
    setProperty(name, value) {
        throw new Error("Functions are read-only.");
    }
    getKeys() {
        return ["name", "length"];
    }
}
