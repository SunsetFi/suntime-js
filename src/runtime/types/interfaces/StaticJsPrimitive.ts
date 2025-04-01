export interface StaticJsPrimitive {
  readonly typeOf: string;
  readonly runtimeTypeOf: string;

  // FIXME: We use these in evaluation and need to make evaluator generators for them.
  toJs(): unknown;
  toString(): string;
  toNumber(): number;
  toBoolean(): boolean;
}
