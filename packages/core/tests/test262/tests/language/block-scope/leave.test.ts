import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("leave", () => {
  it(
    "finally-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/finally-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    ),
  );
  it(
    "finally-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/finally-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    ),
  );
  it(
    "for-loop-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/for-loop-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    ),
  );
  it(
    "for-loop-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/for-loop-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    ),
  );
  it(
    "nested-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/nested-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    ),
  );
  it(
    "nested-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/nested-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    ),
  );
  it(
    "outermost-binding-updated-in-catch-block-nested-block-let-declaration-unseen-outside-of-block.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/outermost-binding-updated-in-catch-block-nested-block-let-declaration-unseen-outside-of-block.js",
    ),
  );
  it(
    "try-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/try-block-let-declaration-only-shadows-outer-parameter-value-1.js",
    ),
  );
  it(
    "try-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/block-scope/leave/try-block-let-declaration-only-shadows-outer-parameter-value-2.js",
    ),
  );
  it(
    "verify-context-in-finally-block.js",
    { tags: ["known-passing"] },
    createTestHandler("language/block-scope/leave/verify-context-in-finally-block.js"),
  );
  it(
    "verify-context-in-for-loop-block.js",
    { tags: ["known-passing"] },
    createTestHandler("language/block-scope/leave/verify-context-in-for-loop-block.js"),
  );
  it(
    "verify-context-in-labelled-block.js",
    { tags: ["known-passing"] },
    createTestHandler("language/block-scope/leave/verify-context-in-labelled-block.js"),
  );
  it(
    "verify-context-in-try-block.js",
    { tags: ["known-passing"] },
    createTestHandler("language/block-scope/leave/verify-context-in-try-block.js"),
  );
  it(
    "x-after-break-to-label.js",
    { tags: ["known-passing"] },
    createTestHandler("language/block-scope/leave/x-after-break-to-label.js"),
  );
  it(
    "x-before-continue.js",
    { tags: ["known-passing"] },
    createTestHandler("language/block-scope/leave/x-before-continue.js"),
  );
});
