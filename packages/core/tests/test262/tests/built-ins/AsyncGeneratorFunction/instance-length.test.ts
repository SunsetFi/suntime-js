import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/instance-length.js"),
);
