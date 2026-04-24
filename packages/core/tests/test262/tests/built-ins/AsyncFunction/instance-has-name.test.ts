import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-has-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/instance-has-name.js"),
);
