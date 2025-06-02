import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import toNumber from "../algorithms/to-number.js";
import toString from "../algorithms/to-string.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

export function populateStringPrototype(
  realm: StaticJsRealm,
  proto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  // I guess we can just assume this is only ever called on a boxed String object and use .toString() everywhere.
  // Still, might want to expose some internal details about what a box object is boxing.
  proto.defineProperty("length", {
    configurable: false,
    enumerable: false,
    get: new StaticJsFunctionImpl(
      realm,
      "length",
      function* (thisArg: StaticJsValue) {
        return realm.types.number(thisArg.toString().length);
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
        return realm.types.string(thisArg.toString());
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("toString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toString",
      function* (thisArg: StaticJsValue) {
        return realm.types.string(thisArg.toString());
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("concat", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "concat",
      function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        const result =
          thisArg.toString() + args.map((arg) => arg.toString()).join("");
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("substr", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "substr",
      function* (
        thisArg: StaticJsValue,
        startValue?: StaticJsValue,
        lengthValue?: StaticJsValue,
      ) {
        let start = 0;
        if (startValue) {
          startValue = yield* toNumber(startValue, realm);
          start = startValue.value;
        }

        let length: number | undefined = undefined;
        if (lengthValue) {
          lengthValue = yield* toNumber(lengthValue, realm);
          length = lengthValue.value;
        }

        thisArg = yield* toString(thisArg, realm);
        const result = thisArg.value.substr(start, length);
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("substring", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "substring",
      function* (
        thisArg: StaticJsValue,
        startValue?: StaticJsValue,
        lengthValue?: StaticJsValue,
      ) {
        let start = 0;
        if (startValue) {
          startValue = yield* toNumber(startValue, realm);
          start = startValue.value;
        }

        let length: number | undefined = undefined;
        if (lengthValue) {
          lengthValue = yield* toNumber(lengthValue, realm);
          length = lengthValue.value;
        }

        thisArg = yield* toString(thisArg, realm);
        const result = thisArg.value.substring(start, length);
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("slice", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "slice",
      function* (
        thisArg: StaticJsValue,
        startValue?: StaticJsValue,
        lengthValue?: StaticJsValue,
      ) {
        let start = 0;
        if (startValue) {
          startValue = yield* toNumber(startValue, realm);
          start = startValue.value;
        }

        let length: number | undefined = undefined;
        if (lengthValue) {
          lengthValue = yield* toNumber(lengthValue, realm);
          length = lengthValue.value;
        }

        thisArg = yield* toString(thisArg, realm);
        const result = thisArg.value.slice(start, length);
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("startsWith", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "startsWith",
      function* (thisArg: StaticJsValue, value: StaticJsValue) {
        if (!isStaticJsValue(value)) {
          throw new ThrowCompletion(
            realm.types.error("TypeError", "Value must be a string"),
          );
        }

        const result = thisArg.toString().startsWith(value.toString());
        return realm.types.boolean(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("endsWith", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "endsWith",
      function* (thisArg: StaticJsValue, value: StaticJsValue) {
        if (!isStaticJsValue(value)) {
          throw new ThrowCompletion(
            realm.types.error("TypeError", "Value must be a string"),
          );
        }

        const result = thisArg.toString().endsWith(value.toString());
        return realm.types.boolean(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("includes", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "includes",
      function* (thisArg: StaticJsValue, value: StaticJsValue) {
        if (!isStaticJsValue(value)) {
          throw new ThrowCompletion(
            realm.types.error("TypeError", "Value must be a string"),
          );
        }

        const result = thisArg.toString().includes(value.toString());
        return realm.types.boolean(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("repeat", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "repeat",
      function* (thisArg: StaticJsValue, countValue: StaticJsValue) {
        thisArg = yield* toString(thisArg, realm);
        countValue = yield* toNumber(countValue, realm);

        const result = thisArg.value.repeat(countValue.value);
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("toLowerCase", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toLowerCase",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toString().toLowerCase();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("toUpperCase", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toUpperCase",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toString().toUpperCase();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("trim", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "trim",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toString().trim();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("trimStart", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "trimStart",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toString().trimStart();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("trimEnd", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "trimEnd",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toString().trimEnd();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("charAt", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "charAt",
      function* (thisArg: StaticJsValue, indexValue: StaticJsValue) {
        thisArg = yield* toString(thisArg, realm);
        indexValue = yield* toNumber(indexValue, realm);
        const result = thisArg.value.charAt(indexValue.value);
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("charCodeAt", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "charCodeAt",
      function* (thisArg: StaticJsValue, indexValue: StaticJsValue) {
        thisArg = yield* toString(thisArg, realm);
        indexValue = yield* toNumber(indexValue, realm);
        const result = thisArg.value.charCodeAt(indexValue.value);
        return realm.types.number(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("split", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "split",
      function* (thisArg: StaticJsValue, separator: StaticJsValue) {
        const result = thisArg.toString().split(separator.toString());
        return realm.types.array(result.map((s) => realm.types.string(s)));
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("indexOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "indexOf",
      function* (thisArg: StaticJsValue, searchValue: StaticJsValue) {
        const result = thisArg.toString().indexOf(searchValue.toString());
        return realm.types.number(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("lastIndexOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "lastIndexOf",
      function* (thisArg: StaticJsValue, searchValue: StaticJsValue) {
        const result = thisArg.toString().lastIndexOf(searchValue.toString());
        return realm.types.number(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("padStart", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "padStart",
      function* (
        thisArg: StaticJsValue,
        targetLengthValue: StaticJsValue,
        padStringValue?: StaticJsValue,
      ) {
        if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "String.prototype.padStart called on null or undefined",
            ),
          );
        }

        thisArg = yield* toString(thisArg, realm);

        if (!targetLengthValue) {
          targetLengthValue = realm.types.undefined;
        }

        targetLengthValue = yield* toNumber(targetLengthValue, realm);

        if (padStringValue) {
          padStringValue = yield* toString(padStringValue, realm);
        }

        const result = thisArg.value.padStart(
          targetLengthValue.value,
          padStringValue?.value,
        );
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("padEnd", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "padEnd",
      function* (
        thisArg: StaticJsValue,
        targetLengthValue: StaticJsValue,
        padStringValue?: StaticJsValue,
      ) {
        if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
          throw new ThrowCompletion(
            realm.types.error(
              "TypeError",
              "String.prototype.padStart called on null or undefined",
            ),
          );
        }

        thisArg = yield* toString(thisArg, realm);

        if (!targetLengthValue) {
          targetLengthValue = realm.types.undefined;
        }

        targetLengthValue = yield* toNumber(targetLengthValue, realm);

        if (padStringValue) {
          padStringValue = yield* toString(padStringValue, realm);
        }

        const result = thisArg.value.padEnd(
          targetLengthValue.value,
          padStringValue?.value,
        );
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.defineProperty("replace", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "replace",
      function* (
        thisArg: StaticJsValue,
        searchValue: StaticJsValue,
        replaceValue: StaticJsValue,
      ) {
        const result = thisArg
          .toString()
          .replace(searchValue.toString(), replaceValue.toString());
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });
}

export function createStringConstructor(
  realm: StaticJsRealm,
  stringProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  // FIXME: This is the casting function, but if it's invoked with 'new', we should
  // return the boxed version.
  const ctor = new StaticJsFunctionImpl(
    realm,
    "String",
    function* (_thisArg: StaticJsValue, value?: StaticJsValue) {
      if (value === undefined) {
        return realm.types.string("");
      }

      return realm.types.string(value.toString());
    },
    { prototype: functionProto },
  );

  ctor.defineProperty("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: stringProto,
  });
  stringProto.defineProperty("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
