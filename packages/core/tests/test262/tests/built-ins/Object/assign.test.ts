import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("assign", () => {
  it(
    "ObjectOverride-sameproperty.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/ObjectOverride-sameproperty.js"),
  );
  it(
    "OnlyOneArgument.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/OnlyOneArgument.js"),
  );
  it(
    "Override-notstringtarget.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Override-notstringtarget.js"),
  );
  it(
    "Override.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/Override.js"),
  );
  it(
    "Source-Null-Undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/Source-Null-Undefined.js"),
  );
  it(
    "Source-Number-Boolen-Symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Source-Number-Boolen-Symbol.js"),
  );
  it(
    "Source-String.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Source-String.js"),
  );
  it(
    "Target-Boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Target-Boolean.js"),
  );
  it(
    "Target-Null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Target-Null.js"),
  );
  it(
    "Target-Number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Target-Number.js"),
  );
  it(
    "Target-Object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Target-Object.js"),
  );
  it(
    "Target-String.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Target-String.js"),
  );
  it(
    "Target-Symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Target-Symbol.js"),
  );
  it(
    "Target-Undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/Target-Undefined.js"),
  );
  it(
    "assign-descriptor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/assign-descriptor.js"),
  );
  it(
    "assign-length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/assign-length.js"),
  );
  it(
    "assignment-to-readonly-property-of-target-must-throw-a-typeerror-exception.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Object/assign/assignment-to-readonly-property-of-target-must-throw-a-typeerror-exception.js",
    ),
  );
  it(
    "invoked-as-ctor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/invoked-as-ctor.js"),
  );
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Object/assign/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/not-a-constructor.js"),
  );
  it(
    "source-get-attr-error.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/source-get-attr-error.js"),
  );
  it(
    "source-non-enum.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/source-non-enum.js"),
  );
  it(
    "source-own-prop-desc-missing.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/source-own-prop-desc-missing.js"),
  );
  it(
    "source-own-prop-error.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/source-own-prop-error.js"),
  );
  it(
    "source-own-prop-keys-error.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/source-own-prop-keys-error.js"),
  );
  it(
    "strings-and-symbol-order-proxy.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/strings-and-symbol-order-proxy.js"),
  );
  it(
    "strings-and-symbol-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/strings-and-symbol-order.js"),
  );
  it(
    "target-Array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/target-Array.js"),
  );
  it(
    "target-is-frozen-accessor-property-set-succeeds.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/target-is-frozen-accessor-property-set-succeeds.js"),
  );
  it(
    "target-is-frozen-data-property-set-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/target-is-frozen-data-property-set-throws.js"),
  );
  it(
    "target-is-non-extensible-existing-accessor-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Object/assign/target-is-non-extensible-existing-accessor-property.js",
    ),
  );
  it(
    "target-is-non-extensible-existing-data-property.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/target-is-non-extensible-existing-data-property.js"),
  );
  it(
    "target-is-non-extensible-property-creation-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Object/assign/target-is-non-extensible-property-creation-throws.js",
    ),
  );
  it(
    "target-is-sealed-existing-accessor-property.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/target-is-sealed-existing-accessor-property.js"),
  );
  it(
    "target-is-sealed-existing-data-property.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/target-is-sealed-existing-data-property.js"),
  );
  it(
    "target-is-sealed-property-creation-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/assign/target-is-sealed-property-creation-throws.js"),
  );
  it(
    "target-set-not-writable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/target-set-not-writable.js"),
  );
  it(
    "target-set-user-error.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/assign/target-set-user-error.js"),
  );
});
