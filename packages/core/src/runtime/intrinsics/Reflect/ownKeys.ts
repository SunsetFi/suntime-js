import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { toPropertyKey } from "../../../algorithms/to-property-key.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const reflectOwnKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "ownKeys",
  length: 1,
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw yield* Completion.Throw.create("TypeError", "Reflect.ownKeys called on non-object");
    }

    const ownKeys = yield* Q(target.ownPropertyKeysEvaluator());
    let values: StaticJsValue[] = [];
    for (const key of ownKeys) {
      const propertyKeyValue = yield* toPropertyKey(key);
      let propertyKey: StaticJsValue;
      if (typeof propertyKeyValue === "string") {
        propertyKey = realm.types.string(propertyKeyValue);
      } else {
        propertyKey = propertyKeyValue;
      }

      values.push(propertyKey);
    }
    return yield* createArrayFromList(values);
  },
};
