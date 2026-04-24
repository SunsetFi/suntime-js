import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("sign", () => {
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/sign/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/sign/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sign/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sign/prop-desc.js"),
  );
  it(
    "sign-specialVals.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/sign/sign-specialVals.js"),
  );
});
