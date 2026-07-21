import type { StaticJsImportAttribute } from "#modules/implementation-v2/StaticJsImportAttribute.js";

export function allImportAttributesSupported(attributes: readonly StaticJsImportAttribute[]) {
  return attributes.length === 0;
}
