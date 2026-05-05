import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const mapProtoHasDeclaration: IntrinsicPropertyDeclaration = {
  key: "has",
  length: 1,
  *func(realm, thisArg, key = realm.types.undefined) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.has called on incompatible receiver");
    }

    const hasValue = yield* thisArg.hasEvaluator(key);
    return realm.types.boolean(hasValue);
  },
};

export default mapProtoHasDeclaration;
