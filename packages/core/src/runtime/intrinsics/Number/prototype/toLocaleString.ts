import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import isNumberLike from "../isNumberLike.js";

const numberProtoToLocaleStringDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toLocaleString",
  func: function* (realm, thisArg) {
    if (!isNumberLike(thisArg)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "Number.prototype.toLocaleString requires that 'this' be a Number",
        ),
      );
    }

    const value = thisArg.value.toLocaleString();

    return realm.types.string(value);
  },
};

export default numberProtoToLocaleStringDeclaration;
