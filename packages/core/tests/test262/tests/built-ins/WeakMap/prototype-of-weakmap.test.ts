import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-of-weakmap.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakMap/prototype-of-weakmap.js"),
);
