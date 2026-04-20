import { BlockStatement, type SwitchStatement } from "@babel/types";

import { instantiateFunctionObject } from "../../runtime/algorithms/instantiate-function-object.js";
import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import boundNames from "./algorithms/bound-names.js";
import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";

export default function* blockDeclarationInstantiation(
  node: BlockStatement | SwitchStatement,
  env: StaticJsEnvironmentRecord,
): EvaluationGenerator<void> {
  const { privateEnv } = EvaluationContext.current;
  const declarations = lexicallyScopedDeclarations.forBlock(node);
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
      const fo = instantiateFunctionObject(d, env, privateEnv);
      const isInitialized = yield* env.isInitializedEvaluator(fn);
      if (!isInitialized) {
        yield* env.initializeBindingEvaluator(fn, fo);
      } else {
        yield* env.setMutableBindingEvaluator(fn, fo, false);
      }
    }
  }
}
