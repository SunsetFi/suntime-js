import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoIntersectionDeclaration: IntrinsicPropertyDeclaration = {
  key: "intersection",
  *func(realm, thisArg, otherSet = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.intersectionEvaluator(otherSet);
  },
};

export default setProtoIntersectionDeclaration;
