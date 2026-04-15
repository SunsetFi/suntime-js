import { MetaProperty } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { getNewTarget } from "../../runtime/algorithms/get-new-target.js";
import { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* metaPropertyNodeEvaluator(node: MetaProperty): EvaluationGenerator {
  switch (node.meta.name) {
    case "new":
      return yield* metaPropertyNewNodeEvaluator(node.property);
  }

  throw new StaticJsEngineError(`Unsupported meta property: ${node.meta.name}`);
}

function* metaPropertyNewNodeEvaluator(property: MetaProperty["property"]): EvaluationGenerator {
  switch (property.name) {
    case "target": {
      return yield* getNewTarget();
    }
  }

  throw new StaticJsEngineError(`Unsupported meta property: new.${property.name}`);
}
