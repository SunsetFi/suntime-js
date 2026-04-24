import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "start-escape-seq.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/start-escape-seq.js"),
);
