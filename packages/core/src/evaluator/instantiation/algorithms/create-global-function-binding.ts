import type { StaticJsGlobalEnvironmentRecord } from "#environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import type { StaticJsPropertyDescriptorRecord } from "#types/StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { set } from "#algorithms/set.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import { Completion } from "../../completions/Completion.js";

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
    throw yield* Completion.Throw.create(
      "TypeError",
      `Cannot create global function binding for ${name}`,
    );
  }

  yield* set(globalObject, name, value, false);
}
