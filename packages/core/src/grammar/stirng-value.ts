import type { Node } from "@babel/types";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";

export function StringValue(x: Node) {
  switch (x.type) {
    case "Identifier":
      return x.name;
    case "StringLiteral":
      return x.value;
  }

  throw new StaticJsEngineError(`Unsupported node type for StringValue: ${x.type}`);
}
