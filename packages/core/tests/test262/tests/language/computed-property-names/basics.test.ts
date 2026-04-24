import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("basics", () => {
  it(
    "number.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/basics/number.js"),
  );
  it(
    "string.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/basics/string.js"),
  );
  it(
    "symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("language/computed-property-names/basics/symbol.js"),
  );
});
