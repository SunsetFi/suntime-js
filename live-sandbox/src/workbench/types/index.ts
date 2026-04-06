import type { IEditorOverrideServices } from "@codingame/monaco-vscode-api";

// ---- Filesystem ----

export interface WorkbenchFile {
  readonly path: string;
  readonly contents: string;
  readonly language?: string;
  readonly readOnly?: boolean;
}

export interface WorkbenchWorkspace {
  /** Absolute path to the workspace root folder (e.g. "/workspace"). */
  readonly workspacePath: string;
  /** Absolute path to the primary entry file opened on startup. */
  readonly entryFilePath: string;
  /** Initial set of files to register in the virtual filesystem. */
  readonly files: readonly WorkbenchFile[];
}

// ---- Workers ----

export type WorkerLoader = () => Worker;
export type WorkerLoaderMap = Readonly<Partial<Record<string, WorkerLoader>>>;

export interface WorkerRegistry {
  readonly labels: readonly string[];
  create(label: string): Worker;
}

// ---- Bootstrap ----

export interface WorkbenchApiOptions {
  /** Additional service overrides merged into the core set. */
  readonly serviceOverrides?: IEditorOverrideServices;
  /** VSCode configuration defaults (e.g. editor font size). */
  readonly configurationDefaults?: Record<string, unknown>;
  /** Whether to register the suntime-js debug extension. Defaults to true. */
  readonly enableDebugExtension?: boolean;
}

export interface WorkbenchBootstrapContext {
  readonly container: HTMLElement;
  readonly workspace: WorkbenchWorkspace;
  readonly workers: WorkerRegistry;
  readonly api: WorkbenchApiOptions;
}

export interface WorkbenchBootstrapOptions {
  /** DOM element the workbench mounts into. Defaults to #workbench. */
  readonly container?: HTMLElement | null;
  /** Initial workspace files and paths. */
  readonly workspace?: WorkbenchWorkspace;
  /** Override default worker constructors by label. */
  readonly workerLoaders?: WorkerLoaderMap;
  /** API and service configuration. */
  readonly api?: WorkbenchApiOptions;
}

export interface WorkbenchBootstrapRuntime {
  readonly initializedAt: Date;
  readonly container: HTMLElement;
  readonly workspace: WorkbenchWorkspace;
  readonly workers: WorkerRegistry;
  /** Live access to the virtual filesystem for reading/writing files. */
  readonly vfs: import("../filesystem/VirtualFileSystem.js").VirtualFileSystem;
}

export type WorkbenchBootstrapStatus = "idle" | "bootstrapping" | "ready" | "error";

export interface WorkbenchBootstrapSnapshot {
  readonly status: WorkbenchBootstrapStatus;
  readonly runtime: WorkbenchBootstrapRuntime | null;
  readonly error: Error | null;
}
