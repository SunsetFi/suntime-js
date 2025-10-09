import isNotUndefined from "../../../../internal/is-not-undefined.js";
import arraySpeciesCreate from "../../../algorithms/array-species-create.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

import toInteger from "../../../algorithms/to-integer.js";
import toObject from "../../../algorithms/to-object.js";

import setArray from "../../../utils/set-array.js";
import toArray from "../../../utils/to-array.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSpliceDeclaration: IntrinsicPropertyDeclaration = {
  key: "splice",
  *func(realm, thisArg, startValue, deleteCountValue, ...items) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* lengthOfArrayLike(thisObj, realm);

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
    // FIXME: Use algo https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.splice
    const oldItems = yield* toArray(thisObj, realm);
    const result = oldItems.splice(
      start,
      deleteCount,
      ...items.filter(isNotUndefined),
    );

    yield* setArray(realm, thisObj, oldItems);

    const resultItems = yield* arraySpeciesCreate(
      thisObj,
      oldItems.length,
      realm,
    );
    yield* setArray(realm, resultItems, result);

    return resultItems;
  },
};

export default arrayProtoSpliceDeclaration;
