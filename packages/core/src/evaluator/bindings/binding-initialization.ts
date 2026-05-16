import {
  type Expression,
  type LVal,
  type Node,
  type ObjectProperty,
  type RestElement,
  isRestElement,
  isObjectProperty,
} from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import isAnonymousFunctionDefinition from "../../grammar/is-anonymous-function-definition.js";
import { copyDataProperties } from "../../runtime/algorithms/copy-data-properties.js";
import { get } from "../../runtime/algorithms/get.js";
import { putValue } from "../../runtime/algorithms/put-value.js";
import { toObject } from "../../runtime/algorithms/to-object.js";
import { toPropertyKey } from "../../runtime/algorithms/to-property-key.js";
import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { getIterator } from "../../runtime/iterators/get-iterator.js";
import { iteratorClose } from "../../runtime/iterators/iterator-close.js";
import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";
import type { StaticJsPropertyKey } from "../../runtime/types/StaticJsPropertyKey.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import NamedEvaluation from "../node-evaluators/NamedEvaluation.js";

import initializeBoundName from "./initialize-bound-name.js";
import initializeReferencedBinding from "./initialize-referenced-binding.js";
import { iteratorBindingInitialization } from "./iterator-binding-initialization.js";

export default function* bindingInitialization(
  node: LVal,
  value: StaticJsValue,
  environment: StaticJsEnvironmentRecord | null,
): EvaluationGenerator<void> {
  switch (node.type) {
    case "Identifier": {
      const name = node.name;
      yield* initializeBoundName(name, value, environment);
      return;
    }
    case "ObjectPattern": {
      const obj = yield* toObject(value);

      const properties = node.properties.filter((p) => isObjectProperty(p));
      const excludedNames = yield* propertyBindingInitialization(properties, obj, environment);

      const rest = node.properties.find((p) => isRestElement(p));
      if (rest) {
        yield* restBindingInitialization(rest, obj, excludedNames, environment);
      }

      return;
    }
    case "ArrayPattern": {
      const iteratorRecord = yield* getIterator(value, "sync");
      const result = yield* iteratorBindingInitialization.arrayBindingPattern(
        node,
        iteratorRecord,
        environment,
      );
      if (!iteratorRecord.done) {
        yield* Q(iteratorClose(iteratorRecord, result ?? Completion.Normal(null)));
      }

      yield* Q(result);
      return;
    }
  }
}

function* propertyBindingInitialization(
  node: ObjectProperty[] | ObjectProperty,
  value: StaticJsValue,
  environment: StaticJsEnvironmentRecord | null,
): EvaluationGenerator<StaticJsPropertyKey[]> {
  if (Array.isArray(node)) {
    const excludedNames: StaticJsPropertyKey[] = [];
    for (const property of node) {
      const result = yield* propertyBindingInitialization(property, value, environment);
      excludedNames.push(...result);
    }
    return excludedNames;
  }

  let key: StaticJsPropertyKey;
  if (node.computed) {
    const p = yield* Q.val(EvaluateNodeCommand(node.key));
    key = yield* toPropertyKey(p);
  } else if (node.key.type === "Identifier") {
    key = node.key.name;
  } else if (node.key.type === "StringLiteral") {
    key = String(node.key.value);
  } else if (node.key.type === "NumericLiteral") {
    key = String(node.key.value);
  } else if (node.key.type === "BooleanLiteral") {
    key = String(node.key.value);
  } else if (node.key.type === "NullLiteral") {
    key = String(null);
  } else {
    throw new StaticJsEngineError(`Unsupported object property key type: ${node.key.type}`);
  }

  yield* keyedBindingInitialization(node.value, value, key, environment);

  return [key];
}

function* keyedBindingInitialization(
  node: Node,
  value: StaticJsValue,
  property: StaticJsPropertyKey,
  environment: StaticJsEnvironmentRecord | null,
): EvaluationGenerator<void> {
  const { strict, lexicalEnv } = EvaluationContext.current;

  let initializer: Expression | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  switch (node.type) {
    case "ObjectPattern":
    case "ArrayPattern": {
      const obj = yield* toObject(value);
      let v = yield* get(obj, property);
      if (initializer && isStaticJsUndefined(v)) {
        if (isAnonymousFunctionDefinition(initializer)) {
          v = yield* Q.val(NamedEvaluation(property, initializer));
        } else {
          v = yield* Q.val(EvaluateNodeCommand(initializer));
        }
      }
      yield* bindingInitialization(node, v, environment);
      return;
    }
    case "Identifier": {
      const bindingId = node.name;
      const lhs = yield* getIdentifierReference(lexicalEnv, bindingId, strict);
      const obj = yield* toObject(value);
      let v = yield* get(obj, property);
      if (initializer && isStaticJsUndefined(v)) {
        if (isAnonymousFunctionDefinition(initializer)) {
          v = yield* Q.val(NamedEvaluation(bindingId, initializer));
        } else {
          v = yield* Q.val(EvaluateNodeCommand(initializer));
        }
      }

      if (environment) {
        yield* initializeReferencedBinding(lhs, v);
      } else {
        yield* putValue(lhs, v);
      }
    }
  }
}

function* restBindingInitialization(
  node: RestElement,
  value: StaticJsValue,
  excludedNames: StaticJsPropertyKey[],
  environment: StaticJsEnvironmentRecord | null,
): EvaluationGenerator<void> {
  const { lexicalEnv, strict, realm } = EvaluationContext.current;

  if (node.argument.type !== "Identifier") {
    throw new StaticJsEngineError("Rest element argument must be an identifier");
  }
  const lhs = yield* getIdentifierReference(lexicalEnv, node.argument.name, strict);

  const restObject = realm.types.object();

  yield* copyDataProperties(restObject, value, excludedNames);

  if (environment) {
    yield* initializeReferencedBinding(lhs, restObject);
  } else {
    yield* putValue(lhs, restObject);
  }
}
