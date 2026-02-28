import StaticJsEngineError from "../../errors/StaticJsEngineError.js";
import { isStaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { AbruptCompletion } from "./completion-types/AbruptCompletion.js";
import { ControlFlowCompletion } from "./completion-types/ControlFlowCompletion.js";

import { BreakCompletion } from "./completion-types/BreakCompletion.js";
import { ContinueCompletion } from "./completion-types/ContinueCompletion.js";
import { NormalCompletion } from "./completion-types/NormalCompletion.js";
import { ReturnCompletion } from "./completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "./completion-types/ThrowCompletion.js";
import {
  nameCompletionValue,
  type CompletionValue,
} from "./CompletionValue.js";

import nameCompletionLike from "./name-completion-like.js";

export type Completion =
  | BreakCompletion
  | ContinueCompletion
  | NormalCompletion
  | ReturnCompletion
  | ThrowCompletion;

export namespace Completion {
  export type Break = BreakCompletion;
  export const Break = BreakCompletion;

  export type Continue = ContinueCompletion;
  export const Continue = ContinueCompletion;

  export type Normal = NormalCompletion;
  export const Normal = NormalCompletion;

  export type Return = ReturnCompletion;
  export const Return = ReturnCompletion;

  export type Throw = ThrowCompletion;
  export const Throw = ThrowCompletion;

  export type Abrupt = AbruptCompletion;
  export const Abrupt = AbruptCompletion;

  export type ControlFlow = ControlFlowCompletion;
  export const ControlFlow = ControlFlowCompletion;

  export function is(value: unknown): value is Completion {
    return (
      BreakCompletion.is(value) ||
      ContinueCompletion.is(value) ||
      NormalCompletion.is(value) ||
      ReturnCompletion.is(value) ||
      ThrowCompletion.is(value)
    );
  }

  export function assert(value: unknown): asserts value is Completion {
    if (!Completion.is(value)) {
      throw new StaticJsEngineError(
        `Expected a completion, but got ${nameCompletionLike(value)}.`,
      );
    }
  }

  export function value(completion: Completion): CompletionValue {
    if (NormalCompletion.is(completion)) {
      return completion;
    }

    return completion.value;
  }

  export function updateEmpty(
    completion: Completion,
    value: CompletionValue,
  ): Completion {
    if (AbruptCompletion.is(completion)) {
      if (completion.value !== null) {
        return completion;
      }

      if (value === null) {
        return completion;
      }

      if (!isStaticJsValue(value)) {
        throw new StaticJsEngineError(
          `Cannot set a ${nameCompletionValue(value)} value on an abrupt completion.`,
        );
      }

      return {
        ...completion,
        value: value,
      };
    }

    // Is a normal completion.

    if (completion) {
      return completion;
    }

    return value;
  }

  export function handleRuntime(value: unknown): void {
    ControlFlowCompletion.handleRuntime(value);
    ThrowCompletion.handleRuntime(value);
  }
}
