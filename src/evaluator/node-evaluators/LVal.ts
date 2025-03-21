import { LVal, isLVal } from "@babel/types";

import {
  isStaticJsArray,
  isStaticJsObject,
  isStaticJsUndefined,
  isStaticJsValue,
  StaticJsArray,
  StaticJsEnvironment,
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
} from "../../environment/index.js";

import { evaluateNodeAssertValue } from "./evaluate-node.js";

export default function setLVal(
  lval: LVal,
  value: StaticJsValue,
  env: StaticJsEnvironment,
  setNamedVariable: (name: string, value: StaticJsValue) => void,
) {
  if (!isStaticJsValue(value)) {
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
          setLVal(element.argument, restValue, env, setNamedVariable);
          return;
        } else {
          const elementValue = value.getProperty(property);
          setLVal(element, elementValue, env, setNamedVariable);
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

          setLVal(property.argument, restValue, env, setNamedVariable);
          return;
        } else {
          const propertyKey = property.key;
          let keyName: string;
          if (!property.computed && propertyKey.type === "Identifier") {
            keyName = propertyKey.name;
          } else {
            const resolved = evaluateNodeAssertValue(propertyKey, env);
            keyName = StaticJsObject.toPropertyKey(resolved);
          }

          const propertyValue = value.hasProperty(keyName)
            ? value.getProperty(keyName)
            : StaticJsUndefined();

          if (property.value.type === "Identifier") {
            setNamedVariable(property.value.name, propertyValue);
          } else if (isLVal(property.value)) {
            setLVal(property.value, propertyValue, env, setNamedVariable);
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
      if (isStaticJsUndefined(value)) {
        value = evaluateNodeAssertValue(lval.right, env);
      }

      setLVal(lval.left, value, env, setNamedVariable);
      return;
    }
  }

  throw new Error(`Unsupported LVal type: ${lval.type}`);
}
