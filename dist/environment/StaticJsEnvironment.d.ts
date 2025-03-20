import StaticJsScope from "./scope/StaticJsScope.js";
export default class StaticJsEnvironment {
  private readonly _scopes;
  constructor();
  get currentScope(): StaticJsScope;
  withScope<T>(callback: (scope: StaticJsScope) => T): T;
}
