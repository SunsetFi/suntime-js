import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoValuesDeclaration: IntrinsicPropertyDeclaration = {
  key: "values",
  length: 0,
  *func(realm, thisArg) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    return yield* thisArg.valuesEvaluator();
  },
};

export default setProtoValuesDeclaration;
