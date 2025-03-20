export default class PlainJsObject {
    _contents = new Map();
    hasProperty(name) {
        return this._contents.has(name);
    }
    getProperty(name) {
        return this._contents.get(name);
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
