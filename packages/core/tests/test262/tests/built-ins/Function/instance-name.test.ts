import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-name.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Function/instance-name.js"),
);
