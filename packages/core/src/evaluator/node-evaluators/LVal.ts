import { LVal, isLVal } from "@babel/types";

import { isStaticJsArray } from "../../runtime/types/StaticJsArray.js";
import { isStaticJsObject } from "../../runtime/types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import {
  StaticJsValue,
  isStaticJsValue,
} from "../../runtime/types/StaticJsValue.js";

import toPropertyKey from "../../runtime/types/utils/to-property-key.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import { NormalCompletion } from "../completions/NormalCompletion.js";
import {
  ThrowCompletion,
  isThrowCompletion,
} from "../completions/ThrowCompletion.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export default function setLVal(
  lval: LVal,
  value: StaticJsValue,
  context: EvaluationContext,
  setNamedVariable: (
    name: string,
    value: StaticJsValue,
  ) => EvaluationGenerator<ThrowCompletion | void>,
): EvaluationGenerator;
export default function setLVal(
  lval: LVal,
  value: StaticJsValue | null,
  context: EvaluationContext,
  setNamedVariable: (
    name: string,
    value: StaticJsValue | null,
  ) => EvaluationGenerator<ThrowCompletion | void>,
): EvaluationGenerator;
export default function* setLVal(
  lval: LVal,
  value: StaticJsValue | null,
  context: EvaluationContext,
  _setNamedVariable: (
    name: string,
    value: StaticJsValue,
  ) => EvaluationGenerator<ThrowCompletion | void>,
): EvaluationGenerator {
  if (value && !isStaticJsValue(value)) {
    throw new StaticJsEngineError("Cannot set LVal to non-StaticJsValue");
  }

  // Type hack: Our overloads force us to either be nullable or non-nullable,
  // but the variance of the function doesn't actually let us have either-or.
  const setNamedVariable = _setNamedVariable as (
    name: string,
    value: StaticJsValue | null,
  ) => EvaluationGenerator<ThrowCompletion | void>;

  switch (lval.type) {
    case "Identifier": {
      const result = yield* setNamedVariable(lval.name, value);
      if (isThrowCompletion(result)) {
        return result;
      }
      return NormalCompletion();
    }
    case "ArrayPattern": {
      // FIXME: This should use iterators.
      if (!isStaticJsArray(value)) {
        return ThrowCompletion(
          context.realm.types.error(
            "TypeError",
            "Cannot destructure non-array value",
          ),
        );
      }

      for (let index = 0; index < lval.elements.length; index++) {
        const element = lval.elements[index];
        if (element === null) {
          continue;
        }

        const property = String(index);

        let setResult: Completion;
        if (element.type === "RestElement") {
          const restValue = yield* value.sliceEvaluator(index);
          setResult = yield* setLVal(
            element.argument,
            restValue,
            context,
            setNamedVariable,
          );
        } else {
          const elementValue = yield* value.getPropertyEvaluator(property);
          setResult = yield* setLVal(
            element,
            elementValue,
            context,
            setNamedVariable,
          );
        }

        if (isThrowCompletion(setResult)) {
          return setResult;
        }
      }

      return NormalCompletion();
    }
    case "ObjectPattern": {
      if (!isStaticJsObject(value)) {
        // FIXME: Use real error.
        return ThrowCompletion(
          context.realm.types.string("Cannot destructure non-object value"),
        );
      }

      const seenProperties = new Set<string>();
      for (const property of lval.properties) {
        let setResult: Completion | void;
        if (property.type === "RestElement") {
          const restValue = context.realm.types.object();
          for (const key in value) {
            if (!seenProperties.has(key)) {
              const propertyValue = yield* value.getPropertyEvaluator(key);
              yield* restValue.setPropertyEvaluator(
                key,
                propertyValue,
                context.realm.strict,
              );
            }
          }

          setResult = yield* setLVal(
            property.argument,
            restValue,
            context,
            setNamedVariable,
          );
        } else {
          const propertyKey = property.key;
          let keyName: string;
          if (!property.computed && propertyKey.type === "Identifier") {
            keyName = propertyKey.name;
          } else {
            const value = yield* EvaluateNodeCommand(propertyKey, context, {
              rethrow: true,
              forNormalValue: "ObjectPattern.properties[].key",
            });
            keyName = toPropertyKey(value);
          }

          const propertyValue = yield* value.getPropertyEvaluator(keyName);

          if (!property.computed && property.value.type === "Identifier") {
            setResult = yield* setNamedVariable(
              property.value.name,
              propertyValue,
            );
          } else if (isLVal(property.value)) {
            setResult = yield* setLVal(
              property.value,
              propertyValue,
              context,
              setNamedVariable,
            );
          } else {
            // FIXME: What else can this be?  How do these come up?
            throw new StaticJsEngineError(
              `Unsupported ObjectPattern property target type: ${property.value.type}`,
            );
          }
        }

        if (isThrowCompletion(setResult)) {
          return setResult;
        }
      }

      return NormalCompletion();
    }
    case "AssignmentPattern": {
      if (!value || isStaticJsUndefined(value)) {
        value = yield* EvaluateNodeCommand(lval.right, context, {
          rethrow: true,
          forNormalValue: "AssignmentPattern.right",
        });
      }

      return yield* setLVal(lval.left, value, context, setNamedVariable);
    }
    case "MemberExpression": {
      if (!value) {
        // FIXME: Is this correct???
        // We certainly don't handle this in environmentSetupLVal.
        throw new StaticJsEngineError(
          "Cannot use MemberExpression as LVal without value.",
        );
      }

      const objectValue = yield* EvaluateNodeCommand(lval.object, context, {
        rethrow: true,
        forNormalValue: "MemberExpression.object",
      });

      if (!value) {
        // null values are only used for declarations.
        // Does this ever come up in the syntax?
        throw new StaticJsEngineError("Cannot set property without value");
      }

      let propertyKey: string;
      if (!lval.computed && lval.property.type === "Identifier") {
        propertyKey = lval.property.name;
      } else {
        const property = yield* EvaluateNodeCommand(lval.property, context, {
          rethrow: true,
          forNormalValue: "MemberExpression.property",
        });
        propertyKey = toPropertyKey(property);
      }

      const object = objectValue.toObject();

      // FIXME: Is this correct?  We set the object directly???
      yield* object.setPropertyEvaluator(
        propertyKey,
        value,
        context.realm.strict,
      );

      return NormalCompletion();
    }
  }

  throw new StaticJsEngineError(`Unsupported LVal type: ${lval.type}`);
}

export function* environmentSetupLVal(
  lval: LVal,
  context: EvaluationContext,
  bindVariable: (name: string) => EvaluationGenerator<ThrowCompletion | void>,
): EvaluationGenerator<ThrowCompletion | void> {
  switch (lval.type) {
    case "Identifier":
      return yield* bindVariable(lval.name);
    case "ArrayPattern":
      for (const element of lval.elements) {
        if (element === null) {
          continue;
        }

        let setupResult: ThrowCompletion | void;
        if (element.type === "RestElement") {
          setupResult = yield* environmentSetupLVal(
            element.argument,
            context,
            bindVariable,
          );
        } else {
          setupResult = yield* environmentSetupLVal(
            element,
            context,
            bindVariable,
          );
        }

        if (isThrowCompletion(setupResult)) {
          return setupResult;
        }
      }
      return;
    case "ObjectPattern":
      for (const property of lval.properties) {
        let setupResult: ThrowCompletion | void;
        if (property.type === "RestElement") {
          setupResult = yield* environmentSetupLVal(
            property.argument,
            context,
            bindVariable,
          );
        } else if (isLVal(property.value)) {
          setupResult = yield* environmentSetupLVal(
            property.value,
            context,
            bindVariable,
          );
        } else {
          throw new StaticJsEngineError(
            `Unsupported ObjectPattern property target type: ${property.value.type}`,
          );
        }

        if (isThrowCompletion(setupResult)) {
          return setupResult;
        }
      }
      return;
    case "AssignmentPattern":
      return yield* environmentSetupLVal(lval.left, context, bindVariable);
  }

  throw new StaticJsEngineError(`Unsupported LVal type: ${lval.type}`);
}
