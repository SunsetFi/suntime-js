import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("basics", () => {
  it(
    "number.js",
    { tags: ["known-failing"] },
    createTestHandler("language/computed-property-names/basics/number.js"),
  );
  it(
    "string.js",
    { tags: ["known-failing"] },
    createTestHandler("language/computed-property-names/basics/string.js"),
  );
  it(
    "symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("language/computed-property-names/basics/symbol.js"),
  );
});
