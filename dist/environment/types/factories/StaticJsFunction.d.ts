import { StaticJsFunction as IStaticJsFunction } from "../index.js";
import { StaticJsValue } from "../interfaces/StaticJsValue.js";
export default function StaticJsFunction<TArgs extends StaticJsValue[]>(
  func: (...args: TArgs) => StaticJsValue,
): IStaticJsFunction<TArgs>;
export default function StaticJsFunction<TArgs extends StaticJsValue[]>(
  name: string,
  evaluate: (...args: TArgs) => StaticJsValue,
): IStaticJsFunction<TArgs>;
