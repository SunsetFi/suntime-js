import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import toObject from "../../../algorithms/to-object.js";
import { toPropertyKey } from "../../../utils/to-property-key.js";

const objectProtoPropertyIsEnumerableDeclaration: IntrinsicPropertyDeclaration = {
  key: "propertyIsEnumerable",
  *func(realm, thisArg = realm.types.undefined, key = realm.types.undefined) {
    const P = yield* toPropertyKey(key);
    const O = yield* toObject(thisArg);
    const desc = yield* O.getOwnPropertyEvaluator(P);
    if (!desc) {
      return realm.types.false;
    }
    return realm.types.boolean(desc.enumerable);
  },
};

export default objectProtoPropertyIsEnumerableDeclaration;
