import type { Node } from "@babel/types";

import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";
import StaticJsEngineError from "../errors/StaticJsEngineError.js";

export default abstract class EvaluationContext {
  private _parent: EvaluationContext | null;

  constructor(parent: EvaluationContext | null = null) {
    this._parent = parent;
  }

  get realm(): StaticJsRealm {
    if (this._parent) {
      return this._parent.realm;
    }

    throw new Error("Realm is not set in the evaluation context.");
  }

  get strict(): boolean {
    if (this._parent) {
      return this._parent.strict;
    }

    throw new Error("Strict mode is not set in the evaluation context.");
  }

  get lexicalEnv(): StaticJsEnvironmentRecord {
    if (this._parent) {
      return this._parent.lexicalEnv;
    }

    throw new Error(
      "Lexical Environment is not set in the evaluation context.",
    );
  }

  set lexicalEnv(env: StaticJsEnvironmentRecord) {
    // The spec supports getting and setting these arbitrarily, but that doesn't fit with our context stack system.
    // Might want to support this for whatever.
    throw new StaticJsEngineError(
      "Cannot set lexical environment on this evaluation context.",
    );
  }

  get variableEnv(): StaticJsEnvironmentRecord {
    if (this._parent) {
      return this._parent.variableEnv;
    }

    throw new Error(
      "Variable Environment is not set in the evaluation context.",
    );
  }

  set variableEnv(env: StaticJsEnvironmentRecord) {
    // The spec supports getting and setting these arbitrarily, but that doesn't fit with our context stack system.
    // Might want to support this for whatever.
    throw new StaticJsEngineError(
      "Cannot set variable environment on this evaluation context.",
    );
  }

  get label(): string | null {
    // Does not inherit.
    return null;
  }

  get parent(): EvaluationContext | null {
    return this._parent;
  }

  get block(): Node | null {
    // Does not inherit.
    return null;
  }

  static createRootContext(
    strict: boolean,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord = realm.globalEnv,
  ): EvaluationContext {
    return new RootEvaluationContext(strict, realm, env);
  }

  static createFunctionInvocationContext(
    func: StaticJsFunction,
    realm: StaticJsRealm,
    env: StaticJsEnvironmentRecord,
  ): EvaluationContext {
    const context = new RootEvaluationContext(func.strict, realm);
    return context.createFunctionInvocationContext(env, env, func);
  }

  createLabelContext(label: string | null): EvaluationContext {
    return new LabelEvalationContext(label, this);
  }

  createLexicalEnvContext(env: StaticJsEnvironmentRecord): EvaluationContext {
    return new EnvironmentEvaluationContext(env, null, this);
  }

  createVariableEnvContext(env: StaticJsEnvironmentRecord): EvaluationContext {
    return new EnvironmentEvaluationContext(null, env, this);
  }

  createLexicalAndVariableEnvContext(
    env: StaticJsEnvironmentRecord,
    varEnv?: StaticJsEnvironmentRecord,
  ): EvaluationContext {
    return new EnvironmentEvaluationContext(env, varEnv ?? env, this);
  }

  createFunctionInvocationContext(
    lexicalEnv: StaticJsEnvironmentRecord,
    variableEnv: StaticJsEnvironmentRecord,
    func: StaticJsFunction,
  ): EvaluationContext {
    return new FunctionInvocationEvaluationContext(
      lexicalEnv,
      variableEnv,
      func,
      this,
    );
  }

  createStrictContext(): EvaluationContext {
    return new StrictEvaluationContext(this);
  }
}

class RootEvaluationContext extends EvaluationContext {
  constructor(
    private readonly _strict: boolean,
    private readonly _realm: StaticJsRealm,
    private readonly _env: StaticJsEnvironmentRecord = _realm.globalEnv,
  ) {
    super(null);
  }

  get realm(): StaticJsRealm {
    return this._realm;
  }

  get strict(): boolean {
    return this._strict;
  }

  get lexicalEnv(): StaticJsEnvironmentRecord {
    return this._env;
  }

  get variableEnv(): StaticJsEnvironmentRecord {
    return this._env;
  }
}

class StrictEvaluationContext extends EvaluationContext {
  constructor(parent: EvaluationContext) {
    super(parent);
  }

  get strict(): boolean {
    return true;
  }
}

class LabelEvalationContext extends EvaluationContext {
  private _label: string | null;

  constructor(label: string | null, parent: EvaluationContext) {
    super(parent);
    this._label = label;
  }

  get label(): string | null {
    return this._label;
  }
}

class EnvironmentEvaluationContext extends EvaluationContext {
  constructor(
    private readonly _lexicalEnv: StaticJsEnvironmentRecord | null,
    private readonly _variableEnv: StaticJsEnvironmentRecord | null,
    parent: EvaluationContext,
  ) {
    super(parent);
  }

  get lexicalEnv(): StaticJsEnvironmentRecord {
    if (this._lexicalEnv) {
      return this._lexicalEnv;
    }

    return this.parent!.lexicalEnv;
  }

  get variableEnv(): StaticJsEnvironmentRecord {
    if (this._variableEnv) {
      return this._variableEnv;
    }

    return this.parent!.variableEnv;
  }
}

class FunctionInvocationEvaluationContext extends EvaluationContext {
  private _lexicalEnv: StaticJsEnvironmentRecord;
  private _variableEnv: StaticJsEnvironmentRecord;
  private _function: StaticJsFunction;

  constructor(
    lexicalEnv: StaticJsEnvironmentRecord,
    variableEnv: StaticJsEnvironmentRecord,
    func: StaticJsFunction,
    parent: EvaluationContext,
  ) {
    super(parent);
    this._lexicalEnv = lexicalEnv;
    this._variableEnv = variableEnv;
    this._function = func;
  }

  get strict() {
    return this._function.strict;
  }

  get lexicalEnv(): StaticJsEnvironmentRecord {
    return this._lexicalEnv;
  }

  set lexicalEnv(env: StaticJsEnvironmentRecord) {
    this._lexicalEnv = env;
  }

  get variableEnv(): StaticJsEnvironmentRecord {
    return this._variableEnv;
  }

  set variableEnv(env: StaticJsEnvironmentRecord) {
    this._variableEnv = env;
  }

  get function(): StaticJsFunction {
    return this._function;
  }
}
