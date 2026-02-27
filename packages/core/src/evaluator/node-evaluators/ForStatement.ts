import type { Expression, ForStatement, Statement } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand, EvaluateNodeForCompletion } from "../commands/EvaluateNodeCommand.js";

import type { NormalCompletion } from "../completions/NormalCompletion.js";
import completionValue from "../completions/completion-value.js";
import updateEmpty from "../completions/update-empty.js";

import boundNames from "../instantiation/algorithms/bound-names.js";

import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";

const forStatementNodeEvaluator = labeledStatementEvaluation(function* forStatementNodeEvaluator(
  node: ForStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const { label } = context;
  const { init, test, update, body } = node;

  let perIterationLets: string[] = [];

  if (init) {
    if (init.type === "VariableDeclaration" && ["let", "const"].includes(init.kind)) {
      const oldEnv = context.lexicalEnv;
      const loopEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, context.realm);
      const isConst = init.kind === "const";
      const names = boundNames(init);
      for (const dn of names) {
        if (isConst) {
          yield* loopEnv.createImmutableBindingEvaluator(dn, true);
        } else {
          yield* loopEnv.createMutableBindingEvaluator(dn, false);
        }
      }

      // Change the for loop context to use the new environment.
      // This should flow through and be used for forBodyEvaluation.
      context = context
        .createLexicalEnvContext(loopEnv)
        // Preserve the label, as it is not inherited.
        // FIXME: Make this an inherited array on the context as the spec specifies.
        .createLabelContext(label);
      yield* EvaluateNodeCommand(init, context);

      if (!isConst) {
        perIterationLets = names;
      }
    } else {
      yield* EvaluateNodeCommand(init, context);
    }
  }

  return yield* forBodyEvaluation(test ?? null, update ?? null, body, perIterationLets, context);
});

function* forBodyEvaluation(
  test: Expression | null,
  increment: Expression | null,
  statement: Statement,
  perIterationBindings: string[],
  context: EvaluationContext,
): EvaluationGenerator {
  let V: NormalCompletion = context.realm.types.undefined;
  let iterationContext = yield* createPerIterationEnvironment(perIterationBindings, context);
  while (true) {
    if (test) {
      const testValue = yield* EvaluateNodeCommand(test, iterationContext, {
        forNormalValue: "ForStatement.test",
      });
      const condition = yield* toBoolean.js(testValue, context.realm);
      if (!condition) {
        return V;
      }
    }

    const result = yield* EvaluateNodeForCompletion(statement, iterationContext);
    if (!loopContinues(result, iterationContext)) {
      return updateEmpty(result, V);
    }

    const resultValue = completionValue(result);
    if (resultValue) {
      V = resultValue;
    }

    iterationContext = yield* createPerIterationEnvironment(perIterationBindings, iterationContext);

    if (increment) {
      yield* EvaluateNodeCommand(increment, iterationContext, {
        // Spec says we always call getValue on this without seeming to allow
        // for it to be empty
        forNormalValue: "ForStatement.increment",
      });
    }
  }
}

function* createPerIterationEnvironment(
  perIterationBindings: string[],
  context: EvaluationContext,
): EvaluationGenerator<EvaluationContext> {
  if (perIterationBindings.length === 0) {
    return context;
  }

  const lastIterationEnv = context.lexicalEnv;
  const outer = lastIterationEnv.outerEnv;
  if (outer === null) {
    throw new StaticJsEngineError(
      "Unexpected null outer environment when creating per-iteration environment",
    );
  }

  const thisIterationEnv = new StaticJsDeclarativeEnvironmentRecord(outer, context.realm);

  for (const bn of perIterationBindings) {
    yield* thisIterationEnv.createMutableBindingEvaluator(bn, false);
    const lastValue = yield* lastIterationEnv.getBindingValueEvaluator(bn, true);
    yield* thisIterationEnv.initializeBindingEvaluator(bn, lastValue);
  }

  let iterationContext = context.createLexicalEnvContext(thisIterationEnv);
  if (context.label) {
    iterationContext = iterationContext.createLabelContext(context.label);
  }
  return iterationContext;
}

export default forStatementNodeEvaluator;
