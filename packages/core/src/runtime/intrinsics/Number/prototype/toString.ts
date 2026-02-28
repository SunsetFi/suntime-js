import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import isNumberLike from "../isNumberLike.js";

const numberProtoToStringDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toString",
  func: function* (realm, thisArg) {
    // Node is really confusing here, it requires thisArg to be a function???

    if (!isNumberLike(thisArg)) {
      throw Completion.Throw(
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
