import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsPrivateName } from "../types/StaticJsPrivateName.js";
import { isStaticJsValue, type StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsUnresolvedReferenceRecord {
  referencedName: string;
  strict: boolean;
  thisValue: null;
  base: null;
}

export function staticJsUnresolvedReferenceRecord(
  referencedName: string,
  strict: boolean,
): StaticJsUnresolvedReferenceRecord {
  return {
    referencedName,
    strict,
    thisValue: null,
    base: null,
  };
}

export interface StaticJsPopulatedReferenceRecord {
  referencedName: string | StaticJsValue | StaticJsPrivateName;
  strict: boolean;
  thisValue: StaticJsValue | null;
  base: StaticJsEnvironmentRecord | StaticJsValue;
}

export interface StaticJsPrivatePropertyPopulatedReferenceRecord {
  referencedName: StaticJsPrivateName;
  strict: boolean;
  thisValue: StaticJsValue | null;
  base: StaticJsValue;
}

export interface StaticJsNonPrivatePropertyReferenceRecord {
  referencedName: string | StaticJsValue;
  strict: boolean;
  thisValue: StaticJsValue | null;
  base: StaticJsValue;
}

export type StaticJsPropertyReferenceRecord =
  | StaticJsPrivatePropertyPopulatedReferenceRecord
  | StaticJsNonPrivatePropertyReferenceRecord;

export function staticJsPropertyReferenceRecord(
  base: StaticJsValue,
  referencedName: string | StaticJsValue | StaticJsPrivateName,
  strict: boolean,
  thisValue: StaticJsValue | null = null,
): StaticJsPropertyReferenceRecord {
  return {
    base,
    referencedName,
    strict,
    thisValue,
  } as StaticJsPropertyReferenceRecord;
}

export function isStaticJsPropertyReference(
  value: StaticJsReferenceRecord,
): value is StaticJsPropertyReferenceRecord {
  return isStaticJsValue(value.base);
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

export function staticJsResolvedReferenceRecord(
  referencedName: string,
  base: StaticJsEnvironmentRecord | StaticJsValue,
  strict: boolean,
  thisValue: StaticJsValue | null = null,
): StaticJsResolvedReference {
  return {
    referencedName,
    base,
    strict,
    thisValue,
  } as StaticJsResolvedReference;
}

export function isStaticJsReferenceRecord(value: unknown): value is StaticJsReferenceRecord {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return "referencedName" in value && "strict" in value && "thisValue" in value && "base" in value;
}
