import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorValuesDeclaration: IntrinsicPropertyDeclaration = {
  name: "values",
  *func(realm, thisArg) {
    // TODO: This should return an iterator.
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const ownKeys = yield* thisObj.getOwnKeysEvaluator();

    const values: StaticJsValue[] = new Array(ownKeys.length);
    for (let i = 0; i < ownKeys.length; i++) {
      values[i] = yield* thisObj.getPropertyEvaluator(ownKeys[i]);
    }

    const result = realm.types.array(values);
    return result;
  },
};

export default objectCtorValuesDeclaration;
