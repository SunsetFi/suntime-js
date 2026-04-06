import { createDefaultWorkspace } from "./filesystem/createDefaultWorkspace.js";
import { registerDebugExtension } from "./extensions/debugExtension.js";
import { initializeWorkbenchServices } from "./services/initialize.js";
import type {
  WorkbenchApiOptions,
  WorkbenchBootstrapOptions,
  WorkbenchBootstrapRuntime,
  WorkbenchBootstrapSnapshot,
} from "./types/index.js";
import { createWorkerRegistry } from "./workers/WorkerRegistry.js";
import type { VirtualFileSystem } from "./filesystem/VirtualFileSystem.js";

export type { VirtualFileSystem } from "./filesystem/VirtualFileSystem.js";

const INITIAL_SNAPSHOT: WorkbenchBootstrapSnapshot = {
  status: "idle",
  runtime: null,
  error: null,
};

/**
 * Manages the lifecycle of the Monaco VS Code workbench.
 *
 * Usage:
 *   const runtime = await workbenchBootstrap.initialize();
 *   // runtime.vfs is the VirtualFileSystem — use it to add or read files.
 *
 * The singleton `workbenchBootstrap` is exported for convenience but you can
 * also construct your own instance when you need multiple independent lifecycles
 * (e.g. in tests).
 */
export class WorkbenchBootstrap {
  private _snapshot: WorkbenchBootstrapSnapshot = INITIAL_SNAPSHOT;
  private _bootstrapPromise: Promise<WorkbenchBootstrapRuntime> | null = null;

  getSnapshot(): WorkbenchBootstrapSnapshot {
    return this._snapshot;
  }

  async initialize(
    options: WorkbenchBootstrapOptions = {},
  ): Promise<WorkbenchBootstrapRuntime> {
    if (this._snapshot.runtime) {
      return this._snapshot.runtime;
    }

    if (this._bootstrapPromise) {
      return this._bootstrapPromise;
    }

    this._setSnapshot({ status: "bootstrapping", runtime: null, error: null });

    this._bootstrapPromise = this._bootstrap(options);
    return this._bootstrapPromise;
  }

  private async _bootstrap(
    options: WorkbenchBootstrapOptions,
  ): Promise<WorkbenchBootstrapRuntime> {
    const container =
      options.container ??
      document.getElementById("workbench") ??
      document.body;

    const workspace = options.workspace ?? createDefaultWorkspace();
    const workers = createWorkerRegistry(options.workerLoaders);
    const api: WorkbenchApiOptions = {
      enableDebugExtension: true,
      ...options.api,
    };

    const context = { container, workspace, workers, api };

    try {
      const vfs = await initializeWorkbenchServices(context);

      if (api.enableDebugExtension !== false) {
        await registerDebugExtension(context);
      }

      const runtime: WorkbenchBootstrapRuntime = {
        initializedAt: new Date(),
        container,
        workspace,
        workers,
        vfs,
      };

      this._setSnapshot({ status: "ready", runtime, error: null });
      return runtime;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      this._bootstrapPromise = null;
      this._setSnapshot({ status: "error", runtime: null, error });
      throw error;
    }
  }

  private _setSnapshot(snapshot: WorkbenchBootstrapSnapshot): void {
    this._snapshot = snapshot;
  }
}

export const workbenchBootstrap = new WorkbenchBootstrap();
