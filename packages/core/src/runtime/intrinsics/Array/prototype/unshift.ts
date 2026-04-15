import { Completion } from "../../../../evaluator/completions/Completion.js";
import { get } from "../../../algorithms/get.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { set } from "../../../algorithms/set.js";
import { toObject } from "../../../algorithms/to-object.js";
import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../../../types/StaticJsArray.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

export const arrayProtoUnshiftDeclaration: IntrinsicPropertyDeclaration = {
  key: "unshift",
  *func(realm, thisArg = realm.types.undefined, ...args) {
    const thisObj = yield* toObject(thisArg);

    // Set the new length
    const length = yield* lengthOfArrayLike(thisObj);

    if (args.length + length > MAX_ARRAY_LENGTH_INCLUSIVE) {
      // Note: Not exactly what NodeJs does, it says "invalid array length".
      // Not sure on the exact situations of when it says that though.
      throw Completion.Throw(
        "TypeError",
        `Unshifting ${args.length} elements on an array-like of length ${length} is disallowed, as the total surpasses the maximum array length.`,
      );
    }

    // Shift the elements to the right
    for (let i = length - 1; i >= 0; i--) {
      const property = String(i);
      const nextProperty = String(i + args.length);

      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        yield* thisObj.deleteEvaluator(nextProperty);
        continue;
      }

      const value = yield* get(thisObj, property);
      yield* set(thisObj, nextProperty, value, true);
    }

    // Set the new values
    for (let i = 0; i < args.length; i++) {
      const value = args[i]!;
      yield* set(thisObj, String(i), value, true);
    }

    const newLengthValue = realm.types.number(length + args.length);

    yield* set(thisObj, "length", newLengthValue, true);

    // Return the new length
    // This returns our computed length, even if the object has a getter
    // that returns a different value.
    return newLengthValue;
  },
};

export default arrayProtoUnshiftDeclaration;
