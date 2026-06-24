import { type StaticJsFunction } from "../../../runtime/types/StaticJsFunction.js";
import { type StaticJsPrivateName } from "../../../runtime/types/StaticJsPrivateName.js";
import { type StaticJsSymbol } from "../../../runtime/types/StaticJsSymbol.js";

export interface StaticJsClassFieldDefinitionRecord {
  type: "class-field-definition";
  name: StaticJsPrivateName | string | StaticJsSymbol;
  initializer: StaticJsFunction | undefined;
}
export function isStaticJsClassFieldDefinitionRecord(
  value: any,
): value is StaticJsClassFieldDefinitionRecord {
  return value != null && typeof value === "object" && value.type === "class-field-definition";
}
