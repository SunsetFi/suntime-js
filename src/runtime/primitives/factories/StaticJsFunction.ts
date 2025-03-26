import { StaticJsRuntimeFunction } from "../implementation/index.js";
import { StaticJsFunction as IStaticJsFunction } from "../interfaces/index.js";

import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export default function StaticJsFunction(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  func: Function,
): IStaticJsFunction;
export default function StaticJsFunction(
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  func: Function,
): IStaticJsFunction;
export default function StaticJsFunction(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  nameOrFunc: string | Function,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  evaluate?: Function,
): IStaticJsFunction {
  if (staticJsInstanceOf(nameOrFunc) === "function") {
    return nameOrFunc as unknown as IStaticJsFunction;
  }

  if (typeof nameOrFunc === "function") {
    return new StaticJsRuntimeFunction(null, nameOrFunc);
  }

  if (typeof nameOrFunc !== "string") {
    throw new Error("Invalid function name");
  }
  if (typeof evaluate !== "function") {
    throw new Error("Invalid function evaluate");
  }

  return new StaticJsRuntimeFunction(nameOrFunc, evaluate);
}
