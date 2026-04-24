import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("enumerate", () => {
  it(
    "removed-does-not-trigger.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Proxy/enumerate/removed-does-not-trigger.js"),
  );
});
