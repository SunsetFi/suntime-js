import type { Completion } from "#evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsModuleImpl } from "#modules/implementation/modules/StaticJsModuleImpl.js";

import { Q } from "#evaluator/completions/Q.js";
import { StaticJsCyclicModuleImpl } from "#modules/implementation/modules/StaticJsCyclicModuleImpl.js";
import { assert } from "#utils/assert.js";

import { AtLeastLinkingStatus } from "../StaticJsCyclicModuleStatus.js";
import { getImportedModule } from "./get-imported-module.js";

export const innerModuleLinking = Q.makeReceiver(function* innerModuleLinking(
  module: StaticJsModuleImpl,
  stack: StaticJsModuleImpl[],
  index: number,
): EvaluationGenerator<number | Completion.Throw> {
  if (module instanceof StaticJsCyclicModuleImpl === false) {
    yield* Q(module.linkEvaluator());
    return index;
  }

  if (AtLeastLinkingStatus.has(module.status)) {
    return index;
  }

  assert(
    module.status === "unlinked",
    `Expected cyclic module status to be "unlinked" before linking, but it is ${module.status}`,
  );

  module.status = "linking";
  const moduleIndex = index;
  module.dfsAncestorIndex = index;
  index += 1;
  stack.push(module);

  for (const request of module.requestedModules) {
    const requiredModule: StaticJsModuleImpl = getImportedModule(module, request);
    index = yield* Q(innerModuleLinking(requiredModule, stack, index));
    if (requiredModule instanceof StaticJsCyclicModuleImpl) {
      assert(
        AtLeastLinkingStatus.has(requiredModule.status),
        `Cyclic module required module status is not in a post-linkable state: ${requiredModule.status}`,
      );

      assert(
        requiredModule.status !== "linking" || stack.includes(requiredModule),
        `Cyclic module required module status is linking but not in the stack`,
      );

      if (requiredModule.status === "linking") {
        // Not an assert in the spec, but ??
        assert.notNull(
          requiredModule.dfsAncestorIndex,
          `Cyclic module required module dfsAncestorIndex is null while linking`,
        );
        module.dfsAncestorIndex = Math.min(
          module.dfsAncestorIndex,
          requiredModule.dfsAncestorIndex,
        );
      }
    }
  }

  yield* Q(module.initializeEnvironmentEvaluator());

  assert(
    stack.indexOf(module) === stack.lastIndexOf(module),
    `Cyclic module is in the stack more than once`,
  );

  assert(
    module.dfsAncestorIndex <= moduleIndex,
    `Cyclic module dfsAncestorIndex is greater than moduleIndex: ${module.dfsAncestorIndex} > ${moduleIndex}`,
  );

  if (module.dfsAncestorIndex === moduleIndex) {
    let done = false;
    while (!done) {
      const requiredModule = stack.pop();
      assert.instance(
        requiredModule,
        StaticJsCyclicModuleImpl,
        `Cyclic module required module is not a cyclic module`,
      );
      requiredModule.status = "linked";
      if (requiredModule === module) {
        done = true;
      }
    }
  }

  return index;
});
