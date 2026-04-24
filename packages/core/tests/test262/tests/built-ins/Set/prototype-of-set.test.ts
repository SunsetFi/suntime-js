import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-of-set.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/prototype-of-set.js"),
);
