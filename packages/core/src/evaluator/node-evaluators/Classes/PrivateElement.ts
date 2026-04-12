import { StaticJsPrivateName } from "../../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsFunction } from "../../../runtime/types/StaticJsFunction.js";
import { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

export interface StaticJsPrivateElementBase {
  type: "private-element";
  key: StaticJsPrivateName;
  kind: "field" | "method" | "accessor";
}

export interface StaticJsPrivateElementField extends StaticJsPrivateElementBase {
  kind: "field";
  value: StaticJsValue;
}

export interface StaticJsPrivateElementMethod extends StaticJsPrivateElementBase {
  kind: "method";
  value: StaticJsFunction;
}

export interface StaticJsPrivateElementAccessor extends StaticJsPrivateElementBase {
  kind: "accessor";
  get: StaticJsFunction | undefined;
  set: StaticJsFunction | undefined;
}

export type StaticJsPrivateElement =
  | StaticJsPrivateElementField
  | StaticJsPrivateElementMethod
  | StaticJsPrivateElementAccessor;

export function isStaticJsPrivateElement(value: unknown): value is StaticJsPrivateElement {
  return (
    value != null &&
    typeof value === "object" &&
    "type" in value &&
    (value as any).type === "private-element"
  );
}
