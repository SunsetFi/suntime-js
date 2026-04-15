import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { arraySpeciesCreate } from "../../../algorithms/array-species-create.js";
import { call } from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { toBoolean } from "../../../algorithms/to-boolean.js";
import { toObject } from "../../../algorithms/to-object.js";
import { toString } from "../../../algorithms/to-string.js";

const arrayProtoFilterDeclaration: IntrinsicPropertyDeclaration = {
  key: "filter",
  *func(realm, thisArg = realm.types.undefined, callback) {
    const thisObj = yield* toObject(thisArg);

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isCallable(callback)) {
      const callbackStr = yield* toString.js(callback);
      throw Completion.Throw("TypeError", `${callbackStr} is not a function`);
    }

    const length = yield* lengthOfArrayLike(thisObj);

    const target = yield* arraySpeciesCreate(thisObj, 0, realm);
    let to = 0;

    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* get(thisObj, property);
      const resultValue = yield* call(callback, thisObj, [
        elementValue,
        realm.types.number(i),
        thisObj,
      ]);
      const condition = yield* toBoolean.js(resultValue);
      if (!condition) {
        continue;
      }

      // Needs to be define, not set, for spec compliance.
      // This is only relevant for crazy things like a subclass of array
      // with setter props for index values.
      yield* target.defineOwnPropertyEvaluator(String(to), {
        value: elementValue,
        writable: true,
        enumerable: true,
        configurable: true,
      });
      to++;
    }

    return target;
  },
};

export default arrayProtoFilterDeclaration;
