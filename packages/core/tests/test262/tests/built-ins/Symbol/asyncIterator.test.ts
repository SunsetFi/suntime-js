import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("asyncIterator", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/asyncIterator/cross-realm.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/asyncIterator/prop-desc.js"),
  );
});
