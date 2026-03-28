import { type Block, type SwitchStatement } from "@babel/types";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import createFunction from "../node-evaluators/Function.js";

import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";
import boundNames from "./algorithms/bound-names.js";

export default function* blockDeclarationInstantiation(
  node: Block | SwitchStatement,
  env: StaticJsEnvironmentRecord,
): EvaluationGenerator<void> {
  const declarations = lexicallyScopedDeclarations.topLevel(node);
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
      const fo = createFunction(fn, d, env);
      const isInitialized = yield* env.isInitializedEvaluator(fn);
      if (!isInitialized) {
        yield* env.initializeBindingEvaluator(fn, fo);
      } else {
        yield* env.setMutableBindingEvaluator(fn, fo, false);
      }
    }
  }
}
