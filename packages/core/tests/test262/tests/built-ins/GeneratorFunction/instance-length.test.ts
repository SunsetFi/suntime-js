import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/GeneratorFunction/instance-length.js"),
);
