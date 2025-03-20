import { Identifier } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function identifierNodeEvaluator(
  node: Identifier,
  scope: StaticJsScope,
): StaticJsValue;
