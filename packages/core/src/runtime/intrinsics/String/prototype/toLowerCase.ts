import { toString } from "../../../algorithms/to-string.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoToLowerCaseDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toLowerCase",
  length: 0,
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.toLowerCase();

    return realm.types.string(result);
  },
};

export default stringProtoToLowerCaseDeclaration;
