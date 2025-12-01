import toObject from "../../../algorithms/to-object.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorValuesDeclaration: IntrinsicPropertyDeclaration = {
  key: "values",
  *func(realm, _thisArg, obj) {
    obj = yield* toObject(obj ?? realm.types.undefined, realm);

    const ownKeys = yield* obj.getOwnEnumerableKeysEvaluator();

    const values: StaticJsValue[] = new Array(ownKeys.length);
    for (let i = 0; i < ownKeys.length; i++) {
      values[i] = yield* obj.getEvaluator(ownKeys[i]);
    }

    const result = realm.types.array(values);
    return result;
  },
};

export default objectCtorValuesDeclaration;
