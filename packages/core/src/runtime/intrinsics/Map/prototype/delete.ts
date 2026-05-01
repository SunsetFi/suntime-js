import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoDeleteDeclaration: IntrinsicPropertyDeclaration = {
  key: "delete",
  length: 1,
  *func(realm, thisArg, key = realm.types.undefined) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.delete called on incompatible receiver");
    }

    const result = yield* thisArg.deleteValueEvaluator(key);
    return realm.types.boolean(result);
  },
};

export default mapProtoDeleteDeclaration;
