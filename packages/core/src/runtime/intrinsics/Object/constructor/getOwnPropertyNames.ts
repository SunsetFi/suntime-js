import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertyNamesDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyNames",
  *func(realm, thisArg, arg) {
    arg = yield* toObject(arg ?? realm.types.undefined, realm);

    const propertyNames = yield* arg.getOwnKeysEvaluator();
    return realm.types.array(
      propertyNames.map((key) => realm.types.string(key)),
    );
  },
};

export default objectCtorGetOwnPropertyNamesDeclaration;
