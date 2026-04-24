import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("val-if.js", { tags: ["known-passing"] }, createTestHandler("language/identifiers/val-if.js"));
