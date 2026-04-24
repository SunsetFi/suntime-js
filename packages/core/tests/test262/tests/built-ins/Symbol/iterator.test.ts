import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("iterator", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/iterator/cross-realm.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/iterator/prop-desc.js"),
  );
});
