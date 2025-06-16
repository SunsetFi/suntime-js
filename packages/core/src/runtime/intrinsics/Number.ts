import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import toNumber from "../algorithms/to-number.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import {
  isStaticJsNumber,
  type StaticJsNumber,
} from "../types/StaticJsNumber.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import StaticJsNumberBoxed from "../types/implementation/StaticJsNumberBoxed.js";

export function populateNumberPrototype(
  realm: StaticJsRealm,
  proto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  proto.definePropertySync("toString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toString",
      function* (thisArg: StaticJsValue) {
        if (!isNumberLike(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "Number.prototype.toString requires that 'this' be a Number",
            ),
          );
        }
        return realm.types.string(thisArg.value.toString());
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("toLocaleString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toLocaleString",
      function* (thisArg: StaticJsValue) {
        if (!isNumberLike(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "Number.prototype.toLocaleString requires that 'this' be a Number",
            ),
          );
        }
        return realm.types.string(thisArg.value.toLocaleString());
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("valueOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "valueOf",
      function* (thisArg: StaticJsValue) {
        if (!isNumberLike(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "Number.prototype.valueOf requires that 'this' be a Number",
            ),
          );
        }
        // Unbox.
        return realm.types.number(thisArg.value);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("toFixed", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toFixed",
      function* (thisArg: StaticJsValue, digitsValue: StaticJsValue) {
        if (!isNumberLike(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "Number.prototype.toFixed requires that 'this' be a Number",
            ),
          );
        }

        if (!digitsValue) {
          digitsValue = realm.types.undefined;
        }

        digitsValue = yield* toNumber(digitsValue, realm);

        return realm.types.string(thisArg.value.toFixed(digitsValue.value));
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("toExponential", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toExponential",
      function* (thisArg: StaticJsValue, digitsValue: StaticJsValue) {
        if (!isNumberLike(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "Number.prototype.toExponential requires that 'this' be a Number",
            ),
          );
        }

        if (!digitsValue) {
          digitsValue = realm.types.undefined;
        }

        digitsValue = yield* toNumber(digitsValue, realm);

        return realm.types.string(
          thisArg.value.toExponential(digitsValue.value),
        );
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("toPrecision", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toPrecision",
      function* (thisArg: StaticJsValue, precisionValue: StaticJsValue) {
        if (!isNumberLike(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "Number.prototype.toExponential requires that 'this' be a Number",
            ),
          );
        }

        if (!precisionValue) {
          precisionValue = realm.types.undefined;
        }

        precisionValue = yield* toNumber(precisionValue, realm);

        return realm.types.string(
          thisArg.value.toPrecision(precisionValue.value),
        );
      },
      { prototype: functionProto },
    ),
  });
}

export function createNumberConstructor(
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

  return ctor;
}

function isNumberLike(
  value: StaticJsValue,
): value is StaticJsNumberBoxed | StaticJsNumber {
  // This is kinda gross...
  return value instanceof StaticJsNumberBoxed || isStaticJsNumber(value);
}
