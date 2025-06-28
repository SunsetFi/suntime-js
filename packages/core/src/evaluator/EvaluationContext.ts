import type { StaticJsEnvironment } from "../runtime/environments/StaticJsEnvironment.js";
import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
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

  get env(): StaticJsEnvironment {
    if (this._parent) {
      return this._parent.env;
    }

    throw new Error("Environment is not set in the evaluation context.");
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

  createBlockContext(record: StaticJsEnvironment): EvaluationContext {
    const env = new StaticJsLexicalEnvironment(this.realm, record, this.env);
    return new BlockEvaluationContext(env, this);
  }

  createStackContext(
    env: StaticJsEnvironment,
    func: StaticJsFunction,
  ): EvaluationContext {
    return new StackEvaluationContext(env, func, this);
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

  get env(): StaticJsEnvironment {
    return this._env;
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

class BlockEvaluationContext extends EvaluationContext {
  private _env: StaticJsEnvironment;

  constructor(env: StaticJsEnvironment, parent: EvaluationContext) {
    super(parent);
    this._env = env;
  }

  get env(): StaticJsEnvironment {
    return this._env;
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

  get env(): StaticJsEnvironment {
    return this._env;
  }

  get function(): StaticJsFunction {
    return this._function;
  }
}
