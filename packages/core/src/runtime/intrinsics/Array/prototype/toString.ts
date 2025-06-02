import toString from "../../../algorithms/to-string.js";
import { isStaticJsObjectLike } from "../../../types/index.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  name: "toString",
  *func(realm, thisArg) {
    // I'm not too sure on the spec for this...
    if (!thisArg) {
      thisArg = realm.types.undefined;
    }

    if (!isStaticJsObjectLike(thisArg)) {
      // NodeJs is showing this sort of chaining.
      // Is this real?  Is array to string instead implemented in Object.prototype.toString?
      return yield* toString(thisArg, realm);
    }

    const length = yield* getLength(realm, thisArg);

    const segments = new Array<string>(length);
    for (let i = 0; i < length; i++) {
      const item = yield* thisArg.getPropertyEvaluator(i.toString());
      const string = yield* toString(item, realm);
      segments[i] = string.value;
    }

    return realm.types.string(segments.join(","));
  },
};

export default arrayProtoToStringDeclaration;
