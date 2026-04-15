import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import type { StaticJsScriptOrModuleRecord } from "./ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";

import { StaticJsEngineError } from "../errors/StaticJsEngineError.js";
import { StaticJsPrivateEnvironmentRecord } from "../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsCallable } from "../runtime/types/StaticJsCallable.js";
import { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import { dropUndefined } from "../utils/drop-undefined.js";
import { typedEntries } from "../utils/typed-entries.js";
import { EvaluationGenerator } from "./EvaluationGenerator.js";

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
 * ECMAScript equivalent to ExecutionContext.
 * Note: Code evaluation state is implicit to the generators being used,
 * which are a consumer of this rather than contained within it.
 */
export class EvaluationContext implements Required<EvaluationContextAutoDefProperties> {
  static _currentStackProvider: EvaluationContextStackProvider | null = null;

  static withStackProvider<T>(provider: EvaluationContextStackProvider, callback: () => T): T {
    // Note: We need to support re-entrancy here, particularly for test262, which can bootstrap
    // a new realm while in the process of evaluating code in an existing realm.  See $262.createRealm
    const previousStackProvider = this._currentStackProvider;
    this._currentStackProvider = provider;
    try {
      return callback();
    } finally {
      this._currentStackProvider = previousStackProvider;
    }
  }

  static get hasStackProvider() {
    return !!this._currentStackProvider;
  }

  static get hasExecutionContext() {
    return this.hasStackProvider && !!this._currentStackProvider!.getCurrentContext();
  }

  static get stackProvider(): EvaluationContextStackProvider {
    if (!this._currentStackProvider) {
      throw new StaticJsEngineError("No evaluation context stack provider is set.");
    }

    return this._currentStackProvider;
  }

  static get current(): EvaluationContext {
    if (!this._currentStackProvider) {
      throw new StaticJsEngineError("No evaluation context stack provider is set.");
    }

    const context = this._currentStackProvider.getCurrentContext();
    if (!context) {
      throw new StaticJsEngineError("No evaluation context found on the stack.");
    }

    return context;
  }

  static get stack(): readonly EvaluationContext[] {
    if (!this._currentStackProvider) {
      throw new StaticJsEngineError("No evaluation context stack provider is set.");
    }

    return this._currentStackProvider.getContextStack();
  }

  static get scriptOrModule(): StaticJsScriptOrModuleRecord | null {
    if (!this._currentStackProvider) {
      return null;
    }

    const context = this._currentStackProvider.getCurrentContext();
    if (!context) {
      return null;
    }

    return context.scriptOrModule;
  }

  static push(context: EvaluationContext): void {
    this.stackProvider.pushContext(context);
  }

  static pop() {
    this.stackProvider.popContext();
  }

  static createRootContext(
    scriptOrModule: StaticJsScriptOrModuleRecord | null,
    strict: boolean,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord = realm.globalEnv,
  ): EvaluationContext {
    return new EvaluationContext(realm, null, {
      scriptOrModule,
      strict,
      lexicalEnv: env,
      variableEnv: env,
    });
  }

  static createFunctionInvocationContext(
    func: StaticJsFunction,
    scriptOrModule: StaticJsScriptOrModuleRecord | null,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord,
    privateEnv?: StaticJsPrivateEnvironmentRecord | null | undefined,
  ): EvaluationContext {
    return new EvaluationContext(
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
  }

  static *external<T>(
    generator: EvaluationGenerator<T>,
    realm: StaticJsRealm,
  ): EvaluationGenerator<T> {
    if (this.hasExecutionContext) {
      return yield* generator;
    }

    const root = this.createRootContext(null, true, realm);
    return yield* root.run(function* () {
      return yield* generator;
    });
  }

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
        get(this: EvaluationContext) {
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

  get parent() {
    return this._parent;
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

  create(): EvaluationContext {
    return new EvaluationContext(this._realm, this, {});
  }

  with(properties: Partial<EvaluationContextOptions> = {}): EvaluationContext {
    return new EvaluationContext(this._realm, this, properties);
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
}
