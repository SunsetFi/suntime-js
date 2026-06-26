import { isArray } from "../../../algorithms/is-array.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayCtorIsArrayDeclaration: IntrinsicPropertyDeclaration = {
  key: "isArray",
  length: 1,
  *func(realm, _thisArg, arg = realm.types.undefined) {
    const argIsArray = yield* isArray(arg);
    return realm.types.boolean(argIsArray);
  },
};

export default arrayCtorIsArrayDeclaration;
