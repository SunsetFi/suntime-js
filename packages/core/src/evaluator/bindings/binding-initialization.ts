import {
  type Expression,
  type LVal,
  type Node,
  type ObjectProperty,
  type RestElement,
  isRestElement,
  isObjectProperty,
} from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { StaticJsObjectPropertyKey } from "../../runtime/types/StaticJsObjectLike.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";

import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";

import toPropertyKey from "../../runtime/utils/to-property-key.js";

import putValue from "../../runtime/algorithms/put-value.js";
import toObject from "../../runtime/algorithms/to-object.js";
import getIterator from "../../runtime/iterators/get-iterator.js";
import copyDataProperties from "../../runtime/algorithms/copy-data-properties.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
import iteratorClose from "../../runtime/iterators/iterator-close.js";
import initializeReferencedBinding from "./initialize-referenced-binding.js";
import initializeBoundName from "./initialize-bound-name.js";
import iteratorBindingInitialization from "./iterator-binding-initialization.js";

export default function* bindingInitialization(
  node: LVal,
  value: StaticJsValue,
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  switch (node.type) {
    case "Identifier": {
      const name = node.name;
      yield* initializeBoundName(name, value, environment, context);
      return;
    }
    case "ObjectPattern": {
      const obj = yield* toObject(value, context.realm);

      const properties = node.properties.filter((p) => isObjectProperty(p));
      const excludedNames = yield* propertyBindingInitialization(
        properties,
        obj,
        environment,
        context,
      );

      const rest = node.properties.find((p) => isRestElement(p));
      if (rest) {
        yield* restBindingInitialization(
          rest,
          obj,
          excludedNames,
          environment,
          context,
        );
      }

      return;
    }
    case "ArrayPattern": {
      const iteratorRecord = yield* getIterator(value, "sync", context.realm);
      yield* iteratorBindingInitialization.arrayBindingPattern(
        node,
        iteratorRecord,
        environment,
        context,
      );
      if (!iteratorRecord.done) {
        yield* iteratorClose(iteratorRecord, null, context.realm);
      }
      return;
    }
  }
}

function* propertyBindingInitialization(
  node: ObjectProperty[] | ObjectProperty,
  value: StaticJsValue,
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
): EvaluationGenerator<StaticJsObjectPropertyKey[]> {
  if (Array.isArray(node)) {
    const excludedNames: StaticJsObjectPropertyKey[] = [];
    for (const property of node) {
      const result = yield* propertyBindingInitialization(
        property,
        value,
        environment,
        context,
      );
      excludedNames.push(...result);
    }
    return excludedNames;
  }

  let key: StaticJsObjectPropertyKey;
  if (node.computed) {
    const p = yield* EvaluateNodeCommand(node.key, context, {
      forNormalValue: "propertyBindingInitialization.key",
    });
    key = yield* toPropertyKey(p, context.realm);
  } else if (node.key.type === "Identifier") {
    key = node.key.name;
  } else {
    throw new StaticJsEngineError(
      `Unsupported object property key type: ${node.key.type}`,
    );
  }

  yield* keyedBindingInitialization(
    node.value,
    value,
    key,
    environment,
    context,
  );

  return [key];
}

function* keyedBindingInitialization(
  node: Node,
  value: StaticJsValue,
  property: StaticJsObjectPropertyKey,
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  let initializer: Expression | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  switch (node.type) {
    case "ObjectPattern":
    case "ArrayPattern": {
      const obj = yield* toObject(value, context.realm);
      let v = yield* obj.getEvaluator(property);
      if (initializer && isStaticJsUndefined(v)) {
        const defaultValue = yield* EvaluateNodeCommand(initializer, context, {
          forNormalValue: "keyedBindingInitialization.initializer",
        });
        v = defaultValue;
      }
      yield* bindingInitialization(node, v, environment, context);
      return;
    }
    case "Identifier": {
      const bindingId = node.name;
      const lhs = yield* getIdentifierReference(
        context.lexicalEnv,
        bindingId,
        context.strict,
      );
      const obj = yield* toObject(value, context.realm);
      let v = yield* obj.getEvaluator(property);
      if (initializer && isStaticJsUndefined(v)) {
        const defaultValue = yield* EvaluateNodeCommand(initializer, context, {
          forNormalValue: "keyedBindingInitialization.initializer",
        });
        v = defaultValue;
      }

      if (environment) {
        yield* initializeReferencedBinding(lhs, v);
      } else {
        yield* putValue(lhs, v, context.realm);
      }
    }
  }
}

function* restBindingInitialization(
  node: RestElement,
  value: StaticJsValue,
  excludedNames: StaticJsObjectPropertyKey[],
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  if (node.argument.type !== "Identifier") {
    throw new StaticJsEngineError(
      "Rest element argument must be an identifier",
    );
  }
  const lhs = yield* getIdentifierReference(
    context.lexicalEnv,
    node.argument.name,
    context.strict,
  );

  const restObject = context.realm.types.object();

  yield* copyDataProperties(restObject, value, excludedNames, context.realm);

  if (environment) {
    yield* initializeReferencedBinding(lhs, restObject);
  } else {
    yield* putValue(lhs, restObject, context.realm);
  }
}
