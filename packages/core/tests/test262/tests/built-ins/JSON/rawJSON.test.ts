import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("rawJSON", () => {
  it("basic.js", { tags: ["known-failing"] }, createTestHandler("built-ins/JSON/rawJSON/basic.js"));
  it(
    "bigint-raw-json-can-be-stringified.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/bigint-raw-json-can-be-stringified.js"),
  );
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/builtin.js"),
  );
  it(
    "illegal-empty-and-start-end-chars.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/illegal-empty-and-start-end-chars.js"),
  );
  it(
    "invalid-JSON-text.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/invalid-JSON-text.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/length.js"),
  );
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/JSON/rawJSON/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/prop-desc.js"),
  );
  it(
    "returns-expected-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/JSON/rawJSON/returns-expected-object.js"),
  );
});
