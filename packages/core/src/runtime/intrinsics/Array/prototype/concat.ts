import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import arraySpeciesCreate from "../../../algorithms/array-species-create.js";
import isConcatSpreadable from "../../../algorithms/is-concat-spreadable.js";
import toObject from "../../../algorithms/to-object.js";

import type { StaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../../../types/StaticJsArray.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoConcatDeclaration: IntrinsicPropertyDeclaration = {
  key: "concat",
  *func(realm, thisArg, ...items) {
    // Unique among array methods, concat does not cast thisArg to an array.

    const O = yield* toObject(thisArg, realm);
    const A = yield* arraySpeciesCreate(O, 0, realm);

    let n = 0;

    // Spec just says "prepend O to items".  Not sure what to do if getting items increments the length
    const length = yield* lengthOfArrayLike(O, realm);
    for (let i = 0; i < length; i++) {
      const property = String(i);
      if (yield* O.hasPropertyEvaluator(property)) {
        const E = yield* O.getEvaluator(property);
        // Per spec, must be defineProperty
        yield* A.definePropertyEvaluator(String(n), {
          value: E,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
      n++;
    }

    for (const E of items) {
      // We only type undefined to force implementers to consider empty values in the spread
      if (!E) {
        continue;
      }

      const spreadable = yield* isConcatSpreadable(E, realm);
      if (spreadable) {
        const objE = E as StaticJsObjectLike;
        const len = yield* lengthOfArrayLike(objE, realm);
        if (n + len > MAX_ARRAY_LENGTH_INCLUSIVE) {
          throw new ThrowCompletion(
            realm.types.error("TypeError", "Maximum array size exceeded"),
          );
        }

        let k = 0;
        while (k < len) {
          const Pk = String(k);
          const exists = yield* objE.hasPropertyEvaluator(Pk);
          if (exists) {
            const subElement = yield* objE.getEvaluator(Pk);

            // Per spec, must be defineProperty
            yield* A.definePropertyEvaluator(String(n), {
              value: subElement,
              writable: true,
              enumerable: true,
              configurable: true,
            });
          }
          n++;
          k++;
        }
      } else {
        if (n > MAX_ARRAY_LENGTH_INCLUSIVE) {
          throw new ThrowCompletion(
            realm.types.error("TypeError", "Maximum array size exceeded"),
          );
        }

        // Per spec, must be defineProperty
        yield* A.definePropertyEvaluator(String(n), {
          value: E,
          writable: true,
          enumerable: true,
          configurable: true,
        });
        n++;
      }
    }

    // Per spec, must be set
    yield* A.setEvaluator("length", realm.types.number(n), true);

    return A;
  },
};

export default arrayProtoConcatDeclaration;
