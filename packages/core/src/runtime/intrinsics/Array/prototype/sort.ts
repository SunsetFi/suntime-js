import hasOwnProperty from "../../../../internal/has-own-property.js";

import type EvaluationGenerator from "../../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import toNumber from "../../../algorithms/to-number.js";
import toObject from "../../../algorithms/to-object.js";

const arrayProtoSortDeclaration: IntrinsicPropertyDeclaration = {
  key: "sort",
  *func(realm, thisArg, compareFnValue) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (isStaticJsUndefined(compareFnValue)) {
      compareFnValue = undefined;
    }

    if (compareFnValue && !isStaticJsFunction(compareFnValue)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "The comparison function must be either a function or undefined",
        ),
      );
    }

    // FIXME: There's weird stuff with undefined and null floating to the right naturally, and questions
    // about the docs which say it is never called with undefined.
    // undefined ALWAYS floats to the right, while null can be either end.

    const compareFn = function* (
      a: StaticJsValue | undefined,
      b: StaticJsValue | undefined,
    ): EvaluationGenerator<number> {
      const aIsUndefined = a === undefined || isStaticJsUndefined(a);
      const bIsUndefined = b === undefined || isStaticJsUndefined(b);
      if (aIsUndefined && bIsUndefined) {
        return 0;
      }
      if (aIsUndefined) {
        return 1;
      }
      if (bIsUndefined) {
        return -1;
      }

      if (compareFnValue) {
        let result = yield* compareFnValue.callEvaluator(
          realm.types.undefined,
          a,
          b,
        );

        result = yield* toNumber(result, realm);

        return result.value;
      } else {
        const aStr = a.toStringSync();
        const bStr = b.toStringSync();
        if (bStr < aStr) {
          return 1;
        }
        if (bStr > aStr) {
          return -1;
        }
        return 0;
      }
    };

    const length = yield* lengthOfArrayLike(thisObj, realm);

    const a: StaticJsValue[] = new Array(length);
    const b: StaticJsValue[] = new Array(length);
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (hasProperty) {
        const item = yield* thisObj.getEvaluator(property);
        a[i] = item;
        b[i] = item;
      }
    }

    yield* topDownSplitMerge(b, 0, length, a, compareFn);

    for (let i = 0; i < length; i++) {
      const property = String(i);
      if (!hasOwnProperty(b, i)) {
        // Preserve missing items.
        yield* thisObj.deleteEvaluator(property);
      } else {
        yield* thisObj.setEvaluator(property, b[i], true);
      }
    }

    return thisObj;
  },
};

function* topDownSplitMerge(
  b: StaticJsValue[],
  iBegin: number,
  iEnd: number,
  a: StaticJsValue[],
  compareFn: (
    a: StaticJsValue | undefined,
    b: StaticJsValue | undefined,
  ) => EvaluationGenerator<number>,
): EvaluationGenerator<void> {
  if (iEnd - iBegin <= 1) {
    return;
  }

  const iMiddle = Math.floor((iBegin + iEnd) / 2);

  yield* topDownSplitMerge(a, iBegin, iMiddle, b, compareFn);
  yield* topDownSplitMerge(a, iMiddle, iEnd, b, compareFn);
  yield* topDownMerge(b, iBegin, iMiddle, iEnd, a, compareFn);

  return;
}

function* topDownMerge(
  b: StaticJsValue[],
  iBegin: number,
  iMiddle: number,
  iEnd: number,
  a: StaticJsValue[],
  compareFn: (
    a: StaticJsValue | undefined,
    b: StaticJsValue | undefined,
  ) => EvaluationGenerator<number>,
): EvaluationGenerator<void> {
  let i = iBegin,
    j = iMiddle;

  function set(bIndex: number, aIndex: number) {
    if (!hasOwnProperty(a, aIndex)) {
      // Preserve missing items.
      delete b[bIndex];
      return;
    }

    b[bIndex] = a[aIndex];
  }

  for (let k = iBegin; k < iEnd; k++) {
    if (i >= iMiddle) {
      set(k, j++);
      continue;
    }

    if (i >= iEnd) {
      set(k, i++);
      continue;
    }

    const comparison = yield* compareFn(a[i], a[j]);
    if (comparison <= 0) {
      set(k, i++);
    } else {
      set(k, j++);
    }
  }
}

export default arrayProtoSortDeclaration;
