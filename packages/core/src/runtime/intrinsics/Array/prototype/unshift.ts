import { NormalCompletion } from "../../../../evaluator/completions/index.js";
import ThrowCompletion, {
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import { MAX_ARRAY_LENGTH } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

export const arrayProtoUnshiftDeclaration: IntrinsicPropertyDeclaration = {
  name: "unshift",
  *func(realm, thisArg, ...args) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    // Set the new length
    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    if (args.length + length > MAX_ARRAY_LENGTH) {
      // Note: Not exactly what NodeJs does, it says "invalid array length".
      // Not sure on the exact situations of when it says that though.
      return ThrowCompletion(
        realm.types.string(
          `TypeError: Unshifting ${args.length} elements on an array-like of length ${length} is disallowed, as the total surpasses the maximum array length.`,
        ),
      );
    }

    const newLengthValue = realm.types.number(length + args.length);
    yield* thisObj.setPropertyEvaluator("length", newLengthValue, true);

    // Shift the elements to the right
    for (let i = length - 1; i >= 0; i--) {
      // Don't actually do this if the property doesn't exist.
      // Kinda nasty
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      if (!hasProperty) {
        continue;
      }
      const value = yield* thisObj.getPropertyEvaluator(String(i));
      yield* thisObj.setPropertyEvaluator(String(i + args.length), value, true);
    }

    // Set the new values
    for (let i = 0; i < args.length; i++) {
      const value = args[i]!;
      yield* thisObj.setPropertyEvaluator(String(i), value, true);
    }

    // Return the new length
    // This returns our computed length, even if the object has a getter
    // that returns a different value.
    return NormalCompletion(newLengthValue);
  },
};

export default arrayProtoUnshiftDeclaration;
