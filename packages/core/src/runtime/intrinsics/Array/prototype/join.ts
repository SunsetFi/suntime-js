import toObject from "../../../algorithms/to-object.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoJoinDeclaration: IntrinsicPropertyDeclaration = {
  name: "join",
  *func(realm, thisArg, joinerValue) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* getLength(realm, thisObj);

    if (joinerValue == null) {
      joinerValue = realm.types.undefined;
    }

    let joiner: string;
    if (isStaticJsUndefined(joinerValue)) {
      joiner = ",";
    } else {
      joiner = joinerValue.toString();
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

      const elementValue = yield* thisObj.getPropertyEvaluator(property);
      if (isStaticJsUndefined(elementValue) || isStaticJsNull(elementValue)) {
        // join treats these as empty.
        s.push("");
        continue;
      }

      s.push(elementValue.toString());
    }

    return realm.types.string(s.join(joiner));
  },
};

export default arrayProtoJoinDeclaration;
