import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { arraySpeciesCreate } from "../../../algorithms/array-species-create.js";
import { createDataPropertyOrThrow } from "../../../algorithms/create-data-property-or-throw.js";
import { deletePropertyOrThrow } from "../../../algorithms/delete-property-or-throw.js";
import { get } from "../../../algorithms/get.js";
import { hasProperty } from "../../../algorithms/has-property.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { set } from "../../../algorithms/set.js";
import { toIntegerOrInfinity } from "../../../algorithms/to-integer-or-infinity.js";
import { toObject } from "../../../algorithms/to-object.js";
import { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayProtoSpliceDeclaration: IntrinsicPropertyDeclaration = {
  key: "splice",
  length: 2,
  *func(realm, thisArg = realm.types.undefined, start, deleteCount, ...items) {
    const obj = yield* Q(toObject(thisArg));
    const len = yield* Q(lengthOfArrayLike(obj));
    const relativeStart = yield* Q(toIntegerOrInfinity.js(start ?? realm.types.undefined));
    let actualStart: number;
    if (relativeStart === Number.NEGATIVE_INFINITY) {
      actualStart = 0;
    } else {
      actualStart = Math.min(relativeStart, len);
    }

    const itemCount = items.length;

    let actualDeleteCount: number;
    if (start === undefined) {
      actualDeleteCount = 0;
    } else if (deleteCount === undefined) {
      actualDeleteCount = len - actualStart;
    } else {
      const dc = yield* Q(toIntegerOrInfinity.js(deleteCount));
      actualDeleteCount = Math.min(Math.max(dc, 0), len - actualStart);
    }

    if (len + itemCount - actualDeleteCount > 2 ** 53 - 1) {
      throw Completion.Throw(
        "TypeError",
        "The number of elements in the array after the splice operation exceeds the maximum allowed length.",
      );
    }

    const deletedArray = yield* arraySpeciesCreate(obj, actualDeleteCount);

    let k = 0;

    while (k < actualDeleteCount) {
      const from = String(actualStart + k);
      if (yield* hasProperty(obj, from)) {
        const fromValue = yield* Q(get(obj, from));
        yield* Q(createDataPropertyOrThrow(deletedArray, String(k), fromValue));
      }
      k++;
    }

    yield* set(deletedArray, "length", realm.types.number(actualDeleteCount), true);

    if (itemCount < actualDeleteCount) {
      k = actualStart;
      while (k < len - actualDeleteCount) {
        const from = String(k + actualDeleteCount);
        const to = String(k + itemCount);
        if (yield* hasProperty(obj, from)) {
          const fromValue = yield* Q(get(obj, from));
          yield* Q(set(obj, to, fromValue, true));
        } else {
          yield* deletePropertyOrThrow(obj, to);
        }
        k++;
      }

      k = len;
      while (k > len - actualDeleteCount + itemCount) {
        yield* deletePropertyOrThrow(obj, String(k - 1));
        k--;
      }
    } else if (itemCount > actualDeleteCount) {
      k = len - actualDeleteCount;
      while (k > actualStart) {
        const from = String(k + actualDeleteCount - 1);
        const to = String(k + itemCount - 1);
        if (yield* hasProperty(obj, from)) {
          const fromValue = yield* Q(get(obj, from));
          yield* Q(set(obj, to, fromValue, true));
        } else {
          yield* deletePropertyOrThrow(obj, to);
        }
        k--;
      }
    }

    k = actualStart;
    for (const item of items) {
      // StaticJsUndefined is only in the typings because we
      // are playing it safe for functions invoked with too few args.
      yield* Q(set(obj, String(k), item as StaticJsValue, true));
      k++;
    }

    yield* Q(set(obj, "length", realm.types.number(len - actualDeleteCount + itemCount), true));

    return deletedArray;
  },
};

export default arrayProtoSpliceDeclaration;
