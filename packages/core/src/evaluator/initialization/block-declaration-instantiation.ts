import type { Block } from "@babel/types";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import createFunction from "../node-evaluators/Function.js";

import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";
import boundNames from "./algorithms/bound-names.js";

export default function* blockDeclarationInstantiation(
  node: Block,
  env: StaticJsEnvironmentRecord,
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
      const fn = boundNames.soleElementOf(d);
      const fo = createFunction(fn, d, context);
      const isInitialized = yield* env.isInitializedEvaluator(fn);
      if (!isInitialized) {
        yield* env.initializeBindingEvaluator(fn, fo);
      } else {
        yield* env.setMutableBindingEvaluator(fn, fo, false);
      }
    }
  }
}
