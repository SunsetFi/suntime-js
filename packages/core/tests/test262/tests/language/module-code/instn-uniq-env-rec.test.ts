import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-uniq-env-rec.js",
  { tags: ["known-passing"] },
  createTestHandler("language/module-code/instn-uniq-env-rec.js"),
);
