import type { Node } from "@babel/types";

import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";

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

  get variableEnv(): StaticJsEnvironmentRecord {
    if (this._parent) {
      return this._parent.variableEnv;
    }

    throw new Error(
      "Variable Environment is not set in the evaluation context.",
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

  createLabelContext(label: string | null): EvaluationContext {
    return new LabelEvalationContext(label, this);
  }

  createLexicalEnvContext(env: StaticJsEnvironmentRecord): EvaluationContext {
    return new EnvironmentEvaluationContext(env, null, this);
  }

  createLexicalAndVariableEnvContext(
    env: StaticJsEnvironmentRecord,
  ): EvaluationContext {
    return new EnvironmentEvaluationContext(env, env, this);
  }

  createFunctionInvocationContext(
    env: StaticJsEnvironmentRecord,
    func: StaticJsFunction,
  ): EvaluationContext {
    return new FunctionInvocationEvaluationContext(env, func, this);
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
  private _env: StaticJsEnvironmentRecord;
  private _function: StaticJsFunction;

  constructor(
    env: StaticJsEnvironmentRecord,
    func: StaticJsFunction,
    parent: EvaluationContext,
  ) {
    super(parent);
    this._env = env;
    this._function = func;
  }

  get lexicalEnv(): StaticJsEnvironmentRecord {
    return this._env;
  }

  get variableEnv(): StaticJsEnvironmentRecord {
    return this._env;
  }

  get function(): StaticJsFunction {
    return this._function;
  }
}
