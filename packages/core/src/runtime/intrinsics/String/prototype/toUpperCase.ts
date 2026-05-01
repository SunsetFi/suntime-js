import { toString } from "../../../algorithms/to-string.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoToUpperCaseDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toUpperCase",
  length: 0,
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.toUpperCase();

    return realm.types.string(result);
  },
};

export default stringProtoToUpperCaseDeclaration;
