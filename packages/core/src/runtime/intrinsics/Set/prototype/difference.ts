import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoDifferenceDeclaration: IntrinsicPropertyDeclaration = {
  key: "difference",
  *func(realm, thisArg, otherSet = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.differenceEvaluator(otherSet);
  },
};

export default setProtoDifferenceDeclaration;
