import toString from "../../../algorithms/to-string.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    // I'm not too sure on the spec for this...
    if (!thisArg) {
      thisArg = realm.types.undefined;
    }

    if (!isStaticJsObjectLike(thisArg)) {
      // NodeJs is showing this sort of chaining.
      // Is this real?  Is array to string instead implemented in Object.prototype.toString?
      return yield* toString(thisArg);
    }

    const length = yield* lengthOfArrayLike(thisArg);

    const segments: string[] = [];
    for (let i = 0; i < length; i++) {
      const item = yield* thisArg.getEvaluator(i.toString());
      const string = yield* toString(item);
      segments[i] = string.value;
    }

    return realm.types.string(segments.join(","));
  },
};

export default arrayProtoToStringDeclaration;
