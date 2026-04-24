import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("parseInt", () => {
  it(
    "nonexistent.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/BigInt/parseInt/nonexistent.js"),
  );
});
