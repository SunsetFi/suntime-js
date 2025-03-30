import {
  EvaluationGenerator,
  ReturnCompletion,
} from "../../../evaluator/internal.js";

import { StaticJsValue } from "../interfaces/index.js";

import StaticJsEnvFunction from "./StaticJsEnvFunction.js";

export default class StaticJsValueFunction extends StaticJsEnvFunction {
  constructor(
    name: string | null,
    call: (thisArg: StaticJsValue, ...args: StaticJsValue[]) => StaticJsValue,
    length?: number,
  ) {
    super(
      name,
      function* (
        thisArg: StaticJsValue,
        ...args: StaticJsValue[]
      ): EvaluationGenerator {
        const result = call(thisArg, ...args);
        return ReturnCompletion(result);
      },
      length,
    );
  }
}
