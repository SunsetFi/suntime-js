import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoSymmetricDifferenceDeclaration: IntrinsicPropertyDeclaration = {
  key: "symmetricDifference",
  *func(realm, thisArg, otherSet = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.symmetricDifferenceEvaluator(otherSet);
  },
};

export default setProtoSymmetricDifferenceDeclaration;
