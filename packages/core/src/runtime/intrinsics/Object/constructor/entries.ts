import toObject from "../../../algorithms/to-object.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(realm, thisArg, obj) {
    // TODO: This should return an iterator.
    obj = yield* toObject(obj ?? realm.types.undefined, realm);

    const ownKeys = yield* obj.getOwnEnumerableKeysEvaluator();

    const values: StaticJsValue[] = new Array(ownKeys.length);
    for (let i = 0; i < ownKeys.length; i++) {
      const value = yield* obj.getEvaluator(ownKeys[i]);
      const item = realm.types.array([realm.types.string(ownKeys[i]), value]);
      values[i] = item;
    }

    const result = realm.types.array(values);
    return result;
  },
};

export default objectCtorEntriesDeclaration;
