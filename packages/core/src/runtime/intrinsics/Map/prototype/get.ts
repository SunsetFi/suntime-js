import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const mapProtoGetDeclaration: IntrinsicPropertyDeclaration = {
  key: "get",
  length: 1,
  *func(realm, thisArg, key = realm.types.undefined) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.get called on incompatible receiver");
    }

    return yield* thisArg.getValueEvaluator(key);
  },
};

export default mapProtoGetDeclaration;
