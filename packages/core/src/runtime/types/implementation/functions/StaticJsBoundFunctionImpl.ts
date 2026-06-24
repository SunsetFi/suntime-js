import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRunTaskOptions } from "../../../../tasks/StaticJsRunTaskOptions.js";
import { construct } from "../../../algorithms/construct.js";
import { get } from "../../../algorithms/get.js";
import { sameValue } from "../../../algorithms/same-value.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import {
  type StaticJsCallable,
  type StaticJsCallableToNativeOpts,
} from "../../StaticJsCallable.js";
import { isStaticJsFunction, type StaticJsFunction } from "../../StaticJsFunction.js";
import { type StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import { isStaticJsScalar } from "../../StaticJsScalar.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

export class StaticJsBoundFunction extends StaticJsOrdinaryObjectImpl implements StaticJsFunction {
  private _initialName: string | null = null;

  constructor(
    realm: StaticJsRealm,
    public readonly targetFunc: StaticJsCallable,
    private readonly _boundThis: StaticJsValue,
    private readonly _boundArgs: StaticJsValue[],
    prototype?: StaticJsObject | StaticJsNull | null,
  ) {
    super(realm, prototype ?? realm.intrinsics["Function.prototype"]);
  }

  override get typeOf(): "function" {
    return "function";
  }

  get runtimeTypeOf(): "function" {
    return "function";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Function;
  }

  get isConstructor(): boolean {
    return this.targetFunc.isConstructor;
  }

  get strict(): boolean {
    if (isStaticJsFunction(this.targetFunc)) {
      return this.targetFunc.strict;
    }
    return false;
  }

  get boundTargetFunction(): StaticJsCallable {
    return this.targetFunc;
  }

  get initialName(): string | null {
    return this._initialName;
  }

  setInitialName(value: string) {
    if (typeof value !== "string") {
      throw new StaticJsEngineError("Initial name must be a string");
    }

    if (this._initialName !== null) {
      throw new StaticJsEngineError("Initial name can only be set once");
    }

    this._initialName = value;
  }

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.callEvaluator(thisArg, args), opts);
  }

  callSync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.callEvaluator(thisArg, args), opts);
  }

  callEvaluator(
    _thisArg: StaticJsValue,
    args: StaticJsValue[] = [],
  ): EvaluationGenerator<StaticJsValue> {
    return this.targetFunc.callEvaluator(this._boundThis, [...this._boundArgs, ...args]);
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
    argumentsList: StaticJsValue[],
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObject> {
    const target = this.targetFunc;
    if (!target.isConstructor) {
      throw new StaticJsEngineError(
        "constructEvaluator called on a non-constructor bound function.",
      );
    }

    const args = [...this._boundArgs, ...argumentsList];

    if (sameValue(this, newTarget)) {
      newTarget = target;
    }

    return yield* construct(target, args, newTarget);
  }

  getNameAsync(opts?: StaticJsRunTaskOptions): Promise<string> {
    return this.realm.invokeEvaluatorAsync(this._getNameEvaluator(), opts);
  }

  getNameSync(opts?: StaticJsRunTaskOptions): string {
    return this.realm.invokeEvaluatorSync(this._getNameEvaluator(), opts);
  }

  override toNative(
    // Bound functions don't carry a host-access bridge of their own; the policy
    // option is accepted for interface compatibility but not applied here.
    _opts?: StaticJsCallableToNativeOpts,
  ): (...args: unknown[]) => unknown {
    return super.toNative() as (...args: unknown[]) => unknown;
  }

  private *_getNameEvaluator(): EvaluationGenerator<string> {
    const nameValue = yield* get(this, "name");
    if (isStaticJsScalar(nameValue)) {
      return String(nameValue.value);
    }

    if (this._initialName) {
      return this._initialName;
    }

    return "<anonymous>";
  }
}
