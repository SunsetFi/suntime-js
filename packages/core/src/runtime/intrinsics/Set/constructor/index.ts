import { Completion } from "../../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import getIterator from "../../../iterators/get-iterator.js";
import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import { type IntrinsicPropertyDeclaration, applyIntrinsicProperties } from "../../utils.js";

import setCtorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [setCtorSymbolSpeciesDeclaration];

export default function createSetConstructor(realm: StaticJsRealm, setProto: StaticJsObject) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Set",
    function* (_thisArg) {
      throw Completion.Throw(realm.types.error("TypeError", "Set constructor requires 'new'"));
    },
    {
      *construct(_thisArg, iterable) {
        const set = new StaticJsSetImpl(realm);

        if (!iterable || isStaticJsNull(iterable) || isStaticJsUndefined(iterable)) {
          return set;
        }

        const iterator = yield* getIterator(iterable, "sync", realm);
        yield* iteratorClose.handle(iterator, realm, function* () {
          while (true) {
            const next = yield* iteratorStepValue(iterator, realm);
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
