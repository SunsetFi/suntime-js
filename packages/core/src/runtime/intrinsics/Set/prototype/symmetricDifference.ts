import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoSymmetricDifferenceDeclaration: IntrinsicPropertyDeclaration = {
  key: "symmetricDifference",
  *func(realm, thisArg, otherSet) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.symmetricDifferenceEvaluator(
      otherSet ?? realm.types.undefined,
    );
  },
};

export default setProtoSymmetricDifferenceDeclaration;
