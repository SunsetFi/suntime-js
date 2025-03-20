import { Identifier } from "@babel/types";
import { StaticJsEnvironment, StaticJsValue } from "../../environment/index.js";
export default function identifierNodeEvaluator(
  node: Identifier,
  env: StaticJsEnvironment,
): StaticJsValue;
