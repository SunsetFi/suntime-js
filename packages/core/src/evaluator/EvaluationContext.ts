import { StaticJsEngineError } from "../errors/StaticJsEngineError.js";
import { StaticJsPrivateEnvironmentRecord } from "../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import { StaticJsCallable } from "../runtime/types/StaticJsCallable.js";
import { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import { dropUndefined } from "../utils/drop-undefined.js";
import { typedEntries } from "../utils/typed-entries.js";

import { EvaluationGenerator } from "./EvaluationGenerator.js";
import type { StaticJsScriptOrModuleRecord } from "./ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";

export interface EvaluationContextStackProvider {
  pushContext(context: EvaluationContext): void;
  popContext(): void;
  getCurrentContext(): EvaluationContext | null;
  getContextStack(): readonly EvaluationContext[];
}

export interface EvaluationContextOptions {
  strict?: boolean;
  lexicalEnv?: StaticJsEnvironmentRecord;
  variableEnv?: StaticJsEnvironmentRecord;
  privateEnv?: StaticJsPrivateEnvironmentRecord | null;
  labelSet?: string[];
  evaluationParameters?: Record<string, unknown>;
  function?: StaticJsCallable | null;
}

type EvaluationContextAutoDefProperties = EvaluationContextOptions & {
  scriptOrModule?: StaticJsScriptOrModuleRecord | null;
};

interface EvaluationContextPropertyDef {
  inherits?: boolean;
  required?: boolean;
  defaultValue?: unknown;
}

const EvaluationContextPropertyDefs: Record<
  keyof EvaluationContextAutoDefProperties,
  EvaluationContextPropertyDef
> = {
  scriptOrModule: { inherits: true, required: true },
  strict: { inherits: true, required: true },
  lexicalEnv: { inherits: true, required: true },
  variableEnv: { inherits: true, required: true },
  privateEnv: { inherits: true, defaultValue: null },
  labelSet: { inherits: false, defaultValue: [] },
  evaluationParameters: { inherits: true, defaultValue: Object.freeze({}) },
  function: { inherits: false, defaultValue: null },
};

/**
 * More or less a hack, so we can get a resolvable realm when running non-invocation actions.
 * Equivalent to {@link EvaluationContext}, but the latter is used instead of the former for
 * most types.
 *
 * This is only used for {@link EvaluationContext.current}
 */
export interface EvaluationContext extends Required<EvaluationContextAutoDefProperties> {
  readonly realm: StaticJsRealm;

  parameter<T = unknown>(name: string, converter?: (value: unknown) => T): T | null;
  requireParameter<T = unknown>(name: string, converter?: (value: unknown) => T): T;
  run<T>(callback: (context: EvaluationContext) => EvaluationGenerator<T>): EvaluationGenerator<T>;

  create(properties?: EvaluationContextOptions): EvaluationContext;
}

/**
 * More or less a hack, so we can get a resolvable realm when running non-invocation actions.
 */
class RealmOnlyEvaluationContext implements EvaluationContext {
  constructor(readonly realm: StaticJsRealm) {}
  readonly strict = false;

  get lexicalEnv() {
    return this.realm.globalEnv;
  }

  get variableEnv() {
    return this.realm.globalEnv;
  }

  readonly privateEnv = null;

  readonly labelSet = [];

  readonly evaluationParameters = Object.freeze({});

  readonly function = null;

  readonly scriptOrModule = null;

  parameter<T = unknown>(): T | null {
    throw new StaticJsEngineError(
      "Cannot get evaluation parameter from realm-only evaluation context.",
    );
  }

  requireParameter<T = unknown>(): T {
    throw new StaticJsEngineError(
      "Cannot get evaluation parameter from realm-only evaluation context.",
    );
  }

  *run<T>(): EvaluationGenerator<T> {
    throw new StaticJsEngineError("Cannot use run() on a realm-only evaluation context.");
  }

  create(): EvaluationContext {
    throw new StaticJsEngineError(
      "Cannot create new evaluation context from a realm-only evaluation context.",
    );
  }
}

let _currentStackProvider: EvaluationContextStackProvider | null = null;
let _realmProvider: RealmOnlyEvaluationContext | null = null;
export const EvaluationContext = {
  withStackProvider<T>(provider: EvaluationContextStackProvider, callback: () => T): T {
    // Note: We need to support re-entrancy here, particularly for test262, which can bootstrap
    // a new realm while in the process of evaluating code in an existing realm.  See $262.createRealm
    const previousStackProvider = _currentStackProvider;
    _currentStackProvider = provider;
    try {
      return callback();
    } finally {
      _currentStackProvider = previousStackProvider;
    }
  },

  get hasStackProvider() {
    return !!_currentStackProvider;
  },

  get hasExecutionContext() {
    return this.hasStackProvider && !!_currentStackProvider!.getCurrentContext();
  },

  get stackProvider(): EvaluationContextStackProvider {
    if (!_currentStackProvider) {
      throw new StaticJsEngineError("No evaluation context stack provider is set.");
    }

    return _currentStackProvider;
  },

  get current(): EvaluationContext {
    if (_currentStackProvider) {
      const context = _currentStackProvider.getCurrentContext() ?? _realmProvider;
      if (!context) {
        throw new StaticJsEngineError("No evaluation context found on the stack.");
      }
      return context;
    }

    if (_realmProvider) {
      return _realmProvider;
    }

    throw new StaticJsEngineError("No evaluation context stack provider is set.");
  },

  get stack(): readonly EvaluationContext[] {
    if (!_currentStackProvider) {
      throw new StaticJsEngineError("No evaluation context stack provider is set.");
    }

    return _currentStackProvider.getContextStack();
  },

  get scriptOrModule(): StaticJsScriptOrModuleRecord | null {
    if (!_currentStackProvider) {
      return null;
    }

    const context = _currentStackProvider.getCurrentContext();
    if (!context) {
      return null;
    }

    return context.scriptOrModule;
  },

  push(context: EvaluationContext): void {
    this.stackProvider.pushContext(context);
  },

  pop() {
    this.stackProvider.popContext();
  },

  withRealm<T = unknown>(realm: StaticJsRealm, callback: () => T): T {
    const realmContext = new RealmOnlyEvaluationContext(realm);
    _realmProvider = realmContext;
    try {
      return callback();
    } finally {
      _realmProvider = null;
    }
  },

  createRootContext(
    scriptOrModule: StaticJsScriptOrModuleRecord | null,
    strict: boolean,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord = realm.globalEnv,
  ): EvaluationContext {
    return new EvaluationContextImpl(realm, null, {
      scriptOrModule,
      strict,
      lexicalEnv: env,
      variableEnv: env,
    });
  },

  createFunctionInvocationContext(
    func: StaticJsFunction,
    scriptOrModule: StaticJsScriptOrModuleRecord | null,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord,
    privateEnv?: StaticJsPrivateEnvironmentRecord | null | undefined,
  ): EvaluationContext {
    return new EvaluationContextImpl(
      realm,
      null,
      dropUndefined({
        scriptOrModule: scriptOrModule,
        strict: func.strict,
        function: func,
        lexicalEnv: env,
        variableEnv: env,
        privateEnv: privateEnv,
      }),
    );
  },

  *external<T>(generator: EvaluationGenerator<T>, realm: StaticJsRealm): EvaluationGenerator<T> {
    if (this.hasExecutionContext) {
      return yield* generator;
    }

    const root = this.createRootContext(null, true, realm);
    return yield* root.run(function* () {
      return yield* generator;
    });
  },
};

/**
 * ECMAScript equivalent to ExecutionContext.
 * Note: Code evaluation state is implicit to the generators being used,
 * which are a consumer of this rather than contained within it.
 */
class EvaluationContextImpl implements Required<EvaluationContextAutoDefProperties> {
  private readonly _realm: StaticJsRealm;
  private readonly _parent: EvaluationContext | null;
  private readonly _properties: EvaluationContextAutoDefProperties;

  constructor(
    realm: StaticJsRealm,
    parent: EvaluationContext | null,
    properties: EvaluationContextAutoDefProperties,
  ) {
    this._realm = realm;
    this._parent = parent;
    this._properties = properties;

    for (const [prop, def] of typedEntries(EvaluationContextPropertyDefs)) {
      if (!parent) {
        if (def.required && !(prop in properties) && (!def.inherits || !parent)) {
          throw new StaticJsEngineError(`Missing required evaluation context property: ${prop}`);
        }
      }

      Object.defineProperty(this, prop, {
        get(this: EvaluationContextImpl) {
          if (prop in this._properties) {
            return this._properties[prop];
          }

          if (def.inherits && this._parent) {
            return this._parent[prop];
          }

          if ("defaultValue" in def) {
            return def.defaultValue;
          }

          throw new StaticJsEngineError(
            `Evaluation context property "${prop}" is required but not provided.`,
          );
        },
        set(this: EvaluationContext, value: unknown) {
          // @ts-expect-error - We know this is valid based on the property defs.
          this._properties[prop] = value;
        },
        configurable: true,
        enumerable: true,
      });
    }
  }

  get realm() {
    return this._realm;
  }

  scriptOrModule!: StaticJsScriptOrModuleRecord;

  // This isn't in the spec for evaluation contexts.
  // It seems to be determined by walking the tree.
  // Sadly babel's nodes don't have a parent property,
  // but perhaps we could add one in parsing?
  strict!: boolean;

  lexicalEnv!: StaticJsEnvironmentRecord;
  variableEnv!: StaticJsEnvironmentRecord;
  privateEnv!: StaticJsPrivateEnvironmentRecord | null;

  // Not actually a spec thing.  Attempt at getting NamedExpression support working.
  evaluationParameters!: Record<string, unknown>;

  labelSet!: string[];

  function!: StaticJsCallable | null;

  parameter<T = unknown>(name: string, converter: (value: unknown) => T = (v) => v as T): T | null {
    const value = this.evaluationParameters[name];
    if (value === undefined) {
      return null;
    }
    return converter(value);
  }

  requireParameter<T = unknown>(name: string, converter: (value: unknown) => T = (v) => v as T): T {
    const value = this.evaluationParameters[name];
    if (value === undefined) {
      throw new StaticJsEngineError(`Missing required evaluation parameter: ${name}`);
    }
    return converter(value);
  }

  *run<T>(
    callback: (context: EvaluationContext) => EvaluationGenerator<T>,
  ): EvaluationGenerator<T> {
    EvaluationContext.push(this);
    // const currentStackProvider = EvaluationContext.stackProvider;
    try {
      return yield* callback(this);
    } finally {
      // FIXME: I think these should be invariant, but a tiny tiny handfull of test262 tests fail these.
      // They pass without this check, though.  Figure out why.
      // if (currentStackProvider !== EvaluationContext.stackProvider) {
      //   throw new StaticJsEngineError(
      //     "Evaluation context stack provider was changed during context execution. This is not allowed.",
      //   );
      // }
      // if (EvaluationContext.current !== this) {
      //   throw new StaticJsEngineError(
      //     "Evaluation context stack was corrupted. Current context is not the one being popped.",
      //   );
      // }
      EvaluationContext.pop();
    }
  }

  create(properties: EvaluationContextOptions = {}): EvaluationContext {
    return new EvaluationContextImpl(this._realm, this, properties);
  }
}
