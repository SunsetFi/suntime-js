import { NormalCompletion } from "../../../../evaluator/completions/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const arrayProtoPopDeclaration: IntrinsicPropertyDeclaration = {
  name: "pop",
  *func(realm, thisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    // Pop works independently of the underlying type and
    // messes with the properties manually.

    let lengthValue = yield* thisObj.getPropertyEvaluator("length");
    if (!lengthValue) {
      lengthValue = realm.types.zero;
    }

    const length = Math.floor(lengthValue.toNumber());

    if (length <= 0) {
      // This seems to re-set length to 0 even if it wasn't an array.
      // Also sets it to 0 if it was a negative length.
      yield* thisObj.setPropertyEvaluator("length", realm.types.zero, true);
      return NormalCompletion(realm.types.undefined);
    }

    const index = length - 1;
    const value = yield* thisObj.getPropertyEvaluator(String(index));

    yield* thisObj.deletePropertyEvaluator(String(index));
    yield* thisObj.setPropertyEvaluator(
      "length",
      realm.types.number(length - 1),
      true,
    );

    return NormalCompletion(value);
  },
};

export default arrayProtoPopDeclaration;
