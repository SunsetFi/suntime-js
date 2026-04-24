import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("split", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/split/cross-realm.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/split/prop-desc.js"),
  );
});
