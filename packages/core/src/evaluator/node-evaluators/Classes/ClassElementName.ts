import {
  ClassMethod,
  ClassPrivateMethod,
  ClassPrivateProperty,
  ClassProperty,
  Expression,
  ObjectMethod,
} from "@babel/types";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { StaticJsPrivateName } from "../../../runtime/types/StaticJsPrivateName.js";
import { StaticJsPropertyKey } from "../../../runtime/types/StaticJsPropertyKey.js";
import { toPropertyKey } from "../../../runtime/utils/to-property-key.js";
import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Q } from "../../completions/Q.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import { EvaluationGenerator } from "../../EvaluationGenerator.js";

export function* classElementNameNodeEvaluator(
  node: ObjectMethod | ClassMethod | ClassPrivateMethod | ClassProperty | ClassPrivateProperty,
): EvaluationGenerator<StaticJsPropertyKey | StaticJsPrivateName> {
  switch (node.type) {
    case "ClassMethod":
    case "ClassProperty":
    case "ObjectMethod": {
      if (node.computed) {
        const computed = yield* Q.val(EvaluateNodeCommand(node.key as Expression));
        return yield* toPropertyKey(computed);
      }
    }
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
