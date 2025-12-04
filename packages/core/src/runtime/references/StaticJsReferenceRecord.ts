import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsUnresolvedReferenceRecord {
  referencedName: string;
  strict: boolean;
  thisValue: null;
  base: null;
}

export interface StaticJsResolvedReferenceRecord {
  referencedName: StaticJsValue | string;
  strict: boolean;
  thisValue: StaticJsValue | null;
  base: StaticJsEnvironmentRecord | StaticJsValue;
}

export interface StaticJsPropertyReferenceRecord
  extends StaticJsResolvedReferenceRecord {
  base: StaticJsValue;
}

export interface StaticJsEnvironmentReferenceRecord
  extends StaticJsResolvedReferenceRecord {
  base: StaticJsEnvironmentRecord;
  referencedName: string;
}

export type StaticJsReferenceRecord =
  | StaticJsUnresolvedReferenceRecord
  | StaticJsPropertyReferenceRecord
  | StaticJsEnvironmentReferenceRecord;

export function isStaticJsReferenceRecord(
  value: unknown,
): value is StaticJsReferenceRecord {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    "referencedName" in value &&
    "strict" in value &&
    "thisValue" in value &&
    "base" in value
  );
}
