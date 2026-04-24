import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("MIN_VALUE", () => {
  it(
    "S15.7.3.3_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/MIN_VALUE/S15.7.3.3_A2.js"),
  );
  it(
    "S15.7.3.3_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/MIN_VALUE/S15.7.3.3_A3.js"),
  );
  it(
    "S15.7.3.3_A4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Number/MIN_VALUE/S15.7.3.3_A4.js"),
  );
});
