import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("matchAll", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/matchAll/cross-realm.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/matchAll/prop-desc.js"),
  );
});
