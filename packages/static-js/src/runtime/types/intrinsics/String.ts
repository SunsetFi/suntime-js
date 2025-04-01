import { StaticJsObject } from "../interfaces/StaticJsObject.js";
import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";
import StaticJsFunctionImpl from "../implementation/StaticJsFunctionImpl.js";
import { isStaticJsValue, StaticJsValue } from "../interfaces/StaticJsValue.js";
import { ReturnCompletion } from "../../../evaluator/internal.js";

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
    *get() {
      return realm.types.number(this.toString().length);
    },
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
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        start?: StaticJsValue,
        length?: StaticJsValue,
      ) {
        const startVal = start?.toNumber() ?? 0;
        const lengthVal = length?.toNumber() ?? undefined;
        const result = thisArg.toString().substr(startVal, lengthVal);
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        start?: StaticJsValue,
        length?: StaticJsValue,
      ) {
        const startVal = start?.toNumber() ?? 0;
        const lengthVal = length?.toNumber() ?? undefined;
        const result = thisArg.toString().substring(startVal, lengthVal);
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        start?: StaticJsValue,
        length?: StaticJsValue,
      ) {
        const startVal = start?.toNumber() ?? 0;
        const lengthVal = length?.toNumber() ?? undefined;
        const result = thisArg.toString().slice(startVal, lengthVal);
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
          // FIXME: throw real error.
          throw new TypeError("Value must be a string");
        }

        const result = thisArg.toString().startsWith(value.toString());
        return ReturnCompletion(realm.types.boolean(result));
      },
      undefined,
      functionProto,
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
          // FIXME: throw real error.
          throw new TypeError("Value must be a string");
        }

        const result = thisArg.toString().endsWith(value.toString());
        return ReturnCompletion(realm.types.boolean(result));
      },
      undefined,
      functionProto,
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
          // FIXME: throw real error.
          throw new TypeError("Value must be a string");
        }

        const result = thisArg.toString().includes(value.toString());
        return ReturnCompletion(realm.types.boolean(result));
      },
      undefined,
      functionProto,
    ),
  });

  proto.defineProperty("repeat", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "repeat",
      function* (thisArg: StaticJsValue, value: StaticJsValue) {
        if (!isStaticJsValue(value)) {
          // FIXME: throw real error.
          throw new TypeError("Value must be a string");
        }

        const result = thisArg.toString().repeat(value.toNumber());
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
    ),
  });

  proto.defineProperty("charAt", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "charAt",
      function* (thisArg: StaticJsValue, index: StaticJsValue) {
        const result = thisArg.toString().charAt(index.toNumber());
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
    ),
  });

  proto.defineProperty("charCodeAt", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "charCodeAt",
      function* (thisArg: StaticJsValue, index: StaticJsValue) {
        const result = thisArg.toString().charCodeAt(index.toNumber());
        return ReturnCompletion(realm.types.number(result));
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(
          realm.types.createArray(result.map((s) => realm.types.string(s))),
        );
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.number(result));
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.number(result));
      },
      undefined,
      functionProto,
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
        targetLength: StaticJsValue,
        padString?: StaticJsValue,
      ) {
        const result = thisArg
          .toString()
          .padStart(targetLength.toNumber(), padString?.toString());
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
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
        targetLength: StaticJsValue,
        padString?: StaticJsValue,
      ) {
        const result = thisArg
          .toString()
          .padEnd(targetLength.toNumber(), padString?.toString());
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
    ),
  });

  proto.defineProperty("match", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "match",
      function* (_thisArg: StaticJsValue, _regexp: StaticJsValue) {
        throw new Error("String.match is not implemented.");
      },
      undefined,
      functionProto,
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
        return ReturnCompletion(realm.types.string(result));
      },
      undefined,
      functionProto,
    ),
  });

  proto.defineProperty("search", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "search",
      function* (_thisArg: StaticJsValue, _regexp: StaticJsValue) {
        throw new Error("String.search is not implemented.");
      },
      undefined,
      functionProto,
    ),
  });
}
