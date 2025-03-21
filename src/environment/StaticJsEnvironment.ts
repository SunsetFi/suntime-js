import { StaticJsScope, StaticJsScopeOptions } from "./scope/index.js";
import StaticJsEnvNumber from "./types/implementation/StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./types/implementation/StaticJsEnvUndefined.js";
import { toStaticJsValue } from "./types/index.js";

export interface StaticJsEnvironmentGlobal {
  declare?: "const" | "let";
  value: any;
}
export interface StaticJsEnvironmentOptions {
  globals?: Record<string, StaticJsEnvironmentGlobal>;
}

// Clean this up and put them in some folder.
const defaultGlobals: Record<string, StaticJsEnvironmentGlobal> = {
  // Technically you CAN assign these without errors but they don't change???
  Infinity: { declare: "const", value: new StaticJsEnvNumber(Infinity) },
  NaN: { declare: "const", value: new StaticJsEnvNumber(NaN) },
  // Yes, you can re-define this!
  undefined: { declare: "let", value: StaticJsEnvUndefined.Instance },
};

export default class StaticJsEnvironment {
  private readonly _scopes: StaticJsScope[] = [];

  constructor({ globals }: StaticJsEnvironmentOptions = {}) {
    const globalScope = new StaticJsScope();

    const resolvedGlobals = {
      ...defaultGlobals,
      ...globals,
    };

    for (const [name, { declare = "const", value }] of Object.entries(
      resolvedGlobals,
    )) {
      const staticJsValue = toStaticJsValue(value);
      switch (declare) {
        case "const":
          globalScope.declareConstProperty(name, staticJsValue);
          break;
        case "let":
          globalScope.declareLetProperty(name, staticJsValue);
          break;
        default:
          throw new Error(`Unsupported global declaration type: ${declare}`);
      }
    }

    this._scopes.push(globalScope);
  }

  get currentScope(): StaticJsScope {
    return this._scopes[this._scopes.length - 1];
  }

  withScope<T>(
    opts: Omit<StaticJsScopeOptions, "parent">,
    callback: (scope: StaticJsScope) => T,
  ): T {
    const scope = new StaticJsScope({ ...opts, parent: this.currentScope });
    this._scopes.push(scope);
    try {
      const result = callback(scope);
      return result;
    } finally {
      this._scopes.pop();
    }
  }
}
