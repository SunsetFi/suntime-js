import * as monaco from "monaco-editor";
import {
  RegisteredFileSystemProvider,
  RegisteredMemoryFile,
  registerFileSystemOverlay,
} from "@codingame/monaco-vscode-files-service-override";

import type { WorkbenchFile } from "../types/index.js";

export interface IDisposable {
  dispose(): void;
}

/**
 * Manages a virtual in-memory filesystem for the Monaco workbench.
 *
 * Files registered here are accessible to the editor, language services,
 * and the VS Code extension APIs (vscode.workspace.openTextDocument, etc.).
 *
 * For the suntime-js debugger's ESM module resolver, use `readFile()` to
 * retrieve the initial content of any registered file, or use the VS Code
 * workspace API to get the live editor content (which includes unsaved edits):
 *
 *   const doc = await vscode.workspace.openTextDocument(vscode.Uri.file(path));
 *   const text = doc.getText();
 */
export class VirtualFileSystem {
  private readonly _provider: RegisteredFileSystemProvider;
  private readonly _contents = new Map<string, string>();

  constructor() {
    this._provider = new RegisteredFileSystemProvider(false);
  }

  /**
   * Register this VFS as a filesystem overlay with Monaco.
   * Must be called before `initialize()` from @codingame/monaco-vscode-api.
   *
   * @param priority Higher priority overlays shadow lower ones. Default: 1.
   */
  registerOverlay(priority = 1): IDisposable {
    return registerFileSystemOverlay(priority, this._provider);
  }

  /**
   * Write a file into the VFS.  Creates the file if it doesn't exist; replaces
   * the registered content if it does.
   *
   * Note: if the file is already open in an editor, the editor model will
   * continue to show its own (potentially dirty) content.  To sync a live
   * editor model back to its underlying resource, save the document via the
   * vscode workspace API.
   */
  writeFile(path: string, contents: string): void {
    const uri = monaco.Uri.file(path);
    this._contents.set(path, contents);
    this._provider.registerFile(new RegisteredMemoryFile(uri, contents));
  }

  /**
   * Bulk-register an array of file descriptors.
   */
  writeFiles(files: readonly WorkbenchFile[]): void {
    for (const file of files) {
      this.writeFile(file.path, file.contents);
    }
  }

  /**
   * Return the content last written via `writeFile`.
   *
   * This reflects programmatic writes only — it does not track unsaved editor
   * changes.  For live editor content use vscode.workspace.openTextDocument.
   */
  readFile(path: string): string | undefined {
    return this._contents.get(path);
  }

  /** True if the path has been registered in this VFS. */
  hasFile(path: string): boolean {
    return this._contents.has(path);
  }

  /** All registered file paths. */
  listFiles(): string[] {
    return [...this._contents.keys()];
  }

  /**
   * Immediate children of a directory (non-recursive).
   * @param dirPath Absolute path, e.g. "/workspace"
   */
  listDirectory(dirPath: string): string[] {
    const prefix = dirPath.endsWith("/") ? dirPath : dirPath + "/";
    return this.listFiles().filter(
      (p) => p.startsWith(prefix) && !p.slice(prefix.length).includes("/"),
    );
  }
}
