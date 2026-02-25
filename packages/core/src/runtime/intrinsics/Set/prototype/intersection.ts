import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoIntersectionDeclaration: IntrinsicPropertyDeclaration = {
  key: "intersection",
  *func(realm, thisArg, otherSet) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.intersectionEvaluator(otherSet ?? realm.types.undefined);
  },
};

export default setProtoIntersectionDeclaration;
