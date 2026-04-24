import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "tonumber-numeric-separator-literal-dds-dot-dd-nsl-dd-ep-dd.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/parseFloat/tonumber-numeric-separator-literal-dds-dot-dd-nsl-dd-ep-dd.js",
  ),
);
