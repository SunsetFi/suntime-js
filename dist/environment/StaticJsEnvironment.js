import StaticJsScope from "./scope/StaticJsScope.js";
export default class StaticJsEnvironment {
    constructor() {
        this._scopes = [];
        this._scopes.push(new StaticJsScope());
    }
    get currentScope() {
        return this._scopes[this._scopes.length - 1];
    }
    withScope(callback) {
        const scope = new StaticJsScope(this.currentScope);
        this._scopes.push(scope);
        try {
            const result = callback(scope);
            return result;
        }
        finally {
            this._scopes.pop();
        }
    }
}
