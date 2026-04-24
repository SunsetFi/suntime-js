import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("next", () => {
  it(
    "custom-regexpexec-call-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-call-throws.js",
    ),
  );
  it(
    "custom-regexpexec-get-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-get-throws.js",
    ),
  );
  it(
    "custom-regexpexec-match-get-0-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-match-get-0-throws.js",
    ),
  );
  it(
    "custom-regexpexec-match-get-0-tostring-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-match-get-0-tostring-throws.js",
    ),
  );
  it(
    "custom-regexpexec-match-get-0-tostring.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-match-get-0-tostring.js",
    ),
  );
  it(
    "custom-regexpexec-not-callable.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-not-callable.js",
    ),
  );
  it(
    "custom-regexpexec.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExpStringIteratorPrototype/next/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExpStringIteratorPrototype/next/name.js"),
  );
  it(
    "next-iteration-global.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExpStringIteratorPrototype/next/next-iteration-global.js"),
  );
  it(
    "next-iteration.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExpStringIteratorPrototype/next/next-iteration.js"),
  );
  it(
    "next-missing-internal-slots.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/next-missing-internal-slots.js",
    ),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExpStringIteratorPrototype/next/prop-desc.js"),
  );
  it(
    "regexp-tolength-lastindex-throws.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExpStringIteratorPrototype/next/regexp-tolength-lastindex-throws.js",
    ),
  );
  it(
    "this-is-not-object-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExpStringIteratorPrototype/next/this-is-not-object-throws.js"),
  );
});
