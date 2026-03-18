# Proposal: Migrate `live-sandbox` to `monaco-vscode-api`

## Goal

Replace `@monaco-editor/react` in `live-sandbox` with `@codingame/monaco-vscode-api` so the sandbox can host a VS Code-compatible debug experience in the browser and eventually run the Suntime debugger through the Debug Adapter Protocol surface.

## Current state

The current sandbox is a thin React page around `@monaco-editor/react` and a custom `ScriptInvocation` runner. The editor is effectively a single in-memory text buffer with no workspace, no VS Code services, and no extension host.

That is the core blocker. `monaco-vscode-api` does not just replace the editor widget. It replaces Monaco standalone services with VS Code services, adds a virtual filesystem, and allows extensions and debugger registrations to run in the browser.

Since drafting this proposal, the first bootstrap scaffold has been added under `live-sandbox/src/monaco-vscode`. That scaffold already establishes:

1. A dedicated bootstrap module for one-time initialization.
2. A narrowed public API exported from `src/monaco-vscode/index.ts`.
3. A default sandbox workspace descriptor centered on `/workspace/main.js`.
4. Internal service and extension registration seams.
5. RxJS-based bootstrap lifecycle state via `snapshot$`, matching the existing `useObservation` pattern in the app.
6. Real editor mounting through `createConfiguredEditor(...)` and `createModelReference(...)`.
7. A first overlay filesystem registration for the sandbox workspace.
8. Replacement of the old `@monaco-editor/react` surface in `EvaluatorPage.tsx`.

What is still missing is the rest of the VS Code service stack, extension registration, and the debugger launch path.

In other words, the migration is no longer at the "bootstrap shell only" stage. The current code already proves that the sandbox can boot Monaco with VS Code-backed models and render a file-backed editor. The remaining work is now about finishing the service composition and attaching debugger behavior to it.

## What the upstream docs imply

After reviewing the `monaco-vscode-api` README, wiki, and demo code, the main constraints are:

1. Service initialization is one-time. `initialize(...)` must run before the first editor is created and cannot be meaningfully reconfigured later.
2. File-backed models matter. The recommended path is `monaco.editor.createModelReference(...)` over `createModel(...)`, backed by the files service overlay filesystem.
3. The Vite setup is not optional. The project needs worker wiring, `import.meta.url` handling for dependency assets, CSS handling for VS Code assets, and dependency deduping.
4. Debugging support is available, but it assumes a VS Code extension-style debugger contribution and a debug adapter descriptor factory.
5. The demo debugger uses a websocket-backed adapter, but the important part is that the browser-facing side implements the VS Code debug adapter interface and is returned as a `DebugAdapterInlineImplementation`.
6. The workbench stack is composable, but `editor`, `views`, and `workbench` are mutually exclusive service modes. That choice affects the eventual UI shape.

## Fit with this repository

This repository is in a better position than most because the debug architecture is already split:

1. `@suntime-js/debugger` is runtime-agnostic and already contains the stepping/session logic.
2. `@suntime-js/dap` is the Node-style DAP bootstrap layer around it.
3. The live sandbox already has a browser-side execution loop and status UI.

The important limitation is narrower than that now. `@suntime-js/dap` already exposes a browser-facing `@suntime-js/dap/web` entrypoint with `createStaticJsWebDebugAdapter()`, so the repository no longer needs a fresh web adapter design from scratch.

What is still missing is the final integration layer between that web adapter and the live sandbox workspace. The web adapter currently expects launch arguments such as `sourceText`, `sourceKind`, and `sourceName`, while the sandbox workspace and launch configuration currently describe the program in VS Code terms such as `/workspace/main.js`.

That means the next work should stay focused on the existing dual-entrypoint structure rather than inventing a new packaging strategy:

1. `@suntime-js/dap` for the existing Node/bootstrap implementation
2. `@suntime-js/dap/web` for the browser inline adapter implementation
3. Shared request mapping and adapter utilities in internal modules reused by both entrypoints

I recommend that structure over creating a new package. It preserves a single DAP surface area for the project while still keeping Node and browser runtime assumptions independent.

## Recommended target architecture

### Recommendation

Target a minimal `editor`-mode integration for the first debugger vertical slice.

The goal of the next increment should not be "embedded VS Code" in a broad sense. It should be a narrow end-to-end path that proves:

1. the sandbox editor is backed by a stable virtual file,
2. the sandbox can register a local debugger contribution,
3. the browser adapter can launch and control the current file,
4. the existing sandbox controls can delegate to that debug session.

### Why `editor` mode is the right short-term target

For the current milestone, the project does not need panels, sidebar views, preferences UI, output channels, or other workbench-facing surface area.

What it needs is:

1. file-backed models,
2. extension registration,
3. debug adapter descriptor registration,
4. editor breakpoints and stable source identity,
5. a launch path from `/workspace/main.js` into `@suntime-js/dap/web`.

That is a better fit for an editor-centric integration than a views-oriented one.

### Why not target `views` yet

`views` is still a reasonable later direction, but it expands the surface area before the debugger core path is proven.

For a vertical slice, `views` adds cost in three places that are not yet necessary:

1. more service initialization and worker complexity,
2. more UI composition decisions in React,
3. more ways to conflate debugger correctness with workbench layout problems.

The cleaner path is to validate debugging first in the existing page shell, then decide whether views mode is worth the extra complexity.

## Proposed phases

### Phase 0: Establish the bootstrap shell

Status: completed

Create a dedicated `src/monaco-vscode` module that gives the migration a stable internal boundary before real VS Code services are wired in.

Completed outcomes:

1. A dedicated bootstrapper exists.
2. The public exports are narrowed to app-facing entrypoints.
3. The bootstrapper accepts app-facing VS Code options and owns internal initialization.
4. Bootstrap state is exposed as an RxJS observable rather than a custom event API.
5. A React-facing `MonacoVscodeRoot` component exists.

This phase did not attempt to initialize real Monaco VS Code services yet. It created the shell that later phases can fill in.

### Phase 1: Wire the editor substrate for real

Status: partially complete

Create a narrow spike that proves the following without touching the debugger yet:

1. `live-sandbox` can initialize `monaco-vscode-api` exactly once.
2. The sandbox code buffer is represented as a virtual file such as `file:///workspace/main.js`.
3. The editor is created from `createModelReference(...)` against the virtual filesystem.
4. JavaScript language support, theme support, and settings integration work.

Deliverable:

A sandbox page that still looks mostly the same, but no longer uses `@monaco-editor/react` and no longer treats the source as an anonymous string.

Current assessment:

1. The package and Vite groundwork for `monaco-vscode-api` is already in place.
2. The sandbox workspace is already registered as a memory-backed overlay filesystem.
3. The editor already opens `/workspace/main.js` via `createModelReference(...)`.
4. `EvaluatorPage.tsx` already renders `MonacoVscodeRoot` instead of the old React Monaco wrapper.
5. The missing pieces are the remaining service overrides, workspace-facing VS Code API registration, and richer file/workspace behavior.

### Phase 2: Introduce the browser extension/debug shell

Status: scaffold started

Register a browser debugger contribution using `registerExtension(...)` and the VS Code API exposed by `monaco-vscode-api`.

This extension should:

1. Contribute a debugger type, likely `staticjs`.
2. Contribute JavaScript breakpoints.
3. Register a debug configuration provider.
4. Register a debug adapter descriptor factory.

At this phase, the adapter descriptor factory can return a browser-local inline adapter implementation instead of a websocket transport.

Current assessment:

1. The sandbox already has a `registerSandboxDebugExtension(...)` seam.
2. That seam is still a stub and does not yet call `registerExtension(...)` or `vscode.debug.registerDebugAdapterDescriptorFactory(...)`.
3. This is now the main blocker for exposing the debugger through the embedded editor surface.

### Phase 3: Add a browser-native adapter bridge

Status: partially complete

Implement the browser adapter layer inside `packages/dap` and expose it as `@suntime-js/dap/web`.

That adapter should:

1. Implement the VS Code `DebugAdapter` contract expected by `DebugAdapterInlineImplementation`.
2. Translate DAP requests into calls against `@suntime-js/debugger` sessions.
3. Emit DAP events back to the VS Code debug service.
4. Use stable virtual file URIs and source names such as `/workspace/main.js`.

This is the right place to reuse mapping code from `packages/dap`, but not the right place to depend on `DebugSession.run(...)` or any Node-specific transport bootstrap.

Current assessment:

1. `packages/dap` already exports `@suntime-js/dap/web`.
2. The web adapter already implements message handling for initialize, launch, breakpoints, stackTrace, pause, next, continue, terminate, and disconnect.
3. The main remaining gap is aligning its launch contract with the sandbox workspace and debug configuration flow.

### Phase 4: Move the sandbox UI from custom controls to debug actions

Status: not started

Once the debug adapter is working, the current `Run`, `Pause`, `Step`, and `Abort` buttons can either:

1. Become thin wrappers around VS Code debug commands, or
2. Be removed in favor of the embedded debug UI.

I recommend keeping thin wrappers initially so the sandbox remains familiar and the vertical slice stays independent of any future views/workbench redesign.

### Phase 5: Consolidate shared DAP internals

Status: not started

Once the browser-local adapter works, restructure `packages/dap` so both entrypoints consume the same shared internals where that genuinely reduces duplication.

The likely shape is:

1. Node stdio DAP bootstrap exposed from `@suntime-js/dap`
2. Browser inline adapter exposed from `@suntime-js/dap/web`
3. Shared request normalization, event mapping, and session orchestration utilities under internal modules
4. Optional websocket transport later if a remote execution model becomes valuable

## Completed work

The following work is already done:

1. The migration has a dedicated module root at `live-sandbox/src/monaco-vscode`.
2. The bootstrapper now owns internal initialization instead of requiring callers to provide lifecycle hooks for internal service work.
3. The public surface is intentionally narrow and hides internal providers, surfaces, worker registry constructors, and service bootstrap helpers.
4. The bootstrap lifecycle is modeled as `idle`, `bootstrapping`, `ready`, and `error`.
5. Lifecycle state is published through RxJS and is compatible with `useObservation`.
6. The workspace overlay registers `/workspace/main.js` and `/workspace/.vscode/launch.json`.
7. The internal editor component already creates a file-backed model reference and mounts a configured Monaco editor.
8. `EvaluatorPage.tsx` already uses `MonacoVscodeRoot` as the editor surface.
9. `@suntime-js/dap/web` already exists as a browser-facing adapter entrypoint.
10. The proposal and demo docs describe the bootstrap shell and intended usage.

## Current phase

The project is now late in Phase 1 and approaching the start of Phase 2.

That means the next work should stop focusing on editor replacement and start finishing the smallest debugger-capable VS Code platform composition around that editor:

1. enable only the services required for files, configuration, models, language/theme support, extensions, and debug flows,
2. register the local sandbox extension and debugger contribution,
3. bridge launch configurations to the existing `@suntime-js/dap/web` adapter,
4. keep the current React layout and route existing controls through the debug session.

The debugger-specific phases no longer need to wait for editor substrate work. The editor substrate is present enough that debugger integration can begin in parallel with service completion.

## Minimal debugger vertical slice

The first working debugger slice should deliberately exclude:

1. views mode,
2. full workbench embedding,
3. preferences UI,
4. output panel integration,
5. variables, watch, evaluate, and custom debug sidebars.

It should deliberately include only:

1. `/workspace/main.js` as the stable debug target,
2. JavaScript line breakpoints,
3. launch current file,
4. continue,
5. pause,
6. step over,
7. stack trace retrieval sufficient for the existing status UI or future lightweight overlay UI.

If that slice works reliably, later phases can add richer UI without re-litigating the core adapter contract.

## Next steps

The next concrete steps should be:

1. Finish `initializeMonacoServices.ts` with only the minimal service overrides needed for the debugger slice: files, configuration, model, theme, textmate, languages, extensions, and debug.
2. Add the missing extension-host support package and any worker wiring required for `registerExtension(...)` to behave like the upstream demo.
3. Implement `registerSandboxDebugExtension.ts` as a real local extension registration with a `staticjs` debugger contribution and JavaScript breakpoints.
4. Put the launch-argument bridge in the debug configuration provider so it reads `/workspace/main.js`, resolves `sourceText`, `sourceKind`, and `sourceName`, and passes those to `@suntime-js/dap/web`.
5. Keep the current sandbox buttons, but make them trigger the debug session instead of `ScriptInvocation` directly.
6. Defer views/workbench work until after the debugger slice is stable.

## Concrete package and configuration changes

### Package changes

Most of the initial package migration is already complete. The remaining package work should stay minimal and only enable the runtime services required for the debugger slice.

1. Keep `monaco-editor` aliased to `@codingame/monaco-vscode-editor-api`.
2. Keep `vscode` aliased to `@codingame/monaco-vscode-extension-api`.
3. Keep the existing files, model, theme, textmate, configuration, languages, and debug override packages aligned to the same `@codingame/*` version.
4. Add `@codingame/monaco-vscode-extensions-service-override`, which is the main missing upstream package for local extension registration.
5. Keep `@suntime-js/dap` on the existing dual-entrypoint layout of `.` and `./web`.

For the debugger vertical slice, the sandbox should actively use at least these packages:

1. `@codingame/monaco-vscode-api`
2. `@codingame/monaco-vscode-extensions-service-override`
3. `@codingame/monaco-vscode-files-service-override`
4. `@codingame/monaco-vscode-model-service-override`
5. `@codingame/monaco-vscode-configuration-service-override`
6. `@codingame/monaco-vscode-languages-service-override`
7. `@codingame/monaco-vscode-textmate-service-override`
8. `@codingame/monaco-vscode-theme-service-override`
9. `@codingame/monaco-vscode-debug-service-override`
10. `@codingame/esbuild-import-meta-url-plugin`
11. `@codingame/monaco-vscode-theme-defaults-default-extension`
12. `@codingame/monaco-vscode-javascript-default-extension`

These packages should stay out of the initial slice unless they become strictly necessary during implementation:

1. `@codingame/monaco-vscode-views-service-override`
2. `@codingame/monaco-vscode-output-service-override`
3. `@codingame/monaco-vscode-markers-service-override`
4. `@codingame/monaco-vscode-preferences-service-override`
5. `@codingame/monaco-vscode-storage-service-override`
6. `@codingame/monaco-vscode-keybindings-service-override`

Keep all `@codingame/*` packages on exactly the same version. The upstream troubleshooting guide is explicit that mixed versions cause subtle breakage.

For `@suntime-js/dap`, I also recommend an explicit dual-entrypoint layout rather than environment detection inside one file. Concretely, the package should evolve toward something like:

1. `src/index.ts` for the existing Node adapter export surface
2. `src/web.ts` for the browser adapter export surface
3. `src/shared/*` for protocol mappers and session helpers reused by both
4. `package.json` exports for `.` and `./web`

That keeps browser bundling predictable and avoids accidentally pulling `@vscode/debugadapter` into the web build.

### Vite changes

The upstream demo and troubleshooting notes imply these changes are likely required:

1. Add the `@codingame/esbuild-import-meta-url-plugin` to `optimizeDeps.esbuildOptions.plugins`.
2. Add `worker.format = "es"`.
3. Add a pre-resolve plugin that loads CSS from `@codingame/monaco-vscode*`, `vscode`, and `monaco-editor` as `?inline`.
4. Add `resolve.dedupe` for `vscode` and possibly workspace-local aliased dependencies.
5. Add `optimizeDeps.include` entries for commonjs worker dependencies used by enabled services, especially `vscode-textmate` and `vscode-oniguruma`.
6. If using richer TypeScript extension features later, serve COOP and COEP headers so `crossOriginIsolated` is true.

## Proposed runtime structure inside `live-sandbox`

### 1. A one-time Monaco/VS Code bootstrap module

Create a dedicated bootstrap module that:

1. Imports default extensions and `vscode/localExtensionHost`.
2. Configures `window.MonacoEnvironment` workers.
3. Registers the virtual workspace and in-memory file(s).
4. Calls `initialize(...)` once.

This must be isolated from React component re-renders.

This module now exists in scaffold form. The remaining work is replacing its placeholders with real `monaco-vscode-api` behavior.

### 2. A file-backed editor component

Replace `@monaco-editor/react` with a component that:

1. Creates or opens `/workspace/main.js` in the overlay filesystem.
2. Acquires a model reference with `createModelReference(...)`.
3. Binds the editor to `modelRef.object.textEditorModel`.
4. Saves or mirrors edits back into the virtual file.

The React-side root component exists already. The missing piece is the actual editor creation and model binding.

### 3. A sandbox debug extension module

Create a local extension registration module that contributes:

1. `debuggers: [{ type: "staticjs", ... }]`
2. `breakpoints: [{ language: "javascript" }]`

The extension module then registers the debug configuration provider and adapter descriptor factory.

The scaffold for this module exists, but it is still a stub.

### 4. A browser adapter bridge

Implement the bridge in `@suntime-js/dap/web` with two responsibilities:

1. DAP-facing request and event shape
2. Calls into `@suntime-js/debugger`

This bridge should be the single source of truth for translating:

1. Launch arguments to session creation
2. Virtual file URIs to source names
3. Breakpoint sets to debugger breakpoints
4. Pause, continue, next, terminate actions to debugger control methods
5. Stop events and stack frames back into DAP events and responses

The Node entrypoint should continue to own stdio/bootstrap concerns, while `@suntime-js/dap/web` should own the browser-facing `DebugAdapterInlineImplementation` path.

## Key design decisions

### Stable source identity

Use a stable file path such as `/workspace/main.js` everywhere.

Do not use ephemeral source names. The debugger architecture notes in this repository already call out that stable source names are important for breakpoint identity.

### Prefer in-process debugging for the sandbox

For the live sandbox, an in-browser inline adapter is the cleanest first implementation.

Reasons:

1. The interpreted program already runs in the page.
2. The debugger engine is already browser-friendly.
3. Introducing websocket transport now adds complexity without adding product value.
4. The upstream demo proves the debug service can consume inline adapters.

### Preserve the custom page shell

Keep React and MUI responsible for the outer page while letting `monaco-vscode-api` own editor and debug views.

This avoids turning the live sandbox into a generic mini-VS Code when what you actually want is a purpose-built playground with debugging.

## Risks and mitigations

### Risk: the migration becomes a full workbench rewrite

Mitigation:

Choose `views` mode as the target and keep the workbench out of scope unless the debug UX proves impossible without it.

### Risk: the web path accidentally depends on Node-only DAP bootstrap code

Mitigation:

Keep both implementations in `packages/dap`, but separate them by entrypoint. Reuse mapping logic selectively, but do not couple `@suntime-js/dap/web` to `@vscode/debugadapter` runtime expectations.

### Risk: initialization bugs due to React remounts

Mitigation:

Move VS Code service initialization into a module-level singleton, not component lifecycle code.

### Risk: asset and worker failures under Vite dev mode

Mitigation:

Implement the Vite configuration from upstream demo patterns before attempting deeper debugging work.

### Risk: partial debug support disappoints users

Mitigation:

Define the first supported debug scope narrowly:

1. Launch current file
2. Line breakpoints
3. Continue
4. Pause
5. Step over
6. Stack trace

Leave scopes, variables, watch expressions, and evaluate for later. That matches the current capabilities of `packages/dap` anyway.

## Recommended implementation order

1. Finish Phase 1 by wiring real `monaco-vscode-api` initialization into the existing bootstrap shell.
2. Replace the editor substrate and introduce a file-backed virtual workspace.
3. Get JavaScript editing, theming, and settings stable under `monaco-vscode-api`.
4. Register a local browser extension that contributes the `staticjs` debugger.
5. Implement `@suntime-js/dap/web` as a browser inline adapter backed by `@suntime-js/debugger`.
6. Wire existing sandbox actions to VS Code debug commands.
7. Add debug panels and breakpoint UX.
8. Then extract or tighten shared internals inside `packages/dap` only where both entrypoints actually benefit.

## Bottom line

This migration is viable, and the repository already has the right debugger split to support it.

The important engineering choice is to avoid treating `monaco-vscode-api` as a drop-in React editor replacement. It is a VS Code service platform. The right path is:

1. Move the sandbox editor to a file-backed virtual workspace.
2. Register a browser-local debug extension.
3. Implement `@suntime-js/dap/web` in the existing DAP package and bridge the debug UI through that browser entrypoint.
4. Keep `@suntime-js/dap` as the Node/bootstrap path, with shared utilities under the same package but separate runtime entrypoints.

That gives the sandbox a realistic route to browser debugging without forcing a premature full workbench rewrite.
