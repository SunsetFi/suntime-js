import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("new.target", () => {
  it(
    "asi.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/asi.js"),
  );
  it(
    "escaped-new.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/escaped-new.js"),
  );
  it(
    "escaped-target.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/escaped-target.js"),
  );
  it(
    "unary-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/unary-expr.js"),
  );
  it(
    "value-via-call.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-call.js"),
  );
  it(
    "value-via-fpapply.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-fpapply.js"),
  );
  it(
    "value-via-fpcall.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-fpcall.js"),
  );
  it(
    "value-via-member.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-member.js"),
  );
  it(
    "value-via-new.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-new.js"),
  );
  it(
    "value-via-reflect-apply.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-reflect-apply.js"),
  );
  it(
    "value-via-reflect-construct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-reflect-construct.js"),
  );
  it(
    "value-via-super-call.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/new.target/value-via-super-call.js"),
  );
  it(
    "value-via-super-property.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new.target/value-via-super-property.js"),
  );
  it(
    "value-via-tagged-template.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/new.target/value-via-tagged-template.js"),
  );
});
