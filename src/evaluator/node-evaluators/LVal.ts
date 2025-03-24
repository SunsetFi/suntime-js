import { LVal, isLVal } from "@babel/types";

import {
  isStaticJsArray,
  isStaticJsObject,
  isStaticJsUndefined,
  isStaticJsValue,
  StaticJsArray,
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
} from "../../runtime/index.js";

import {
  EvaluateNodeAssertValueCommand,
  EvaluatorCommand,
} from "../commands/index.js";

import EvaluationResult from "../EvaluationResult.js";
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
  setNamedVariable: (name: string, value: any) => void,
): EvaluationGenerator<void> {
  if (value && !isStaticJsValue(value)) {
    throw new Error("Cannot set LVal to non-StaticJsValue");
  }

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
          const restValue = StaticJsArray(value.sliceNative(index));
          yield* setLVal(
            element.argument,
            restValue,
            context,
            setNamedVariable,
          );
          return;
        } else {
          const elementValue = value.getProperty(property);
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
      for (let property of lval.properties) {
        if (property.type === "RestElement") {
          const restValue = StaticJsObject();
          for (const key in value) {
            if (!seenProperties.has(key)) {
              restValue.setProperty(key, value.getProperty(key));
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

          const propertyValue = value.hasProperty(keyName)
            ? value.getProperty(keyName)
            : StaticJsUndefined();

          if (property.value.type === "Identifier") {
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
