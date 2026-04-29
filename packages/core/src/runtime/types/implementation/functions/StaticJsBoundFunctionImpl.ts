import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { construct } from "../../../algorithms/construct.js";
import { get } from "../../../algorithms/get.js";
import { sameValue } from "../../../algorithms/same-value.js";
import { toInteger } from "../../../algorithms/to-integer.js";
import { toString } from "../../../algorithms/to-string.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "../../../tasks/StaticJsRunTaskOptions.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";
import { isStaticJsFunction, type StaticJsFunction } from "../../StaticJsFunction.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import { isStaticJsString } from "../../StaticJsString.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

export class StaticJsBoundFunction extends StaticJsOrdinaryObjectImpl implements StaticJsFunction {
  static *create(
    realm: StaticJsRealm,
    targetFunc: StaticJsCallable,
    thisArg: StaticJsValue,
    boundArgs: StaticJsValue[],
  ): EvaluationGenerator<StaticJsBoundFunction> {
    const instance = new StaticJsBoundFunction(realm, targetFunc, thisArg, boundArgs);

    const boundLength = yield* get(targetFunc, "length");
    const length = yield* toInteger(boundLength);
    yield* instance.defineOwnPropertyEvaluator("length", {
      value: realm.types.number(Math.max(0, length.value - boundArgs.length)),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    const name = yield* get(targetFunc, "name");
    yield* instance.defineOwnPropertyEvaluator("name", {
      value: realm.types.string(isStaticJsString(name) ? `bound ${name.value}` : "bound"),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    return instance;
  }

  private constructor(
    realm: StaticJsRealm,
    public readonly targetFunc: StaticJsCallable,
    private readonly _boundThis: StaticJsValue,
    private readonly _boundArgs: StaticJsValue[],
    prototype?: StaticJsObject,
  ) {
    super(realm, prototype ?? realm.types.prototypes.functionProto);
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

  override toNative(): (...args: unknown[]) => unknown {
    return super.toNative() as (...args: unknown[]) => unknown;
  }

  private *_getNameEvaluator(): EvaluationGenerator<string> {
    const nameValue = yield* get(this, "name");
    const nameStr = yield* toString.js(nameValue);
    return nameStr.toString();
  }
}
