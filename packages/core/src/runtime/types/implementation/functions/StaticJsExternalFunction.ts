import { Node } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { StaticJsRuntimeError } from "../../../../errors/StaticJsRuntimeError.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import {
  EvaluationGenerator,
  MaybeEvaluationGenerator,
} from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsScriptOrModuleRecord } from "../../../../evaluator/ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsRunTaskOptions } from "../../../tasks/StaticJsRunTaskOptions.js";
import type { HostAccessArg } from "../../HostAccessOptions.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";
import { StaticJsFunction } from "../../StaticJsFunction.js";
import { isStaticJsObject, StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { type StaticJsValue } from "../../StaticJsValue.js";
import type { HostAccessPolicy } from "../host-access/HostAccessPolicy.js";
import { applyChildPolicyQuery } from "../host-access/resolve-host-access-options.js";
import { StaticJsExternalObject } from "../objects/StaticJsExternalObject.js";

export interface StaticJsExternalFunctionOpts {
  getThisArg?: (thisArg: StaticJsValue) => MaybeEvaluationGenerator<unknown>;
  getArgs?: (args: StaticJsValue[]) => MaybeEvaluationGenerator<unknown[]>;
}

export class StaticJsExternalFunction extends StaticJsExternalObject implements StaticJsFunction {
  constructor(
    realm: StaticJsRealm,
    target: Function,
    private readonly _homeObject: unknown,
    policy: HostAccessPolicy,
  ) {
    super(realm, target, policy, "Function.prototype");
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsFunction";
  }

  override get typeOf() {
    return "function" as const;
  }

  override get runtimeTypeOf() {
    return "function" as const;
  }

  override get runtimeTypeCode() {
    return StaticJsTypeCode.Function;
  }

  get ecmaScriptCode(): Node | null {
    return null;
  }

  get scriptOrModule(): StaticJsScriptOrModuleRecord | null {
    return null;
  }

  get isConstructor() {
    return false;
  }

  get strict(): boolean {
    return false;
  }

  get initialName() {
    return Object.hasOwn(this.target, "name") ? String((this.target as Function).name) : null;
  }

  setInitialName() {
    throw new StaticJsEngineError("Cannot set initial name of external function.");
  }

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    // oxlint-disable-next-line typescript/no-this-alias
    const self = this;
    return this.realm.invokeEvaluatorAsync(function* evaluate() {
      try {
        return yield* self.callEvaluator(thisArg, args);
      } catch (e) {
        Completion.handleRuntime(e);
        throw e;
      }
    }, opts);
  }

  callSync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue {
    // oxlint-disable-next-line typescript/no-this-alias
    const self = this;
    return this.realm.invokeEvaluatorSync(function* evaluate() {
      try {
        return yield* self.callEvaluator(thisArg, args);
      } catch (e) {
        Completion.handleRuntime(e);
        throw e;
      }
    }, opts);
  }

  *callEvaluator(
    thisArg: StaticJsValue,
    args: StaticJsValue[] = [],
  ): EvaluationGenerator<StaticJsValue> {
    const { realm, scriptOrModule } = EvaluationContext.current;
    const context = EvaluationContext.createFunctionInvocationContext(
      this,
      scriptOrModule,
      realm,
      realm.globalEnv,
      null,
    );
    EvaluationContext.push(context);
    try {
      return yield* this._invoke(thisArg, args, false);
    } finally {
      EvaluationContext.pop();
    }
  }

  constructAsync(
    args: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsObject> {
    return this.realm.invokeEvaluatorAsync(this.constructEvaluator(args, newTarget), opts);
  }

  constructSync(
    args: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsObject {
    return this.realm.invokeEvaluatorSync(this.constructEvaluator(args, newTarget), opts);
  }

  *constructEvaluator(
    args: StaticJsValue[] = [],
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObject> {
    const { realm, scriptOrModule } = EvaluationContext.current;
    const context = EvaluationContext.createFunctionInvocationContext(
      this,
      scriptOrModule,
      realm,
      realm.globalEnv,
      null,
    );
    EvaluationContext.push(context);

    let result: StaticJsValue;
    try {
      result = yield* this._invoke(newTarget, args, true);
    } finally {
      EvaluationContext.pop();
    }

    if (!isStaticJsObject(result)) {
      throw new StaticJsEngineError(
        `External function ${this.initialName ?? "<anonymous>"} construct did not return an object-like.`,
      );
    }
    return result;
  }

  getNameAsync(): Promise<string> {
    return Promise.resolve(this.initialName ?? "");
  }

  getNameSync(): string {
    return this.initialName ?? "";
  }

  override toNative() {
    return this.target as (...args: unknown[]) => unknown;
  }

  private *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
    construct: boolean,
  ): EvaluationGenerator<StaticJsValue> {
    let thisArgResolved: unknown;
    if (this.policy.options.useSandboxThis) {
      thisArgResolved = thisArg.toNative();
    } else {
      thisArgResolved = this._homeObject;
    }

    // Sandbox arguments are bridged with this wrapper's child access (the parent
    // function's childPolicy applied per value). That access is carried into the
    // native bridge so it is honored when foreign-realm values later cross the
    // boundary — both arguments handed to a callback and values reached through
    // an object argument (e.g. a callback nested in an options object). Scalars
    // ignore the access; the conversion is otherwise unchanged.
    const access: HostAccessArg = (obj) => {
      const policy = applyChildPolicyQuery(
        this.policy.options,
        this.policy.options.childPolicy,
        obj,
        this.realm.config.hostAccessDefaults,
      );
      if (!policy) {
        return this.realm.types.undefined;
      }
      return policy;
    };
    const valueArgsResolved = args.map((arg) => arg.toNative({ access }));

    const func = this.target as (...args: unknown[]) => unknown;
    try {
      let result: unknown;
      if (construct) {
        result = Reflect.construct(func, valueArgsResolved, thisArgResolved as FunctionConstructor);
      } else {
        result = Reflect.apply(func, thisArgResolved, valueArgsResolved);
      }

      return this.policy.wrapChild(result, false);
    } catch (e) {
      if (e instanceof StaticJsRuntimeError && e.thrown.realm === this.realm) {
        throw Completion.Throw(e.thrown);
      }
      throw Completion.Throw(this.policy.wrapChild(e, false));
    }
  }
}
