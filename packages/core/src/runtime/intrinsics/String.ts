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
  proto.definePropertySync("length", {
    configurable: false,
    enumerable: false,
    get: new StaticJsFunctionImpl(
      realm,
      "length",
      function* (thisArg: StaticJsValue) {
        return realm.types.number(thisArg.toStringSync().length);
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
        // Unbox.
        return realm.types.string(thisArg.toStringSync());
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("toString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toString",
      function* (thisArg: StaticJsValue) {
        return realm.types.string(thisArg.toStringSync());
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("concat", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "concat",
      function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        const result =
          thisArg.toStringSync() +
          args.map((arg) => arg.toStringSync()).join("");
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("substr", {
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

  proto.definePropertySync("substring", {
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

  proto.definePropertySync("slice", {
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

  proto.definePropertySync("startsWith", {
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

        const result = thisArg.toStringSync().startsWith(value.toStringSync());
        return realm.types.boolean(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("endsWith", {
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

        const result = thisArg.toStringSync().endsWith(value.toStringSync());
        return realm.types.boolean(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("includes", {
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

        const result = thisArg.toStringSync().includes(value.toStringSync());
        return realm.types.boolean(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("repeat", {
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

  proto.definePropertySync("toLowerCase", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toLowerCase",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toStringSync().toLowerCase();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("toUpperCase", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toUpperCase",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toStringSync().toUpperCase();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("trim", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "trim",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toStringSync().trim();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("trimStart", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "trimStart",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toStringSync().trimStart();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("trimEnd", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "trimEnd",
      function* (thisArg: StaticJsValue) {
        const result = thisArg.toStringSync().trimEnd();
        return realm.types.string(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("charAt", {
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

  proto.definePropertySync("charCodeAt", {
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

  proto.definePropertySync("split", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "split",
      function* (thisArg: StaticJsValue, separator: StaticJsValue) {
        const result = thisArg.toStringSync().split(separator.toStringSync());
        return realm.types.array(result.map((s) => realm.types.string(s)));
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("indexOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "indexOf",
      function* (thisArg: StaticJsValue, searchValue: StaticJsValue) {
        const result = thisArg
          .toStringSync()
          .indexOf(searchValue.toStringSync());
        return realm.types.number(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("lastIndexOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "lastIndexOf",
      function* (thisArg: StaticJsValue, searchValue: StaticJsValue) {
        const result = thisArg
          .toStringSync()
          .lastIndexOf(searchValue.toStringSync());
        return realm.types.number(result);
      },
      { prototype: functionProto },
    ),
  });

  proto.definePropertySync("padStart", {
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

  proto.definePropertySync("padEnd", {
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

  proto.definePropertySync("replace", {
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
          .toStringSync()
          .replace(searchValue.toStringSync(), replaceValue.toStringSync());
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

      return realm.types.string(value.toStringSync());
    },
    { prototype: functionProto },
  );

  ctor.definePropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: stringProto,
  });
  stringProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
