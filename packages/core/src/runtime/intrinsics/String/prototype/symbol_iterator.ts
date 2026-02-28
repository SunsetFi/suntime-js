import toString from "../../../algorithms/to-string.js";

import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

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
    const strIterator = str[Symbol.iterator]();

    // Note: Officially this should be implemented as a generator,
    // which is probably actually visible to the runtime.
    const returnIterator = realm.types.object(
      {},
      realm.types.prototypes.iteratorProto,
    );

    yield* returnIterator.defineOwnPropertyEvaluator("next", {
      value: new StaticJsFunctionImpl(realm, "next", function* () {
        const { value, done } = strIterator.next();
        if (done) {
          return yield* createIteratorResultObject(
            realm.types.undefined,
            true,
            realm,
          );
        }

        return yield* createIteratorResultObject(
          realm.types.string(value),
          false,
          realm,
        );
      }),
    });

    return returnIterator;
  },
};

export default stringProtoSymbolIteratorDeclaration;
