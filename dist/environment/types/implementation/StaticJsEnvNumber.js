import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsEnvNumber {
    constructor(value) {
        this._value = value;
    }
    get [StaticJsTypeSymbol]() {
        return "number";
    }
    get [StaticJsTypeofSymbol]() {
        return "number";
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
