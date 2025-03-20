import { StaticJsFunction, StaticJsValue } from "../interfaces/index.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsRuntimeFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> implements StaticJsFunction<TArgs>
{
  private readonly _evaluate;
  private readonly _name;
  constructor(name: string, _evaluate: (...args: TArgs) => StaticJsValue);
  get [StaticJsTypeSymbol](): "function";
  get [StaticJsTypeofSymbol](): "function";
  toString(): string;
  toJs(): void;
  evaluate(...args: TArgs): StaticJsValue;
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue;
  getIsReadOnlyProperty(name: string): boolean;
  setProperty(name: string, value: StaticJsValue): void;
  getKeys(): string[];
}
