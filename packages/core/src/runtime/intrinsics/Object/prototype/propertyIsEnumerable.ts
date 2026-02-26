import toObject from "../../../algorithms/to-object.js";
import toPropertyKey from "../../../utils/to-property-key.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoPropertyIsEnumerableDeclaration: IntrinsicPropertyDeclaration = {
  key: "propertyIsEnumerable",
  *func(realm, thisArg, key) {
    const P = yield* toPropertyKey(key ?? realm.types.undefined, realm);
    const O = yield* toObject(thisArg ?? realm.types.undefined, realm);
    const desc = yield* O.getOwnPropertyEvaluator(P);
    if (!desc) {
      return realm.types.false;
    }
    return realm.types.boolean(desc.enumerable);
  },
};

export default objectProtoPropertyIsEnumerableDeclaration;
