import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoValueOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "valueOf",
  *func(realm, thisArg) {
    return yield* toObject(thisArg ?? realm.types.undefined, realm);
  },
};

export default objectProtoValueOfDeclaration;
