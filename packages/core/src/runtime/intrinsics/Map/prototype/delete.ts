import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoDeleteDeclaration: IntrinsicPropertyDeclaration = {
  key: "delete",
  *func(realm, thisArg, key) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "Map.prototype.delete called on incompatible receiver",
        ),
      );
    }

    const result = yield* thisArg.deleteValueEvaluator(
      key ?? realm.types.undefined,
    );
    return realm.types.boolean(result);
  },
};

export default mapProtoDeleteDeclaration;
