import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";

const objectCtorSetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "setPrototypeOf",
  *func(realm, _thisArg, targetValue = realm.types.undefined, protoValue) {
    const obj = yield* toObject(targetValue);

    let proto: StaticJsObject | null;
    if (isStaticJsObject(protoValue)) {
      proto = protoValue;
    } else if (isStaticJsNull(protoValue)) {
      proto = null;
    } else {
      throw Completion.Throw("TypeError", "Object prototype may only be an Object or null");
    }

    const result = yield* obj.setPrototypeOfEvaluator(proto);
    if (!result) {
      throw Completion.Throw("TypeError", "Object is not extensible.");
    }

    return realm.types.undefined;
  },
};

export default objectCtorSetPrototypeOfDeclaration;
