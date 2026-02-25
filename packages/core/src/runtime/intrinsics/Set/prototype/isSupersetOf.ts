import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoIsSupersetOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "isSupersetOf",
  *func(realm, thisArg, otherSet) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    const result = yield* thisArg.isSupersetOfEvaluator(otherSet ?? realm.types.undefined);

    return realm.types.boolean(result);
  },
};

export default setProtoIsSupersetOfDeclaration;
