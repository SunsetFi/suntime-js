import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorIsExtensibleDeclaration: IntrinsicPropertyDeclaration = {
  key: "isExtensible",
  *func(realm, _thisArg, objValue = realm.types.undefined) {
    const obj = yield* toObject(objValue);

    return realm.types.boolean(obj.extensible);
  },
};

export default objectCtorIsExtensibleDeclaration;
