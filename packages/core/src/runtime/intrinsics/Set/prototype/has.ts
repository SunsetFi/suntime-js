import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoHasDeclaration: IntrinsicPropertyDeclaration = {
  key: "has",
  *func(realm, thisArg, value = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    const result = yield* thisArg.hasEvaluator(value);

    return realm.types.boolean(result);
  },
};

export default setProtoHasDeclaration;
