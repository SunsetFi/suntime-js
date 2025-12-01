import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const functionProtoApplyDeclaration: IntrinsicPropertyDeclaration = {
  key: "apply",
  *func(realm, thisFunc, thisArg, argsArray) {
    if (!isStaticJsFunction(thisFunc)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Function.prototype.call called on a non-function.",
        ),
      );
    }

    const args: StaticJsValue[] = [];
    if (argsArray) {
      const argsArrayObj = yield* toObject(argsArray, realm);
      const length = yield* lengthOfArrayLike(argsArrayObj, realm);
      for (let i = 0; i < length; i++) {
        const element = yield* argsArrayObj.getEvaluator(String(i));
        args.push(element);
      }
    }

    const result = yield* thisFunc.callEvaluator(
      thisArg ?? realm.types.undefined,
      ...args,
    );
    return result;
  },
};

export default functionProtoApplyDeclaration;
