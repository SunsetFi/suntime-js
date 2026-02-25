import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsString } from "../../../types/StaticJsString.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoConcatDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "concat",
  func: function* (realm, thisArg, ...args) {
    const thisArgStr = yield* toString(thisArg, realm);
    const argStrs: StaticJsString[] = [];

    // Args are typed as possibly undefined so we know they might not be present for fixed args.
    // In the case of a rest parameter, all args are present.
    for (const arg of args) {
      const str = yield* toString(arg!, realm);
      argStrs.push(str);
    }

    const result = argStrs.reduce((acc, str) => acc + str.value, thisArgStr.value);

    return realm.types.string(result);
  },
};

export default stringProtoConcatDeclaration;
