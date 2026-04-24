import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "exec-args.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/exec-args.js"),
);
