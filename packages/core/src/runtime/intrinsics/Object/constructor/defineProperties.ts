import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import objectDefineProperties from "../object-define-properties.js";

const objectCtorDefinePropertiesDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperties",
  *func(realm, _thisArg, O, properties = realm.types.undefined) {
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw("TypeError", "Object.defineProperties called on non-object");
    }

    return yield* objectDefineProperties(O, properties);
  },
};

export default objectCtorDefinePropertiesDeclaration;
