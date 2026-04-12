import { ClassDeclaration } from "@babel/types";

import { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import { EvaluationGenerator } from "../../EvaluationGenerator.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import initializeBoundName from "../../bindings/initialize-bound-name.js";

import { classDefinitionEvaluation } from "./evaluation/class-definition-evaluation.js";

export default function* classDeclarationNodeEvaluator(
  node: ClassDeclaration,
): EvaluationGenerator {
  yield* bindingClassDeclarationEvaluation(node);
  return null;
}

function* bindingClassDeclarationEvaluation(
  node: ClassDeclaration,
): EvaluationGenerator<StaticJsValue> {
  const className = node.id?.name ?? null;
  // 'class {}' is only ever allowed for `export default class {}`.
  const classKey = className ?? "default";
  const value = yield* classDefinitionEvaluation(node, className, classKey);
  if (node.id) {
    const env = EvaluationContext.current.lexicalEnv;
    yield* initializeBoundName(node.id.name, value, env);
  }

  return value;
}
