import { VariableDeclaration, LVal } from "@babel/types";
import { StaticJsEnvironment, StaticJsValue } from "../../environment/index.js";
export default function variableDeclarationNodeEvaluator(
  statement: VariableDeclaration,
  env: StaticJsEnvironment,
): null;
export declare function setLVal(
  lval: LVal,
  value: StaticJsValue,
  env: StaticJsEnvironment,
  setNamedVariable: (name: string, value: StaticJsValue) => void,
): void;
