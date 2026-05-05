import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { get } from "../../../algorithms/get.js";
import { hasOwnProperty } from "../../../algorithms/has-own-property.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { setFunctionLength } from "../../../algorithms/set-function-length.js";
import { setFunctionName } from "../../../algorithms/set-function-name.js";
import { toIntegerOrInfinity } from "../../../algorithms/to-integer-or-infinity.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsBoundFunction } from "../../../types/implementation/functions/StaticJsBoundFunctionImpl.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { StaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsNumber } from "../../../types/StaticJsNumber.js";
import { isStaticJsString } from "../../../types/StaticJsString.js";
import { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

export const functionProtoBindDeclaration: IntrinsicPropertyDeclaration = {
  key: "bind",
  length: 1,
  *func(realm, target, thisArg = realm.types.undefined, ...args) {
    if (!isCallable(target)) {
      throw Completion.Throw("TypeError", "Function.prototype.bind called on incompatible target");
    }

    const boundFunc = yield* boundFunctionCreate(realm, target, thisArg, args as StaticJsValue[]);
    let length = 0;
    const targetHasLength = yield* Q(hasOwnProperty(target, "length"));
    if (targetHasLength) {
      const targetLen = yield* Q(get(target, "length"));
      if (isStaticJsNumber(targetLen)) {
        if (targetLen.value === Number.POSITIVE_INFINITY) {
          length = Number.POSITIVE_INFINITY;
        } else if (targetLen.value === Number.NEGATIVE_INFINITY) {
          length = 0;
        } else {
          const targetLenAsInt = yield* toIntegerOrInfinity.js(targetLen);
          const argCount = args.length;
          length = Math.max(targetLenAsInt - argCount, 0);
        }
      }
    }

    yield* setFunctionLength(boundFunc, length);

    let targetName = yield* Q(get(target, "name"));
    if (isStaticJsString(targetName)) {
      yield* setFunctionName(boundFunc, targetName.value, "bound");
    } else {
      yield* setFunctionName(boundFunc, "", "bound");
    }

    return boundFunc;
  },
};

function* boundFunctionCreate(
  realm: StaticJsRealm,
  targetFunction: StaticJsCallable,
  boundThis: StaticJsValue,
  boundArgs: StaticJsValue[],
): EvaluationGenerator<StaticJsFunction> {
  const proto = yield* Q(targetFunction.getPrototypeOfEvaluator());
  const obj = new StaticJsBoundFunction(realm, targetFunction, boundThis, boundArgs, proto);
  return obj;
}
