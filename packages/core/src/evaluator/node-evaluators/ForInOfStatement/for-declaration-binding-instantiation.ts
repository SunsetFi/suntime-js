import type { VariableDeclaration } from "@babel/types";

import type { StaticJsEnvironmentRecord } from "../../../runtime/environments/StaticJsEnvironmentRecord.js";

import boundNames from "../../instantiation/algorithms/bound-names.js";

import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* forDeclarationBindingInstantiation(
  node: VariableDeclaration,
  environment: StaticJsEnvironmentRecord,
): EvaluationGenerator<void> {
  const isConstantDeclaration =
    node.type === "VariableDeclaration" && node.kind === "const";
  for (const name of boundNames(node)) {
    if (isConstantDeclaration) {
      yield* environment.createImmutableBindingEvaluator(name, true);
    } else {
      yield* environment.createMutableBindingEvaluator(name, false);
    }
  }
}
