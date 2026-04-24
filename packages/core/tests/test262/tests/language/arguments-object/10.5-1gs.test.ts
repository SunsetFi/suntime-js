import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.5-1gs.js",
  { tags: ["known-failing"] },
  createTestHandler("language/arguments-object/10.5-1gs.js"),
);
