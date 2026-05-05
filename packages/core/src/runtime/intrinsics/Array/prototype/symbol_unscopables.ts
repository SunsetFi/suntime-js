import { StaticJsPlainObjectImpl } from "../../../types/implementation/objects/StaticJsPlainObjectImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayProtoSymbolUnscopables: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.unscopables,
  value(realm) {
    const unscopables = [
      "at",
      "copyWithin",
      "entries",
      "fill",
      "find",
      "findIndex",
      "findLast",
      "findLastIndex",
      "flat",
      "flatMap",
      "includes",
      "keys",
      "toReversed",
      "toSorted",
      "toSpliced",
      "values",
    ];

    const obj = new StaticJsPlainObjectImpl(realm, null);
    for (const key of unscopables) {
      obj.defineOwnPropertySync(key, {
        value: realm.types.true,
        writable: false,
        enumerable: false,
        configurable: true,
      });
    }

    return obj;
  },
};

export default arrayProtoSymbolUnscopables;
