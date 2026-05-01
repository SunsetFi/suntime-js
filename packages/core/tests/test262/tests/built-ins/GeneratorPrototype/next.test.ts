import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "consecutive-yields.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/consecutive-yields.js"),
);

it(
  "context-method-invocation.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/context-method-invocation.js"),
);

it(
  "from-state-executing.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/from-state-executing.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/length.js"),
);

it(
  "lone-return.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/lone-return.js"),
);

it(
  "lone-yield.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/lone-yield.js"),
);

it(
  "name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/name.js"),
);

it(
  "no-control-flow.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/no-control-flow.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/not-a-constructor.js"),
);

it(
  "property-descriptor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/property-descriptor.js"),
);

it(
  "result-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/result-prototype.js"),
);

it(
  "return-yield-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/return-yield-expr.js"),
);

it(
  "this-val-not-generator.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/this-val-not-generator.js"),
);

it(
  "this-val-not-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorPrototype/next/this-val-not-object.js"),
);
