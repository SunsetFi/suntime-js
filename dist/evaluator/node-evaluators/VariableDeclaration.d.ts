import { VariableDeclaration, LVal } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function variableDeclarationNodeEvaluator(
  statement: VariableDeclaration,
  scope: StaticJsScope,
): null;
export declare function setLVal(
  lval: LVal,
  value: StaticJsValue,
  scope: StaticJsScope,
  setNamedVariable: (name: string, value: StaticJsValue) => void,
): void;
