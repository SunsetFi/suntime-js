import { NormalCompletion } from "../../../../evaluator/internal.js";
import strictEquality from "../../../algorithms/strict-equality.js";
import toInteger from "../../../algorithms/to-integer.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoLastIndexOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "lastIndexOf",
  *func(realm, thisArg, value) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const lengthValue = yield* thisObj.getPropertyEvaluator("length");
    const length = toInteger(lengthValue);

    if (!value) {
      value = realm.types.undefined;
    }

    for (let i = length - 1; i >= 0; i--) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      if (!hasProperty) {
        continue;
      }
      const valueAtIndex = yield* thisObj.getPropertyEvaluator(String(i));
      if (strictEquality(valueAtIndex, value)) {
        return NormalCompletion(realm.types.number(i));
      }
    }

    return NormalCompletion(realm.types.number(-1));
  },
};

export default arrayProtoLastIndexOfDeclaration;
