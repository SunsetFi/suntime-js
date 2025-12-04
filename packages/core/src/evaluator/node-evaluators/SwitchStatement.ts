import type { SwitchCase, SwitchStatement } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import isStrictlyEqual from "../../runtime/algorithms/is-structly-equal.js";

import type { NormalCompletion } from "../completions/NormalCompletion.js";
import completionValue from "../completions/completion-value.js";
import isAbruptCompletion from "../completions/AbruptCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import blockDeclarationInstantiation from "../instantiation/block-declaration-instantiation.js";
import updateEmpty from "../completions/update-empty.js";
import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";

const switchStatementNodeEvaluator = labeledStatementEvaluation(
  function* switchStatementNodeEvaluator(
    statement: SwitchStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    const input = yield* EvaluateNodeCommand(statement.discriminant, context, {
      forNormalValue: "SwitchStatement.discriminant",
    });

    const env = StaticJsDeclarativeEnvironmentRecord.from(context);
    const blockContext = context.createLexicalEnvContext(env);

    yield* blockDeclarationInstantiation(statement, env, blockContext);

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

    let V: NormalCompletion = context.realm.types.undefined;

    let found = false;
    for (const C of A) {
      if (!found) {
        found = yield* caseClauseIsSelected(C, input, blockContext);
      }

      if (found) {
        const R = yield* evaluateSwitchCase(C, blockContext);
        const rValue = completionValue(R);
        if (rValue) {
          V = rValue;
        }

        if (isAbruptCompletion(R)) {
          R.updateEmpty(V);
          throw R;
        }
      }
    }

    let foundInB = false;
    if (!found) {
      for (const C of B) {
        if (!foundInB) {
          foundInB = yield* caseClauseIsSelected(C, input, blockContext);
        }

        if (foundInB) {
          const R = yield* evaluateSwitchCase(C, blockContext);
          const rValue = completionValue(R);
          if (rValue) {
            V = rValue;
          }

          if (isAbruptCompletion(R)) {
            R.updateEmpty(V);
            throw R;
          }
        }
      }
    }

    if (foundInB) {
      return V;
    }

    if (defaultClause) {
      const defaultR = yield* evaluateSwitchCase(defaultClause, blockContext);
      const defaultRValue = completionValue(defaultR);
      if (defaultRValue) {
        V = defaultRValue;
      }

      if (isAbruptCompletion(defaultR)) {
        defaultR.updateEmpty(V);
        throw defaultR;
      }
    }

    for (const C of B) {
      const R = yield* evaluateSwitchCase(C, blockContext);
      const rValue = completionValue(R);
      if (rValue) {
        V = rValue;
      }

      if (isAbruptCompletion(R)) {
        R.updateEmpty(V);
        throw R;
      }
    }

    return V;
  },
);

export default switchStatementNodeEvaluator;

function* caseClauseIsSelected(
  C: SwitchCase,
  input: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const clauseSelector = yield* EvaluateNodeCommand(C.test!, context, {
    forNormalValue: "SwitchStatement.case.test",
  });

  return isStrictlyEqual(clauseSelector, input);
}

function* evaluateSwitchCase(
  C: SwitchCase,
  context: EvaluationContext,
): EvaluationGenerator {
  let V: NormalCompletion = null;
  for (const statement of C.consequent) {
    try {
      V = yield* EvaluateNodeCommand(statement, context);
    } catch (e) {
      updateEmpty(e, V);
      throw e;
    }
  }

  return V;
}
