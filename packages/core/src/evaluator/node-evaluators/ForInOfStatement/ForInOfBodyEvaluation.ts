import type {
  ArrayPattern,
  LVal,
  ObjectPattern,
  Statement,
  VariableDeclaration,
} from "@babel/types";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";

import { StaticJsDeclarativeEnvironmentRecord } from "../../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import getIdentifierReference from "../../../runtime/references/get-identifier-reference.js";

import putValue from "../../../runtime/algorithms/put-value.js";
import call from "../../../runtime/algorithms/call.js";
import loopContinues from "../../../runtime/algorithms/loop-continues.js";

import { isStaticJsObjectLike } from "../../../runtime/types/StaticJsObjectLike.js";

import boundNames from "../../instantiation/algorithms/bound-names.js";

import type { StaticJsIteratorRecord } from "../../../runtime/iterators/StaticJsIteratorRecord.js";
import { iteratorClose } from "../../../runtime/iterators/iterator-close.js";
import { iteratorComplete } from "../../../runtime/iterators/iterator-complete.js";
import { iteratorValue } from "../../../runtime/iterators/iterator-value.js";
import { asyncIteratorClose } from "../../../runtime/iterators/async-iterator-close.js";

import bindingInitialization from "../../bindings/binding-initialization.js";
import destructuringAssignmentEvaluation from "../../bindings/destructuring-assignment-evaluation.js";
import initializeReferencedBinding from "../../bindings/initialize-referenced-binding.js";

import { Completion } from "../../completions/Completion.js";
import { rethrowCompletion } from "../../completions/rethrow-completion.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { AwaitCommand } from "../../commands/AwaitCommand.js";
import { Q } from "../../completions/Q.js";

import { EvaluationContext } from "../../EvaluationContext.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import forDeclarationBindingInitialization from "./for-declaration-binding-initialization.js";
import forDeclarationBindingInstantiation from "./for-declaration-binding-instantiation.js";
import isDestructuring from "./is-destructuring.js";

export function* forInOfBodyEvaluation(
  lhs: VariableDeclaration | LVal,
  stmt: Statement,
  iteratorRecord: StaticJsIteratorRecord,
  iterationKind: "enumerate" | "iterate",
  lhsKind: "assignment" | "varBinding" | "lexicalBinding",
  iteratorKind: "sync" | "async",
): EvaluationGenerator {
  const context = EvaluationContext.current;
  const { realm, labelSet, lexicalEnv: oldEnv, strict } = context;

  let V: Completion.Normal = realm.types.undefined;

  const destructuring = isDestructuring(lhs);
  let assignmentPattern: ObjectPattern | ArrayPattern | null = null;
  if (destructuring && lhsKind === "assignment") {
    assignmentPattern = lhs as ObjectPattern | ArrayPattern;
  }

  while (true) {
    let nextResult = yield* call(iteratorRecord.nextMethod, iteratorRecord.iterator, []);

    if (iteratorKind === "async") {
      nextResult = yield* AwaitCommand(nextResult);
    }

    if (!isStaticJsObjectLike(nextResult)) {
      throw Completion.Throw("TypeError", "Iterator result is not an object");
    }

    const done = yield* iteratorComplete(nextResult);
    if (done) {
      return V;
    }

    const nextValue = yield* iteratorValue(nextResult);

    // try = status
    let result: Completion;
    try {
      try {
        if (lhsKind === "assignment" || lhsKind === "varBinding") {
          if (destructuring) {
            if (lhsKind === "assignment") {
              yield* destructuringAssignmentEvaluation(assignmentPattern!, nextValue);
            } else {
              yield* bindingInitialization(lhs as LVal, nextValue, null);
            }
          } else {
            const lhsRef = yield* Q.ref(EvaluateNodeCommand(lhs));
            // TODO:  Spec says if lhsKind is assignment and lhs target is WEB-COMPAT throw a ReferenceError, but
            // I have no idea what AssignmentType or WEB-COMPAT is.  Skipping for now.
            yield* putValue(lhsRef, nextValue);
          }
        } else {
          if (lhs.type !== "VariableDeclaration") {
            throw new StaticJsEngineError(
              `Expected VariableDeclaration for lexicalBinding, got ${lhs.type}`,
            );
          }

          const iterationEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, realm);
          yield* forDeclarationBindingInstantiation(lhs, iterationEnv);

          context.lexicalEnv = iterationEnv;

          if (destructuring) {
            yield* forDeclarationBindingInitialization(lhs, nextValue, iterationEnv);
          } else {
            const lhsName = boundNames.soleElementOf(lhs);
            const lhsRef = yield* getIdentifierReference(context.lexicalEnv, lhsName, strict);
            yield* initializeReferencedBinding(lhsRef, nextValue);
          }
        }

        if (context !== EvaluationContext.current) {
          throw new StaticJsEngineError(
            `Context mismatch in for-in/of body evaluation. Expected ${context}, got ${EvaluationContext.current}.`,
          );
        }

        // Note: Does not throw its completion, so will not trigger
        // the catch below.
        // This is messy.  Clean up this entire thing to use non-thrown
        // completions.
        result = yield* EvaluateNodeCommand(stmt);
      } finally {
        context.lexicalEnv = oldEnv;
      }
    } catch (e) {
      // Check status is abrupt completion
      if (Completion.Abrupt.is(e)) {
        if (iterationKind === "enumerate") {
          throw e;
        } else if (iteratorKind === "async") {
          return yield* Q(asyncIteratorClose(iteratorRecord, e));
        } else {
          return yield* Q(iteratorClose(iteratorRecord, e));
        }
      }

      throw e;
    }

    if (!loopContinues(result, labelSet)) {
      const status = Completion.updateEmpty(result, V);
      if (iterationKind === "enumerate") {
        return rethrowCompletion(status);
      } else {
        if (iteratorKind === "async") {
          return yield* Q(asyncIteratorClose(iteratorRecord, status));
        }

        return yield* Q(iteratorClose(iteratorRecord, status));
      }
    }

    const resultValue = Completion.value(result);
    if (resultValue) {
      V = resultValue;
    }
  }
}
