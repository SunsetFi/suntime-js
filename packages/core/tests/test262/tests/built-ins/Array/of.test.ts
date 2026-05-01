import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "construct-this-with-the-number-of-arguments.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/construct-this-with-the-number-of-arguments.js"),
);

it(
  "creates-a-new-array-from-arguments.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/creates-a-new-array-from-arguments.js"),
);

it(
  "does-not-use-prototype-properties.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/does-not-use-prototype-properties.js"),
);

it(
  "does-not-use-set-for-indices.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/does-not-use-set-for-indices.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Array/of/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Array/of/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/not-a-constructor.js"),
);

it("of.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Array/of/of.js"));

it(
  "proto-from-ctor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Array/of/proto-from-ctor-realm.js"),
);

it(
  "return-a-custom-instance.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/return-a-custom-instance.js"),
);

it(
  "return-a-new-array-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/return-a-new-array-object.js"),
);

it(
  "return-abrupt-from-contructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/return-abrupt-from-contructor.js"),
);

it(
  "return-abrupt-from-data-property-using-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/return-abrupt-from-data-property-using-proxy.js"),
);

it(
  "return-abrupt-from-data-property.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Array/of/return-abrupt-from-data-property.js"),
);

it(
  "return-abrupt-from-setting-length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/return-abrupt-from-setting-length.js"),
);

it(
  "sets-length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Array/of/sets-length.js"),
);
