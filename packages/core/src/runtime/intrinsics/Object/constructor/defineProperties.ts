import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import objectDefineProperties from "../object-define-properties.js";

const objectCtorDefinePropertiesDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperties",
  *func(realm, _thisArg, O, properties = realm.types.undefined) {
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Object.defineProperties called on non-object");
    }

    return yield* objectDefineProperties(O, properties);
  },
};

export default objectCtorDefinePropertiesDeclaration;
