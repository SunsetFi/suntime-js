import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-construct-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/instance-construct-throws.js"),
);
