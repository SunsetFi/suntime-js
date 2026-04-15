import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorIsExtensibleDeclaration: IntrinsicPropertyDeclaration = {
  key: "isExtensible",
  *func(realm, _thisArg, objValue = realm.types.undefined) {
    const obj = yield* toObject(objValue);

    const extensible = yield* obj.isExtensibleEvaluator();
    return realm.types.boolean(extensible);
  },
};

export default objectCtorIsExtensibleDeclaration;
