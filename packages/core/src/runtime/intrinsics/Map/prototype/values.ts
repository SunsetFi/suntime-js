import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoValuesDeclaration: IntrinsicPropertyDeclaration = {
  key: "values",
  *func(_realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.values called on incompatible receiver");
    }

    return yield* thisArg.valuesEvaluator();
  },
};

export default mapProtoValuesDeclaration;
