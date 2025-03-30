import { LVal, isLVal } from "@babel/types";

import {
  isStaticJsArray,
  isStaticJsObject,
  isStaticJsScalar,
  isStaticJsUndefined,
  isStaticJsValue,
  StaticJsObject,
  StaticJsValue,
} from "../../runtime/index.js";

import { EvaluateNodeAssertValueCommand } from "../commands/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function setLVal(
  lval: LVal,
  value: StaticJsValue,
  context: EvaluationContext,
  setNamedVariable: (name: string, value: StaticJsValue) => void,
): EvaluationGenerator<void>;
export default function setLVal(
  lval: LVal,
  value: StaticJsValue | null,
  context: EvaluationContext,
  setNamedVariable: (name: string, value: StaticJsValue | null) => void,
): EvaluationGenerator<void>;
export default function* setLVal(
  lval: LVal,
  value: StaticJsValue | null,
  context: EvaluationContext,
  _setNamedVariable: (name: string, value: StaticJsValue) => void,
): EvaluationGenerator<void> {
  if (value && !isStaticJsValue(value)) {
    throw new Error("Cannot set LVal to non-StaticJsValue");
  }

  // Type hack: Our overloads force us to either be nullable or non-nullable,
  // but the variance of the function doesn't actually let us have either-or.
  const setNamedVariable = _setNamedVariable as (
    name: string,
    value: StaticJsValue | null,
  ) => void;

  switch (lval.type) {
    case "Identifier":
      setNamedVariable(lval.name, value);
      return;
    case "ArrayPattern": {
      if (!isStaticJsArray(value)) {
        throw new Error("Cannot destructure non-array value");
      }

      for (let index = 0; index < lval.elements.length; index++) {
        const element = lval.elements[index];
        if (element === null) {
          continue;
        }

        const property = String(index);
        if (element.type === "RestElement") {
          const restValue = value.slice(index);
          yield* setLVal(
            element.argument,
            restValue,
            context,
            setNamedVariable,
          );
          return;
        } else {
          const elementValue = yield* value.getPropertyEvaluator(property);
          yield* setLVal(element, elementValue, context, setNamedVariable);
        }
      }
      return;
    }
    case "ObjectPattern": {
      if (!isStaticJsObject(value)) {
        throw new Error("Cannot destructure non-object value");
      }

      const seenProperties = new Set<string>();
      for (const property of lval.properties) {
        if (property.type === "RestElement") {
          const restValue = StaticJsObject();
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

          yield* setLVal(
            property.argument,
            restValue,
            context,
            setNamedVariable,
          );
          return;
        } else {
          const propertyKey = property.key;
          let keyName: string;
          if (!property.computed && propertyKey.type === "Identifier") {
            keyName = propertyKey.name;
          } else {
            const resolved = yield* EvaluateNodeAssertValueCommand(
              propertyKey,
              context,
            );
            keyName = StaticJsObject.toPropertyKey(resolved);
          }

          const propertyValue = yield* value.getPropertyEvaluator(keyName);

          if (!property.computed && property.value.type === "Identifier") {
            setNamedVariable(property.value.name, propertyValue);
          } else if (isLVal(property.value)) {
            yield* setLVal(
              property.value,
              propertyValue,
              context,
              setNamedVariable,
            );
          } else {
            // FIXME: What else can this be?  How do these come up?
            throw new Error(
              `Unsupported ObjectPattern property target type: ${property.value.type}`,
            );
          }
        }
      }

      return;
    }
    case "AssignmentPattern": {
      if (!value || isStaticJsUndefined(value)) {
        value = yield* EvaluateNodeAssertValueCommand(lval.right, context);
      }

      yield* setLVal(lval.left, value, context, setNamedVariable);
      return;
    }
    case "MemberExpression": {
      if (!value) {
        // FIXME: Is this correct???
        // We certainly don't handle this in environmentSetupLVal.
        throw new Error("Cannot use MemberExpression as LVal without value.");
      }

      const object = yield* EvaluateNodeAssertValueCommand(
        lval.object,
        context,
      );
      if (!isStaticJsObject(object)) {
        // FIXME: throw real error
        throw new Error("Cannot set property on non-object");
      }
      if (!value) {
        // FIXME: Does this ever come up in the syntax?
        // null values are only used for declarations.
        throw new Error("Cannot set property without value");
      }

      let propertyKey: string;
      if (!lval.computed && lval.property.type === "Identifier") {
        propertyKey = lval.property.name;
      } else {
        const resolved = yield* EvaluateNodeAssertValueCommand(
          lval.property,
          context,
        );
        if (!isStaticJsScalar(resolved)) {
          // FIXME: throw real error.
          throw new Error("Computed property key must be a scalar");
        }
        propertyKey = StaticJsObject.toPropertyKey(resolved);
      }

      // FIXME: Is this correct?  We set the object directly???
      yield* object.setPropertyEvaluator(
        propertyKey,
        value,
        context.realm.strict,
      );
      return;
    }
  }

  throw new Error(`Unsupported LVal type: ${lval.type}`);
}

export function environmentSetupLVal(
  lval: LVal,
  context: EvaluationContext,
  bindVariable: (name: string) => void,
) {
  switch (lval.type) {
    case "Identifier":
      bindVariable(lval.name);
      return;
    case "ArrayPattern":
      for (const element of lval.elements) {
        if (element === null) {
          continue;
        }

        if (element.type === "RestElement") {
          environmentSetupLVal(element.argument, context, bindVariable);
          return;
        } else {
          environmentSetupLVal(element, context, bindVariable);
        }
      }
      return;
    case "ObjectPattern":
      for (const property of lval.properties) {
        if (property.type === "RestElement") {
          environmentSetupLVal(property.argument, context, bindVariable);
          return;
        } else if (isLVal(property.value)) {
          environmentSetupLVal(property.value, context, bindVariable);
        } else {
          throw new Error(
            `Unsupported ObjectPattern property target type: ${property.value.type}`,
          );
        }
      }
      return;
    case "AssignmentPattern":
      environmentSetupLVal(lval.left, context, bindVariable);
      return;
  }

  throw new Error(`Unsupported LVal type: ${lval.type}`);
}
