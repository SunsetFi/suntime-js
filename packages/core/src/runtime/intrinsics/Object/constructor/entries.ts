import { NormalCompletion } from "../../../../evaluator/internal.js";
import { StaticJsValue } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorEntriesDeclaration: IntrinsicPropertyDeclaration = {
  name: "entries",
  *func(realm, thisArg) {
    // TODO: This should return an iterator.
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const ownKeys = yield* thisObj.getOwnKeysEvaluator();

    const values: StaticJsValue[] = new Array(ownKeys.length);
    for (let i = 0; i < ownKeys.length; i++) {
      const value = yield* thisObj.getPropertyEvaluator(ownKeys[i]);
      const item = realm.types.createArray([
        realm.types.string(ownKeys[i]),
        value,
      ]);
      values[i] = item;
    }

    const result = realm.types.createArray(values);
    return NormalCompletion(result);
  },
};

export default objectCtorEntriesDeclaration;
