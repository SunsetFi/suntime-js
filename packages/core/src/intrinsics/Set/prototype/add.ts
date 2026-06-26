import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const setProtoAddDeclaration: IntrinsicPropertyDeclaration = {
  key: "add",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    yield* thisArg.addValueEvaluator(value);

    return thisArg;
  },
};

export default setProtoAddDeclaration;
