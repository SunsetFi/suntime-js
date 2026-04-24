import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-numeric-separator-literal-dds-dot-dd-nsl-dd-ep-dd.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/string-numeric-separator-literal-dds-dot-dd-nsl-dd-ep-dd.js"),
);
