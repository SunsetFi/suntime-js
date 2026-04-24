import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("prop-desc.js", { tags: ["known-failing"] }, createTestHandler("built-ins/isNaN/prop-desc.js"));
