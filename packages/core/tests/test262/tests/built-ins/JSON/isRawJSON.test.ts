import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isRawJSON", () => {
  it(
    "basic.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/isRawJSON/basic.js"),
  );
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/isRawJSON/builtin.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/isRawJSON/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/JSON/isRawJSON/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/isRawJSON/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/isRawJSON/prop-desc.js"),
  );
});
