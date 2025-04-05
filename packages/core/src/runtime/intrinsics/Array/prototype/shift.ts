import { NormalCompletion } from "../../../../evaluator/completions/index.js";
import toInteger from "../../../algorithms/to-integer.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoShiftDeclaration: IntrinsicPropertyDeclaration = {
  name: "shift",
  *func(realm, thisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    let lengthValue = yield* thisObj.getPropertyEvaluator("length");
    if (!lengthValue) {
      lengthValue = realm.types.zero;
    }

    const length = toInteger(lengthValue);
    if (length <= 0) {
      yield* thisObj.setPropertyEvaluator("length", realm.types.zero, true);
      return NormalCompletion(realm.types.undefined);
    }

    const value = yield* thisObj.getPropertyEvaluator("0");

    for (let i = 0; i < length - 1; i++) {
      const nextValue = yield* thisObj.getPropertyEvaluator(String(i + 1));
      yield* thisObj.setPropertyEvaluator(String(i), nextValue, true);
    }

    yield* thisObj.deletePropertyEvaluator(String(length - 1));
    yield* thisObj.setPropertyEvaluator(
      "length",
      realm.types.number(length - 1),
      true,
    );

    return NormalCompletion(value);
  },
};

export default arrayProtoShiftDeclaration;
