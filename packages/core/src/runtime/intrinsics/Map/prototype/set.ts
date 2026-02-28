import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoSetDeclaration: IntrinsicPropertyDeclaration = {
  key: "set",
  *func(realm, thisArg, key, value) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Map.prototype.set called on incompatible receiver"),
      );
    }

    yield* thisArg.setValueEvaluator(key ?? realm.types.undefined, value ?? realm.types.undefined);
    return thisArg;
  },
};

export default mapProtoSetDeclaration;
