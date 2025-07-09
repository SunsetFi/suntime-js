import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

import toNumber from "../../../algorithms/to-number.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import numberConstructorNanDeclaration from "./NaN.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  numberConstructorNanDeclaration,
];

export default function createNumberConstructor(
  realm: StaticJsRealm,
  numberProto: StaticJsObject,
  functionProto: StaticJsObject,
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
    { prototype: functionProto },
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

  applyIntrinsicProperties(realm, ctor, declarations, functionProto);

  return ctor;
}
