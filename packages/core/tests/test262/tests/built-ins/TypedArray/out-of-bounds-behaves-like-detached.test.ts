import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("out-of-bounds-behaves-like-detached.js", createTestHandler("built-ins/TypedArray/out-of-bounds-behaves-like-detached.js"));
