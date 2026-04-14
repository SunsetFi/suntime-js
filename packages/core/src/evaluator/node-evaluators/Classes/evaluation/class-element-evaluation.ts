import {
  ClassMethod,
  ClassPrivateMethod,
  ClassPrivateProperty,
  ClassProperty,
  StaticBlock,
} from "@babel/types";
import { Completion } from "../../../completions/Completion.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { StaticJsClassFieldDefinitionRecord } from "../ClassFieldDefinitionRecord.js";
import { StaticJsClassStaticBlockDefinitionRecord } from "../ClassStaticBlockDefinitionRecord.js";
import { StaticJsPrivateElement } from "../PrivateElement.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { Q } from "../../../completions/Q.js";
import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";
import { methodDefinitionEvaluation } from "./method-definition-evaluation.js";
import { StaticJsClassMethodFunction } from "../types/StaticJsClassMethodFunction.js";
import { classElementNameNodeEvaluator } from "../ClassElementName.js";

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
  if (Completion.Abrupt.is(name)) {
    return name;
  }

  let initializer: StaticJsFunction | undefined;
  if (element.value) {
    const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;
    if (!privateEnv) {
      throw new StaticJsEngineError(
        "Cannot call classFieldDefinitionEvaluation without a private env.",
      );
    }

    // By spec, OrdinaryFunctionCreate
    initializer = new StaticJsClassMethodFunction(
      realm,
      // Spec wants this to be an assignment expression, but to us that means
      // x = y,
      // to the spec it just means = y.
      element.value,
      object,
      env,
      privateEnv,
    );
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
  _element: StaticBlock,
  _object: StaticJsObject,
): EvaluationGenerator<StaticJsClassStaticBlockDefinitionRecord | Completion.Abrupt> {
  throw new Error("classStaticBlockDefinitionEvaluation not implemented");
}
