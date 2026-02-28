import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsFunction, type StaticJsFunction } from "../../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import deletePropertyOrThrow from "../../../algorithms/delete-property-or-throw.js";
import toObject from "../../../algorithms/to-object.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import compareArrayElements from "../compare-array-elements.js";
import sortIndexedProperties from "../sort-indexed-properties.js";

const arrayProtoSortDeclaration: IntrinsicPropertyDeclaration = {
  key: "sort",
  *func(realm, thisArg, comparatorArg) {
    let resolvedComparator: StaticJsFunction | null;
    if (!comparatorArg || isStaticJsUndefined(comparatorArg)) {
      resolvedComparator = null;
    } else if (!isStaticJsFunction(comparatorArg)) {
      throw Completion.Throw(realm.types.error("TypeError", "Comparator must be a function"));
    } else {
      resolvedComparator = comparatorArg;
    }

    const obj = yield* toObject(thisArg, realm);
    const len = yield* lengthOfArrayLike(obj, realm);

    const sortCompare = function* (x: StaticJsValue, y: StaticJsValue) {
      return yield* compareArrayElements(x, y, resolvedComparator, realm);
    };

    const sortedList = yield* sortIndexedProperties(obj, len, sortCompare, "skip-holes");

    const itemCount = sortedList.length;

    // Fill in non-hole values.
    let j = 0;
    while (j < itemCount) {
      yield* obj.setEvaluator(String(j), sortedList[j], true);
      j++;
    }

    // Delete the remaining holes.
    while (j < len) {
      yield* deletePropertyOrThrow(obj, String(j), realm);
      j++;
    }

    return obj;
  },
};

export default arrayProtoSortDeclaration;
