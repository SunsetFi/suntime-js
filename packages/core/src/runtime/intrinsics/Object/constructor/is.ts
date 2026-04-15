import { sameValue } from "../../../algorithms/same-value.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorIsDeclaration: IntrinsicPropertyDeclaration = {
  key: "is",
  *func(realm, _thisArg, value1 = realm.types.undefined, value2 = realm.types.undefined) {
    const result = sameValue(value1, value2);
    return realm.types.boolean(result);
  },
};

export default objectCtorIsDeclaration;
