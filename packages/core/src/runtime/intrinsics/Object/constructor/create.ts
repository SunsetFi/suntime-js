import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import objectDefineProperties from "../object-define-properties.js";

const objectCtorCreateDeclaration: IntrinsicPropertyDeclaration = {
  key: "create",
  *func(realm, _thisArg, protoValue = realm.types.undefined, properties = realm.types.undefined) {
    if (!isStaticJsNull(protoValue) && !isStaticJsObjectLike(protoValue)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Object prototype may only be an Object or null"),
      );
    }

    const proto = isStaticJsNull(protoValue) ? null : protoValue;

    const obj = realm.types.object(undefined, proto);

    if (!isStaticJsUndefined(properties)) {
      yield* objectDefineProperties(obj, properties, realm);
    }

    return obj;
  },
};

export default objectCtorCreateDeclaration;
