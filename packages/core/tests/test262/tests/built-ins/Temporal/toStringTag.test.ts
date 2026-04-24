import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("toStringTag", () => {
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/toStringTag/prop-desc.js"),
  );
  it(
    "string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/toStringTag/string.js"),
  );
});
