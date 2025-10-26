import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";
import getIterator from "../../../algorithms/get-iterator.js";
import iteratorStepValue from "../../../algorithms/iterator-step-value.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import {
  type IntrinsicPropertyDeclaration,
  applyIntrinsicProperties,
} from "../../utils.js";

import setCtorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  setCtorSymbolSpeciesDeclaration,
];

export default function createSetConstructor(
  realm: StaticJsRealm,
  setProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Set",
    function* (_thisArg) {
      throw new StaticJsRuntimeError(
        realm.types.error("TypeError", "Set constructor requires 'new'"),
      );
    },
    {
      *construct(_thisArg, iterable) {
        const set = new StaticJsSetImpl(realm);

        if (
          !iterable ||
          isStaticJsNull(iterable) ||
          isStaticJsUndefined(iterable)
        ) {
          return set;
        }

        const iterator = yield* getIterator(iterable, realm);
        while (true) {
          const next = yield* iteratorStepValue(iterator, realm);
          if (!next) {
            break;
          }
          yield* set.addEvaluator(next);
        }

        return set;
      },
    },
  );

  ctor.definePropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: setProto,
  });
  setProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
