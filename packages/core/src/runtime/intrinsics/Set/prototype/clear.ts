import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";

const setProtoClearDeclaration: IntrinsicPropertyDeclaration = {
  key: "clear",
  *func(realm, thisArg) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    yield* thisArg.clearEvaluator();

    return thisArg;
  },
};

export default setProtoClearDeclaration;
