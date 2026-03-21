import StaticJsEngineError from "../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";

import typedEntries from "../internal/typed-entries.js";
import type { StaticJsScriptOrModuleRecord } from "./ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";

export interface EvaluationContextStackProvider {
  pushStack(context: EvaluationContext): void;
  popStack(): void;
  getStack(): readonly EvaluationContext[];
}

export interface EvaluationContextOptions {
  strict?: boolean;
  lexicalEnv?: StaticJsEnvironmentRecord;
  variableEnv?: StaticJsEnvironmentRecord;
  labelSet?: string[];
  evaluationParameters?: Record<string, unknown>;
  function?: StaticJsFunction | null;
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
  labelSet: { inherits: false, defaultValue: [] },
  evaluationParameters: { inherits: true, defaultValue: Object.freeze({}) },
  function: { inherits: false, defaultValue: null },
};

/**
 * ECMAScript equivalent to ExecutionContext.
 * Note: Code evaluation state is implicit to the generators being used,
 * which are a consumer of this rather than contained within it.
 */
class EvaluationContext implements Required<EvaluationContextAutoDefProperties> {
  static _currentStackProvider: EvaluationContextStackProvider | null = null;

  static withStackProvider<T>(provider: EvaluationContextStackProvider, callback: () => T): T {
    const previousProvider = this._currentStackProvider;
    this._currentStackProvider = provider;
    try {
      return callback();
    } finally {
      this._currentStackProvider = previousProvider;
    }
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

    const current = this._currentStackProvider.getStack().at(-1)!;
    if (!current) {
      throw new StaticJsEngineError("Evaluation context stack is empty.");
    }
    return current;
  }

  static get stack(): readonly EvaluationContext[] {
    if (!this._currentStackProvider) {
      throw new StaticJsEngineError("No evaluation context stack provider is set.");
    }

    return this._currentStackProvider.getStack();
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
  ): EvaluationContext {
    return new EvaluationContext(realm, null, {
      scriptOrModule: scriptOrModule,
      strict: func.strict,
      function: func,
      lexicalEnv: env,
      variableEnv: env,
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

  // Not actually a spec thing.  Attempt at getting NamedExpression support working.
  evaluationParameters!: Record<string, unknown>;

  labelSet!: string[];

  function!: StaticJsFunction | null;

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

  run<T>(callback: (context: EvaluationContext) => T): T {
    EvaluationContext.stackProvider.pushStack(this);
    try {
      return callback!(this);
    } finally {
      EvaluationContext.stackProvider.popStack();
    }
  }

  withProperties(properties: Partial<EvaluationContextOptions> = {}): EvaluationContext {
    return new EvaluationContext(this._realm, this, properties);
  }

  withLexicalEnvironmentContext(env: StaticJsEnvironmentRecord): EvaluationContext {
    return new EvaluationContext(this._realm, this, { lexicalEnv: env });
  }

  withEnvironmentContext(
    lexicalEnv: StaticJsEnvironmentRecord,
    variableEnv: StaticJsEnvironmentRecord = lexicalEnv,
  ): EvaluationContext {
    return new EvaluationContext(this._realm, this, { lexicalEnv, variableEnv });
  }
}

export default EvaluationContext;
