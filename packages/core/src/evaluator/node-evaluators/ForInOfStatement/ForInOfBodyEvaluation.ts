import type {
  ArrayPattern,
  LVal,
  ObjectPattern,
  Statement,
  VariableDeclaration,
} from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import StaticJsDeclarativeEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { getIdentifierReference } from "../../../runtime/references/get-identifier-reference.js";

import putValue from "../../../runtime/algorithms/put-value.js";
import boundNames from "../../instantiation/algorithms/bound-names.js";

import type { IteratorRecord } from "../../../runtime/iterators/IteratorRecord.js";
import iteratorClose from "../../../runtime/iterators/iterator-close.js";

import bindingInitialization from "../../bindings/binding-initialization.js";
import destructuringAssignmentEvaluation from "../../bindings/destructuring-assignment-evaluation.js";
import initializeReferencedBinding from "../../bindings/initialize-referenced-binding.js";

import isAbruptCompletion from "../../completions/AbruptCompletion.js";
import type { NormalCompletion } from "../../completions/NormalCompletion.js";
import { ContinueCompletion } from "../../completions/ContinueCompletion.js";

import { BreakCompletion } from "../../completions/BreakCompletion.js";
import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../../EvaluationContext.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import forDeclarationBindingInitialization from "./for-declaration-binding-initialization.js";
import forDeclarationBindingInstantiation from "./for-declaration-binding-instantiation.js";
import isDestructuring from "./is-destructuring.js";
import call from "../../../runtime/algorithms/call.js";
import { AwaitCommand } from "../../commands/AwaitCommand.js";
import { isStaticJsObjectLike } from "../../../runtime/index.js";
import { ThrowCompletion } from "../../completions/ThrowCompletion.js";
import { iteratorComplete } from "../../../runtime/iterators/iterator-complete.js";
import iteratorValue from "../../../runtime/iterators/iterator-value.js";
import asyncIteratorClose from "../../../runtime/iterators/async-iterator-close.js";

export function* forInOfBodyEvaluation(
  lhs: VariableDeclaration | LVal,
  stmt: Statement,
  iteratorRecord: IteratorRecord,
  iterationKind: "enumerate" | "iterate",
  lhsKind: "assignment" | "varBinding" | "lexicalBinding",
  iteratorKind: "sync" | "async",
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm, label } = context;
  const oldEnv = context.lexicalEnv;

  let V: NormalCompletion = null;

  const destructuring = isDestructuring(lhs);
  let assignmentPattern: ObjectPattern | ArrayPattern | null = null;
  if (destructuring && lhsKind === "assignment") {
    assignmentPattern = lhs as ObjectPattern | ArrayPattern;
  }
  while (true) {
    let nextResult = yield* call(
      iteratorRecord.nextMethod,
      iteratorRecord.iterator,
      [],
      realm,
    );

    if (iteratorKind === "async") {
      nextResult = yield* AwaitCommand(nextResult);
    }

    if (!isStaticJsObjectLike(nextResult)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Iterator result is not an object"),
      );
    }

    const done = yield* iteratorComplete(nextResult, realm);
    if (done) {
      return V;
    }

    const nextValue = yield* iteratorValue(nextResult);
    let iterationContext: EvaluationContext = context;
    try {
      if (lhsKind === "assignment" || lhsKind === "varBinding") {
        if (destructuring) {
          if (assignmentPattern) {
            yield* destructuringAssignmentEvaluation(
              assignmentPattern,
              nextValue,
              iterationContext,
            );
          } else {
            yield* bindingInitialization(
              lhs as LVal,
              nextValue,
              null,
              iterationContext,
            );
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

        const iterationEnv = new StaticJsDeclarativeEnvironmentRecord(
          oldEnv,
          iterationContext.realm,
        );
        yield* forDeclarationBindingInstantiation(lhs, iterationEnv);
        iterationContext =
          iterationContext.createLexicalEnvContext(iterationEnv);
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
      if (isAbruptCompletion(e)) {
        if (iterationKind === "iterate") {
          if (iteratorKind === "async") {
            return yield* asyncIteratorClose(iteratorRecord, e, context.realm);
          } else {
            return yield* iteratorClose(iteratorRecord, e, context.realm);
          }
        }
      }

      throw e;
    }

    try {
      const result = yield* EvaluateNodeCommand(stmt, iterationContext);
      if (result) {
        V = result;
      }
    } catch (e) {
      if (ContinueCompletion.isContinueForLabel(e, label)) {
        if (e.value) {
          V = e.value;
        }
        continue;
      } else if (isAbruptCompletion(e)) {
        if (iterationKind === "iterate") {
          if (iteratorKind === "async") {
            yield* asyncIteratorClose(iteratorRecord, e, realm, true);
          } else {
            yield* iteratorClose(iteratorRecord, e, realm, true);
          }
        }

        if (BreakCompletion.isBreakForLabel(e, label)) {
          return e.value ?? V;
        }
      }

      throw e;
    }
  }
}
