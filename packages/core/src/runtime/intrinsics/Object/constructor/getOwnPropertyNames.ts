import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectCtorGetOwnPropertyNamesDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyNames",
  length: 1,
  *func(realm, _thisArg, arg = realm.types.undefined) {
    arg = yield* toObject(arg);

    const keys = yield* arg.ownPropertyKeysEvaluator();
    const names = keys.filter((key) => typeof key === "string");
    return yield* createArrayFromList(names.map((key) => realm.types.string(key)));
  },
};

export default objectCtorGetOwnPropertyNamesDeclaration;
