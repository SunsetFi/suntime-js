import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsPrivateName } from "../types/StaticJsPrivateName.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsUnresolvedReferenceRecord {
  referencedName: string;
  strict: boolean;
  thisValue: null;
  base: null;
}

export interface StaticJsPopulatedReferenceRecord {
  referencedName: string | StaticJsValue | StaticJsPrivateName;
  strict: boolean;
  thisValue: StaticJsValue | null;
  base: StaticJsEnvironmentRecord | StaticJsValue;
}

export interface StaticJsPropertyReferenceRecord extends StaticJsPopulatedReferenceRecord {
  base: StaticJsValue;
}

export interface StaticJsEnvironmentReferenceRecord extends StaticJsPopulatedReferenceRecord {
  base: StaticJsEnvironmentRecord;
  referencedName: string;
}

export type StaticJsReferenceRecord =
  | StaticJsUnresolvedReferenceRecord
  | StaticJsPropertyReferenceRecord
  | StaticJsEnvironmentReferenceRecord;

export type StaticJsResolvedReference<
  T extends StaticJsPropertyReferenceRecord | StaticJsEnvironmentReferenceRecord =
    | StaticJsPropertyReferenceRecord
    | StaticJsEnvironmentReferenceRecord,
> = T & { referencedName: string };

export function isStaticJsReferenceRecord(value: unknown): value is StaticJsReferenceRecord {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return "referencedName" in value && "strict" in value && "thisValue" in value && "base" in value;
}
