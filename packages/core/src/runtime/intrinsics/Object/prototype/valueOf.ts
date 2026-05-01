import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoValueOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "valueOf",
  length: 0,
  *func(realm, thisArg = realm.types.undefined) {
    return yield* toObject(thisArg);
  },
};

export default objectProtoValueOfDeclaration;
