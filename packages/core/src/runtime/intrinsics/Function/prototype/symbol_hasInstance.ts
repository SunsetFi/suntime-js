import { ordinaryHasInstance } from "../../../algorithms/ordinary-has-instance.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const functionProtoSymbolHasInstanceDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.hasInstance,
  length: 1,
  writable: false,
  configurable: false,
  *func(realm, thisValue, value = realm.types.undefined) {
    const hasInstance = yield* ordinaryHasInstance(thisValue, value);
    return realm.types.boolean(hasInstance);
  },
};
