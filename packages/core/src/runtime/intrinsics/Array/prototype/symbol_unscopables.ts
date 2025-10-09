import StaticJsBooleanImpl from "../../../types/implementation/StaticJsBooleanImpl.js";
import StaticJsObjectImpl from "../../../types/implementation/StaticJsObjectImpl.js";

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

    // Issues with realm instantiation order again...
    // These unfortunately will be new instances compared to realm.types.true, but it should be fine?
    const staticJsTrue = new StaticJsBooleanImpl(realm, true);

    const obj = new StaticJsObjectImpl(realm, null);
    for (const key of unscopables) {
      obj.definePropertySync(key, {
        value: staticJsTrue,
        writable: false,
        enumerable: false,
        configurable: true,
      });
    }

    return obj;
  },
};

export default arrayProtoSymbolUnscopables;
