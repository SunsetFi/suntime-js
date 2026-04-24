import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length-is-absent.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/length-is-absent.js"),
);
