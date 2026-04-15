import { Completion } from "../../../../evaluator/completions/Completion.js";
import { get } from "../../../algorithms/get.js";
import { toObject } from "../../../algorithms/to-object.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsMapImpl } from "../../../types/implementation/objects/StaticJsMapImpl.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { type IntrinsicPropertyDeclaration, applyIntrinsicProperties } from "../../utils.js";

import mapCtorGroupByDeclaration from "./groupBy.js";
import mapCtorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  mapCtorGroupByDeclaration,
  mapCtorSymbolSpeciesDeclaration,
];

export default function createMapConstructor(realm: StaticJsRealm, mapProto: StaticJsObject) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Map",
    function* (_thisArg) {
      throw Completion.Throw("TypeError", "Map constructor requires 'new'");
    },
    {
      *construct(_thisArg, iterable) {
        const map = new StaticJsMapImpl(realm);

        if (!iterable || isStaticJsNull(iterable) || isStaticJsUndefined(iterable)) {
          return map;
        }

        const iterator = yield* getIterator(iterable, "sync");
        while (true) {
          const next = yield* iteratorStepValue(iterator);
          if (!next) {
            break;
          }

          const asObj = yield* toObject(next);
          const key = yield* get(asObj, "0");
          const value = yield* get(asObj, "1");

          yield* map.setValueEvaluator(key, value);
        }

        return map;
      },
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: mapProto,
  });
  mapProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
