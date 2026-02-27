import toString from "../../../algorithms/to-string.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import StaticJsIteratorImpl from "../../../types/implementation/StaticJsIteratorImpl.js";

import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg = realm.types.undefined) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "String.prototype[Symbol.iterator] called on null or undefined",
        ),
      );
    }

    const str = yield* toString.js(thisArg, realm);

    // Note: Officially this should be implemented as a generator,
    // which is probably actually visible to the runtime.

    let index = 0;
    return new StaticJsIteratorImpl(function* () {
      if (index >= str.length) {
        return undefined;
      }

      const char = str[index];
      index += 1;
      return realm.types.string(char);
    }, realm);
  },
};

export default stringProtoSymbolIteratorDeclaration;
