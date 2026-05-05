import { Q } from "../../../../evaluator/completions/Q.js";
import { setterThatIgnoresPrototypeProperties } from "../../../algorithms/setter-that-ignores-prototype-properties.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

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
        realm.intrinsics["Iterator.prototype"],
        realm.types.symbols.toStringTag,
        value,
      ),
    );
    return realm.types.undefined;
  },
};

export default iteratorProtoSymbolToStringTagDeclaration;
