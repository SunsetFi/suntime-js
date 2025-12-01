import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertyNamesDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyNames",
  *func(realm, _thisArg, arg) {
    arg = yield* toObject(arg ?? realm.types.undefined, realm);

    const keys = yield* arg.ownPropertyKeysEvaluator();
    const names = keys.filter((key) => typeof key === "string");
    return realm.types.array(names.map((key) => realm.types.string(key)));
  },
};

export default objectCtorGetOwnPropertyNamesDeclaration;
