import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/AsyncFunction/instance-length.js"),
);
