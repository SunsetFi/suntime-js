import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const setProtoUnionDeclaration: IntrinsicPropertyDeclaration = {
  key: "union",
  length: 1,
  *func(realm, thisArg, otherSet = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.unionEvaluator(otherSet);
  },
};

export default setProtoUnionDeclaration;
