import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toObject from "../../../algorithms/to-object.js";

import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../../../types/StaticJsArray.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

export const arrayProtoUnshiftDeclaration: IntrinsicPropertyDeclaration = {
  key: "unshift",
  *func(realm, thisArg, ...args) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    // Set the new length
    const length = yield* lengthOfArrayLike(thisObj, realm);

    if (args.length + length > MAX_ARRAY_LENGTH_INCLUSIVE) {
      // Note: Not exactly what NodeJs does, it says "invalid array length".
      // Not sure on the exact situations of when it says that though.
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `Unshifting ${args.length} elements on an array-like of length ${length} is disallowed, as the total surpasses the maximum array length.`,
        ),
      );
    }

    // Shift the elements to the right
    for (let i = length - 1; i >= 0; i--) {
      const property = String(i);
      const nextProperty = String(i + args.length);

      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        yield* thisObj.deletePropertyEvaluator(nextProperty);
        continue;
      }

      const value = yield* thisObj.getPropertyEvaluator(property);
      yield* thisObj.setPropertyEvaluator(nextProperty, value, true);
    }

    // Set the new values
    for (let i = 0; i < args.length; i++) {
      const value = args[i]!;
      yield* thisObj.setPropertyEvaluator(String(i), value, true);
    }

    const newLengthValue = realm.types.number(length + args.length);

    yield* thisObj.setPropertyEvaluator("length", newLengthValue, true);

    // Return the new length
    // This returns our computed length, even if the object has a getter
    // that returns a different value.
    return newLengthValue;
  },
};

export default arrayProtoUnshiftDeclaration;
