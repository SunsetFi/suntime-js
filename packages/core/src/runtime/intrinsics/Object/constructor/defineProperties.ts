import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import objectDefineProperties from "../object-define-properties.js";

const objectCtorDefinePropertiesDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperties",
  *func(realm, _thisArg, O, properties) {
    if (!isStaticJsObjectLike(O)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Object.defineProperties called on non-object"),
      );
    }

    return yield* objectDefineProperties(O, properties ?? realm.types.undefined, realm);
  },
};

export default objectCtorDefinePropertiesDeclaration;
