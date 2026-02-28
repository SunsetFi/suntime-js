import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoGetDeclaration: IntrinsicPropertyDeclaration = {
  key: "get",
  *func(realm, thisArg, key) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "Map.prototype.get called on incompatible receiver",
        ),
      );
    }

    return yield* thisArg.getValueEvaluator(key ?? realm.types.undefined);
  },
};

export default mapProtoGetDeclaration;
