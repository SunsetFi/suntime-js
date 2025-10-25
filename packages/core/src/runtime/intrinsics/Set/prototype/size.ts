// MDN says size is an "instance property", but on node, its an accessor property.

import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoSizeDeclaration: IntrinsicPropertyDeclaration = {
  key: "size",
  enumerable: false,
  configurable: true,
  *get(realm, thisArg) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    const result = yield* thisArg.sizeEvaluator();
    return realm.types.number(result);
  },
};

export default setProtoSizeDeclaration;
