import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoAddDeclaration: IntrinsicPropertyDeclaration = {
  key: "add",
  *func(realm, thisArg, value) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    yield* thisArg.addEvaluator(value ?? realm.types.undefined);

    return thisArg;
  },
};

export default setProtoAddDeclaration;
