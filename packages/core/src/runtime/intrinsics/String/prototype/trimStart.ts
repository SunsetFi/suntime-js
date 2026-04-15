import { toString } from "../../../algorithms/to-string.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoTrimStartDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "trimStart",
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.trimStart();

    return realm.types.string(result);
  },
};

export default stringProtoTrimStartDeclaration;
