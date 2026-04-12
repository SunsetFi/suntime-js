import {
  ClassAccessorProperty,
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
import { EvaluateNodeCommand } from "../../../commands/EvaluateNodeCommand.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { StaticJsClassFieldInitializerFunction } from "../../../../runtime/types/implementation/functions/StaticJsClassFieldInitializerFunction.js";
import { Q } from "../../../completions/Q.js";
import {
  isStaticJsPrivateName,
  StaticJsPrivateName,
} from "../../../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { isStaticJsString } from "../../../../runtime/types/StaticJsString.js";
import { isStaticJsSymbol, StaticJsSymbol } from "../../../../runtime/types/StaticJsSymbol.js";
import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";

export type ClassElementEvaluationResult =
  | StaticJsPrivateElement
  | StaticJsClassFieldDefinitionRecord
  | StaticJsClassStaticBlockDefinitionRecord;

export function* classElementEvaluation(
  element:
    | ClassProperty
    | ClassPrivateProperty
    | ClassAccessorProperty
    | ClassMethod
    | ClassPrivateMethod
    | StaticBlock,
  object: StaticJsObject,
): EvaluationGenerator<ClassElementEvaluationResult | null | Completion.Abrupt> {
  switch (element.type) {
    case "ClassProperty":
    case "ClassPrivateProperty":
      return yield* classFieldDefinitionEvaluation(element, object);
    case "ClassAccessorProperty":
    case "ClassMethod":
    case "ClassPrivateMethod":
      return yield* classMethodDefinitionEvaluation(element, object);
    case "StaticBlock":
      return yield* classStaticBlockDefinitionEvaluation(element, object);
  }
  return null;
}

function* classFieldDefinitionEvaluation(
  element: ClassProperty | ClassPrivateProperty,
  object: StaticJsObject,
): EvaluationGenerator<StaticJsClassFieldDefinitionRecord | Completion.Abrupt> {
  let nameEval = yield* Q(EvaluateNodeCommand(element.key));
  if (Completion.Abrupt.is(nameEval)) {
    return nameEval;
  }

  let name: string | StaticJsPrivateName | StaticJsSymbol;
  if (isStaticJsPrivateName(nameEval) || isStaticJsSymbol(nameEval)) {
    name = nameEval;
  } else if (isStaticJsString(nameEval)) {
    name = nameEval.value;
  } else {
    throw new StaticJsEngineError("Class field name must be a private name, string, or symbol.");
  }

  let initializer: StaticJsFunction | undefined;
  if (element.value) {
    const {
      lexicalEnv: env,
      privateEnv,
      scriptOrModule,
      realm,
      strict,
    } = EvaluationContext.current;
    // By spec, OrdinaryFunctionCreate
    initializer = new StaticJsClassFieldInitializerFunction(
      realm,
      name,
      // Spec wants this to be an assignment expression, but to us that means
      // x = y,
      // to the spec it just means = y.
      element.value,
      {
        scriptOrModule,
        env,
        privateEnv,
        homeObject: object,
        prototype: realm.types.prototypes.functionProto,
        // I have no idea what this should be, or if it matters.
        // In theory its inheriting from the syntax tree.
        strict,
      },
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

function* classMethodDefinitionEvaluation(
  _element: ClassMethod | ClassPrivateMethod | ClassAccessorProperty,
  _object: StaticJsObject,
): EvaluationGenerator<Completion.Abrupt> {
  throw new Error("classMethodDefinitionEvaluation not implemented");
}

function* classStaticBlockDefinitionEvaluation(
  _element: StaticBlock,
  _object: StaticJsObject,
): EvaluationGenerator<StaticJsClassStaticBlockDefinitionRecord | Completion.Abrupt> {
  throw new Error("classStaticBlockDefinitionEvaluation not implemented");
}
