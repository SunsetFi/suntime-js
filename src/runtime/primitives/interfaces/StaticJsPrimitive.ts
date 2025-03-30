export interface StaticJsPrimitive {
  readonly typeOf: string;
  readonly runtimeTypeOf: string;
  toJs(): unknown;
  toString(): string;
  toNumber(): number;
  toBoolean(): boolean;
}
