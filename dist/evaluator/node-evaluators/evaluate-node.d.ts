import { Node } from "@babel/types";
import { StaticJsScope } from "../../environment/index.js";
import { NodeEvaluationResult } from "./node-evaluation-result.js";
export declare function evaluateNode(
  node: Node,
  scope: StaticJsScope,
): NodeEvaluationResult | null;
