import { Completion } from "../../../../evaluator/completions/Completion.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";
import isNumberLike from "../isNumberLike.js";

const numberProtoToLocaleStringDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toLocaleString",
  length: 0,
  func: function* (realm, thisArg) {
    if (!isNumberLike(thisArg)) {
      throw Completion.Throw(
        "TypeError",
        "Number.prototype.toLocaleString requires that 'this' be a Number",
      );
    }

    const value = thisArg.value.toLocaleString();

    return realm.types.string(value);
  },
};

export default numberProtoToLocaleStringDeclaration;
