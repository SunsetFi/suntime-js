import type {
  ArrayPattern,
  LVal,
  ObjectPattern,
  Statement,
  VariableDeclaration,
} from "@babel/types";

import type { StaticJsIteratorRecord } from "#iterators/StaticJsIteratorRecord.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { Await } from "#algorithms/await.js";
import { call } from "#algorithms/call.js";
import { loopContinues } from "#algorithms/loop-continues.js";
import { putValue } from "#algorithms/put-value.js";
import { StaticJsDeclarativeEnvironmentRecord } from "#environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { asyncIteratorClose } from "#iterators/async-iterator-close.js";
import { iteratorClose } from "#iterators/iterator-close.js";
import { iteratorComplete } from "#iterators/iterator-complete.js";
import { iteratorValue } from "#iterators/iterator-value.js";
import getIdentifierReference from "#references/get-identifier-reference.js";
import {
  isStaticJsReferenceRecord,
  type StaticJsReferenceRecord,
} from "#references/StaticJsReferenceRecord.js";
import { isStaticJsObject } from "#types/StaticJsObject.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import bindingInitialization from "../../bindings/binding-initialization.js";
import destructuringAssignmentEvaluation from "../../bindings/destructuring-assignment-evaluation.js";
import initializeReferencedBinding from "../../bindings/initialize-referenced-binding.js";
import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { captureThrownCompletion } from "../../completions/capture-thrown-completion.js";
import { Completion } from "../../completions/Completion.js";
import { Q } from "../../completions/Q.js";
import { X } from "../../completions/X.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import boundNames from "../../instantiation/algorithms/bound-names.js";
import forDeclarationBindingInitialization from "./for-declaration-binding-initialization.js";
import forDeclarationBindingInstantiation from "./for-declaration-binding-instantiation.js";
import isDestructuring from "./is-destructuring.js";

export const forInOfBodyEvaluation = Q.makeReceiver(function* forInOfBodyEvaluation(
  lhs: VariableDeclaration | LVal,
  stmt: Statement,
  iteratorRecord: StaticJsIteratorRecord,
  iterationKind: "enumerate" | "iterate",
  lhsKind: "assignment" | "varBinding" | "lexicalBinding",
  iteratorKind: "sync" | "async",
): EvaluationGenerator<Completion> {
  const { lexicalEnv: oldEnv, labelSet, realm } = EvaluationContext.current;

  let V: StaticJsValue | StaticJsReferenceRecord = realm.types.undefined;

  const destructuring = isDestructuring(lhs);

  let assignmentPattern: ObjectPattern | ArrayPattern | null = null;
  if (destructuring && lhsKind === "assignment") {
    assignmentPattern = lhs as ObjectPattern | ArrayPattern;
  }

  while (true) {
    let nextResult = yield* Q(call(iteratorRecord.nextMethod, iteratorRecord.iterator));

    if (iteratorKind === "async") {
      nextResult = yield* Q(Await(nextResult));
    }

    if (!isStaticJsObject(nextResult)) {
      throw yield* Completion.Throw.create("TypeError", "Iterator result is not an object");
    }

    const done = yield* Q(iteratorComplete(nextResult));
    if (done) {
      return V;
    }

    const nextValue = yield* Q(iteratorValue(nextResult));

    let status: void | Completion;
    if (lhsKind === "assignment" || lhsKind === "varBinding") {
      if (destructuring) {
        if (lhsKind === "assignment") {
          status = yield* captureThrownCompletion(
            destructuringAssignmentEvaluation(assignmentPattern!, nextValue),
          );
        } else {
          status = yield* captureThrownCompletion(
            bindingInitialization(lhs as LVal, nextValue, null),
          );
        }
      } else {
        const lhsRef = yield* EvaluateNodeCommand(lhs);
        if (Completion.Abrupt.is(lhsRef)) {
          status = lhsRef;
        } else {
          if (!isStaticJsReferenceRecord(lhsRef)) {
            throw new StaticJsEngineError(
              `Expected reference record from evaluating LHS of for-in/of statement, got ${lhsRef}`,
            );
          }
          status = yield* captureThrownCompletion(putValue(lhsRef, nextValue));
        }
      }
    } else {
      if (lhs.type !== "VariableDeclaration") {
        throw new StaticJsEngineError(
          `Expected VariableDeclaration for lexicalBinding, got ${lhs.type}`,
        );
      }

      const iterationEnv = StaticJsDeclarativeEnvironmentRecord.create({
        outerEnv: oldEnv,
        realm: realm,
      });
      yield* forDeclarationBindingInstantiation(lhs, iterationEnv);

      EvaluationContext.current.lexicalEnv = iterationEnv;

      if (destructuring) {
        status = yield* captureThrownCompletion(
          forDeclarationBindingInitialization(lhs, nextValue, iterationEnv),
        );
      } else {
        const lhsName = boundNames.soleElementOf(lhs);
        const lhsRef = yield* X(getIdentifierReference(iterationEnv, lhsName, true));
        status = yield* captureThrownCompletion(initializeReferencedBinding(lhsRef, nextValue));
      }
    }

    if (Completion.Abrupt.is(status)) {
      EvaluationContext.current.lexicalEnv = oldEnv;
      if (iterationKind === "enumerate") {
        return status;
      }

      if (iteratorKind === "async") {
        return yield* Q(asyncIteratorClose(iteratorRecord, status));
      }

      return yield* Q(iteratorClose(iteratorRecord, status));
    }

    const result = yield* EvaluateNodeCommand(stmt);
    EvaluationContext.current.lexicalEnv = oldEnv;

    if (!loopContinues(result, labelSet)) {
      status = Completion.updateEmpty(result, V);
      if (iterationKind === "enumerate") {
        return status;
      }

      if (iteratorKind === "async") {
        return yield* Q(asyncIteratorClose(iteratorRecord, status));
      }

      return yield* Q(iteratorClose(iteratorRecord, status));
    }

    const resultValue = Completion.value(result);
    if (resultValue) {
      V = resultValue;
    }
  }
});
