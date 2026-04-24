import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("binding", () => {
  it(
    "initialization-requires-object-coercible-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/destructuring/binding/initialization-requires-object-coercible-null.js",
    ),
  );
  it(
    "initialization-requires-object-coercible-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/destructuring/binding/initialization-requires-object-coercible-undefined.js",
    ),
  );
  it(
    "initialization-returns-normal-completion-for-empty-objects.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/destructuring/binding/initialization-returns-normal-completion-for-empty-objects.js",
    ),
  );
  it(
    "keyed-destructuring-property-reference-target-evaluation-order-with-bindings.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/destructuring/binding/keyed-destructuring-property-reference-target-evaluation-order-with-bindings.js",
    ),
  );
  describe("syntax", () => {
    it(
      "array-elements-with-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler("language/destructuring/binding/syntax/array-elements-with-initializer.js"),
    );
    it(
      "array-elements-with-object-patterns.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/array-elements-with-object-patterns.js",
      ),
    );
    it(
      "array-elements-without-initializer.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/array-elements-without-initializer.js",
      ),
    );
    it(
      "array-pattern-with-elisions.js",
      { tags: ["known-passing"] },
      createTestHandler("language/destructuring/binding/syntax/array-pattern-with-elisions.js"),
    );
    it(
      "array-pattern-with-no-elements.js",
      { tags: ["known-passing"] },
      createTestHandler("language/destructuring/binding/syntax/array-pattern-with-no-elements.js"),
    );
    it(
      "array-rest-elements.js",
      { tags: ["known-passing"] },
      createTestHandler("language/destructuring/binding/syntax/array-rest-elements.js"),
    );
    it(
      "destructuring-array-parameters-function-arguments-length.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/destructuring-array-parameters-function-arguments-length.js",
      ),
    );
    it(
      "destructuring-object-parameters-function-arguments-length.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/destructuring-object-parameters-function-arguments-length.js",
      ),
    );
    it(
      "object-pattern-with-no-property-list.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/object-pattern-with-no-property-list.js",
      ),
    );
    it(
      "property-list-bindings-elements.js",
      { tags: ["known-passing"] },
      createTestHandler("language/destructuring/binding/syntax/property-list-bindings-elements.js"),
    );
    it(
      "property-list-followed-by-a-single-comma.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/property-list-followed-by-a-single-comma.js",
      ),
    );
    it(
      "property-list-single-name-bindings.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/property-list-single-name-bindings.js",
      ),
    );
    it(
      "property-list-with-property-list.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/property-list-with-property-list.js",
      ),
    );
    it(
      "recursive-array-and-object-patterns.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "language/destructuring/binding/syntax/recursive-array-and-object-patterns.js",
      ),
    );
  });
  it.skip("typedarray-backed-by-resizable-buffer.js", () => {
    /* Ignored Test */
  });
});
