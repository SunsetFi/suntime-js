import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

import type { StaticJsEnvironment } from "../runtime/environments/StaticJsEnvironment.js";
import StaticJsLexicalEnvironment from "../runtime/environments/implementation/StaticJsLexicalEnvironment.js";

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

  get lexicalEnv(): StaticJsEnvironment {
    if (this._parent) {
      return this._parent.lexicalEnv;
    }

    throw new Error(
      "Lexical Environment is not set in the evaluation context.",
    );
  }

  get variableEnv(): StaticJsEnvironment {
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

  static createRootContext(
    strict: boolean,
    realm: StaticJsRealm,
    env: StaticJsEnvironment = realm.globalEnv,
  ): EvaluationContext {
    return new RootEvaluationContext(strict, realm, env);
  }

  createLabelContext(label: string | null): EvaluationContext {
    return new LabelEvalationContext(label, this);
  }

  createLexicalEnvContext(record: StaticJsEnvironment): EvaluationContext {
    return new EnvironmentEvaluationContext(
      new StaticJsLexicalEnvironment(this.realm, record, this.lexicalEnv),
      null,
      this,
    );
  }

  createLexicalAndVariableEnvContext(
    record: StaticJsEnvironment,
  ): EvaluationContext {
    const lexical = new StaticJsLexicalEnvironment(
      this.realm,
      record,
      this.lexicalEnv,
    );
    return new EnvironmentEvaluationContext(lexical, lexical, this);
  }

  createStackContext(
    env: StaticJsEnvironment,
    func: StaticJsFunction,
  ): EvaluationContext {
    return new StackEvaluationContext(env, func, this);
  }

  createStrictContext(): EvaluationContext {
    return new StrictEvaluationContext(this);
  }
}

class RootEvaluationContext extends EvaluationContext {
  constructor(
    private readonly _strict: boolean,
    private readonly _realm: StaticJsRealm,
    private readonly _env: StaticJsEnvironment = _realm.globalEnv,
  ) {
    super(null);
  }

  get realm(): StaticJsRealm {
    return this._realm;
  }

  get strict(): boolean {
    return this._strict;
  }

  get lexicalEnv(): StaticJsEnvironment {
    return this._env;
  }

  get variableEnv(): StaticJsEnvironment {
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
    private readonly _lexicalEnv: StaticJsEnvironment | null,
    private readonly _variableEnv: StaticJsEnvironment | null,
    parent: EvaluationContext,
  ) {
    super(parent);
  }

  get lexicalEnv(): StaticJsEnvironment {
    if (this._lexicalEnv) {
      return this._lexicalEnv;
    }

    return this.parent!.lexicalEnv;
  }

  get variableEnv(): StaticJsEnvironment {
    if (this._variableEnv) {
      return this._variableEnv;
    }

    return this.parent!.variableEnv;
  }
}

class StackEvaluationContext extends EvaluationContext {
  private _env: StaticJsEnvironment;
  private _function: StaticJsFunction;

  constructor(
    env: StaticJsEnvironment,
    func: StaticJsFunction,
    parent: EvaluationContext,
  ) {
    super(parent);
    this._env = env;
    this._function = func;
  }

  get lexicalEnv(): StaticJsEnvironment {
    return this._env;
  }

  get variableEnv(): StaticJsEnvironment {
    return this._env;
  }

  get function(): StaticJsFunction {
    return this._function;
  }
}
