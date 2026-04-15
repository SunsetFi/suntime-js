import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { toObject } from "../../../algorithms/to-object.js";

const functionProtoApplyDeclaration: IntrinsicPropertyDeclaration = {
  key: "apply",
  *func(realm, thisFunc, thisArg = realm.types.undefined, argsArray) {
    if (!isCallable(thisFunc)) {
      throw Completion.Throw("TypeError", "Function.prototype.call called on a non-function.");
    }

    const args: StaticJsValue[] = [];
    if (argsArray) {
      const argsArrayObj = yield* toObject(argsArray);
      const length = yield* lengthOfArrayLike(argsArrayObj);
      for (let i = 0; i < length; i++) {
        const element = yield* get(argsArrayObj, String(i));
        args.push(element);
      }
    }

    const result = yield* call(thisFunc, thisArg, args);
    return result;
  },
};

export default functionProtoApplyDeclaration;
