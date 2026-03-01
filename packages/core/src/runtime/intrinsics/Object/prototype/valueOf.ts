import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoValueOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "valueOf",
  *func(realm, thisArg = realm.types.undefined) {
    return yield* toObject(thisArg, realm);
  },
};

export default objectProtoValueOfDeclaration;
