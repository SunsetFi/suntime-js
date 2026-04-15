import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { toObject } from "../../../algorithms/to-object.js";
import { toString } from "../../../algorithms/to-string.js";

const arrayProtoReduceRightDeclaration: IntrinsicPropertyDeclaration = {
  key: "reduceRight",
  *func(realm, thisArg, callback, initialValue) {
    const o = yield* toObject(thisArg);

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isCallable(callback)) {
      const callbackStr = yield* toString.js(callback);
      throw Completion.Throw("TypeError", `${callbackStr} is not a function`);
    }

    const length = yield* lengthOfArrayLike(o);
    if (length === 0) {
      if (initialValue == null) {
        throw Completion.Throw("TypeError", "Reduce of empty array with no initial value");
      }

      return initialValue;
    }

    let value: StaticJsValue;
    let startIndex;
    if (initialValue) {
      value = initialValue;
      startIndex = length - 1;
    } else {
      value = yield* get(o, String(length - 1));
      startIndex = length - 2;
    }

    for (let i = startIndex; i >= 0; i--) {
      const elementValue = yield* get(o, String(i));
      const result = yield* call(callback, o, [value, elementValue, realm.types.number(i), o]);

      value = result;
    }

    return value;
  },
};

export default arrayProtoReduceRightDeclaration;
