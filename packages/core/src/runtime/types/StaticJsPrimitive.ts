import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

export interface StaticJsPrimitive {
  readonly realm: StaticJsRealm;

  readonly typeOf: string;
  readonly runtimeTypeOf: string;

  // FIXME: We use these in evaluation and need to make evaluator generators for them.
  toJs(): unknown;
  toString(): string;
}
