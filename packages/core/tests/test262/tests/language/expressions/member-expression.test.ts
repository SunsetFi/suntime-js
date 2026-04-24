import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("member-expression", () => {
  it(
    "computed-reference-null-or-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/member-expression/computed-reference-null-or-undefined.js",
    ),
  );
});
