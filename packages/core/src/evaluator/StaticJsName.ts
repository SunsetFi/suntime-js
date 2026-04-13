import {
  isStaticJsPrivateName,
  StaticJsPrivateName,
} from "../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import {
  isStaticJsPropertyKey,
  StaticJsPropertyKey,
  toStaticJsPropertyKey,
} from "../runtime/types/StaticJsPropertyKey.js";
import { isStaticJsValue } from "../runtime/types/StaticJsValue.js";

// FIXME: Delete this garbage.
// We may be instead expected to pass private names as
// property keys?
export type StaticJsName = StaticJsPropertyKey | StaticJsPrivateName;

export function isStaticJsName(value: unknown): value is StaticJsName {
  return isStaticJsPropertyKey(value) || isStaticJsPrivateName(value);
}

export function toStaticJsName(value: unknown): StaticJsName {
  // FIXME FIXME: This string | StaticJsString is
  // atrocious
  if (typeof value === "string") {
    return value;
  }

  if (isStaticJsValue(value)) {
    return toStaticJsPropertyKey(value);
  }

  if (isStaticJsPrivateName(value)) {
    return value;
  }

  throw new TypeError("Value cannot be converted to a StaticJsName");
}
