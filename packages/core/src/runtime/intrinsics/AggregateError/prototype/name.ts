import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const aggregateErrorProtoNameDeclaration: IntrinsicPropertyDeclaration = {
  key: "name",
  value: (realm) => realm.types.string("AggregateError"),
  writable: false,
  enumerable: false,
  configurable: true,
};
