import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import toInteger from "../../algorithms/to-integer.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import { isStaticJsString } from "../StaticJsString.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

class StaticJsBoundFunction
  extends StaticJsObjectLikeImpl
  implements StaticJsFunction
{
  static *create(
    realm: StaticJsRealm,
    targetFunc: StaticJsFunction,
    thisArg: StaticJsValue,
    boundArgs: StaticJsValue[],
  ): EvaluationGenerator<StaticJsBoundFunction> {
    const instance = new StaticJsBoundFunction(
      realm,
      targetFunc,
      thisArg,
      boundArgs,
    );

    const boundLength = yield* targetFunc.getEvaluator("length");
    const length = yield* toInteger(boundLength, realm);
    yield* instance.definePropertyEvaluator("length", {
      value: realm.types.number(Math.max(0, length.value - boundArgs.length)),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    const name = yield* targetFunc.getEvaluator("name");
    yield* instance.definePropertyEvaluator("name", {
      value: realm.types.string(
        isStaticJsString(name) ? `bound ${name.value}` : "bound",
      ),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    return instance;
  }

  private constructor(
    realm: StaticJsRealm,
    public readonly targetFunc: StaticJsFunction,
    private readonly _boundThis: StaticJsValue,
    private readonly _boundArgs: StaticJsValue[],
    prototype?: StaticJsObjectLike,
  ) {
    super(realm, prototype ?? realm.types.prototypes.functionProto);
  }

  get typeOf(): "function" {
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
    return this.targetFunc.strict;
  }

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
  ): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.callEvaluator(thisArg, args));
  }

  callSync(thisArg: StaticJsValue, args?: StaticJsValue[]): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.callEvaluator(thisArg, args));
  }

  callEvaluator(
    _thisArg: StaticJsValue,
    args: StaticJsValue[] = [],
  ): EvaluationGenerator<StaticJsValue> {
    return this.targetFunc.callEvaluator(this._boundThis, [
      ...this._boundArgs,
      ...args,
    ]);
  }

  constructAsync(args: StaticJsValue[]): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.constructEvaluator(args));
  }

  constructSync(args: StaticJsValue[]): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.constructEvaluator(args));
  }

  constructEvaluator(
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    return this.targetFunc.constructEvaluator([...this._boundArgs, ...args]);
  }

  toJsSync(): (...args: unknown[]) => unknown {
    return super.toJsSync() as (...args: unknown[]) => unknown;
  }
}

export default StaticJsBoundFunction;
