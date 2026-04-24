import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("enumerate", () => {
  it(
    "undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/enumerate/undefined.js"),
  );
});
