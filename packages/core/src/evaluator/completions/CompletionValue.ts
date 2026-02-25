import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

export type CompletionValue = StaticJsValue | StaticJsReferenceRecord | null;
