import { NormalCompletion } from "../../../../evaluator/internal.js";
import toInteger from "../../../algorithms/to-integer.js";
import { isStaticJsNull, isStaticJsUndefined } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoJoinDeclaration: IntrinsicPropertyDeclaration = {
  name: "join",
  *func(realm, thisArg, joinerValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const lengthValue = yield* thisObj.getPropertyEvaluator("length");
    const length = toInteger(lengthValue);

    if (joinerValue == null) {
      joinerValue = realm.types.undefined;
    }

    let joiner: string;
    if (isStaticJsUndefined(joinerValue)) {
      joiner = ",";
    } else {
      joiner = joinerValue.toString();
    }

    const s: string[] = [];
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // join treats missing values as empty.
        s.push("");
        continue;
      }

      const elementValue = yield* thisObj.getPropertyEvaluator(property);
      if (isStaticJsUndefined(elementValue) || isStaticJsNull(elementValue)) {
        // join treats these as empty.
        s.push("");
        continue;
      }

      s.push(elementValue.toString());
    }

    return NormalCompletion(realm.types.string(s.join(joiner)));
  },
};

export default arrayProtoJoinDeclaration;
