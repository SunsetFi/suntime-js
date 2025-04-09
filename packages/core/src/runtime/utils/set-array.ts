import hasOwnProperty from "../../internal/has-own-property.js";
import { StaticJsRealm } from "../realm/index.js";
import { StaticJsObjectLike, StaticJsValue } from "../types/index.js";

export default function* setArray(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
  values: (StaticJsValue | undefined)[],
) {
  for (let i = 0; i < values.length; i++) {
    const property = String(i);
    const value = values[i];
    if (!value || !hasOwnProperty(values, i)) {
      yield* obj.deletePropertyEvaluator(property);
    } else {
      yield* obj.setPropertyEvaluator(property, value, true);
    }
  }

  yield* obj.setPropertyEvaluator(
    "length",
    realm.types.number(values.length),
    true,
  );
}
