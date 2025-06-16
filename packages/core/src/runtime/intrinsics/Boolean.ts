import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import toBoolean from "../algorithms/to-boolean.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsBooleanBoxed from "../types/implementation/StaticJsBooleanBoxed.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import {
  isStaticJsBoolean,
  type StaticJsBoolean,
} from "../types/StaticJsBoolean.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function populateBooleanPrototype(
  realm: StaticJsRealm,
  booleanProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  booleanProto.definePropertySync("toString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toString",
      function* (thisArg) {
        thisArg = yield* toBoolean(thisArg, realm);
        return realm.types.string(thisArg.value ? "true" : "false");
      },
      { prototype: functionProto },
    ),
  });

  booleanProto.definePropertySync("valueOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "valueOf",
      function* (thisArg) {
        if (!isBooleanLike(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "Boolean.prototype.valueOf requires that 'this' be a Boolean",
            ),
          );
        }

        return realm.types.boolean(thisArg.value);
      },
      { prototype: functionProto },
    ),
  });

  return booleanProto;
}

export function createBooleanConstructor(
  realm: StaticJsRealm,
  booleanProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Boolean",
    function* (thisArg, value) {
      if (thisArg === undefined) {
        return realm.types.boolean(false);
      }

      return yield* toBoolean(value, realm);
    },
    { prototype: functionProto },
  );

  ctor.definePropertySync("prototype", {
    value: booleanProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  booleanProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}

function isBooleanLike(
  value: StaticJsValue,
): value is StaticJsBooleanBoxed | StaticJsBoolean {
  return isStaticJsBoolean(value) || value instanceof StaticJsBooleanBoxed;
}
