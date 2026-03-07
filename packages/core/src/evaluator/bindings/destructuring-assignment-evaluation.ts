import {
  type Node,
  type ObjectProperty,
  type RestElement,
  type Expression,
  isObjectProperty,
} from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";

import type { StaticJsPropertyKey } from "../../runtime/types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import { isStaticJsNull } from "../../runtime/types/StaticJsNull.js";

import getIterator from "../../runtime/iterators/get-iterator.js";
import iteratorClose from "../../runtime/iterators/iterator-close.js";

import toObject from "../../runtime/algorithms/to-object.js";
import putValue from "../../runtime/algorithms/put-value.js";
import copyDataProperties from "../../runtime/algorithms/copy-data-properties.js";

import toPropertyKey from "../../runtime/utils/to-property-key.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import iteratorDestructuringAssignmentEvaluation from "./iterator-destructuring-assignment-evaluation.js";
import NamedEvaluation from "../node-evaluators/NamedEvaluation.js";
import isAnonymousFunctionDefinition from "../../grammar/is-anonymous-function-definition.js";

export default function* destructuringAssignmentEvaluation(
  node: Node,
  value: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  switch (node.type) {
    case "ObjectPattern": {
      if (isStaticJsUndefined(value) || isStaticJsNull(value)) {
        throw Completion.Throw(
          context.realm.types.error("TypeError", "Cannot destructure undefined or null"),
        );
      }
      const properties = node.properties.filter((p) => isObjectProperty(p));
      const excludedNames: StaticJsPropertyKey[] = [];
      for (const property of properties) {
        const result = yield* propertyDestructuringAssignmentEvaluation(property, value, context);
        excludedNames.push(...result);
      }

      const rest = node.properties.find((p) => p.type === "RestElement");
      if (rest) {
        yield* restDestructuringAssignmentEvaluation(rest, value, excludedNames, context);
      }

      return;
    }
    case "ArrayPattern": {
      const iteratorRecord = yield* getIterator(value, "sync", context.realm);
      yield* iteratorDestructuringAssignmentEvaluation(node.elements, iteratorRecord, context);
      if (!iteratorRecord.done) {
        yield* iteratorClose(iteratorRecord, null, context.realm);
      }
      return;
    }
  }
}

function* propertyDestructuringAssignmentEvaluation(
  node: ObjectProperty,
  value: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator<StaticJsPropertyKey[]> {
  const { strict, realm } = context;
  if (node.shorthand) {
    if (node.key.type !== "Identifier") {
      throw new StaticJsEngineError(
        `Unsupported shorthand object property key type: ${node.key.type}`,
      );
    }

    let initializer: Expression | null = null;
    if (node.value.type === "AssignmentPattern") {
      initializer = node.value.right;
    }

    const P = node.key.name;
    const lRef = yield* getIdentifierReference(context.lexicalEnv, P, strict);

    const obj = yield* toObject(value, realm);
    let v = yield* obj.getEvaluator(P);
    if (initializer && isStaticJsUndefined(v)) {
      if (isAnonymousFunctionDefinition(initializer)) {
        v = yield* Q.val(
          // ?? This can be a StaticJsValue?
          NamedEvaluation(
            typeof lRef.referencedName === "string" ? lRef.referencedName : null,
            initializer,
            context,
          ),
          realm,
        );
      } else {
        v = yield* Q.val(EvaluateNodeCommand(initializer, context), realm);
      }
    }

    yield* putValue(lRef, v, realm);
    return [P];
  }

  let name: StaticJsValue;
  if (node.key.type === "Identifier" && !node.computed) {
    name = context.realm.types.string(node.key.name);
  } else {
    name = yield* Q.val(EvaluateNodeCommand(node.key, context), realm);
  }
  // Spec doesn't do this...  But it seems to get a property key anyway
  // Probably due to the limitd options PropertyName / node.key can be
  const P = yield* toPropertyKey(name, realm);
  yield* keyedDestructuringAssignmentEvaluation(node.value, value, P, context);
  return [P];
}

function* restDestructuringAssignmentEvaluation(
  node: RestElement,
  value: StaticJsValue,
  excludedNames: StaticJsPropertyKey[],
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const lRef = yield* Q.ref(EvaluateNodeCommand(node.argument, context));

  const restObject = context.realm.types.object();

  yield* copyDataProperties(restObject, value, excludedNames, context.realm);

  yield* putValue(lRef, restObject, context.realm);
}

function* keyedDestructuringAssignmentEvaluation(
  node: Node,
  value: StaticJsValue,
  property: StaticJsPropertyKey,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const { realm } = context;

  let initializer: Expression | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  let lRef: StaticJsReferenceRecord | null = null;
  if (node.type !== "ObjectPattern" && node.type !== "ArrayPattern") {
    lRef = yield* Q.ref(EvaluateNodeCommand(node, context));
  }

  const obj = yield* toObject(value, realm);
  let v = yield* obj.getEvaluator(property);
  if (initializer && isStaticJsUndefined(v)) {
    if (isAnonymousFunctionDefinition(initializer) && node.type === "Identifier") {
      v = yield* Q.val(NamedEvaluation(node.name, initializer, context), realm);
    } else {
      v = yield* Q.val(EvaluateNodeCommand(initializer, context), realm);
    }
  }

  if (lRef) {
    yield* putValue(lRef, v, realm);
  } else {
    yield* destructuringAssignmentEvaluation(node, v, context);
  }
}
