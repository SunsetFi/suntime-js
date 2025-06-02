import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoValueOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "valueOf",
  *func(realm, thisArg) {
    // I'm not too sure on the spec for this...
    if (!thisArg) {
      thisArg = realm.types.undefined;
    }

    return thisArg;
  },
};

export default objectProtoValueOfDeclaration;
