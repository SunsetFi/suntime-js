import { NormalCompletion } from "../internal.js";

export default function* importDeclarationNodeEvaluator() {
  // Do nothing.  All the work is done in StaticJsModule.
  return NormalCompletion();
}
