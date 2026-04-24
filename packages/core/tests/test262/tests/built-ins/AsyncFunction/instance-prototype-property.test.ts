import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-prototype-property.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/AsyncFunction/instance-prototype-property.js"),
);
