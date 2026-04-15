import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import toObject from "../../../algorithms/to-object.js";

const objectProtoValueOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "valueOf",
  *func(realm, thisArg = realm.types.undefined) {
    return yield* toObject(thisArg);
  },
};

export default objectProtoValueOfDeclaration;
