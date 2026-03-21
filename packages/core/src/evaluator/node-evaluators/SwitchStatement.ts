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

const switchStatementNodeEvaluator = breakableStatementEvaluation(
  function* switchStatementNodeEvaluator(
    statement: SwitchStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    const { realm } = context;
    const input = yield* Q.val(EvaluateNodeCommand(statement.discriminant), realm);

    const env = StaticJsDeclarativeEnvironmentRecord.from(context);
    return yield* context.with({ lexicalEnv: env }).run(function* () {
      yield* blockDeclarationInstantiation(statement, env);

      const A: SwitchCase[] = [];
      const B: SwitchCase[] = [];
      let defaultClause: SwitchCase | null = null;
      for (const switchCase of statement.cases) {
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
    });
  },
);

export default switchStatementNodeEvaluator;

function* caseClauseIsSelected(C: SwitchCase, input: StaticJsValue): EvaluationGenerator<boolean> {
  const realm = EvaluationContext.current.realm;
  const clauseSelector = yield* Q.val(EvaluateNodeCommand(C.test!), realm);

  return isStrictlyEqual(clauseSelector, input);
}

function* evaluateSwitchCase(C: SwitchCase): EvaluationGenerator<Completion> {
  return yield* evaluateStatementList(C.consequent);
}
