import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";

const setProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, thisArg) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.keysEvaluator();
  },
};

export default setProtoKeysDeclaration;
