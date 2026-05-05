import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const mapProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  length: 0,
  *func(_realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.keys called on incompatible receiver");
    }

    return yield* thisArg.keysEvaluator();
  },
};

export default mapProtoKeysDeclaration;
