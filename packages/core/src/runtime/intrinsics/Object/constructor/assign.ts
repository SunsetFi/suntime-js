import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorAssignDeclaration: IntrinsicPropertyDeclaration = {
  key: "assign",
  *func(realm, thisArg, target, ...sources) {
    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);
    target = yield* toObject(target ?? realm.types.undefined, realm);

    for (const source of sources) {
      const sourceObj = yield* toObject(source!, realm);
      const keys = yield* sourceObj.ownEnumerableKeysEvaluator();
      for (const key of keys) {
        const value = yield* sourceObj.getEvaluator(key);
        yield* target.setEvaluator(key, value, true);
      }
    }

    return target;
  },
};

export default objectCtorAssignDeclaration;
