import type { TemplateLiteral } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { toString } from "../../runtime/algorithms/to-string.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* templateLiteralNodeEvaluator(node: TemplateLiteral): EvaluationGenerator {
  // TODO: This isn't spec compliant and doesnt handle tagged template literals, but it should be good enough for now.

  const { realm } = EvaluationContext.current;

  let str = "";
  for (let i = 0; i < node.quasis.length; i++) {
    str += node.quasis[i].value.cooked ?? "";

    if (i < node.expressions.length) {
      const exprValue = yield* Q.val(EvaluateNodeCommand(node.expressions[i]));

      const exprStr = yield* toString.js(exprValue);

      str += String(exprStr);
    }
  }

  return realm.types.string(str);
}
