import { set } from "../../../runtime/algorithms/set.js";
import type { StaticJsGlobalEnvironmentRecord } from "../../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";

import type { StaticJsPropertyDescriptorRecord } from "../../../runtime/types/StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import { Completion } from "../../completions/Completion.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* createGlobalFunctionBinding(
  name: string,
  value: StaticJsValue,
  deletable: boolean,
  env: StaticJsGlobalEnvironmentRecord,
): EvaluationGenerator<void> {
  const objRec = env.objectRecord;
  const globalObject = objRec.bindingObject;

  const existingProp = yield* globalObject.getOwnPropertyEvaluator(name);

  let desc: StaticJsPropertyDescriptorRecord;
  if (!existingProp || existingProp.configurable) {
    desc = {
      value,
      writable: true,
      enumerable: true,
      configurable: deletable,
    };
  } else {
    desc = {
      value,
    };
  }

  const result = yield* globalObject.defineOwnPropertyEvaluator(name, desc);
  if (!result) {
    throw Completion.Throw("TypeError", `Cannot create global function binding for ${name}`);
  }

  yield* set(globalObject, name, value, false);
}
