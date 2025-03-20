import { BlockStatement } from "@babel/types";
import { StaticJsScope } from "../../environment/index.js";
import { NodeEvaluationResult } from "./node-evaluation-result.js";
export default function blockStatementNodeEvaluator(
  node: BlockStatement,
  scope: StaticJsScope,
): NodeEvaluationResult;
