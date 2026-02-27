import type {
  ArrayPattern,
  LVal,
  ObjectPattern,
  Statement,
  VariableDeclaration,
} from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import StaticJsDeclarativeEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import getIdentifierReference from "../../../runtime/references/get-identifier-reference.js";

import putValue from "../../../runtime/algorithms/put-value.js";
import call from "../../../runtime/algorithms/call.js";
import loopContinues from "../../../runtime/algorithms/loop-continues.js";

import { isStaticJsObjectLike } from "../../../runtime/types/StaticJsObjectLike.js";

import boundNames from "../../instantiation/algorithms/bound-names.js";

import type { IteratorRecord } from "../../../runtime/iterators/IteratorRecord.js";
import iteratorClose from "../../../runtime/iterators/iterator-close.js";
import { iteratorComplete } from "../../../runtime/iterators/iterator-complete.js";
import iteratorValue from "../../../runtime/iterators/iterator-value.js";
import asyncIteratorClose from "../../../runtime/iterators/async-iterator-close.js";

import bindingInitialization from "../../bindings/binding-initialization.js";
import destructuringAssignmentEvaluation from "../../bindings/destructuring-assignment-evaluation.js";
import initializeReferencedBinding from "../../bindings/initialize-referenced-binding.js";

import { ThrowCompletion } from "../../completions/ThrowCompletion.js";
import type { NormalCompletion } from "../../completions/NormalCompletion.js";
import isAbruptCompletion from "../../completions/AbruptCompletion.js";
import updateEmpty from "../../completions/update-empty.js";
import completionValue from "../../completions/completion-value.js";
import rethrowCompletion from "../../completions/rethrow-completion.js";

import {
  EvaluateNodeCommand,
  EvaluateNodeForCompletion,
} from "../../commands/EvaluateNodeCommand.js";
import { AwaitCommand } from "../../commands/AwaitCommand.js";

import type EvaluationContext from "../../EvaluationContext.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import forDeclarationBindingInitialization from "./for-declaration-binding-initialization.js";
import forDeclarationBindingInstantiation from "./for-declaration-binding-instantiation.js";
import isDestructuring from "./is-destructuring.js";

export function* forInOfBodyEvaluation(
  lhs: VariableDeclaration | LVal,
  stmt: Statement,
  iteratorRecord: IteratorRecord,
  iterationKind: "enumerate" | "iterate",
  lhsKind: "assignment" | "varBinding" | "lexicalBinding",
  iteratorKind: "sync" | "async",
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const oldEnv = context.lexicalEnv;

  let V: NormalCompletion = realm.types.undefined;

  const destructuring = isDestructuring(lhs);
  let assignmentPattern: ObjectPattern | ArrayPattern | null = null;
  if (destructuring && lhsKind === "assignment") {
    assignmentPattern = lhs as ObjectPattern | ArrayPattern;
  }

  while (true) {
    let nextResult = yield* call(iteratorRecord.nextMethod, iteratorRecord.iterator, [], realm);

    if (iteratorKind === "async") {
      nextResult = yield* AwaitCommand(nextResult);
    }

    if (!isStaticJsObjectLike(nextResult)) {
      throw new ThrowCompletion(realm.types.error("TypeError", "Iterator result is not an object"));
    }

    const done = yield* iteratorComplete(nextResult, realm);
    if (done) {
      return V;
    }

    const nextValue = yield* iteratorValue(nextResult);

    let iterationContext: EvaluationContext = context;

    // try = status
    try {
      if (lhsKind === "assignment" || lhsKind === "varBinding") {
        if (destructuring) {
          if (lhsKind === "assignment") {
            yield* destructuringAssignmentEvaluation(assignmentPattern!, nextValue, context);
          } else {
            yield* bindingInitialization(lhs as LVal, nextValue, null, context);
          }
        } else {
          const lhsRef = yield* EvaluateNodeCommand(lhs, context, {
            forReference: "forInOfStatement.lhs",
          });
          // TODO:  Spec says if lhsKind is assignment and lhs target is WEB-COMPAT throw a ReferenceError, but
          // I have no idea what AssignmentType or WEB-COMPAT is.  Skipping for now.
          yield* putValue(lhsRef, nextValue, realm);
        }
      } else {
        if (lhs.type !== "VariableDeclaration") {
          throw new StaticJsEngineError(
            `Expected VariableDeclaration for lexicalBinding, got ${lhs.type}`,
          );
        }

        const iterationEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, context.realm);
        yield* forDeclarationBindingInstantiation(lhs, iterationEnv);

        iterationContext = iterationContext.createLexicalEnvContext(iterationEnv);

        if (destructuring) {
          yield* forDeclarationBindingInitialization(
            lhs,
            nextValue,
            iterationEnv,
            iterationContext,
          );
        } else {
          const lhsName = boundNames.soleElementOf(lhs);
          const lhsRef = yield* getIdentifierReference(
            iterationContext.lexicalEnv,
            lhsName,
            iterationContext.strict,
          );
          yield* initializeReferencedBinding(lhsRef, nextValue);
        }
      }
    } catch (e) {
      // Check status is abrupt completion
      if (isAbruptCompletion(e)) {
        if (iterationKind === "enumerate") {
          throw e;
        } else if (iteratorKind === "async") {
          return yield* asyncIteratorClose(iteratorRecord, e, context.realm);
        } else {
          return yield* iteratorClose(iteratorRecord, e, context.realm);
        }
      }

      throw e;
    }

    const result = yield* EvaluateNodeForCompletion(stmt, iterationContext);
    // Note: oldEnv should be restored, so don't use iterationContext from here.

    if (!loopContinues(result, context)) {
      const status = updateEmpty.forCompletion(result, V);
      if (iterationKind === "enumerate") {
        return rethrowCompletion(status);
      } else {
        if (iteratorKind === "async") {
          return yield* asyncIteratorClose(iteratorRecord, status, context.realm);
        }

        return yield* iteratorClose(iteratorRecord, status, context.realm);
      }
    }

    const resultValue = completionValue(result);
    if (resultValue) {
      V = resultValue;
    }
  }
}
