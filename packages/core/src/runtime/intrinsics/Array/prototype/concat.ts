import ReturnCompletion from "../../../../evaluator/completions/ReturnCompletion.js";
import { isStaticJsArray, StaticJsValue } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoConcatDeclaration: IntrinsicPropertyDeclaration = {
  name: "concat",
  *func(realm, ...args) {
    // Unique among array methods, concat does not cast thisArg to an array.

    let values: StaticJsValue[] = [];

    for (const arg of args) {
      if (!arg) {
        continue;
      }

      // Concat actually seems to understand the concept of arrays and not-arrays.
      // Objects with length properties are NOT treated as arrays!
      // FIXME: Is this an iterator thing?
      if (isStaticJsArray(arg)) {
        const argValues = yield* arg.sliceNativeEvaluator();

        // CANT DO THIS!  It actualizes unset values!
        // values.push(...argValues);
        // Must use concat to keep gaps.
        values = values.concat(argValues);

        continue;
      }

      values.push(arg);
    }

    return ReturnCompletion(realm.types.array(values));
  },
};

export default arrayProtoConcatDeclaration;
