import { BlockStatement } from "@babel/types";
import { StaticJsEnvironment } from "../../environment/index.js";
import { NodeEvaluationResult } from "./node-evaluation-result.js";
export default function blockStatementNodeEvaluator(
  node: BlockStatement,
  env: StaticJsEnvironment,
): NodeEvaluationResult;
