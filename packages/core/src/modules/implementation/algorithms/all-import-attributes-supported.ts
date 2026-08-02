import type { StaticJsImportAttribute } from "#modules/implementation/StaticJsImportAttribute.js";

export function allImportAttributesSupported(attributes: readonly StaticJsImportAttribute[]) {
  return attributes.length === 0;
}
