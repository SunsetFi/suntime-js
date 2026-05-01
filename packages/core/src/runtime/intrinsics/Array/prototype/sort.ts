import { Completion } from "../../../../evaluator/completions/Completion.js";
import { deletePropertyOrThrow } from "../../../algorithms/delete-property-or-throw.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { set } from "../../../algorithms/set.js";
import { toObject } from "../../../algorithms/to-object.js";
import { type StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import compareArrayElements from "../compare-array-elements.js";
import sortIndexedProperties from "../sort-indexed-properties.js";

const arrayProtoSortDeclaration: IntrinsicPropertyDeclaration = {
  key: "sort",
  length: 0,
  *func(realm, thisArg, comparatorArg) {
    let resolvedComparator: StaticJsCallable | null;
    if (!comparatorArg || isStaticJsUndefined(comparatorArg)) {
      resolvedComparator = null;
    } else if (!isCallable(comparatorArg)) {
      throw Completion.Throw("TypeError", "Comparator must be a function");
    } else {
      resolvedComparator = comparatorArg;
    }

    const obj = yield* toObject(thisArg);
    const len = yield* lengthOfArrayLike(obj);

    const sortCompare = function* (x: StaticJsValue, y: StaticJsValue) {
      return yield* compareArrayElements(x, y, resolvedComparator, realm);
    };

    const sortedList = yield* sortIndexedProperties(obj, len, sortCompare, "skip-holes");

    const itemCount = sortedList.length;

    // Fill in non-hole values.
    let j = 0;
    while (j < itemCount) {
      yield* set(obj, String(j), sortedList[j], true);
      j++;
    }

    // Delete the remaining holes.
    while (j < len) {
      yield* deletePropertyOrThrow(obj, String(j));
      j++;
    }

    return obj;
  },
};

export default arrayProtoSortDeclaration;
