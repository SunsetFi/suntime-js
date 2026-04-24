import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("POSITIVE_INFINITY", () => {
  it(
    "S15.7.3.6_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/POSITIVE_INFINITY/S15.7.3.6_A1.js"),
  );
  it(
    "S15.7.3.6_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/POSITIVE_INFINITY/S15.7.3.6_A2.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/POSITIVE_INFINITY/prop-desc.js"),
  );
  it(
    "value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Number/POSITIVE_INFINITY/value.js"),
  );
});
