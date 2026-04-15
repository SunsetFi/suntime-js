import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import toObject from "../../../algorithms/to-object.js";

const objectCtorGetOwnPropertyNamesDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyNames",
  *func(realm, _thisArg, arg = realm.types.undefined) {
    arg = yield* toObject(arg);

    const keys = yield* arg.ownPropertyKeysEvaluator();
    const names = keys.filter((key) => typeof key === "string");
    return yield* createArrayFromList(names.map((key) => realm.types.string(key)));
  },
};

export default objectCtorGetOwnPropertyNamesDeclaration;
