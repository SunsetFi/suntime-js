import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instance.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/ShadowRealm/instance.js"),
);
