import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Map.prototype.keys called on incompatible receiver"),
      );
    }

    return yield* thisArg.keysEvaluator();
  },
};

export default mapProtoKeysDeclaration;
