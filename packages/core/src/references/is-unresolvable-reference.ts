import type {
  StaticJsReferenceRecord,
  StaticJsUnresolvedReferenceRecord,
} from "./StaticJsReferenceRecord.js";

export function isUnresolvableReference(
  v: StaticJsReferenceRecord,
): v is StaticJsUnresolvedReferenceRecord {
  return v.base === null;
}
