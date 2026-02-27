import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

export type SortCompare = (a: StaticJsValue, b: StaticJsValue) => EvaluationGenerator<number>;

export default function* sortIndexedProperties(
  obj: StaticJsObjectLike,
  len: number,
  sortCompare: SortCompare,
  holes: "skip-holes" | "read-through-holes",
): EvaluationGenerator<StaticJsValue[]> {
  const items: StaticJsValue[] = [];

  let k = 0;
  while (k < len) {
    const Pk = String(k);
    let kRead: boolean;
    if (holes === "skip-holes") {
      kRead = yield* obj.hasPropertyEvaluator(Pk);
    } else {
      kRead = true;
    }

    if (kRead) {
      const kValue = yield* obj.getEvaluator(Pk);
      items.push(kValue);
    }
    k++;
  }

  const other = [...items];
  yield* topDownSplitMerge(items, 0, items.length, other, sortCompare);

  return items;
}

function* topDownSplitMerge(
  b: StaticJsValue[],
  iBegin: number,
  iEnd: number,
  a: StaticJsValue[],
  compareFn: SortCompare,
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
  compareFn: SortCompare,
): EvaluationGenerator<void> {
  let i = iBegin,
    j = iMiddle;

  function set(bIndex: number, aIndex: number) {
    b[bIndex] = a[aIndex];
  }

  for (let k = iBegin; k < iEnd; k++) {
    if (i >= iMiddle) {
      set(k, j++);
      continue;
    }

    if (j >= iEnd) {
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
