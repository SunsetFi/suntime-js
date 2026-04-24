import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("search", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/search/cross-realm.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/search/prop-desc.js"),
  );
});
