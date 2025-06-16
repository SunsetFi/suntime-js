import type { LVal } from "@babel/types";
import { isLVal } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsArray } from "../../runtime/types/StaticJsArray.js";
import { isStaticJsObject } from "../../runtime/types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsValue } from "../../runtime/types/StaticJsValue.js";

import toPropertyKey from "../../runtime/types/utils/to-property-key.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";
import toObject from "../../runtime/algorithms/to-object.js";
import sliceArrayNative from "../../runtime/types/utils/slice-array-native.js";

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
  ) => EvaluationGenerator<void>;

  switch (lval.type) {
    case "Identifier": {
      yield* setNamedVariable(lval.name, value);
      return null;
    }
    case "ArrayPattern": {
      // FIXME: This should use iterators.
      if (!isStaticJsArray(value)) {
        throw new ThrowCompletion(
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

        if (element.type === "RestElement") {
          const restValueNative = yield* sliceArrayNative(value);
          const restValue = context.realm.types.array(restValueNative);
          yield* setLVal(
            element.argument,
            restValue,
            context,
            setNamedVariable,
          );
        } else {
          const elementValue = yield* value.getPropertyEvaluator(property);
          yield* setLVal(element, elementValue, context, setNamedVariable);
        }
      }

      return null;
    }
    case "ObjectPattern": {
      if (!isStaticJsObject(value)) {
        // FIXME: Use real error.
        throw new ThrowCompletion(
          context.realm.types.string("Cannot destructure non-object value"),
        );
      }

      const seenProperties = new Set<string>();
      for (const property of lval.properties) {
        if (property.type === "RestElement") {
          const restValue = context.realm.types.object();
          for (const key in value) {
            if (!seenProperties.has(key)) {
              const propertyValue = yield* value.getPropertyEvaluator(key);
              yield* restValue.setPropertyEvaluator(
                key,
                propertyValue,
                context.strict,
              );
            }
          }

          yield* setLVal(
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
              forNormalValue: "ObjectPattern.properties[].key",
            });
            keyName = toPropertyKey(value);
          }

          const propertyValue = yield* value.getPropertyEvaluator(keyName);

          if (!property.computed && property.value.type === "Identifier") {
            yield* setNamedVariable(property.value.name, propertyValue);
          } else if (isLVal(property.value)) {
            yield* setLVal(
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
      }

      return null;
    }
    case "AssignmentPattern": {
      if (!value || isStaticJsUndefined(value)) {
        value = yield* EvaluateNodeCommand(lval.right, context, {
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
          forNormalValue: "MemberExpression.property",
        });
        propertyKey = toPropertyKey(property);
      }

      const object = yield* toObject(objectValue, context.realm);

      // FIXME: Is this correct?  We set the object directly???
      yield* object.setPropertyEvaluator(propertyKey, value, context.strict);

      return null;
    }
  }

  throw new StaticJsEngineError(`Unsupported LVal type: ${lval.type}`);
}

export function* environmentSetupLVal(
  lval: LVal,
  context: EvaluationContext,
  bindVariable: (name: string) => EvaluationGenerator<void>,
): EvaluationGenerator<void> {
  switch (lval.type) {
    case "Identifier":
      return yield* bindVariable(lval.name);
    case "ArrayPattern":
      for (const element of lval.elements) {
        if (element === null) {
          continue;
        }

        if (element.type === "RestElement") {
          yield* environmentSetupLVal(element.argument, context, bindVariable);
        } else {
          yield* environmentSetupLVal(element, context, bindVariable);
        }
      }
      return;
    case "ObjectPattern":
      for (const property of lval.properties) {
        if (property.type === "RestElement") {
          yield* environmentSetupLVal(property.argument, context, bindVariable);
        } else if (isLVal(property.value)) {
          yield* environmentSetupLVal(property.value, context, bindVariable);
        } else {
          throw new StaticJsEngineError(
            `Unsupported ObjectPattern property target type: ${property.value.type}`,
          );
        }
      }
      return;
    case "AssignmentPattern":
      return yield* environmentSetupLVal(lval.left, context, bindVariable);
  }

  throw new StaticJsEngineError(`Unsupported LVal type: ${lval.type}`);
}
