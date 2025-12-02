import {
  type Expression,
  type LVal,
  type ArrayPattern,
  type VoidPattern,
} from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";

import type { StaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import putValue from "../../runtime/algorithms/put-value.js";
import iteratorStepValue from "../../runtime/algorithms/iterator-step-value.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import initializeReferencedBinding from "./initialize-referenced-binding.js";
import bindingInitialization from "./binding-initialization.js";
import iteratorDestructuringAssignmentEvaluation from "./iterator-destructuring-assignment-evaluation.js";

// WHAT IS VOID PATTERN???
export type IteratorBindingInitializationNode = LVal | VoidPattern;

export default function* iteratorBindingInitialization(
  node: IteratorBindingInitializationNode | IteratorBindingInitializationNode[],
  iteratorRecord: StaticJsObjectLike,
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  if (Array.isArray(node)) {
    for (const element of node) {
      yield* iteratorBindingInitialization(
        element,
        iteratorRecord,
        environment,
        context,
      );
    }
    return;
  }

  let initializer: Expression | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  switch (node.type) {
    case "RestElement": {
      if (node.argument.type === "Identifier") {
        const lhs = yield* getIdentifierReference(
          context.lexicalEnv,
          node.argument.name,
          context.strict,
        );

        const A = context.realm.types.array();
        let n = 0;

        //  Only do this if not DONE, to be spec compliant.
        // Spec doesn't want us pumping empty iterators.
        const done = yield* iteratorDone(iteratorRecord, context);
        if (!done) {
          while (true) {
            const next = yield* iteratorStepValue(
              iteratorRecord,
              context.realm,
            );
            if (!next) {
              break;
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

        if (!environment) {
          yield* putValue(lhs, A, context.realm);
        } else {
          yield* initializeReferencedBinding(lhs, A);
        }
        return;
      } else {
        const A = context.realm.types.array();
        let n = 0;
        const done = yield* iteratorDone(iteratorRecord, context);
        if (!done) {
          while (true) {
            const next = yield* iteratorStepValue(
              iteratorRecord,
              context.realm,
            );
            if (!next) {
              break;
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

        yield* bindingInitialization(node.argument, A, environment, context);
        return;
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

function* iteratorDone(
  iterator: StaticJsObjectLike,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  return yield* toBoolean.js(
    yield* iterator.getEvaluator("done"),
    context.realm,
  );
}
