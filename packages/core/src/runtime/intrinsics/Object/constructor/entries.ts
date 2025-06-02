import toObject from "../../../algorithms/to-object.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorEntriesDeclaration: IntrinsicPropertyDeclaration = {
  name: "entries",
  *func(realm, thisArg) {
    // TODO: This should return an iterator.
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const ownKeys = yield* thisObj.getOwnKeysEvaluator();

    const values: StaticJsValue[] = new Array(ownKeys.length);
    for (let i = 0; i < ownKeys.length; i++) {
      const value = yield* thisObj.getPropertyEvaluator(ownKeys[i]);
      const item = realm.types.array([realm.types.string(ownKeys[i]), value]);
      values[i] = item;
    }

    const result = realm.types.array(values);
    return result;
  },
};

export default objectCtorEntriesDeclaration;
