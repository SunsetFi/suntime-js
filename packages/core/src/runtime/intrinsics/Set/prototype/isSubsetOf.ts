import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";

const setProtoIsSubsetOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "isSubsetOf",
  *func(realm, thisArg, otherSet = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    const result = yield* thisArg.isSubsetOfEvaluator(otherSet);

    return realm.types.boolean(result);
  },
};

export default setProtoIsSubsetOfDeclaration;
