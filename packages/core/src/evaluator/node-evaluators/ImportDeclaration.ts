import NormalCompletion from "../completions/NormalCompletion.js";

export default function* importDeclarationNodeEvaluator() {
  // Do nothing.  All the work is done in StaticJsModule.
  return NormalCompletion();
}
