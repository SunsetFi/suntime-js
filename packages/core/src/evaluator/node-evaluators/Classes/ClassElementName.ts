import {
  ClassMethod,
  ClassPrivateMethod,
  ClassPrivateProperty,
  ClassProperty,
  Expression,
} from "@babel/types";

import {
  StaticJsPropertyKey,
  toStaticJsPropertyKey,
} from "../../../runtime/types/StaticJsPropertyKey.js";
import {
  StaticJsPrivateName,
  staticJsPrivateName,
} from "../../../runtime/types/StaticJsPrivateName.js";

import { EvaluationGenerator } from "../../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Q } from "../../completions/Q.js";

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
    case "PrivateName":
      return staticJsPrivateName(key.id.name);
  }

  throw new Error(`Unsupported non-computed class element name node type: ${key.type}`);
}
