import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import setCtorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [setCtorSymbolSpeciesDeclaration];

export function* createSetConstructor(realm: StaticJsRealm, setProto: StaticJsObject) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Set",
    function* (_thisArg) {
      throw Completion.Throw("TypeError", "Set constructor requires 'new'");
    },
    {
      *construct(_thisArg, iterable) {
        const set = new StaticJsSetImpl(realm);

        if (!iterable || isStaticJsNull(iterable) || isStaticJsUndefined(iterable)) {
          return set;
        }

        // Funnily enough, it actually matters using this instead of our raw addValueEvaluator.
        // At least, the builtin tests mess with this for checking other things.
        const add = yield* get(set, "add");

        const iterator = yield* getIterator(iterable, "sync");
        yield* iteratorClose.handle(iterator, function* () {
          while (true) {
            const next = yield* iteratorStepValue(iterator);
            if (!next) {
              break;
            }

            yield* call(add, set, [next]);
          }
        });

        return set;
      },
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: setProto,
  });
  yield* setProto.defineOwnPropertyEvaluator("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
