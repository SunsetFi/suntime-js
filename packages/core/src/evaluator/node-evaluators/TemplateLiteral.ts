import type { TemplateLiteral } from "@babel/types";

import toString from "../../runtime/algorithms/to-string.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

export default function* templateLiteralNodeEvaluator(
  node: TemplateLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;

  let str = "";
  for (let i = 0; i < node.quasis.length; i++) {
    str += node.quasis[i].value.cooked ?? "";

    if (i < node.expressions.length) {
      const exprValue = yield* EvaluateNodeCommand(
        node.expressions[i],
        context,
        {
          forNormalValue: "TemplateLiteral.expression[]",
        },
      );

      const exprStr = yield* toString.js(exprValue, realm);

      str += String(exprStr);
    }
  }

  return realm.types.string(str);
}
