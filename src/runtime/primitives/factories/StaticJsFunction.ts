import {
  isStaticJsFunction,
  StaticJsFunction as IStaticJsFunction,
} from "../interfaces/index.js";

import StaticJsExternalFunction from "../implementation/StaticJsExternalFunction.js";

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
  if (isStaticJsFunction(nameOrFunc)) {
    return nameOrFunc;
  }

  if (typeof nameOrFunc === "function") {
    return new StaticJsExternalFunction(null, nameOrFunc);
  }

  if (typeof nameOrFunc !== "string") {
    throw new Error("Invalid function name");
  }
  if (typeof evaluate !== "function") {
    throw new Error("Invalid function evaluate");
  }

  return new StaticJsExternalFunction(nameOrFunc, evaluate);
}
