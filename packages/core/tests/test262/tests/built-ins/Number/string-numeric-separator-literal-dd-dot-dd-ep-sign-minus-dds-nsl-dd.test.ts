import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-numeric-separator-literal-dd-dot-dd-ep-sign-minus-dds-nsl-dd.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Number/string-numeric-separator-literal-dd-dot-dd-ep-sign-minus-dds-nsl-dd.js",
  ),
);
