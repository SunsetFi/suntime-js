import toInteger from "../../../algorithms/to-integer.js";
import toObject from "../../../algorithms/to-object.js";

import setArray from "../../../utils/set-array.js";
import toArray from "../../../utils/to-array.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSpliceDeclaration: IntrinsicPropertyDeclaration = {
  name: "splice",
  *func(realm, thisArg, startValue, deleteCountValue, ...items) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    let lengthValue = yield* thisObj.getPropertyEvaluator("length");
    lengthValue = yield* toInteger(lengthValue, realm);
    const length = lengthValue.value;

    if (!startValue) {
      return realm.types.array();
    }

    let start = 0;
    if (startValue) {
      startValue = yield* toInteger(startValue, realm);
      start = startValue.value;
    }

    if (start < 0) {
      start += length;
    }

    start = Math.max(0, start);
    start = Math.min(length, start);

    let deleteCount = length;
    if (deleteCountValue) {
      deleteCountValue = yield* toInteger(deleteCountValue, realm);
      deleteCount = deleteCountValue.value;
    }

    if (deleteCount < 0) {
      deleteCount = 0;
    }

    deleteCount = Math.min(length - start, deleteCount);

    // Splice is quite complicated, so just hand it off to native.
    // Note: We might want to do this manually eventually, as this might have weird compatibility issues
    // around when getters and setters are invoked.
    const oldItems = yield* toArray(thisObj, realm);
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
