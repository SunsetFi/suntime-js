import {
  isStaticJsReferenceRecord,
  type StaticJsReferenceRecord,
} from "../../runtime/references/StaticJsReferenceRecord.js";
import { isStaticJsValue, type StaticJsValue } from "../../runtime/types/StaticJsValue.js";

export type CompletionValue = StaticJsValue | StaticJsReferenceRecord | null;
export function isCompletionValue(value: unknown): value is CompletionValue {
  return value === null || isStaticJsValue(value) || isStaticJsReferenceRecord(value);
}
export function nameCompletionValue(value: unknown): string {
  if (value === null) {
    return "null";
  }

  if (isStaticJsValue(value)) {
    return `[StaticJsValue ${value.constructor.name}]}`;
  }

  if (isStaticJsReferenceRecord(value)) {
    return `[StaticJsReferenceRecord ${value.constructor.name}]`;
  }

  return String(value);
}
