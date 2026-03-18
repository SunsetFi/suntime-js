# Monaco VSCode Bootstrap Demo

This document shows the intended lifecycle and usage of the scaffold under `src/monaco-vscode`.

The public surface should stay app-facing. Internal details such as service initializers, worker registries, providers, and extension registration should remain implementation details behind the bootstrapper.

## Lifecycle

The bootstrapper in `src/monaco-vscode/bootstrap.ts` behaves like a small state machine.

### `idle`

Initial state before any setup starts.

```ts
const snapshot = monacoVscodeBootstrap.getSnapshot();
// { status: "idle", runtime: null, error: null }
```

### `bootstrapping`

Entered when `initialize()` is called for the first time.

At this stage the bootstrapper:

1. Resolves the workspace descriptor.
2. Resolves the worker registry.
3. Applies the provided VS Code API options.
4. Initializes Monaco/VS Code services internally.
5. Registers sandbox extensions internally.

```ts
await monacoVscodeBootstrap.initialize({
  rootElement,
  vscodeApi: {
    configurationDefaults: {
      "editor.minimap.enabled": false,
    },
    enableSandboxDebugger: true,
    serviceOverrides: {
      debug: true,
    },
  },
});
```

### `ready`

Entered when initialization succeeds.

The runtime contains the resolved workspace, worker registry, root element, and service container returned by the service initializer.

```ts
const runtime = await monacoVscodeBootstrap.initialize({ rootElement });

console.log(runtime.initializedAt);
console.log(runtime.workspace.entryFilePath);
console.log(runtime.services);
```

### `error`

Entered when any bootstrap stage throws.

```ts
try {
  await monacoVscodeBootstrap.initialize({ rootElement });
} catch (error) {
  console.error(error);
}

const snapshot = monacoVscodeBootstrap.getSnapshot();
// { status: "error", runtime: null, error: Error }
```

## Proposed Usage

### 1. Use the default workspace

The simplest path uses the built-in sandbox workspace descriptor from `createSandboxWorkspace()`.

```ts
import { monacoVscodeBootstrap } from "@/monaco-vscode";

await monacoVscodeBootstrap.initialize({
  rootElement,
});
```

### 2. Provide a custom workspace

This is useful if the page wants to supply the source text or multiple files.

```ts
import {
  MONACO_VSCODE_ENTRY_FILE_PATH,
  createSandboxWorkspace,
  monacoVscodeBootstrap,
} from "@/monaco-vscode";

const workspace = createSandboxWorkspace(`console.log("demo");\n`);

await monacoVscodeBootstrap.initialize({
  rootElement,
  workspace: {
    ...workspace,
    files: [
      ...workspace.files,
      {
        path: "/workspace/helper.js",
        contents: "export const value = 42;\n",
        language: "javascript",
      },
    ],
    entryFilePath: MONACO_VSCODE_ENTRY_FILE_PATH,
  },
});
```

### 3. Provide hook overrides

The caller should not directly bootstrap `monaco-vscode-api`. Instead, it should pass the configuration our bootstrapper needs and let the bootstrapper handle the internal wiring.

```ts
import { monacoVscodeBootstrap } from "@/monaco-vscode";

await monacoVscodeBootstrap.initialize({
  rootElement,
  vscodeApi: {
    configurationDefaults: {
      "editor.wordWrap": "on",
    },
    userServices: {
      // App-provided service hooks live here.
    },
  },
});
```

### 4. Observe lifecycle state with RxJS

The bootstrapper publishes state changes through `snapshot$`, which fits the existing `useObservation` pattern used elsewhere in the sandbox.

```ts
const snapshot = useObservation(monacoVscodeBootstrap.snapshot$);

if (snapshot?.status === "bootstrapping") {
  console.log("Loading VS Code services...");
}
```

### 5. Use the React root component

`MonacoVscodeRoot` is the proposed React-facing entrypoint.

```tsx
import CircularProgress from "@mui/material/CircularProgress";

import { MonacoVscodeRoot } from "@/monaco-vscode";

export function SandboxEditor() {
  return (
    <MonacoVscodeRoot
      fallback={<CircularProgress size="1rem" />}
      surfaceProps={{ style: { height: "100%" } }}
    >
      {({ snapshot }) => {
        if (snapshot.status === "error") {
          return <pre>{snapshot.error?.message}</pre>;
        }

        return null;
      }}
    </MonacoVscodeRoot>
  );
}
```

## Intended Responsibilities

The current scaffold separates responsibilities like this:

1. `bootstrap.ts`: one-time initialization and lifecycle state.
2. `filesystem/`: workspace and file descriptors.
3. `workers/`: worker registry construction.
4. `services/`: Monaco/VS Code service initialization.
5. `extensions/`: sandbox debugger registration.
6. `components/`: React-facing integration layer.

That separation should remain even after real `monaco-vscode-api` wiring is added.
