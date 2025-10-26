import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoSizeDeclaration: IntrinsicPropertyDeclaration = {
  key: "size",
  enumerable: false,
  configurable: true,
  *get(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw realm.types.error("TypeError", "Not a Map");
    }

    const result = yield* thisArg.sizeEvaluator();
    return realm.types.number(result);
  },
};

export default mapProtoSizeDeclaration;
