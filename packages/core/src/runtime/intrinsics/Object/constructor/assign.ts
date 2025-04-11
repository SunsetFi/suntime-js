import { NormalCompletion } from "../../../../evaluator/internal.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorAssignDeclaration: IntrinsicPropertyDeclaration = {
  name: "assign",
  *func(realm, thisObj, target, ...sources) {
    const targetObj = (target ?? realm.types.undefined).toObject();

    for (const source of sources) {
      const sourceObj = source!.toObject();
      const keys = yield* sourceObj.getOwnEnumerableKeysEvaluator();
      for (const key of keys) {
        const value = yield* sourceObj.getPropertyEvaluator(key);
        yield* targetObj.setPropertyEvaluator(key, value, true);
      }
    }

    return NormalCompletion(targetObj);
  },
};

export default objectCtorAssignDeclaration;
