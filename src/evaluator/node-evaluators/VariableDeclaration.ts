import { VariableDeclaration, VariableDeclarator, LVal } from "@babel/types";

import {
  isStaticJsArray,
  isStaticJsObject,
  StaticJsArray,
  StaticJsNull,
  StaticJsObject,
  StaticJsScope,
  StaticJsUndefined,
  StaticJsValue,
} from "../../environment/index.js";

import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";

export default function variableDeclarationNodeEvaluator(
  statement: VariableDeclaration,
  scope: StaticJsScope,
): null {
  let variableCreator: (name: string, value: StaticJsValue) => void;
  switch (statement.kind) {
    case "const":
      variableCreator = (name, value) =>
        scope.declareConstProperty(name, value);
      break;
    case "let":
    // FIXME: In practice, var is hoisted, right?
    case "var":
      variableCreator = (name, value) => scope.declareLetProperty(name, value);
      break;
    default:
      throw new Error(
        `Unsupported variable declaration kind: ${statement.kind}`,
      );
  }

  for (const declarator of statement.declarations) {
    declarationStatementEvaluator(declarator, scope, variableCreator);
  }

  return null;
}

function declarationStatementEvaluator(
  declarator: VariableDeclarator,
  scope: StaticJsScope,
  variableCreator: (name: string, value: StaticJsValue) => void,
): void {
  let value: StaticJsValue = StaticJsUndefined();
  if (declarator.init === null) {
    value = StaticJsNull();
  } else if (declarator.init) {
    const initValue = evaluateNode(declarator.init, scope);
    assertValueResult(initValue);
    value = initValue;
  }

  setLVal(declarator.id, value, scope, variableCreator);
}

export function setLVal(
  lval: LVal,
  value: StaticJsValue,
  scope: StaticJsScope,
  setNamedVariable: (name: string, value: StaticJsValue) => void,
) {
  switch (lval.type) {
    case "Identifier":
      setNamedVariable(lval.name, value);
      break;
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
          setLVal(element.argument, restValue, scope, setNamedVariable);
          return;
        } else {
          const elementValue = value.hasProperty(property)
            ? value.getProperty(property)
            : StaticJsUndefined();
          setLVal(element, elementValue, scope, setNamedVariable);
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

          setLVal(property.argument, restValue, scope, setNamedVariable);
          return;
        } else {
          let key: string;
          if (property.key.type === "Identifier") {
            key = property.key.name;
          } else {
            const resolved = evaluateNode(property.key, scope);
            if (resolved === null || resolved === undefined) {
              throw new Error("Cannot destructure with non-string key");
            }
            key = resolved.toString();
          }

          const propertyValue = value.hasProperty(key)
            ? value.getProperty(key)
            : StaticJsUndefined();
          setNamedVariable(key, propertyValue);
        }
      }

      return;
    }
  }

  throw new Error(`Unsupported LVal type: ${lval.type}`);
}
