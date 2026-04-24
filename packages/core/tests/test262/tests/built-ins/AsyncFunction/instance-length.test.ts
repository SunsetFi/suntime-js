import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/instance-length.js"),
);
