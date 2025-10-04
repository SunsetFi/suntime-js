import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toObject from "../../../algorithms/to-object.js";

import { MAX_ARRAY_LENGTH } from "../../../types/StaticJsArray.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoPushDeclaration: IntrinsicPropertyDeclaration = {
  key: "push",
  *func(realm, thisArg, ...args) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* getLength(realm, thisObj);

    if (args.length + length > MAX_ARRAY_LENGTH) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `Pushing ${args.length} elements on an array-like of length ${length} is disallowed, as the total surpasses the maximum array length.`,
        ),
      );
    }

    for (let i = 0; i < args.length; i++) {
      const index = length + i;
      const value = args[i]!;
      yield* thisObj.setPropertyEvaluator(String(index), value, true);
    }

    // Might be relevant that some docs say this should be called after the items are set.
    const newLengthValue = realm.types.number(length + args.length);
    yield* thisObj.setPropertyEvaluator("length", newLengthValue, true);

    return newLengthValue;
  },
};

export default arrayProtoPushDeclaration;
