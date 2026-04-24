import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("tanh", () => {
  it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/tanh/length.js"));
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/tanh/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/tanh/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/tanh/prop-desc.js"),
  );
  it(
    "tanh-specialVals.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Math/tanh/tanh-specialVals.js"),
  );
});
