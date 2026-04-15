import { type Expression, type LVal, type ArrayPattern, type VoidPattern } from "@babel/types";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import type { StaticJsIteratorRecord } from "../../runtime/iterators/StaticJsIteratorRecord.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import isAnonymousFunctionDefinition from "../../grammar/is-anonymous-function-definition.js";
import { arrayCreate } from "../../runtime/algorithms/array-create.js";
import { putValue } from "../../runtime/algorithms/put-value.js";
import { iteratorStepValue } from "../../runtime/iterators/iterator-step-value.js";
import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import NamedEvaluation from "../node-evaluators/NamedEvaluation.js";
import bindingInitialization from "./binding-initialization.js";
import initializeReferencedBinding from "./initialize-referenced-binding.js";
import iteratorDestructuringAssignmentEvaluation from "./iterator-destructuring-assignment-evaluation.js";

// WHAT IS VOID PATTERN???
export type IteratorBindingInitializationNode = LVal | VoidPattern;

export default function* iteratorBindingInitialization(
  node: IteratorBindingInitializationNode | IteratorBindingInitializationNode[],
  iteratorRecord: StaticJsIteratorRecord,
  environment: StaticJsEnvironmentRecord | null,
): EvaluationGenerator<void> {
  if (Array.isArray(node)) {
    for (const element of node) {
      yield* iteratorBindingInitialization(element, iteratorRecord, environment);
    }
    return;
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

        if (!environment) {
          yield* putValue(lhs, A);
        } else {
          yield* initializeReferencedBinding(lhs, A);
        }
        return;
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
        return;
      }
    }
    case "Identifier": {
      const bindingId = node.name;
      const lhs = yield* getIdentifierReference(lexicalEnv, bindingId, strict);

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

      if (environment) {
        yield* initializeReferencedBinding(lhs, v);
      } else {
        yield* putValue(lhs, v);
      }

      return;
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
  iteratorRecord: StaticJsIteratorRecord,
  environment: StaticJsEnvironmentRecord | null,
) {
  // TODO: Spec shows no acknowledgement of initializer here, verify correctness
  for (const element of node.elements) {
    if (element?.type === "RestElement") {
      yield* iteratorBindingInitialization(element, iteratorRecord, environment);

      return;
    }

    if (element === null) {
      yield* iteratorDestructuringAssignmentEvaluation(element, iteratorRecord);
    } else if (element.type === "VoidPattern") {
      // What on earth is this?
      throw new StaticJsEngineError(`Unsupported void pattern in iterator binding initialization`);
    } else {
      yield* iteratorBindingInitialization(element, iteratorRecord, environment);
    }
  }
};
