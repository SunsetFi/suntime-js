import toString from "../../../algorithms/to-string.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import StaticJsIteratorImpl from "../../../types/implementation/StaticJsIteratorImpl.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg = realm.types.undefined) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "String.prototype[Symbol.iterator] called on null or undefined",
        ),
      );
    }

    const str = yield* toString.js(thisArg, realm);
    const iterator = str[Symbol.iterator]();

    // Note: Officially this should be implemented as a generator,
    // which is probably actually visible to the runtime.

    return new StaticJsIteratorImpl(function* () {
      const { value, done } = iterator.next();
      if (done) {
        return undefined;
      }

      return realm.types.string(value);
    }, realm);
  },
};

export default stringProtoSymbolIteratorDeclaration;
