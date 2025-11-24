import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";

export type NormalCompletion = StaticJsValue | StaticJsReferenceRecord | null;
