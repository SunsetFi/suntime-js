import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "custom-proto-if-not-object-fallbacks-to-default-prototype-sab.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/DataView/custom-proto-if-not-object-fallbacks-to-default-prototype-sab.js",
  ),
);
