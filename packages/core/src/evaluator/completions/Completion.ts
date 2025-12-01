import type { AbruptCompletion } from "./AbruptCompletion.js";
import type { NormalCompletion } from "./NormalCompletion.js";

export type Completion = NormalCompletion | AbruptCompletion;
