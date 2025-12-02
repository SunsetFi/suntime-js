import type { Expression, ForStatement, Statement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import boundNames from "../instantiation/algorithms/bound-names.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

function* forStatementNodeEvaluator(
  node: ForStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const { label } = context;
  const { init, test, update, body } = node;

  let perIterationLets: string[] = [];

  if (init) {
    if (
      init.type === "VariableDeclaration" &&
      ["let", "const"].includes(init.kind)
    ) {
      const oldEnv = context.lexicalEnv;
      const loopEnv = new StaticJsDeclarativeEnvironmentRecord(
        oldEnv,
        context.realm,
      );
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

  return yield* forBodyEvaluation(
    test ?? null,
    update ?? null,
    body,
    perIterationLets,
    context,
  );
}

function* forBodyEvaluation(
  test: Expression | null,
  increment: Expression | null,
  statement: Statement,
  perIterationBindings: string[],
  context: EvaluationContext,
): EvaluationGenerator {
  const { label, realm } = context;

  let V: NormalCompletion = null;
  let iterationContext = yield* createPerIterationEnvironment(
    perIterationBindings,
    context,
  );

  while (true) {
    if (test) {
      const testResult = yield* EvaluateNodeCommand(test, iterationContext, {
        forNormalValue: "ForStatement.test",
      });
      const condition = yield* toBoolean.js(testResult, realm);
      if (!condition) {
        return V;
      }
    }

    try {
      V = yield* EvaluateNodeCommand(statement, iterationContext);
    } catch (e) {
      // FIXME: There's odd behavior around UpdateEmpty here which seems to imply if we get a
      // Continue, Break, Return, or Throw that has no value, we need to update its value to be our value.
      // Is this actually visible behavior?  We don't support anything like that with the thrown AbnormalCompletions

      if (BreakCompletion.isBreakForLabel(e, label)) {
        return V;
      } else if (ContinueCompletion.isContinueForLabel(e, label)) {
        /* No-op, continue to the next iteration */
      } else {
        throw e; // Rethrow any other error
      }
    }

    // Always do this even if no increment.
    iterationContext = yield* createPerIterationEnvironment(
      perIterationBindings,
      iterationContext,
    );

    if (increment) {
      yield* EvaluateNodeCommand(increment, iterationContext, {
        // Spec says we always call getValue on this without seeming to allow
        // for it to be empty
        forNormalValue: "ForStatement.increment",
      });
    }
  }

  return V;
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

  const thisIterationEnv = new StaticJsDeclarativeEnvironmentRecord(
    outer,
    context.realm,
  );

  for (const bn of perIterationBindings) {
    yield* thisIterationEnv.createMutableBindingEvaluator(bn, false);
    const lastValue = yield* lastIterationEnv.getBindingValueEvaluator(
      bn,
      true,
    );
    yield* thisIterationEnv.initializeBindingEvaluator(bn, lastValue);
  }

  return context.createLexicalEnvContext(thisIterationEnv);
}

// function* forStatementNodeEvaluator(
//   node: ForStatement,
//   context: EvaluationContext,
// ): EvaluationGenerator {
//   let forContext = context;

//   if (node.init || node.update || node.test) {
//     forContext = context.createLexicalEnvContext(
//       StaticJsDeclarativeEnvironmentRecord.from(context),
//     );

//     if (node.init) {
//       yield* setupEnvironment(node.init, forContext);
//     }

//     if (node.test) {
//       yield* setupEnvironment(node.test, forContext);
//     }

//     if (node.update) {
//       yield* setupEnvironment(node.update, forContext);
//     }

//     if (node.init) {
//       yield* EvaluateNodeCommand(node.init, forContext);
//     }
//   }

//   let lastCompletion: NormalCompletion = null;
//   do {
//     if (node.test) {
//       const testResult = yield* EvaluateNodeCommand(node.test, forContext, {
//         forNormalValue: "ForStatement.test",
//       });
//       const condition = yield* toBoolean.js(testResult, context.realm);
//       if (!condition) {
//         break;
//       }
//     }

//     const bodyContext = forContext.createLexicalEnvContext(
//       StaticJsDeclarativeEnvironmentRecord.from(context),
//     );

//     yield* setupEnvironment(node.body, bodyContext);

//     try {
//       lastCompletion = yield* EvaluateNodeCommand(node.body, bodyContext);
//     } catch (e) {
//       if (BreakCompletion.isBreakForLabel(e, context.label)) {
//         break;
//       }

//       if (ContinueCompletion.isContinueForLabel(e, context.label)) {
//         /* No-op, continue to the next iteration */
//       } else {
//         throw e; // Rethrow any other error
//       }
//     }

//     if (node.update) {
//       yield* EvaluateNodeCommand(node.update, forContext);
//     }
//   } while (true);

//   return lastCompletion;
// }

export default typedMerge(forStatementNodeEvaluator, {
  environmentSetup: false,
});
