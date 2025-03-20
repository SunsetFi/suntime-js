import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";
export default class StaticJsEnvObject {
    constructor() {
        this._contents = new Map();
    }
    get [StaticJsTypeSymbol]() {
        return "object";
    }
    get [StaticJsTypeofSymbol]() {
        return "object";
    }
    toString() {
        return "[object Object]";
    }
    toJs() {
        const result = {};
        for (const [key, value] of this._contents) {
            result[key] = value.toJs();
        }
        return result;
    }
    hasProperty(name) {
        return this._contents.has(name);
    }
    getProperty(name) {
        return this._contents.get(name) ?? StaticJsEnvUndefined.Instance;
    }
    getIsReadOnlyProperty(name) {
        return false;
    }
    setProperty(name, value) {
        this._contents.set(name, value);
    }
    getKeys() {
        return Array.from(this._contents.keys());
    }
}
