import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AggregateError/prototype/constructor.js"),
  );
  it(
    "errors-absent-on-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AggregateError/prototype/errors-absent-on-prototype.js"),
  );
  it(
    "message.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AggregateError/prototype/message.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AggregateError/prototype/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AggregateError/prototype/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/AggregateError/prototype/proto.js"),
  );
});
