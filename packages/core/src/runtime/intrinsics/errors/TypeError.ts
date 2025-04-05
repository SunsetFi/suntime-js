import { ThrowCompletion } from "../../../evaluator/internal.js";
import { StaticJsRealm } from "../../realm/index.js";

export default function createTypeErrorCompletion(
  message: string,
  realm: StaticJsRealm,
) {
  // FIXME: Use real error.
  return ThrowCompletion(realm.types.string(message));
}
