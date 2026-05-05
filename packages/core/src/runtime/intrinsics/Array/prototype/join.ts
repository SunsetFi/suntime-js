import { get } from "../../../algorithms/get.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { toObject } from "../../../algorithms/to-object.js";
import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayProtoJoinDeclaration: IntrinsicPropertyDeclaration = {
  key: "join",
  *func(realm, thisArg = realm.types.undefined, joinerValue) {
    const thisObj = yield* toObject(thisArg);

    const length = yield* lengthOfArrayLike(thisObj);

    if (joinerValue == null) {
      joinerValue = realm.types.undefined;
    }

    let joiner: string;
    if (isStaticJsUndefined(joinerValue)) {
      joiner = ",";
    } else {
      joiner = yield* toString.js(joinerValue);
    }

    const s: string[] = [];
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // join treats missing values as empty.
        s.push("");
        continue;
      }

      const elementValue = yield* get(thisObj, property);
      if (isStaticJsUndefined(elementValue) || isStaticJsNull(elementValue)) {
        // join treats these as empty.
        s.push("");
        continue;
      }

      const valueStr = yield* toString.js(elementValue);
      s.push(valueStr);
    }

    return realm.types.string(s.join(joiner));
  },
};

export default arrayProtoJoinDeclaration;
