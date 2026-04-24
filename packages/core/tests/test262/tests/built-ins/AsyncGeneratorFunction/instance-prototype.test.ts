import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/instance-prototype.js"),
);
