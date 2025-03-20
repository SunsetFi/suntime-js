import { Node } from "@babel/types";
import { StaticJsEnvironment } from "../../environment/index.js";
import { NodeEvaluationResult } from "./node-evaluation-result.js";
export declare function evaluateNode(
  node: Node,
  env: StaticJsEnvironment,
): NodeEvaluationResult | null;
