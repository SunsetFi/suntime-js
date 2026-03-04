import StaticJsEngineError from "../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";

import typedEntries from "../internal/typed-entries.js";

export interface EvaluationContextOptions {
  strict?: boolean;
  lexicalEnv?: StaticJsEnvironmentRecord;
  variableEnv?: StaticJsEnvironmentRecord;
  labelSet?: string[];
  evaluationParameters?: Record<string, unknown>;
  function?: StaticJsFunction | null;
}

type EvaluationContextAutoDefProperties = EvaluationContextOptions;

interface EvaluationContextPropertyDef {
  inherits?: boolean;
  required?: boolean;
  defaultValue?: unknown;
}

const EvaluationContextPropertyDefs: Record<
  keyof EvaluationContextAutoDefProperties,
  EvaluationContextPropertyDef
> = {
  strict: { inherits: true, required: true },
  lexicalEnv: { inherits: true, required: true },
  variableEnv: { inherits: true, required: true },
  labelSet: { inherits: false, defaultValue: [] },
  evaluationParameters: { inherits: true, defaultValue: Object.freeze({}) },
  function: { inherits: false, defaultValue: null },
};

class EvaluationContext implements Required<EvaluationContextAutoDefProperties> {
  static createRootContext(
    strict: boolean,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord = realm.globalEnv,
  ): EvaluationContext {
    return new EvaluationContext(realm, null, { strict, lexicalEnv: env, variableEnv: env });
  }

  static createFunctionInvocationContext(
    func: StaticJsFunction,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord,
  ): EvaluationContext {
    return new EvaluationContext(realm, null, {
      strict: func.strict,
      function: func,
      lexicalEnv: env,
      variableEnv: env,
    });
  }

  private readonly _realm: StaticJsRealm;
  private readonly _parent: EvaluationContext | null;
  private readonly _properties: EvaluationContextOptions;

  constructor(
    realm: StaticJsRealm,
    parent: EvaluationContext | null,
    properties: EvaluationContextOptions,
  ) {
    this._realm = realm;
    this._parent = parent;
    this._properties = properties;

    for (const [prop, def] of typedEntries(EvaluationContextPropertyDefs)) {
      if (!parent) {
        if (def.required && !(prop in properties)) {
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

  create(properties: Partial<EvaluationContextOptions> = {}): EvaluationContext {
    return new EvaluationContext(this._realm, this, properties);
  }

  createLexicalEnvironmentContext(env: StaticJsEnvironmentRecord): EvaluationContext {
    return new EvaluationContext(this._realm, this, { lexicalEnv: env });
  }

  createEnvironmentContext(
    lexicalEnv: StaticJsEnvironmentRecord,
    variableEnv: StaticJsEnvironmentRecord = lexicalEnv,
  ): EvaluationContext {
    return new EvaluationContext(this._realm, this, { lexicalEnv, variableEnv });
  }
}

export default EvaluationContext;
