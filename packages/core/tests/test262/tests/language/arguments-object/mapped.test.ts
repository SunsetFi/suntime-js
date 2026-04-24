import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("mapped", () => {
  it(
    "Symbol.iterator.js",
    { tags: ["known-failing"] },
    createTestHandler("language/arguments-object/mapped/Symbol.iterator.js"),
  );
  it(
    "enumerable-configurable-accessor-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/enumerable-configurable-accessor-descriptor.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/arguments-object/mapped/mapped-arguments-nonconfigurable-1.js"),
  );
  it(
    "mapped-arguments-nonconfigurable-2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/arguments-object/mapped/mapped-arguments-nonconfigurable-2.js"),
  );
  it(
    "mapped-arguments-nonconfigurable-3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/arguments-object/mapped/mapped-arguments-nonconfigurable-3.js"),
  );
  it(
    "mapped-arguments-nonconfigurable-4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/arguments-object/mapped/mapped-arguments-nonconfigurable-4.js"),
  );
  it(
    "mapped-arguments-nonconfigurable-delete-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-delete-1.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-delete-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-delete-2.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-delete-3.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-delete-3.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-delete-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-delete-4.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-nonwritable-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-nonwritable-1.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-nonwritable-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-nonwritable-2.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-nonwritable-3.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-nonwritable-3.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-nonwritable-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-nonwritable-4.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-nonwritable-5.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-nonwritable-5.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-strict-delete-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-strict-delete-1.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-strict-delete-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-strict-delete-2.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-strict-delete-3.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-strict-delete-3.js",
    ),
  );
  it(
    "mapped-arguments-nonconfigurable-strict-delete-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonconfigurable-strict-delete-4.js",
    ),
  );
  it(
    "mapped-arguments-nonwritable-nonconfigurable-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonwritable-nonconfigurable-1.js",
    ),
  );
  it(
    "mapped-arguments-nonwritable-nonconfigurable-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonwritable-nonconfigurable-2.js",
    ),
  );
  it(
    "mapped-arguments-nonwritable-nonconfigurable-3.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonwritable-nonconfigurable-3.js",
    ),
  );
  it(
    "mapped-arguments-nonwritable-nonconfigurable-4.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/mapped-arguments-nonwritable-nonconfigurable-4.js",
    ),
  );
  it(
    "nonconfigurable-descriptors-basic.js",
    { tags: ["known-passing"] },
    createTestHandler("language/arguments-object/mapped/nonconfigurable-descriptors-basic.js"),
  );
  it(
    "nonconfigurable-descriptors-define-failure.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-descriptors-define-failure.js",
    ),
  );
  it(
    "nonconfigurable-descriptors-set-value-by-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-descriptors-set-value-by-arguments.js",
    ),
  );
  it(
    "nonconfigurable-descriptors-set-value-with-define-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-descriptors-set-value-with-define-property.js",
    ),
  );
  it(
    "nonconfigurable-descriptors-with-param-assign.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-descriptors-with-param-assign.js",
    ),
  );
  it(
    "nonconfigurable-nonenumerable-nonwritable-descriptors-basic.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-nonenumerable-nonwritable-descriptors-basic.js",
    ),
  );
  it(
    "nonconfigurable-nonenumerable-nonwritable-descriptors-set-by-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-nonenumerable-nonwritable-descriptors-set-by-arguments.js",
    ),
  );
  it(
    "nonconfigurable-nonenumerable-nonwritable-descriptors-set-by-param.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-nonenumerable-nonwritable-descriptors-set-by-param.js",
    ),
  );
  it(
    "nonconfigurable-nonwritable-descriptors-basic.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-nonwritable-descriptors-basic.js",
    ),
  );
  it(
    "nonconfigurable-nonwritable-descriptors-define-property-consecutive.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-nonwritable-descriptors-define-property-consecutive.js",
    ),
  );
  it(
    "nonconfigurable-nonwritable-descriptors-set-by-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-nonwritable-descriptors-set-by-arguments.js",
    ),
  );
  it(
    "nonconfigurable-nonwritable-descriptors-set-by-param.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonconfigurable-nonwritable-descriptors-set-by-param.js",
    ),
  );
  it(
    "nonwritable-nonconfigurable-descriptors-basic.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonwritable-nonconfigurable-descriptors-basic.js",
    ),
  );
  it(
    "nonwritable-nonconfigurable-descriptors-set-by-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonwritable-nonconfigurable-descriptors-set-by-arguments.js",
    ),
  );
  it(
    "nonwritable-nonconfigurable-descriptors-set-by-param.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonwritable-nonconfigurable-descriptors-set-by-param.js",
    ),
  );
  it(
    "nonwritable-nonenumerable-nonconfigurable-descriptors-basic.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonwritable-nonenumerable-nonconfigurable-descriptors-basic.js",
    ),
  );
  it(
    "nonwritable-nonenumerable-nonconfigurable-descriptors-set-by-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonwritable-nonenumerable-nonconfigurable-descriptors-set-by-arguments.js",
    ),
  );
  it(
    "nonwritable-nonenumerable-nonconfigurable-descriptors-set-by-define-property.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonwritable-nonenumerable-nonconfigurable-descriptors-set-by-define-property.js",
    ),
  );
  it(
    "nonwritable-nonenumerable-nonconfigurable-descriptors-set-by-param.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/nonwritable-nonenumerable-nonconfigurable-descriptors-set-by-param.js",
    ),
  );
  it(
    "writable-enumerable-configurable-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/arguments-object/mapped/writable-enumerable-configurable-descriptor.js",
    ),
  );
});
