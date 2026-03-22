import type { SwitchCase, SwitchStatement } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import isStrictlyEqual from "../../runtime/algorithms/is-structly-equal.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import blockDeclarationInstantiation from "../instantiation/block-declaration-instantiation.js";

import breakableStatementEvaluation from "./BreakableStatementEvaluation.js";

import evaluateStatementList from "./StatementList.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";

const switchStatementNodeEvaluator = breakableStatementEvaluation(
  function* switchStatementNodeEvaluator(statement: SwitchStatement): EvaluationGenerator {
    const context = EvaluationContext.current;
    const switchValue = yield* Q.val(EvaluateNodeCommand(statement.discriminant));

    const oldEnv = context.lexicalEnv;
    const blockEnv = StaticJsDeclarativeEnvironmentRecord.from(context);

    yield* blockDeclarationInstantiation(statement, blockEnv);

    context.lexicalEnv = blockEnv;
    try {
      const R = yield* captureThrownCompletion(caseBlockEvaluation(statement.cases, switchValue));

      return yield* Q(R);
    } finally {
      context.lexicalEnv = oldEnv;
    }
  },
);

export default switchStatementNodeEvaluator;

function* caseBlockEvaluation(
  cases: SwitchCase[],
  input: StaticJsValue,
): EvaluationGenerator<Completion> {
  const { realm } = EvaluationContext.current;

  const A: SwitchCase[] = [];
  const B: SwitchCase[] = [];
  let defaultClause: SwitchCase | null = null;
  for (const switchCase of cases) {
    if (switchCase.test === null) {
      defaultClause = switchCase;
    } else {
      if (!defaultClause) {
        A.push(switchCase);
      } else {
        B.push(switchCase);
      }
    }
  }

  let V: Completion.Normal = realm.types.undefined;

  let found = false;
  for (const C of A) {
    if (!found) {
      found = yield* caseClauseIsSelected(C, input);
    }

    if (found) {
      const R = yield* evaluateSwitchCase(C);
      const rValue = Completion.value(R);
      if (rValue) {
        V = rValue;
      }

      if (Completion.Abrupt.is(R)) {
        return yield* Q(Completion.updateEmpty(R, V));
      }
    }
  }

  let foundInB = false;
  if (!found) {
    for (const C of B) {
      if (!foundInB) {
        foundInB = yield* caseClauseIsSelected(C, input);
      }

      if (foundInB) {
        const R = yield* evaluateSwitchCase(C);
        const rValue = Completion.value(R);
        if (rValue) {
          V = rValue;
        }

        if (Completion.Abrupt.is(R)) {
          return yield* Q(Completion.updateEmpty(R, V));
        }
      }
    }
  }

  if (foundInB) {
    return V;
  }

  if (defaultClause) {
    const defaultR = yield* evaluateSwitchCase(defaultClause);
    const defaultRValue = Completion.value(defaultR);
    if (defaultRValue) {
      V = defaultRValue;
    }

    if (Completion.Abrupt.is(defaultR)) {
      return yield* Q(Completion.updateEmpty(defaultR, V));
    }
  }

  for (const C of B) {
    const R = yield* evaluateSwitchCase(C);
    const rValue = Completion.value(R);
    if (rValue) {
      V = rValue;
    }

    if (Completion.Abrupt.is(R)) {
      return yield* Q(Completion.updateEmpty(R, V));
    }
  }

  return V;
}

function* caseClauseIsSelected(C: SwitchCase, input: StaticJsValue): EvaluationGenerator<boolean> {
  const clauseSelector = yield* Q.val(EvaluateNodeCommand(C.test!));

  return isStrictlyEqual(clauseSelector, input);
}

function* evaluateSwitchCase(C: SwitchCase): EvaluationGenerator<Completion> {
  return yield* evaluateStatementList(C.consequent);
}
