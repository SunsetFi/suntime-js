import StaticJsScope from "./scope/StaticJsScope.js";

export default class StaticJsEnvironment {
  private readonly _scopes: StaticJsScope[] = [];

  constructor() {
    this._scopes.push(new StaticJsScope());
  }

  get currentScope(): StaticJsScope {
    return this._scopes[this._scopes.length - 1];
  }

  withScope<T>(callback: (scope: StaticJsScope) => T): T {
    const scope = new StaticJsScope(this.currentScope);
    this._scopes.push(scope);
    try {
      const result = callback(scope);
      return result;
    } finally {
      this._scopes.pop();
    }
  }
}
