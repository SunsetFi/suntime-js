import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const setProtoDeleteDeclaration: IntrinsicPropertyDeclaration = {
  key: "delete",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    const result = yield* thisArg.deleteValueEvaluator(value);
    return realm.types.boolean(result);
  },
};

export default setProtoDeleteDeclaration;
