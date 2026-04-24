import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("hasInstance", () => {
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/hasInstance/cross-realm.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/hasInstance/prop-desc.js"),
  );
});
