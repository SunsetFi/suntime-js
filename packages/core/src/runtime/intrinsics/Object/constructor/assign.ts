import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { get } from "../../../algorithms/get.js";
import { set } from "../../../algorithms/set.js";
import toObject from "../../../algorithms/to-object.js";

const objectCtorAssignDeclaration: IntrinsicPropertyDeclaration = {
  key: "assign",
  *func(realm, _thisArg, target = realm.types.undefined, ...sources) {
    target = yield* toObject(target);

    for (const source of sources) {
      const sourceObj = yield* toObject(source!);
      const keys = yield* sourceObj.ownEnumerableKeysEvaluator();
      for (const key of keys) {
        const value = yield* get(sourceObj, key);
        yield* set(target, key, value, true);
      }
    }

    return target;
  },
};

export default objectCtorAssignDeclaration;
