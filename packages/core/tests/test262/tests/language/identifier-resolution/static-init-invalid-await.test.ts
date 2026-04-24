import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("static-init-invalid-await.js", createTestHandler("language/identifier-resolution/static-init-invalid-await.js"));
