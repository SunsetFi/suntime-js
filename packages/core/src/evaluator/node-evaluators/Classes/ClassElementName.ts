import {
  ClassMethod,
  ClassPrivateMethod,
  ClassPrivateProperty,
  ClassProperty,
  Expression,
} from "@babel/types";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";

import {
  StaticJsPropertyKey,
  toStaticJsPropertyKey,
} from "../../../runtime/types/StaticJsPropertyKey.js";
import { StaticJsPrivateName } from "../../../runtime/types/StaticJsPrivateName.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Q } from "../../completions/Q.js";

import { EvaluationGenerator } from "../../EvaluationGenerator.js";
import { EvaluationContext } from "../../EvaluationContext.js";

export function* classElementNameNodeEvaluator(
  node: ClassMethod | ClassPrivateMethod | ClassProperty | ClassPrivateProperty,
): EvaluationGenerator<StaticJsPropertyKey | StaticJsPrivateName> {
  if ((node.type === "ClassMethod" || node.type === "ClassProperty") && node.computed) {
    const computed = yield* Q.val(EvaluateNodeCommand(node.key as Expression));
    return toStaticJsPropertyKey(computed);
  }

  const key = node.key;
  switch (key.type) {
    case "Identifier":
      return key.name;
    case "PrivateName": {
      const privateEnvRec = EvaluationContext.current.privateEnv;
      if (!privateEnvRec) {
        throw new StaticJsEngineError(
          "Assertion failure: Class element with PrivateName key found in context that lacks a privateEnv",
        );
      }
      const names = privateEnvRec.names;
      const match = names.find((x) => x.description === key.id.name);
      if (!match) {
        throw new StaticJsEngineError(
          `Assertion failure: PrivateName ${key.id.name} not found in private environment record when evaluating class element name`,
        );
      }

      return match;
    }
  }

  throw new Error(`Unsupported non-computed class element name node type: ${key.type}`);
}
