import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "duplicate-named-capturing-groups-syntax.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/duplicate-named-capturing-groups-syntax.js"),
);
