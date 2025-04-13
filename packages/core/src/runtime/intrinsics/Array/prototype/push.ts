import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../../evaluator/internal.js";
import { MAX_ARRAY_LENGTH } from "../../../types/interfaces/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoPushDeclaration: IntrinsicPropertyDeclaration = {
  name: "push",
  *func(realm, thisArg, ...args) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    if (args.length + length > MAX_ARRAY_LENGTH) {
      return ThrowCompletion(
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

    return NormalCompletion(newLengthValue);
  },
};

export default arrayProtoPushDeclaration;
