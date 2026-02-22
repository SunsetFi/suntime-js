import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

import toNumber from "../../../algorithms/to-number.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import numberCtorEpsilonDeclaration from "./EPSILON.js";
import numberCtorMaxSafeIntegerDeclaration from "./MAX_SAFE_INTEGER.js";
import numberCtorMaxValueDeclaration from "./MAX_VALUE.js";
import numberCtorMinSafeIntegerDeclaration from "./MIN_SAFE_INTEGER.js";
import numberCtorMinValueDeclaration from "./MIN_VALUE.js";
import numberCtorNanDeclaration from "./NaN.js";
import numberCtorNegativeInfinityDeclaration from "./NEGATIVE_INFINITY.js";
import numberCtorPositiveInfinityDeclaration from "./POSITIVE_INFINITY.js";
import StaticJsNumberBoxed from "../../../types/implementation/StaticJsNumberBoxed.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  numberCtorEpsilonDeclaration,
  numberCtorMaxSafeIntegerDeclaration,
  numberCtorMaxValueDeclaration,
  numberCtorMinSafeIntegerDeclaration,
  numberCtorMinValueDeclaration,
  numberCtorNanDeclaration,
  numberCtorNegativeInfinityDeclaration,
  numberCtorPositiveInfinityDeclaration,
];

export default function createNumberConstructor(
  realm: StaticJsRealm,
  numberProto: StaticJsObject,
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
    {
      *construct(_thisArg, value) {
        const numVal = yield* toNumber.js(
          value ?? realm.types.undefined,
          realm,
        );
        return new StaticJsNumberBoxed(realm, numVal);
      },
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: numberProto,
  });
  numberProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
