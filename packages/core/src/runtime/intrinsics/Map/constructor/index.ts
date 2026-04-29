import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { call } from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsMapImpl } from "../../../types/implementation/objects/StaticJsMapImpl.js";
import { isStaticJsCallable, StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObject, type StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { StaticJsValue } from "../../../types/StaticJsValue.js";
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

        // Funnily enough, it actually matters using this instead of our raw addValueEvaluator.
        // At least, the builtin tests mess with this for checking other things.
        const adder = yield* get(map, "set");
        if (!isStaticJsCallable(adder)) {
          throw Completion.Throw("TypeError", "Map.prototype.set is not callable");
        }

        return yield* addEntriesFromIterable(map, iterable, adder);
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

function* addEntriesFromIterable(
  target: StaticJsObject,
  iterable: StaticJsValue,
  adder: StaticJsCallable,
): EvaluationGenerator<StaticJsObject> {
  const iteratorRecord = yield* getIterator(iterable, "sync");
  while (true) {
    const next = yield* Q(iteratorStepValue(iteratorRecord));
    if (!next) {
      return target;
    }

    if (!isStaticJsObject(next)) {
      const error = Completion.Throw("TypeError", "Iterator value is not an object");
      return yield* Q(iteratorClose(iteratorRecord, error));
    }

    const key = yield* captureThrownCompletion(get(next, "0"));
    if (Completion.Abrupt.is(key)) {
      return yield* Q(iteratorClose(iteratorRecord, key));
    }

    const value = yield* captureThrownCompletion(get(next, "1"));
    if (Completion.Abrupt.is(value)) {
      return yield* Q(iteratorClose(iteratorRecord, value));
    }

    const adderResult = yield* captureThrownCompletion(call(adder, target, [key, value]));
    if (Completion.Abrupt.is(adderResult)) {
      return yield* Q(iteratorClose(iteratorRecord, adderResult));
    }
  }
}
