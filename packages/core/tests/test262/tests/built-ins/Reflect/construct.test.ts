import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("construct", () => {
  it(
    "arguments-list-is-not-array-like.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/construct/arguments-list-is-not-array-like.js"),
  );
  it(
    "construct.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/construct/construct.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/construct/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/construct/name.js"),
  );
  it(
    "newtarget-is-not-constructor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/construct/newtarget-is-not-constructor-throws.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/construct/not-a-constructor.js"),
  );
  it(
    "return-with-newtarget-argument.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/construct/return-with-newtarget-argument.js"),
  );
  it(
    "return-without-newtarget-argument.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/construct/return-without-newtarget-argument.js"),
  );
  it(
    "target-is-not-constructor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Reflect/construct/target-is-not-constructor-throws.js"),
  );
  it(
    "use-arguments-list.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Reflect/construct/use-arguments-list.js"),
  );
});
