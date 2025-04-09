import { NormalCompletion } from "../../../../evaluator/internal.js";
import {
  isStaticJsNull,
  isStaticJsObjectLike,
  isStaticJsScalar,
  isStaticJsUndefined,
} from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoHasOwnPropertyDeclaration: IntrinsicPropertyDeclaration = {
  name: "hasOwnProperty",
  *func(realm, thisArg, keyValue) {
    if (!keyValue) {
      return NormalCompletion(realm.types.false);
    }

    // This does not appear to box.
    if (!isStaticJsObjectLike(thisArg)) {
      return NormalCompletion(realm.types.false);
    }

    if (isStaticJsNull(keyValue) || isStaticJsUndefined(keyValue)) {
      return NormalCompletion(realm.types.false);
    }

    if (!isStaticJsScalar(keyValue)) {
      return NormalCompletion(realm.types.false);
    }

    const hasProperty =
      thisArg.getOwnPropertyDescriptor(String(keyValue.value)) != null;

    return NormalCompletion(realm.types.boolean(hasProperty));
  },
};

export default objectProtoHasOwnPropertyDeclaration;
