import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoUnionDeclaration: IntrinsicPropertyDeclaration = {
  key: "union",
  *func(realm, thisArg, otherSet) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.unionEvaluator(otherSet ?? realm.types.undefined);
  },
};

export default setProtoUnionDeclaration;
