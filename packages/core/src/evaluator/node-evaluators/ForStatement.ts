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

const forStatementNodeEvaluator = breakableStatementEvaluation(
  labelledIterationStatementEvaluation(function* forStatementNodeEvaluator(
    node: ForStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    const { labelSet: label } = context;
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
        context = context.create({
          lexicalEnv: loopEnv,
          labelSet: label,
        });
        yield* Q(EvaluateNodeCommand(init, context));

        if (!isConst) {
          perIterationLets = names;
        }
      } else {
        yield* Q(EvaluateNodeCommand(init, context));
      }
    }

    return yield* forBodyEvaluation(test ?? null, update ?? null, body, perIterationLets, context);
  }),
);

function* forBodyEvaluation(
  test: Expression | null,
  increment: Expression | null,
  statement: Statement,
  perIterationBindings: string[],
  context: EvaluationContext,
): EvaluationGenerator {
  const { labelSet } = context;

  let V: Completion.Normal = context.realm.types.undefined;

  let iterationContext = yield* createPerIterationEnvironment(perIterationBindings, context);

  while (true) {
    if (test) {
      const testValue = yield* Q.val(
        EvaluateNodeCommand(test, iterationContext),
        iterationContext.realm,
      );
      const condition = yield* toBoolean.js(testValue, context.realm);
      if (!condition) {
        return V;
      }
    }

    const result = yield* EvaluateNodeCommand(statement, iterationContext);

    if (!loopContinues(result, labelSet)) {
      return yield* Q(Completion.updateEmpty(result, V));
    }

    const resultValue = Completion.value(result);
    if (resultValue) {
      V = resultValue;
    }

    iterationContext = yield* createPerIterationEnvironment(perIterationBindings, iterationContext);

    if (increment) {
      yield* Q.val(EvaluateNodeCommand(increment, iterationContext), iterationContext.realm);
    }
  }
}

function* createPerIterationEnvironment(
  perIterationBindings: string[],
  context: EvaluationContext,
): EvaluationGenerator<EvaluationContext> {
  if (perIterationBindings.length === 0) {
    // HACKish: We no longer reset label on EvaluateCommand,
    // so the block is receiving it and think it owns it.
    return context.create();
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

  return context.create({
    lexicalEnv: thisIterationEnv,
  });
}

export default forStatementNodeEvaluator;
