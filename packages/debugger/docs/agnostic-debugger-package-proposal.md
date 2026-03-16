# Agnostic Debugger Package Proposal

## Goal

Create a standalone `@suntime-js/debugger` package that owns paused execution, stepping, breakpoints, and debugger snapshots without depending on DAP.

The package should be pleasant to use directly from tests, CLIs, and local tooling while still exposing the lower-level primitives needed by `@suntime-js/dap`.

## Why Split It Out

The current paused-debugging proposal already points toward a protocol-independent layer. Pulling that layer into its own package makes the dependency direction clearer:

- `@suntime-js/core` remains the runtime and evaluator
- `@suntime-js/debugger` owns debugger orchestration and state
- `@suntime-js/dap` translates DAP requests into debugger package calls

This avoids growing debugger-specific surface area in core and keeps DAP from becoming the de facto debugger API.

## Design Principles

### 1. DAP-agnostic first

The package should model debugging concepts directly:

- sessions
- stops
- breakpoints
- stepping
- stack snapshots
- source identities

It should not expose DAP payload types or require DAP naming.

### 2. Ergonomic by default

Direct consumers should not need to manually wire every event and scheduling edge case just to pause on entry and step a script.

The package should provide:

- a low-level session API for adapters
- promise-based helpers for common workflows such as waiting for the next stop

### 3. Scheduler-aware

The debugger should accept a `runTask` delegate and route execution through it.

That makes host control explicit and keeps later operations such as true step-over, custom scheduling, and instrumentation viable.

### 4. Honest snapshots

The first version should expose exactly what the runtime can currently support:

- one synthetic frame based on the current operation
- source identity from `operation.location.sourceName`
- line and column from the current operation location
- task kind and stop reason

No fake lexical scopes or invented call stacks.

## Package Role

`@suntime-js/debugger` should depend on `@suntime-js/core` and provide a thin orchestration layer over realm evaluation and task iteration.

Its responsibilities should be:

- launching a debuggable evaluation request
- pausing and resuming task execution
- matching line breakpoints
- producing consistent paused-state snapshots
- exposing debugger lifecycle events
- surfacing source names consistently for debugger consumers

Its non-responsibilities should be:

- parsing or evaluating JavaScript itself
- DAP transport and request handling
- IDE-specific source model decisions
- rich object inspection beyond what runtime APIs expose

## Proposed Public API

The package should expose a session factory with a direct, explicit launch model.

### Main factory

```ts
export interface StaticJsDebuggerOptions {
  readonly realm: StaticJsRealm;
  readonly runTask?: StaticJsTaskRunner;
}

export interface StaticJsDebugger {
  createSession(options: StaticJsDebugSessionOptions): StaticJsDebugSession;
}

export declare function createStaticJsDebugger(options: StaticJsDebuggerOptions): StaticJsDebugger;
```

This gives adapter code and local tooling a stable construction point without adding separate wrapper entrypoints for each source kind.

### Session API

```ts
export interface StaticJsDebugSession {
  readonly id: string;
  readonly state: StaticJsDebugSessionState;
  readonly breakpoints: ReadonlyArray<StaticJsDebugBreakpoint>;

  start(): Promise<StaticJsDebugStopEvent | null>;
  continue(): Promise<StaticJsDebugStopEvent | null>;
  next(): Promise<StaticJsDebugStopEvent | null>;
  pause(): void;
  terminate(): void;

  setBreakpoints(sourceName: string, lines: readonly number[]): void;
  addBreakpoint(breakpoint: StaticJsDebugBreakpointInput): StaticJsDebugBreakpoint;
  removeBreakpoint(breakpointId: string): boolean;
  clearBreakpoints(sourceName?: string): void;

  getSnapshot(): StaticJsDebugSnapshot | null;
  getStack(): readonly StaticJsDebugFrame[];
  waitForStop(): Promise<StaticJsDebugStopEvent>;

  onDidStart(listener: (event: StaticJsDebugStartEvent) => void): () => void;
  onDidStop(listener: (event: StaticJsDebugStopEvent) => void): () => void;
  onDidTerminate(listener: (event: StaticJsDebugTerminateEvent) => void): () => void;
  onDidChange(listener: (event: StaticJsDebugChangeEvent) => void): () => void;
}
```

This surface is intentionally broader than the DAP minimum:

- `start()` returning the first stop event makes stop-on-entry and test setup easier to use directly
- `waitForStop()` makes tests and CLIs simpler
- `getStack()` gives DAP and non-DAP consumers the same snapshot path
- `addBreakpoint()` and `removeBreakpoint()` are easier to use interactively than forcing full replacement every time
- `onDidChange()` gives local tooling a single subscription point for UI refreshes

### Launch options

```ts
export interface StaticJsDebugLaunchOptions {
  readonly sourceText?: string;
  readonly sourceName?: string;
  readonly sourceKind?: "script" | "expression" | "module";
  readonly stopOnEntry?: boolean;
  readonly breakpoints?: readonly StaticJsDebugBreakpointInput[];
}
```

For modules, `sourceText` may be omitted if the session entrypoint evaluates by module name instead.

`sourceKind` should stay explicit on launch options rather than being configured as a debugger-wide default. If the caller is creating a session, it should say what is being launched.

### Snapshot model

```ts
export interface StaticJsDebugSnapshot {
  readonly sourceName: string;
  readonly sourceKind: "script" | "expression" | "module";
  readonly operationType: string;
  readonly line: number;
  readonly column: number;
  readonly taskKind: "macrotask" | "microtask";
}

export interface StaticJsDebugFrame {
  readonly id: string;
  readonly name: string;
  readonly sourceName: string;
  readonly line: number;
  readonly column: number;
}
```

Initially `getStack()` can just return one frame derived from the current operation.

If execution is currently inside an imported module, the first version should still return only the currently executing frame. Nested or causal stack reconstruction across module boundaries should be deferred to a later phase.

### Events and states

```ts
export type StaticJsDebugSessionState =
  | "idle"
  | "starting"
  | "running"
  | "paused"
  | "completed"
  | "terminated";

export type StaticJsDebugStopReason =
  | "entry"
  | "breakpoint"
  | "step"
  | "pause"
  | "complete"
  | "terminate"
  | "error";
```

The session should emit explicit stop reasons even for local tooling, not just for DAP translation.

## Source Identity

The debugger package should treat `task.operation.location.sourceName` as the canonical runtime source identity.

Rules:

- if a caller passes `sourceName`, preserve it
- if omitted for inline code, rely on the engine's default generated source name
- for modules, prefer the resolved module specifier
- all breakpoint matching should key off `sourceName`

The debugger package does not need to predict the engine-generated name ahead of time unless a caller explicitly needs to control it. In the common case, the runtime default is sufficient.

If a caller needs a stable known name before launch for external bookkeeping, it can still pass `sourceName` explicitly.

## Breakpoint Verification

Breakpoint verification should be conservative and runtime-aligned.

The only reliable verification path currently available is to parse the source with `@babel/parser` and compare candidate breakpoint lines against the parsed structure, matching what the engine already does internally.

That means:

- unverified breakpoints are acceptable before parsing
- verified breakpoints should be based on parser output, not heuristics
- the debugger package should not claim richer verification than the runtime can support

It may be worth connecting debugger verification more directly to engine parsing later, but the debugger should not depend on reusing the engine's mutated AST until that contract is intentionally designed.

## Execution Model

The debugger should continue to operate at operation boundaries.

### `start()`

- creates the underlying evaluation request
- pauses immediately if `stopOnEntry` is true
- otherwise runs until the first stop condition or completion

`start()` should resolve with the first stop event when one occurs, including stop-on-entry, and `null` only when the session completes or terminates without pausing.

### `continue()`

- resumes execution through the configured `runTask` delegate
- stops on pause request, breakpoint hit, error, or completion
- resolves with the resulting stop event, or `null` if already terminated

### `next()`

- executes exactly one operation
- pauses before the following operation if one exists

This should remain explicitly documented as operation stepping, not statement stepping.

### `pause()`

- sets a pending pause request
- takes effect at the next operation boundary

## DAP Fit

The package should make the DAP adapter thinner, not harder to build.

The DAP package should be able to implement its core requests by calling:

- `start()` for launch and stop-on-entry
- `continue()` for continue
- `next()` for step-next
- `pause()` for pause
- `getStack()` for stackTrace
- `setBreakpoints()` for line breakpoints
- `onDidStop()` and `onDidTerminate()` for events

Nothing in this package should require DAP, but DAP should not need to re-implement debugger behavior either.

## Proposed File Boundaries

```text
packages/debugger/
  docs/
    agnostic-debugger-package-proposal.md
  src/
    breakpoints/
      StaticJsDebugBreakpoint.ts
      StaticJsDebugBreakpointStore.ts
    events/
      StaticJsDebugChangeEvent.ts
      StaticJsDebugStartEvent.ts
      StaticJsDebugStopEvent.ts
      StaticJsDebugTerminateEvent.ts
    session/
      StaticJsDebugSession.ts
      StaticJsDebugSessionImpl.ts
      StaticJsDebugSessionOptions.ts
      StaticJsDebugSessionState.ts
    stack/
      StaticJsDebugFrame.ts
      StaticJsDebugSnapshot.ts
    createStaticJsDebugger.ts
    index.ts
```

This layout keeps the package focused on public debugger concepts instead of on protocol adapters.

## Proposed Test Layout

```text
packages/debugger/tests/
  session/
    start-stop-on-entry.test.ts
    continue-to-breakpoint.test.ts
    next-operation.test.ts
    pause-request.test.ts
    terminate.test.ts
  breakpoints/
    add-breakpoint.test.ts
    clear-breakpoints.test.ts
  integration/
    script-session.test.ts
    expression-session.test.ts
    module-session.test.ts
```

The debugger package should be testable without the DAP package in the loop.

## Concrete Implementation Sequence

### Phase 1: Package skeleton

- create `packages/debugger`
- add package metadata and tsconfig files matching repo conventions
- export type-only public surface first

### Phase 2: Minimal working session

- implement `createStaticJsDebugger`
- implement `createSession()`
- support `start`, `continue`, `next`, `pause`, `terminate`
- surface a single-frame stack snapshot

### Phase 3: Ergonomic session features

- add `waitForStop`
- add incremental breakpoint mutation helpers
- add parser-backed breakpoint verification

### Phase 4: DAP migration

- move runtime-agnostic debugger logic out of `@suntime-js/dap`
- make DAP use `@suntime-js/debugger` only
- keep DAP-specific translation in the adapter package

### Later phase: richer stacks

- add nested stack support when the runtime exposes enough information to do it honestly
- consider how imported-module execution should relate back to parent module evaluation

## Recommendation

The next concrete step should be to scaffold `@suntime-js/debugger` as a real package and move the protocol-independent debug session design there.

That gives the project a single debugger API for:

- local tooling
- tests
- sandbox integration
- DAP translation

without forcing `@suntime-js/core` or `@suntime-js/dap` to carry responsibilities that belong in the middle.
