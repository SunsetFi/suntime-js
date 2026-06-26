import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const setProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  length: 0,
  *func(realm, thisArg) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.keysEvaluator();
  },
};

export default setProtoKeysDeclaration;
