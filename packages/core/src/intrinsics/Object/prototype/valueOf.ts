import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectProtoValueOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "valueOf",
  length: 0,
  *func(realm, thisArg = realm.types.undefined) {
    return yield* toObject(thisArg);
  },
};

export default objectProtoValueOfDeclaration;
