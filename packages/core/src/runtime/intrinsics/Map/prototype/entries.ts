import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(_realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.entries called on incompatible receiver");
    }

    return yield* thisArg.entriesEvaluator();
  },
};

export default mapProtoEntriesDeclaration;
