import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoHasDeclaration: IntrinsicPropertyDeclaration = {
  key: "has",
  *func(realm, thisArg, key) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "Map.prototype.has called on incompatible receiver",
        ),
      );
    }

    const hasValue = yield* thisArg.hasEvaluator(key ?? realm.types.undefined);
    return realm.types.boolean(hasValue);
  },
};

export default mapProtoHasDeclaration;
