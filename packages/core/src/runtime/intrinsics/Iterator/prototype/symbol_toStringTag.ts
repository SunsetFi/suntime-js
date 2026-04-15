import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Q } from "../../../../evaluator/completions/Q.js";
import { setterThatIgnoresPrototypeProperties } from "../../../algorithms/setter-that-ignores-prototype-properties.js";

const iteratorProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  enumerable: false,
  configurable: true,
  *get(realm) {
    return realm.types.string("Iterator");
  },
  *set(realm, thisArg, value = realm.types.undefined) {
    yield* Q(
      setterThatIgnoresPrototypeProperties(
        thisArg,
        realm.types.prototypes.iteratorProto,
        realm.types.symbols.toStringTag,
        value,
      ),
    );
    return realm.types.undefined;
  },
};

export default iteratorProtoSymbolToStringTagDeclaration;
