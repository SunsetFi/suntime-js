import { BehaviorSubject } from "rxjs";

import { createSandboxWorkspace } from "@/monaco-vscode/filesystem/createSandboxWorkspace";
import { registerSandboxDebugExtension } from "@/monaco-vscode/extensions/registerSandboxDebugExtension";
import { initializeMonacoServices } from "@/monaco-vscode/services/initializeMonacoServices";
import type {
  MonacoVscodeApiOptions,
  MonacoVscodeBootstrapOptions,
  MonacoVscodeBootstrapRuntime,
  MonacoVscodeBootstrapSnapshot,
  MonacoVscodeBootstrapper,
} from "@/monaco-vscode/types/MonacoVscodeBootstrap";
import { createWorkerRegistry } from "@/monaco-vscode/workers/createWorkerRegistry";

const initialSnapshot: MonacoVscodeBootstrapSnapshot = {
  status: "idle",
  runtime: null,
  error: null,
};

export class MonacoVscodeBootstrap implements MonacoVscodeBootstrapper {
  private _snapshot = initialSnapshot;
  private _bootstrapPromise: Promise<MonacoVscodeBootstrapRuntime> | null = null;
  private readonly _snapshotSubject = new BehaviorSubject(initialSnapshot);

  readonly snapshot$ = this._snapshotSubject.asObservable();

  getSnapshot(): MonacoVscodeBootstrapSnapshot {
    return this._snapshot;
  }

  async initialize(
    options: MonacoVscodeBootstrapOptions = {},
  ): Promise<MonacoVscodeBootstrapRuntime> {
    if (this._snapshot.runtime) {
      return this._snapshot.runtime;
    }

    if (this._bootstrapPromise) {
      return this._bootstrapPromise;
    }

    this._setSnapshot({
      status: "bootstrapping",
      runtime: null,
      error: null,
    });

    this._bootstrapPromise = this._bootstrap(options);
    return this._bootstrapPromise;
  }

  private async _bootstrap(
    options: MonacoVscodeBootstrapOptions,
  ): Promise<MonacoVscodeBootstrapRuntime> {
    const workspace = options.workspace ?? createSandboxWorkspace();
    const workers = createWorkerRegistry(options.workerLoaders);
    const vscodeApi: MonacoVscodeApiOptions = {
      enableSandboxDebugger: true,
      ...options.vscodeApi,
    };
    const context = {
      rootElement: options.rootElement ?? null,
      workspace,
      workers,
      vscodeApi,
    };

    try {
      const services = await initializeMonacoServices(context);

      await registerSandboxDebugExtension(context);

      const runtime: MonacoVscodeBootstrapRuntime = {
        initializedAt: new Date(),
        rootElement: context.rootElement,
        workspace,
        workers,
        services,
      };

      this._setSnapshot({
        status: "ready",
        runtime,
        error: null,
      });

      return runtime;
    } catch (error) {
      const resolvedError = error instanceof Error ? error : new Error(String(error));

      this._bootstrapPromise = null;
      this._setSnapshot({
        status: "error",
        runtime: null,
        error: resolvedError,
      });

      throw resolvedError;
    }
  }

  private _setSnapshot(snapshot: MonacoVscodeBootstrapSnapshot): void {
    this._snapshot = snapshot;
    this._snapshotSubject.next(snapshot);
  }
}

export const monacoVscodeBootstrap = new MonacoVscodeBootstrap();
