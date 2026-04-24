import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.2.1.1.3-4-27.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/global/10.2.1.1.3-4-27.js"),
);
