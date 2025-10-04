import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

import toNumber from "../../../algorithms/to-number.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";

import numberConstructorEpsilonDeclaration from "./EPSILON.js";
import numberConstructorMaxSafeIntegerDeclaration from "./MAX_SAFE_INTEGER.js";
import numberConstructorMaxValueDeclaration from "./MAX_VALUE.js";
import numberConstructorMinSafeIntegerDeclaration from "./MIN_SAFE_INTEGER.js";
import numberConstructorMinValueDeclaration from "./MIN_VALUE.js";
import numberConstructorNanDeclaration from "./NaN.js";
import numberConstructorNegativeInfinityDeclaration from "./NEGATIVE_INFINITY.js";
import numberConstructorPositiveInfinityDeclaration from "./POSITIVE_INFINITY.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  numberConstructorEpsilonDeclaration,
  numberConstructorMaxSafeIntegerDeclaration,
  numberConstructorMaxValueDeclaration,
  numberConstructorMinSafeIntegerDeclaration,
  numberConstructorMinValueDeclaration,
  numberConstructorNanDeclaration,
  numberConstructorNegativeInfinityDeclaration,
  numberConstructorPositiveInfinityDeclaration,
];

export default function createNumberConstructor(
  realm: StaticJsRealm,
  numberProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  // FIXME: This is the casting function, but if it's invoked with 'new', we should
  // return the boxed version.
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Number",
    function* (_thisArg: StaticJsValue, value?: StaticJsValue) {
      if (value === undefined) {
        return realm.types.number(0);
      }

      return yield* toNumber(value, realm);
    },
    { prototype: prototypes.functionProto },
  );

  ctor.definePropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: numberProto,
  });
  numberProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(
    realm,
    ctor,
    declarations,
    prototypes,
    intrinsicSymbols,
  );

  return ctor;
}
