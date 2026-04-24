import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("no-iterable.js", createTestHandler("built-ins/WeakSet/no-iterable.js"));
