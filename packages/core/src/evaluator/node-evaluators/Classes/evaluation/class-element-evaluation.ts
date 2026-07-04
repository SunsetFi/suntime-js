import {
  type ClassMethod,
  type ClassPrivateMethod,
  type ClassPrivateProperty,
  type ClassProperty,
  type StaticBlock,
  parenthesizedExpression,
} from "@babel/types";

import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPrivateElement } from "#types/StaticJsPrivateElement.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { StaticJsMethodFunction } from "#types/implementation/functions/StaticJsMethodFunction.js";

import type { StaticJsClassFieldDefinitionRecord } from "../ClassFieldDefinitionRecord.js";
import type { StaticJsClassStaticBlockDefinitionRecord } from "../ClassStaticBlockDefinitionRecord.js";

import { Completion } from "../../../completions/Completion.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { classElementNameNodeEvaluator } from "../ClassElementName.js";
import { methodDefinitionEvaluation } from "./method-definition-evaluation.js";

export type ClassElementEvaluationResult =
  | StaticJsPrivateElement
  | StaticJsClassFieldDefinitionRecord
  | StaticJsClassStaticBlockDefinitionRecord;

export const classElementEvaluation = Q.makeReceiver(function* classElementEvaluation(
  element: ClassProperty | ClassPrivateProperty | ClassMethod | ClassPrivateMethod | StaticBlock,
  object: StaticJsObject,
): EvaluationGenerator<ClassElementEvaluationResult | null | Completion.Abrupt> {
  switch (element.type) {
    case "ClassProperty":
    case "ClassPrivateProperty":
      return yield* classFieldDefinitionEvaluation(element, object);
    case "ClassMethod":
    case "ClassPrivateMethod":
      return yield* methodDefinitionEvaluation(element, object, false);
    case "StaticBlock":
      return yield* classStaticBlockDefinitionEvaluation(element, object);
  }
  return null;
});

function* classFieldDefinitionEvaluation(
  element: ClassProperty | ClassPrivateProperty,
  object: StaticJsObject,
): EvaluationGenerator<StaticJsClassFieldDefinitionRecord | Completion.Abrupt> {
  let name = yield* Q(classElementNameNodeEvaluator(element));

  let initializer: StaticJsMethodFunction | undefined;
  if (element.value) {
    const { lexicalEnv: env, privateEnv, realm, scriptOrModule } = EvaluationContext.current;
    if (!privateEnv) {
      throw new StaticJsEngineError(
        "Cannot call classFieldDefinitionEvaluation without a private env.",
      );
    }

    // By spec, OrdinaryFunctionCreate
    const sourceText =
      scriptOrModule?.ecmaScriptSource.slice(element.value.start!, element.value.end!) ?? "";
    initializer = StaticJsMethodFunction.create(
      realm,
      // Spec wants this to be an assignment expression, but to us that means
      // x = y,
      // to the spec it just means = y.
      // Note: Just passing value here is a bug, as if the value is a function itself, this will
      // just evaluate that function.
      // Luckally, babel has parenthesizedExpression even though it doesn't generate them by default.
      parenthesizedExpression(element.value),
      sourceText,
      object,
      env,
      privateEnv,
    );

    initializer.classFieldInitializerName = name;
  } else {
    initializer = undefined;
  }

  return {
    type: "class-field-definition",
    name,
    initializer,
  };
}

function* classStaticBlockDefinitionEvaluation(
  element: StaticBlock,
  object: StaticJsObject,
): EvaluationGenerator<StaticJsClassStaticBlockDefinitionRecord | Completion.Abrupt> {
  const { lexicalEnv: lex, privateEnv, realm, scriptOrModule } = EvaluationContext.current;
  const sourceText = scriptOrModule?.ecmaScriptSource.slice(element.start!, element.end!) ?? "";
  const bodyFunction = StaticJsMethodFunction.create(
    realm,
    element,
    sourceText,
    object,
    lex,
    privateEnv,
  );
  return {
    type: "class-static-block-definition",
    bodyFunction,
  };
}
