import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoIsDisjointFromDeclaration: IntrinsicPropertyDeclaration = {
  key: "isDisjointFrom",
  *func(realm, thisArg, otherSet) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    const result = yield* thisArg.isDisjointFromEvaluator(otherSet ?? realm.types.undefined);

    return realm.types.boolean(result);
  },
};

export default setProtoIsDisjointFromDeclaration;
