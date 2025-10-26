import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorIsExtensibleDeclaration: IntrinsicPropertyDeclaration = {
  key: "isExtensible",
  *func(realm, _thisArg, objValue) {
    const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

    return realm.types.boolean(obj.extensible);
  },
};

export default objectCtorIsExtensibleDeclaration;
