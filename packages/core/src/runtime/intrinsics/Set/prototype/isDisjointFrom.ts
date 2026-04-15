import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoIsDisjointFromDeclaration: IntrinsicPropertyDeclaration = {
  key: "isDisjointFrom",
  *func(realm, thisArg, otherSet = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    const result = yield* thisArg.isDisjointFromEvaluator(otherSet);

    return realm.types.boolean(result);
  },
};

export default setProtoIsDisjointFromDeclaration;
