import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { type IntrinsicPropertyDeclaration, applyIntrinsicProperties } from "../../utils.js";
import setCtorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [setCtorSymbolSpeciesDeclaration];

export default function createSetConstructor(realm: StaticJsRealm, setProto: StaticJsObject) {
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

        const iterator = yield* getIterator(iterable, "sync");
        yield* iteratorClose.handle(iterator, function* () {
          while (true) {
            const next = yield* iteratorStepValue(iterator);
            if (!next) {
              break;
            }
            yield* set.addValueEvaluator(next);
          }
        });

        return set;
      },
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: setProto,
  });
  setProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
