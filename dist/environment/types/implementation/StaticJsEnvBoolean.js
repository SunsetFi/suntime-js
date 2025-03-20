import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
export default class StaticJsEnvBoolean {
    constructor(value) {
        this._value = value;
    }
    get [StaticJsTypeSymbol]() {
        return "boolean";
    }
    get [StaticJsTypeofSymbol]() {
        return "boolean";
    }
    toString() {
        return String(this._value);
    }
    toJs() {
        return this._value;
    }
    get value() {
        return this._value;
    }
}
