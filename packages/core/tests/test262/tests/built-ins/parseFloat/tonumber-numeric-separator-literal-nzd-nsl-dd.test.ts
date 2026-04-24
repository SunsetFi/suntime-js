import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "tonumber-numeric-separator-literal-nzd-nsl-dd.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/parseFloat/tonumber-numeric-separator-literal-nzd-nsl-dd.js"),
);
