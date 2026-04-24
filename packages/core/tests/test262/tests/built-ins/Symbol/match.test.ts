import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("match", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/match/cross-realm.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/match/prop-desc.js"),
  );
});
