import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("val-var.js", { tags: ["known-passing"] }, createTestHandler("language/identifiers/val-var.js"));
