import uniq from "lodash-es/uniq";
export default class RuntimeJSObject {
    _mutationTarget;
    _properties = new Map();
    constructor(properties, mutationTarget) {
        this._mutationTarget = mutationTarget;
        // Enumerate the object; this shouldn't pick up prototypes.
        for (const [propertyName, propertyValue] of Object.entries(properties)) {
            this._properties.set(propertyName, propertyValue);
        }
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
        return this._properties.get(name)?.get?.();
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
        return uniq(Array.from(this._properties.keys()), this._mutationTarget?.getKeys?.() ?? []);
    }
}
