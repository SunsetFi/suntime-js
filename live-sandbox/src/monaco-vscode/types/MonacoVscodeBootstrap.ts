import type { Observable } from "rxjs";
import type { editor } from "monaco-editor";
import type { StaticJsWebDebugAdapterOptions } from "@suntime-js/dap/web";

export type MonacoVscodeBootstrapStatus = "idle" | "bootstrapping" | "ready" | "error";

export interface MonacoVscodeFileDescriptor {
  readonly path: string;
  readonly contents: string;
  readonly language?: string;
  readonly readOnly?: boolean;
}

export interface MonacoVscodeWorkspaceDescriptor {
  readonly workspacePath: string;
  readonly entryFilePath: string;
  readonly files: readonly MonacoVscodeFileDescriptor[];
}

export interface MonacoVscodeWorkerRegistry {
  readonly labels: readonly string[];
  create(label: string): Worker;
}

export type MonacoVscodeWorkerLoader = () => Worker;

export type MonacoVscodeWorkerLoaderMap = Readonly<
  Partial<Record<string, MonacoVscodeWorkerLoader>>
>;

export interface MonacoVscodeBootstrapContext {
  readonly rootElement: HTMLElement | null;
  readonly workspace: MonacoVscodeWorkspaceDescriptor;
  readonly workers: MonacoVscodeWorkerRegistry;
  readonly vscodeApi: MonacoVscodeApiOptions;
}

export interface MonacoVscodeApiOptions {
  readonly serviceOverrides?: Record<string, unknown>;
  readonly userServices?: Record<string, unknown>;
  readonly configurationDefaults?: Record<string, unknown>;
  readonly enableSandboxDebugger?: boolean;
  readonly sandboxDebugger?: StaticJsWebDebugAdapterOptions;
}

export interface MonacoVscodeBootstrapOptions {
  readonly rootElement?: HTMLElement | null;
  readonly workspace?: MonacoVscodeWorkspaceDescriptor;
  readonly workerLoaders?: MonacoVscodeWorkerLoaderMap;
  readonly vscodeApi?: MonacoVscodeApiOptions;
}

export interface MonacoVscodeBootstrapRuntime {
  readonly initializedAt: Date;
  readonly rootElement: HTMLElement | null;
  readonly workspace: MonacoVscodeWorkspaceDescriptor;
  readonly workers: MonacoVscodeWorkerRegistry;
  readonly services: Record<string, unknown>;
}

export interface MonacoVscodeEditorOptions {
  readonly constructionOptions?: editor.IStandaloneEditorConstructionOptions;
  readonly onEntryFileChange?: (contents: string) => void;
}

export interface MonacoVscodeBootstrapSnapshot {
  readonly status: MonacoVscodeBootstrapStatus;
  readonly runtime: MonacoVscodeBootstrapRuntime | null;
  readonly error: Error | null;
}

export interface MonacoVscodeBootstrapper {
  readonly snapshot$: Observable<MonacoVscodeBootstrapSnapshot>;
  initialize(options?: MonacoVscodeBootstrapOptions): Promise<MonacoVscodeBootstrapRuntime>;
  getSnapshot(): MonacoVscodeBootstrapSnapshot;
}
