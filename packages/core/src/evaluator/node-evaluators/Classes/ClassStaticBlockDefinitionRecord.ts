import { StaticJsFunction } from "../../../runtime/types/StaticJsFunction.js";

export interface StaticJsClassStaticBlockDefinitionRecord {
  type: "class-static-block-definition";
  bodyFunction: StaticJsFunction;
}

export function isStaticJsClassStaticBlockDefinitionRecord(
  value: any,
): value is StaticJsClassStaticBlockDefinitionRecord {
  return (
    value != null && typeof value === "object" && value.type === "class-static-block-definition"
  );
}
