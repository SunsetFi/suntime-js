import type { Expression, ForStatement, Statement } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import boundNames from "../instantiation/algorithms/bound-names.js";

import labelledIterationStatementEvaluation from "./LabelledIterationStatementEvaluation.js";
import breakableStatementEvaluation from "./BreakableStatementEvaluation.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";
import rethrowCompletion from "../completions/rethrow-completion.js";

const forStatementNodeEvaluator = breakableStatementEvaluation(
  labelledIterationStatementEvaluation(function* forStatementNodeEvaluator(
    node: ForStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    const { init, test, update, body } = node;
    const oldEnv = context.lexicalEnv;

    let perIterationLets: string[] = [];

    if (init) {
      if (init.type === "VariableDeclaration" && ["let", "const"].includes(init.kind)) {
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

        context.lexicalEnv = loopEnv;
        const forDcl = yield* EvaluateNodeCommand(init, context);
        if (Completion.Abrupt.is(forDcl)) {
          context.lexicalEnv = oldEnv;
          return yield* Q(forDcl);
        }

        if (!isConst) {
          perIterationLets = names;
        }
      } else {
        yield* Q(EvaluateNodeCommand(init, context));
      }
    }

    const bodyResult = yield* captureThrownCompletion(
      forBodyEvaluation(test ?? null, update ?? null, body, perIterationLets, context),
    );
    context.lexicalEnv = oldEnv;
    return rethrowCompletion(bodyResult);
  }),
);

function* forBodyEvaluation(
  test: Expression | null,
  increment: Expression | null,
  statement: Statement,
  perIterationBindings: string[],
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm, labelSet } = context;

  let V: Completion.Normal = context.realm.types.undefined;

  yield* createPerIterationEnvironment(perIterationBindings, context);

  while (true) {
    if (test) {
      const testValue = yield* Q.val(EvaluateNodeCommand(test, context), realm);
      const condition = yield* toBoolean.js(testValue, context.realm);
      if (!condition) {
        return V;
      }
    }

    const result = yield* EvaluateNodeCommand(statement, context);

    if (!loopContinues(result, labelSet)) {
      return yield* Q(Completion.updateEmpty(result, V));
    }

    const resultValue = Completion.value(result);
    if (resultValue) {
      V = resultValue;
    }

    yield* createPerIterationEnvironment(perIterationBindings, context);

    if (increment) {
      yield* Q.val(EvaluateNodeCommand(increment, context), realm);
    }
  }
}

function* createPerIterationEnvironment(
  perIterationBindings: string[],
  context: EvaluationContext,
): EvaluationGenerator<void> {
  if (perIterationBindings.length > 0) {
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

    context.lexicalEnv = thisIterationEnv;
  }
}

export default forStatementNodeEvaluator;
