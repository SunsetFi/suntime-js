import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("import.meta", () => {
  it(
    "distinct-for-each-module.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/import.meta/distinct-for-each-module.js"),
  );
  it(
    "import-meta-is-an-ordinary-object.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/import.meta/import-meta-is-an-ordinary-object.js"),
  );
  it(
    "not-accessible-from-direct-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/import.meta/not-accessible-from-direct-eval.js"),
  );
  it(
    "same-object-returned.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/import.meta/same-object-returned.js"),
  );
  describe("syntax", () => {
    it(
      "escape-sequence-import.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/import.meta/syntax/escape-sequence-import.js"),
    );
    it(
      "escape-sequence-meta.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/import.meta/syntax/escape-sequence-meta.js"),
    );
    it(
      "goal-async-function-params-or-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/goal-async-function-params-or-body.js",
      ),
    );
    it(
      "goal-async-generator-params-or-body.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/goal-async-generator-params-or-body.js",
      ),
    );
    it(
      "goal-function-params-or-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/import.meta/syntax/goal-function-params-or-body.js"),
    );
    it(
      "goal-generator-params-or-body.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/import.meta/syntax/goal-generator-params-or-body.js"),
    );
    it(
      "goal-module-nested-function.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/import.meta/syntax/goal-module-nested-function.js"),
    );
    it(
      "goal-module.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/import.meta/syntax/goal-module.js"),
    );
    it(
      "goal-script.js",
      { tags: ["known-failing"] },
      createTestHandler("language/expressions/import.meta/syntax/goal-script.js"),
    );
    it(
      "invalid-assignment-target-array-destructuring-expr.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-array-destructuring-expr.js",
      ),
    );
    it(
      "invalid-assignment-target-array-rest-destructuring-expr.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-array-rest-destructuring-expr.js",
      ),
    );
    it(
      "invalid-assignment-target-assignment-expr.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-assignment-expr.js",
      ),
    );
    it(
      "invalid-assignment-target-for-await-of-loop.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-for-await-of-loop.js",
      ),
    );
    it(
      "invalid-assignment-target-for-in-loop.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-for-in-loop.js",
      ),
    );
    it(
      "invalid-assignment-target-for-of-loop.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-for-of-loop.js",
      ),
    );
    it(
      "invalid-assignment-target-object-destructuring-expr.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-object-destructuring-expr.js",
      ),
    );
    it(
      "invalid-assignment-target-object-rest-destructuring-expr.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-object-rest-destructuring-expr.js",
      ),
    );
    it(
      "invalid-assignment-target-update-expr.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/expressions/import.meta/syntax/invalid-assignment-target-update-expr.js",
      ),
    );
  });
});
