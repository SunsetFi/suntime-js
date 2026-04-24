import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncGeneratorFunction/instance-name.js"),
);
