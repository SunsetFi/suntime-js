import type { Block } from "@babel/types";

import type EvaluationGenerator from "../evaluator/EvaluationGenerator.js";
import type EvaluationContext from "../evaluator/EvaluationContext.js";

import type { StaticJsEnvironment } from "../runtime/environments/StaticJsEnvironment.js";

import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";
import boundNames from "./algorithms/bound-names.js";
import createFunction from "../evaluator/node-evaluators/Function.js";

export default function* blockDeclarationInstantiation(
  node: Block,
  env: StaticJsEnvironment,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  // FIXME: The spec just shows lexicallyScopedDeclarations called on 'code', whatever that is.
  // That can't be the body node, as LSD does not define any behaviors for Blocks?
  const declarations = node.body.flatMap(lexicallyScopedDeclarations);
  for (const d of declarations) {
    for (const dn of boundNames(d)) {
      if (d.type === "VariableDeclaration" && d.kind === "const") {
        yield* env.createImmutableBindingEvaluator(dn, true);
      } else {
        const hasBinding = yield* env.hasBindingEvaluator(dn);
        if (!hasBinding) {
          yield* env.createMutableBindingEvaluator(dn, false);
        }
      }
    }

    if (d.type === "FunctionDeclaration") {
      const fn = boundNames(d)[0];
      const fo = createFunction(fn, d, context);
      const isInitialized = yield* env.isInitialized(fn);
      if (!isInitialized) {
        yield* env.initializeBindingEvaluator(fn, fo);
      } else {
        yield* env.setMutableBindingEvaluator(fn, fo, false);
      }
    }
  }
}
