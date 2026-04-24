import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("setPrototypeOf", () => {
  it(
    "bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/bigint.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/not-a-constructor.js"),
  );
  it(
    "o-not-obj-coercible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/o-not-obj-coercible.js"),
  );
  it(
    "o-not-obj.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/o-not-obj.js"),
  );
  it(
    "property-descriptor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/property-descriptor.js"),
  );
  it(
    "proto-not-obj.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/proto-not-obj.js"),
  );
  it(
    "set-error.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/set-error.js"),
  );
  it(
    "set-failure-cycle.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/set-failure-cycle.js"),
  );
  it(
    "set-failure-non-extensible.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/set-failure-non-extensible.js"),
  );
  it(
    "success.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/setPrototypeOf/success.js"),
  );
});
