import { ReturnCompletion } from "../../evaluator/completions/ReturnCompletion.js";

import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

export function populateNumberPrototype(
  realm: StaticJsRealm,
  proto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  proto.defineProperty("toString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toString",
      function* (thisArg: StaticJsValue) {
        return ReturnCompletion(
          realm.types.string(thisArg.toNumber().toString()),
        );
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("toLocaleString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toLocaleString",
      function* (thisArg: StaticJsValue) {
        return ReturnCompletion(
          realm.types.string(thisArg.toNumber().toLocaleString()),
        );
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("valueOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "valueOf",
      function* (thisArg: StaticJsValue) {
        // Unbox.
        return ReturnCompletion(realm.types.number(thisArg.toNumber()));
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("toFixed", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toFixed",
      function* (thisArg: StaticJsValue, digits: StaticJsValue) {
        return ReturnCompletion(
          realm.types.string(thisArg.toNumber().toFixed(digits.toNumber())),
        );
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("toExponential", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toExponential",
      function* (thisArg: StaticJsValue, digits: StaticJsValue) {
        return ReturnCompletion(
          realm.types.string(
            thisArg.toNumber().toExponential(digits.toNumber()),
          ),
        );
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("toPrecision", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toPrecision",
      function* (thisArg: StaticJsValue, precision: StaticJsValue) {
        return ReturnCompletion(
          realm.types.string(
            thisArg.toNumber().toPrecision(precision.toNumber()),
          ),
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
        return ReturnCompletion(realm.types.number(0));
      }

      return ReturnCompletion(realm.types.number(value.toNumber()));
    },
    { prototype: functionProto },
  );

  ctor.defineProperty("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: numberProto,
  });
  numberProto.defineProperty("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
