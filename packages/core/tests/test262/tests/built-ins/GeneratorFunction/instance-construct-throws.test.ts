import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-construct-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorFunction/instance-construct-throws.js"),
);
