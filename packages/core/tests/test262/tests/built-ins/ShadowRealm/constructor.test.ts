import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ShadowRealm/constructor.js"),
);
