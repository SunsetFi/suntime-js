import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "extensibility.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ShadowRealm/extensibility.js"),
);
