import { NormalCompletion } from "../../../../evaluator/internal.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoPushDeclaration: IntrinsicPropertyDeclaration = {
  name: "push",
  func: function* (realm, thisArg, ...args) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    // Push works independently of the underlying type and
    // messes with the properties manually.

    let lengthValue = yield* thisObj.getPropertyEvaluator("length");
    if (!lengthValue) {
      lengthValue = realm.types.zero;
    }

    const length = Math.floor(lengthValue.toNumber());

    yield* thisObj.setPropertyEvaluator(
      "length",
      realm.types.number(length + args.length),
      true,
    );

    for (let i = 0; i < args.length; i++) {
      const index = length + i;
      const value = args[i]!;
      yield* thisObj.setPropertyEvaluator(String(index), value, true);
    }

    return NormalCompletion(realm.types.number(length + args.length));
  },
};

export default arrayProtoPushDeclaration;
