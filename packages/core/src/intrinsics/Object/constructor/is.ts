import { sameValue } from "../../../algorithms/same-value.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectCtorIsDeclaration: IntrinsicPropertyDeclaration = {
  key: "is",
  length: 2,
  *func(realm, _thisArg, value1 = realm.types.undefined, value2 = realm.types.undefined) {
    const result = sameValue(value1, value2);
    return realm.types.boolean(result);
  },
};

export default objectCtorIsDeclaration;
