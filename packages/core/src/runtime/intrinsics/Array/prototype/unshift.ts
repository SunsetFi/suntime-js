import { NormalCompletion } from "../../../../evaluator/completions/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const arrayProtoUnshiftDeclaration: IntrinsicPropertyDeclaration = {
  name: "unshift",
  func: function* (realm, thisArg, ...args) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    // Set the new length
    let lengthValue = yield* thisObj.getPropertyEvaluator("length");
    if (!lengthValue) {
      lengthValue = realm.types.zero;
    }

    const length = lengthValue.toNumber();
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
