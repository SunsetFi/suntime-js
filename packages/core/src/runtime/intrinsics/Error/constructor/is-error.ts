import { isStaticJsError } from "../../../types/StaticJsError.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const errorCtorIsErrorDeclaration: IntrinsicPropertyDeclaration = {
  key: "isError",
  length: 1,
  *func(realm, _thisArg, arg) {
    if (!isStaticJsObject(arg)) {
      return realm.types.false;
    }

    if (!isStaticJsError(arg)) {
      return realm.types.false;
    }

    return realm.types.true;
  },
};
