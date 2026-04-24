import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("prop-desc.js", { tags: ["known-passing"] }, createTestHandler("built-ins/NaN/prop-desc.js"));
