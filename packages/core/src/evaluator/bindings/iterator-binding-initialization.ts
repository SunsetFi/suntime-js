import { type Expression, type LVal, type ArrayPattern, type VoidPattern } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import isAnonymousFunctionDefinition from "../../grammar/is-anonymous-function-definition.js";
import { arrayCreate } from "../../runtime/algorithms/array-create.js";
import { putValue } from "../../runtime/algorithms/put-value.js";
import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { iteratorStepValue } from "../../runtime/iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../runtime/iterators/StaticJsIteratorRecord.js";
import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import NamedEvaluation from "../node-evaluators/NamedEvaluation.js";

import bindingInitialization from "./binding-initialization.js";
import initializeReferencedBinding from "./initialize-referenced-binding.js";
import iteratorDestructuringAssignmentEvaluation from "./iterator-destructuring-assignment-evaluation.js";
import { resolveBinding } from "./resolve-binding.js";

// WHAT IS VOID PATTERN???
export type IteratorBindingInitializationNode = LVal | VoidPattern;

// Cannot do an expando object due to the Q.makeReceiver...
export interface IteratorBindingInitialization {
  (
    node: IteratorBindingInitializationNode | IteratorBindingInitializationNode[],
    iteratorRecord: StaticJsIteratorRecord,
    environment: StaticJsEnvironmentRecord | null,
  ): EvaluationGenerator<Completion>;
  arrayBindingPattern(
    node: ArrayPattern,
    iteratorRecord: StaticJsIteratorRecord,
    environment: StaticJsEnvironmentRecord | null,
  ): EvaluationGenerator<Completion>;
}

export const iteratorBindingInitialization: IteratorBindingInitialization = Q.makeReceiver(
  function* iteratorBindingInitialization(
    node: IteratorBindingInitializationNode | IteratorBindingInitializationNode[],
    iteratorRecord: StaticJsIteratorRecord,
    environment: StaticJsEnvironmentRecord | null,
  ): EvaluationGenerator<Completion> {
    if (Array.isArray(node)) {
      for (const element of node) {
        yield* iteratorBindingInitialization(element, iteratorRecord, environment);
      }
      return Completion.Normal(null);
    }

    const { realm, strict, lexicalEnv } = EvaluationContext.current;

    let initializer: Expression | null = null;
    if (node.type === "AssignmentPattern") {
      initializer = node.right;
      node = node.left;
    }

    switch (node.type) {
      case "RestElement": {
        if (node.argument.type === "Identifier") {
          const lhs = yield* getIdentifierReference(lexicalEnv, node.argument.name, strict);

          const A = yield* arrayCreate(0);
          let n = 0;

          while (true) {
            let next: StaticJsValue | null = null;
            if (!iteratorRecord.done) {
              next = yield* iteratorStepValue(iteratorRecord);
            }
            if (!next) {
              if (!environment) {
                yield* Q(putValue(lhs, A));
              } else {
                yield* Q(initializeReferencedBinding(lhs, A));
              }
              return Completion.Normal(null);
            }

            yield* A.defineOwnPropertyEvaluator(n.toString(), {
              value: next,
              writable: true,
              enumerable: true,
              configurable: true,
            });
            n++;
          }
        } else {
          const A = yield* arrayCreate(0);

          let n = 0;
          while (true) {
            let next: StaticJsValue | null = null;
            if (!iteratorRecord.done) {
              next = yield* iteratorStepValue(iteratorRecord);
            }
            if (!next) {
              break;
            }

            yield* A.defineOwnPropertyEvaluator(n.toString(), {
              value: next,
              writable: true,
              enumerable: true,
              configurable: true,
            });
            n++;
          }

          yield* bindingInitialization(node.argument, A, environment);
          return Completion.Normal(null);
        }
      }
      case "Identifier": {
        const bindingId = node.name;
        const lhs = yield* resolveBinding(bindingId, lexicalEnv);

        let v: StaticJsValue = realm.types.undefined;

        if (!iteratorRecord.done) {
          const next = yield* iteratorStepValue(iteratorRecord);
          if (next) {
            v = next;
          }
        }

        if (initializer && isStaticJsUndefined(v)) {
          if (isAnonymousFunctionDefinition(initializer)) {
            v = yield* Q.val(NamedEvaluation(bindingId, initializer));
          } else {
            v = yield* Q.val(EvaluateNodeCommand(initializer));
          }
        }

        if (!environment) {
          yield* putValue(lhs, v);
          return Completion.Normal(null);
        }

        yield* initializeReferencedBinding(lhs, v);
        return Completion.Normal(null);
      }
      case "ArrayPattern":
      case "ObjectPattern": {
        let v: StaticJsValue = realm.types.undefined;
        if (!iteratorRecord.done) {
          const next = yield* iteratorStepValue(iteratorRecord);
          if (next) {
            v = next;
          }
        }

        if (initializer && isStaticJsUndefined(v)) {
          const defaultValue = yield* Q.val(EvaluateNodeCommand(initializer));
          v = defaultValue;
        }

        yield* bindingInitialization(node, v, environment);
        return Completion.Normal(null);
      }
    }

    return Completion.Normal(null);
  },
) as any;

iteratorBindingInitialization.arrayBindingPattern = Q.makeReceiver(function* (
  node: ArrayPattern,
  iteratorRecord: StaticJsIteratorRecord,
  environment: StaticJsEnvironmentRecord | null,
): EvaluationGenerator<Completion> {
  // TODO: Spec shows no acknowledgement of initializer here, verify correctness
  let lastCompletion: Completion = null;
  for (const element of node.elements) {
    if (element?.type === "RestElement") {
      lastCompletion = yield* Q(
        iteratorBindingInitialization(element, iteratorRecord, environment),
      );
      continue;
    }

    if (element === null) {
      lastCompletion = yield* Q(iteratorDestructuringAssignmentEvaluation(element, iteratorRecord));
    } else if (element.type === "VoidPattern") {
      // What on earth is this?
      throw new StaticJsEngineError(`Unsupported void pattern in iterator binding initialization`);
    } else {
      lastCompletion = yield* Q(
        iteratorBindingInitialization(element, iteratorRecord, environment),
      );
    }
  }

  return lastCompletion;
});
