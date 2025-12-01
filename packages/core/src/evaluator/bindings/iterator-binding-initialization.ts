import {
  type ObjectProperty,
  type Expression,
  type LVal,
  type Node,
  type PatternLike,
  type RestElement,
  type ArrayPattern,
  isObjectProperty,
} from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toPropertyKey from "../../runtime/utils/to-property-key.js";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";

import type {
  StaticJsObjectLike,
  StaticJsObjectPropertyKey,
} from "../../runtime/types/StaticJsObjectLike.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsNull } from "../../runtime/types/StaticJsNull.js";

import putValue from "../../runtime/algorithms/put-value.js";
import iteratorStepValue from "../../runtime/algorithms/iterator-step-value.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";
import toObject from "../../runtime/algorithms/to-object.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import initializeReferencedBinding from "./initialize-referenced-binding.js";
import bindingInitialization from "./binding-initialization.js";

export default function* iteratorBindingInitialization(
  node: LVal,
  iteratorRecord: StaticJsObjectLike,
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  let initializer: Expression | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  switch (node.type) {
    case "RestElement": {
      if (node.argument.type !== "Identifier") {
        throw new StaticJsEngineError(
          "Iterator binding initialization rest element argument must be an identifier",
        );
      }
      const lhs = yield* getIdentifierReference(
        context.lexicalEnv,
        node.argument.name,
        context.strict,
      );

      const A = context.realm.types.array();
      let n = 0;
      while (true) {
        const next = yield* iteratorStepValue(iteratorRecord, context.realm);
        if (!next) {
          if (!environment) {
            yield* putValue(lhs, A, context.realm);
          } else {
            yield* initializeReferencedBinding(lhs, A);
          }
          return;
        }

        yield* A.definePropertyEvaluator(n.toString(), {
          value: next,
          writable: true,
          enumerable: true,
          configurable: true,
        });
        n++;
      }
    }
    case "Identifier": {
      const bindingId = node.name;
      const lhs = yield* getIdentifierReference(
        context.lexicalEnv,
        bindingId,
        context.strict,
      );
      let v: StaticJsValue = context.realm.types.undefined;
      const done = yield* iteratorDone(iteratorRecord, context);
      if (!done) {
        const next = yield* iteratorStepValue(iteratorRecord, context.realm);
        if (next) {
          v = next;
        }
      }
      if (initializer && isStaticJsUndefined(v)) {
        const defaultValue = yield* EvaluateNodeCommand(initializer, context, {
          forNormalValue: "iteratorBindingInitialization.initializer",
        });
        v = defaultValue;
      }

      if (environment) {
        yield* initializeReferencedBinding(lhs, v);
      } else {
        yield* putValue(lhs, v, context.realm);
      }

      return;
    }
    case "ArrayPattern":
    case "ObjectPattern": {
      let v: StaticJsValue = context.realm.types.undefined;
      const done = yield* iteratorDone(iteratorRecord, context);
      if (!done) {
        const next = yield* iteratorStepValue(iteratorRecord, context.realm);
        if (next) {
          v = next;
        }
      }

      if (initializer && isStaticJsUndefined(v)) {
        const defaultValue = yield* EvaluateNodeCommand(initializer, context, {
          forNormalValue: "iteratorBindingInitialization.initializer",
        });
        v = defaultValue;
      }

      yield* bindingInitialization(node, v, environment, context);
      return;
    }
  }
}

// This grossness is required because BindingInitialization
// wants to pass an ArrayBindingPattern specifically, and that is NOT
// the same as a BindingPattern : ArrayBindingPattern when handled above,
// which pulls out one item and handles it.
// This is all an artifact of babel's syntax tree not matching up
// to the spec's grammar productions.
iteratorBindingInitialization.arrayBindingPattern = function* (
  node: ArrayPattern,
  iteratorRecord: StaticJsObjectLike,
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
) {
  // TODO: Spec shows no acknowledgement of initializer here, verify correctness
  for (const element of node.elements) {
    if (element?.type === "RestElement") {
      yield* iteratorBindingInitialization(
        element,
        iteratorRecord,
        environment,
        context,
      );

      return;
    }

    if (element === null) {
      yield* iteratorDestructuringAssignmentEvaluation(
        element,
        iteratorRecord,
        context,
      );
    } else if (element.type === "VoidPattern") {
      // What on earth is this?
      throw new StaticJsEngineError(
        `Unsupported void pattern in iterator binding initialization`,
      );
    } else {
      yield* iteratorBindingInitialization(
        element,
        iteratorRecord,
        environment,
        context,
      );
    }
  }
};

function* iteratorDestructuringAssignmentEvaluation(
  node: PatternLike | null,
  iteratorRecord: StaticJsObjectLike,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  if (Array.isArray(node)) {
    for (const element of node) {
      yield* iteratorDestructuringAssignmentEvaluation(
        element,
        iteratorRecord,
        context,
      );
    }

    return;
  }

  if (node === null) {
    const done = yield* iteratorDone(iteratorRecord, context);
    if (!done) {
      yield* iteratorStepValue(iteratorRecord, context.realm);
    }
    return;
  }

  let initializer: Node | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  let lRef: StaticJsReferenceRecord | null = null;
  if (node.type !== "ObjectPattern" && node.type !== "ArrayPattern") {
    lRef = yield* EvaluateNodeCommand(node, context, {
      forReference: "iteratorDestructuringAssignmentEvaluation.lRef",
    });
  }

  let value: StaticJsValue = context.realm.types.undefined;
  const done = yield* iteratorDone(iteratorRecord, context);
  if (!done) {
    const next = yield* iteratorStepValue(iteratorRecord, context.realm);
    if (next) {
      value = next;
    }
  }

  if (initializer && !isStaticJsUndefined(value)) {
    const defaultValue = yield* EvaluateNodeCommand(initializer, context, {
      forNormalValue: "iteratorDestructuringAssignmentEvaluation.initializer",
    });
    value = defaultValue;
  }

  if (lRef) {
    yield* putValue(lRef, value, context.realm);
  } else {
    // TODO:
    yield* destructuringAssignmentEvaluation(node, value, context);
  }
}

function* destructuringAssignmentEvaluation(
  node: Node,
  value: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  switch (node.type) {
    case "ObjectPattern": {
      if (isStaticJsUndefined(value) || isStaticJsNull(value)) {
        throw new ThrowCompletion(
          context.realm.types.error(
            "TypeError",
            "Cannot destructure undefined or null",
          ),
        );
      }
      const properties = node.properties.filter((p) => isObjectProperty(p));
      const excludedNames: StaticJsObjectPropertyKey[] = [];
      for (const property of properties) {
        const result = yield* propertyDestructuringAssignmentEvaluation(
          property,
          value,
          context,
        );
        excludedNames.push(...result);
      }

      const rest = node.properties.find((p) => p.type === "RestElement");
      if (rest) {
        yield* restDestructuringAssignmentEvaluation(
          rest,
          value,
          excludedNames,
          context,
        );
      }

      return;
    }
  }
}

function* propertyDestructuringAssignmentEvaluation(
  node: ObjectProperty,
  value: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator<StaticJsObjectPropertyKey[]> {
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
    const lRef = yield* getIdentifierReference(
      context.lexicalEnv,
      P,
      context.strict,
    );

    const obj = yield* toObject(value, context.realm);
    let v = yield* obj.getPropertyEvaluator(P);
    if (initializer && isStaticJsUndefined(v)) {
      const defaultValue = yield* EvaluateNodeCommand(initializer, context, {
        forNormalValue: "propertyDestructuringAssignmentEvaluation.initializer",
      });
      v = defaultValue;
    }

    yield* putValue(lRef, v, context.realm);
    return [P];
  }

  const name = yield* EvaluateNodeCommand(node.key, context, {
    forNormalValue: "propertyDestructuringAssignmentEvaluation.name",
  });
  const P = yield* toPropertyKey(name, context.realm);
  yield* keyedDestructuringAssignmentEvaluation(node.value, value, P, context);
  return [P];
}

function* restDestructuringAssignmentEvaluation(
  node: RestElement,
  value: StaticJsValue,
  excludedNames: StaticJsObjectPropertyKey[],
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const lRef = yield* EvaluateNodeCommand(node.argument, context, {
    forReference: "restDestructuringAssignmentEvaluation.lRef",
  });

  const restObject = context.realm.types.object();

  const from = yield* toObject(value, context.realm);
  const keys = yield* from.getOwnKeysEvaluator();
  for (const key of keys) {
    if (excludedNames.includes(key)) {
      continue;
    }

    const desc = yield* from.getOwnPropertyDescriptorEvaluator(key);
    if (!desc || !desc.enumerable) {
      continue;
    }

    const value = yield* from.getPropertyEvaluator(key);
    yield* restObject.definePropertyEvaluator(key, {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }

  yield* putValue(lRef, restObject, context.realm);
}

function* keyedDestructuringAssignmentEvaluation(
  node: Node,
  value: StaticJsValue,
  property: StaticJsObjectPropertyKey,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  let initializer: Expression | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  let lRef: StaticJsReferenceRecord | null = null;
  if (node.type !== "ObjectPattern" && node.type !== "ArrayPattern") {
    lRef = yield* EvaluateNodeCommand(node, context, {
      forReference: "keyedDestructuringAssignmentEvaluation.lRef",
    });
  }

  const obj = yield* toObject(value, context.realm);
  let v = yield* obj.getPropertyEvaluator(property);
  if (initializer && isStaticJsUndefined(v)) {
    const defaultValue = yield* EvaluateNodeCommand(initializer, context, {
      forNormalValue: "keyedDestructuringAssignmentEvaluation.initializer",
    });
    v = defaultValue;
  }

  if (lRef) {
    yield* putValue(lRef, v, context.realm);
  } else {
    yield* destructuringAssignmentEvaluation(node, v, context);
  }
}

function* iteratorDone(
  iterator: StaticJsObjectLike,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  return yield* toBoolean.js(
    yield* iterator.getPropertyEvaluator("done"),
    context.realm,
  );
}
