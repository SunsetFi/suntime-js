import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorAssignDeclaration: IntrinsicPropertyDeclaration = {
  name: "assign",
  *func(realm, thisArg, target, ...sources) {
    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);
    target = yield* toObject(target ?? realm.types.undefined, realm);

    for (const source of sources) {
      const sourceObj = yield* toObject(source!, realm);
      const keys = yield* sourceObj.getOwnEnumerableKeysEvaluator();
      for (const key of keys) {
        const value = yield* sourceObj.getPropertyEvaluator(key);
        yield* target.setPropertyEvaluator(key, value, true);
      }
    }

    return target;
  },
};

export default objectCtorAssignDeclaration;
