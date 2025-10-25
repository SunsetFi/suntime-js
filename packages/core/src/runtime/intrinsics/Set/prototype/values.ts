import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoValuesDeclaration: IntrinsicPropertyDeclaration = {
  key: "values",
  *func(realm, thisArg) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.valuesEvaluator();
  },
};

export default setProtoValuesDeclaration;
