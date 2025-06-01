import toInteger from "../../../algorithms/to-integer.js";

import setArray from "../../../utils/set-array.js";
import toArray from "../../../utils/to-array.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSpliceDeclaration: IntrinsicPropertyDeclaration = {
  name: "splice",
  *func(realm, thisArg, startValue, deleteCountValue, ...items) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const lengthValue = yield* thisObj.getPropertyEvaluator("length");
    const length = toInteger(lengthValue);

    if (!startValue) {
      return realm.types.array();
    }

    let start = 0;
    if (startValue) {
      start = toInteger(startValue);
    }

    if (start < 0) {
      start += length;
    }

    start = Math.max(0, start);
    start = Math.min(length, start);

    let deleteCount = length;
    if (deleteCountValue) {
      deleteCount = toInteger(deleteCountValue);
    }

    if (deleteCount < 0) {
      deleteCount = 0;
    }

    deleteCount = Math.min(length - start, deleteCount);

    // Splice is quite complicated, so just hand it off to native.
    // Note: We might want to do this manually eventually, as this might have weird compatibility issues
    // around when getters and setters are invoked.
    const oldItems = yield* toArray(thisObj);
    const result = oldItems.splice(
      start,
      deleteCount,
      ...items.filter(isNotUndefined),
    );

    yield* setArray(realm, thisObj, oldItems);
    return realm.types.array(result);
  },
};

export default arrayProtoSpliceDeclaration;

function isNotUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
