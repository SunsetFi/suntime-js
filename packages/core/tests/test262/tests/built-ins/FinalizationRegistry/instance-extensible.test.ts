import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance-extensible.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/FinalizationRegistry/instance-extensible.js"),
);
