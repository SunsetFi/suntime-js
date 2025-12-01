import type {
  ArrayPattern,
  LVal,
  ObjectPattern,
  Statement,
  VariableDeclaration,
} from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import StaticJsDeclarativeEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type { StaticJsObjectLike } from "../../../runtime/types/StaticJsObjectLike.js";

import { getIdentifierReference } from "../../../runtime/references/get-identifier-reference.js";

import iteratorStepValue from "../../../runtime/algorithms/iterator-step-value.js";
import putValue from "../../../runtime/algorithms/put-value.js";
import iteratorClose from "../../../runtime/algorithms/iterator-close.js";
import boundNames from "../../instantiation/algorithms/bound-names.js";

import bindingInitialization from "../../bindings/binding-initialization.js";
import destructuringAssignmentEvaluation from "../../bindings/destructuring-assignment-evaluation.js";
import initializeReferencedBinding from "../../bindings/initialize-referenced-binding.js";

import { isAbruptCompletion } from "../../completions/AbruptCompletion.js";
import type { NormalCompletion } from "../../completions/NormalCompletion.js";
import { ContinueCompletion } from "../../completions/ContinueCompletion.js";

import { BreakCompletion } from "../../completions/BreakCompletion.js";
import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../../EvaluationContext.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

import forDeclarationBindingInitialization from "./for-declaration-binding-initialization.js";
import forDeclarationBindingInstantiation from "./for-declaration-binding-instantiation.js";
import isDestructuring from "./is-destructuring.js";

export function* forInOfBodyEvaluation(
  lhs: VariableDeclaration | LVal,
  stmt: Statement,
  iteratorRecord: StaticJsObjectLike,
  iterationKind: "enumerate" | "iterate",
  lhsKind: "assignment" | "varBinding" | "lexicalBinding",
  context: EvaluationContext,
): EvaluationGenerator {
  const oldEnv = context.lexicalEnv;

  let V: NormalCompletion = null;

  const destructuring = isDestructuring(lhs);
  let assignmentPattern: ObjectPattern | ArrayPattern | null = null;
  if (destructuring && lhsKind === "assignment") {
    assignmentPattern = lhs as ObjectPattern | ArrayPattern;
  }
  while (true) {
    const nextValue = yield* iteratorStepValue(iteratorRecord, context.realm);
    if (!nextValue) {
      return V;
    }

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
          yield* putValue(lhsRef, nextValue, iterationContext.realm);
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
          return yield* iteratorClose(iteratorRecord, e, context.realm);
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
      if (ContinueCompletion.isContinueForLabel(e, context.label)) {
        // Fall through to the next iteration
      } else if (BreakCompletion.isBreakForLabel(e, context.label)) {
        if (iterationKind === "iterate") {
          yield* iteratorClose(iteratorRecord, e, context.realm, false);
        }

        return V;
      } else if (isAbruptCompletion(e)) {
        if (iterationKind === "iterate") {
          yield* iteratorClose(iteratorRecord, e, context.realm, false);
        }

        throw e;
      } else {
        throw e;
      }
    }
  }
}
