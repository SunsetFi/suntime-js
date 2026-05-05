import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";
import objectDefineProperties from "../object-define-properties.js";

const objectCtorCreateDeclaration: IntrinsicPropertyDeclaration = {
  key: "create",
  length: 2,
  *func(realm, _thisArg, protoValue = realm.types.undefined, properties = realm.types.undefined) {
    if (!isStaticJsNull(protoValue) && !isStaticJsObject(protoValue)) {
      throw Completion.Throw("TypeError", "Object prototype may only be an Object or null");
    }

    const proto = isStaticJsNull(protoValue) ? null : protoValue;

    const obj = realm.types.object(undefined, proto);

    if (!isStaticJsUndefined(properties)) {
      yield* objectDefineProperties(obj, properties);
    }

    return obj;
  },
};

export default objectCtorCreateDeclaration;
