import { uniq } from "lodash-es";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";
export default class StaticJsRuntimeObject {
    constructor(properties, mutationTarget) {
        this._properties = new Map();
        this._mutationTarget = mutationTarget;
        // Enumerate the object; this shouldn't pick up prototypes.
        for (const [propertyName, propertyValue] of Object.entries(properties)) {
            this._properties.set(propertyName, propertyValue);
        }
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
        for (const [key, value] of this._properties) {
            result[key] = value.get?.()?.toJs();
        }
        return result;
    }
    hasProperty(name) {
        if (this._mutationTarget?.hasProperty(name)) {
            return true;
        }
        return this._properties.has(name);
    }
    getProperty(name) {
        if (this._mutationTarget?.hasProperty(name)) {
            return this._mutationTarget.getProperty(name);
        }
        return this._properties.get(name)?.get?.() ?? StaticJsEnvUndefined.Instance;
    }
    getIsReadOnlyProperty(name) {
        if (this._mutationTarget) {
            return this._mutationTarget.getIsReadOnlyProperty(name);
        }
        return true;
    }
    setProperty(name, value) {
        if (this._mutationTarget) {
            this._mutationTarget.setProperty(name, value);
            return;
        }
        // TODO: Do something with source maps for the runtime.
        throw new Error("Object is not writable.");
    }
    getKeys() {
        return uniq([
            ...Array.from(this._properties.keys()),
            ...(this._mutationTarget?.getKeys?.() ?? []),
        ]);
    }
}
