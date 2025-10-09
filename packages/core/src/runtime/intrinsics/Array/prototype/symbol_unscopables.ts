import type { StaticJsPropertyDescriptor } from "../../../types/StaticJsPropertyDescriptor.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSymbolUnscopables: IntrinsicPropertyDeclaration = {
  key: (_realm, symbols) => symbols.unscopables,
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

    const properties: Record<string, StaticJsPropertyDescriptor> = {};
    for (const key of unscopables) {
      properties[key] = {
        value: realm.types.true,
        writable: false,
        enumerable: false,
        configurable: true,
      };
    }
    return realm.types.object(properties);
  },
};

export default arrayProtoSymbolUnscopables;
