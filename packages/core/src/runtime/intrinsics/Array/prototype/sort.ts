import StaticJsEngineError from "../../../../errors/StaticJsEngineError.js";

import hasOwnProperty from "../../../../internal/has-own-property.js";

import EvaluationGenerator from "../../../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import { NormalCompletion } from "../../../../evaluator/completions/NormalCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsFunction } from "../../../types/interfaces/StaticJsFunction.js";
import { isStaticJsUndefined } from "../../../types/interfaces/StaticJsUndefined.js";
import { StaticJsValue } from "../../../types/interfaces/StaticJsValue.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoSortDeclaration: IntrinsicPropertyDeclaration = {
  name: "sort",
  *func(realm, thisArg, compareFnValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (isStaticJsUndefined(compareFnValue)) {
      compareFnValue = undefined;
    }

    if (compareFnValue && !isStaticJsFunction(compareFnValue)) {
      return ThrowCompletion(
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
    ): EvaluationGenerator<ThrowCompletion | number> {
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
        const result = yield* compareFnValue.callEvaluator(
          realm.types.undefined,
          a,
          b,
        );
        if (result.type === "throw") {
          return result;
        }
        if (result.type !== "normal" || !result.value) {
          throw new StaticJsEngineError(
            "Expected Array.prototype.sort callback to return a normal completion",
          );
        }

        return result.value.toNumber();
      } else {
        const aStr = a.toString();
        const bStr = b.toString();
        if (bStr < aStr) {
          return 1;
        }
        if (bStr > aStr) {
          return -1;
        }
        return 0;
      }
    };

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    const a: StaticJsValue[] = new Array(length);
    const b: StaticJsValue[] = new Array(length);
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (hasProperty) {
        const item = yield* thisObj.getPropertyEvaluator(property);
        a[i] = item;
        b[i] = item;
      }
    }

    const result = yield* topDownSplitMerge(b, 0, length, a, compareFn);
    if (result.type === "throw") {
      return result;
    }

    for (let i = 0; i < length; i++) {
      const property = String(i);
      if (!hasOwnProperty(b, i)) {
        // Preserve missing items.
        yield* thisObj.deletePropertyEvaluator(property);
      } else {
        yield* thisObj.setPropertyEvaluator(property, b[i], true);
      }
    }

    return ReturnCompletion(thisObj);
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
  ) => EvaluationGenerator<ThrowCompletion | number>,
): EvaluationGenerator {
  if (iEnd - iBegin <= 1) {
    return NormalCompletion();
  }

  const iMiddle = Math.floor((iBegin + iEnd) / 2);

  let result: Completion;

  result = yield* topDownSplitMerge(a, iBegin, iMiddle, b, compareFn);
  if (result.type === "throw") {
    return result;
  }

  result = yield* topDownSplitMerge(a, iMiddle, iEnd, b, compareFn);
  if (result.type === "throw") {
    return result;
  }
  result = yield* topDownMerge(b, iBegin, iMiddle, iEnd, a, compareFn);
  if (result.type === "throw") {
    return result;
  }

  return NormalCompletion();
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
  ) => EvaluationGenerator<ThrowCompletion | number>,
): EvaluationGenerator {
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
    if (isThrowCompletion(comparison)) {
      return comparison;
    }
    if (comparison <= 0) {
      set(k, i++);
    } else {
      set(k, j++);
    }
  }

  return NormalCompletion();
}

export default arrayProtoSortDeclaration;
