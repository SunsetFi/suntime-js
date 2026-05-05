import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const mapProtoClearDeclaration: IntrinsicPropertyDeclaration = {
  key: "clear",
  length: 0,
  *func(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.clear called on incompatible receiver");
    }

    yield* thisArg.clearEvaluator();
    return realm.types.undefined;
  },
};

export default mapProtoClearDeclaration;
