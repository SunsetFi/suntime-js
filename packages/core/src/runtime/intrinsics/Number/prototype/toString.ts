import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import isNumberLike from "../isNumberLike.js";

const numberProtoToStringDeclaration: FunctionIntrinsicPropertyDeclaration = {
  name: "toString",
  func: function* (realm, thisArg) {
    // Node is really confusing here, it requires thisArg to be a function???

    if (!isNumberLike(thisArg)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Number.prototype.toString requires that 'this' be a Number",
        ),
      );
    }

    const value = thisArg.value.toString();

    return realm.types.string(value);
  },
};

export default numberProtoToStringDeclaration;
