import { Completion } from "../../../../evaluator/completions/Completion.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";
import isNumberLike from "../isNumberLike.js";

const numberProtoValueOfDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "valueOf",
  length: 0,
  func: function* (realm, thisArg) {
    // Node is really confusing here, it requires thisArg to be a function???

    if (!isNumberLike(thisArg)) {
      throw Completion.Throw(
        "TypeError",
        "Number.prototype.toLocaleString requires that 'this' be a Number",
      );
    }

    const value = thisArg.value.valueOf();

    return realm.types.number(value);
  },
};

export default numberProtoValueOfDeclaration;
