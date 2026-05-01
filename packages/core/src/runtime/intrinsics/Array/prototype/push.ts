import { Completion } from "../../../../evaluator/completions/Completion.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { set } from "../../../algorithms/set.js";
import { toObject } from "../../../algorithms/to-object.js";
import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../../../types/StaticJsArray.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoPushDeclaration: IntrinsicPropertyDeclaration = {
  key: "push",
  length: 1,
  *func(realm, thisArg = realm.types.undefined, ...args) {
    const thisObj = yield* toObject(thisArg);

    const length = yield* lengthOfArrayLike(thisObj);

    if (args.length + length > MAX_ARRAY_LENGTH_INCLUSIVE) {
      throw Completion.Throw(
        "TypeError",
        `Pushing ${args.length} elements on an array-like of length ${length} is disallowed, as the total surpasses the maximum array length.`,
      );
    }

    for (let i = 0; i < args.length; i++) {
      const index = length + i;
      const value = args[i]!;
      yield* set(thisObj, String(index), value, true);
    }

    const newLengthValue = realm.types.number(length + args.length);
    yield* set(thisObj, "length", newLengthValue, true);

    return newLengthValue;
  },
};

export default arrayProtoPushDeclaration;
