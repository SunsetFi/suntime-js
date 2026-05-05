import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const mapProtoSetDeclaration: IntrinsicPropertyDeclaration = {
  key: "set",
  length: 2,
  *func(realm, thisArg, key = realm.types.undefined, value = realm.types.undefined) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.set called on incompatible receiver");
    }

    yield* thisArg.setValueEvaluator(key, value);
    return thisArg;
  },
};

export default mapProtoSetDeclaration;
