import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("dotall", () => {
  it(
    "with-dotall-unicode.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/dotall/with-dotall-unicode.js"),
  );
  it(
    "with-dotall.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/dotall/with-dotall.js"),
  );
  it(
    "without-dotall-unicode.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/dotall/without-dotall-unicode.js"),
  );
  it(
    "without-dotall.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/dotall/without-dotall.js"),
  );
});
