import { StaticJsFunction } from "./StaticJsFunction.js";
import { StaticJsPrivateName } from "./StaticJsPrivateName.js";
import { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPrivateElementBase {
  type: "private-element";
  key: StaticJsPrivateName;
  kind: "field" | "method" | "accessor";
}

export interface StaticJsPrivateElementField extends StaticJsPrivateElementBase {
  kind: "field";
  value: StaticJsValue;
}

export function staticJsPrivateElementField(
  key: StaticJsPrivateName,
  value: StaticJsValue,
): StaticJsPrivateElementField {
  return {
    type: "private-element",
    key,
    kind: "field",
    value,
  };
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
