import * as monaco from "monaco-editor";
import { initialize } from "@codingame/monaco-vscode-api";
import getConfigurationServiceOverride from "@codingame/monaco-vscode-configuration-service-override";
import getDebugServiceOverride from "@codingame/monaco-vscode-debug-service-override";
import getExtensionsServiceOverride from "@codingame/monaco-vscode-extensions-service-override";
import getFilesServiceOverride from "@codingame/monaco-vscode-files-service-override";
import getKeybindingsServiceOverride from "@codingame/monaco-vscode-keybindings-service-override";
import getLanguagesServiceOverride from "@codingame/monaco-vscode-languages-service-override";
import getMarkersServiceOverride from "@codingame/monaco-vscode-markers-service-override";
import getModelServiceOverride from "@codingame/monaco-vscode-model-service-override";
import getOutputServiceOverride from "@codingame/monaco-vscode-output-service-override";
import getPreferencesServiceOverride from "@codingame/monaco-vscode-preferences-service-override";
import getQuickAccessServiceOverride from "@codingame/monaco-vscode-quickaccess-service-override";
import getStorageServiceOverride from "@codingame/monaco-vscode-storage-service-override";
import getTextmateServiceOverride from "@codingame/monaco-vscode-textmate-service-override";
import getThemeServiceOverride from "@codingame/monaco-vscode-theme-service-override";
import getWorkbenchServiceOverride from "@codingame/monaco-vscode-workbench-service-override";

// Default extensions — imported for side-effects only; they self-register after initialize().
import "@codingame/monaco-vscode-javascript-default-extension";
import "@codingame/monaco-vscode-json-default-extension";
import "@codingame/monaco-vscode-theme-defaults-default-extension";

// Required: sets up the in-process extension host before initialize() is called.
import "vscode/localExtensionHost";

import { VirtualFileSystem } from "../filesystem/VirtualFileSystem.js";
import type { WorkbenchBootstrapContext } from "../types/index.js";

export async function initializeWorkbenchServices(
  context: WorkbenchBootstrapContext,
): Promise<VirtualFileSystem> {
  // Build the virtual filesystem and register it as an overlay before initialize().
  const vfs = new VirtualFileSystem();
  vfs.writeFiles(context.workspace.files);
  vfs.registerOverlay(1);

  // Wire up workers so Monaco can resolve the right worker for each language/feature.
  window.MonacoEnvironment = {
    getWorker(_id, label) {
      if (label && context.workers.labels.includes(label)) {
        return context.workers.create(label);
      }
      return context.workers.create("TextEditorWorker");
    },
  };

  await initialize(
    {
      // Core editor infrastructure
      ...getFilesServiceOverride(),
      ...getModelServiceOverride(),
      ...getConfigurationServiceOverride(),
      ...getKeybindingsServiceOverride(),
      ...getStorageServiceOverride(),

      // Language and theme support
      ...getThemeServiceOverride(),
      ...getTextmateServiceOverride(),
      ...getLanguagesServiceOverride(),
      ...getMarkersServiceOverride(),

      // Full workbench shell (explorer, activity bar, status bar, panels, etc.)
      ...getWorkbenchServiceOverride(),

      // Workbench features
      ...getExtensionsServiceOverride({ enableWorkerExtensionHost: false }),
      ...getDebugServiceOverride(),
      ...getOutputServiceOverride(),
      ...getPreferencesServiceOverride(),
      ...getQuickAccessServiceOverride({
        isKeybindingConfigurationVisible: () => true,
        shouldUseGlobalPicker: () => true,
      }),

      // Caller-supplied overrides (applied last so they can shadow defaults).
      ...context.api.serviceOverrides,
    },
    context.container,
    {
      configurationDefaults: context.api.configurationDefaults ?? {},
      workspaceProvider: {
        trusted: true,
        workspace: {
          folderUri: monaco.Uri.file(context.workspace.workspacePath),
        },
        async open() {
          return false;
        },
      },
      defaultLayout: {
        editors: [
          {
            uri: monaco.Uri.file(context.workspace.entryFilePath),
            viewColumn: 1,
          },
        ],
        // Don't force-reset layout on every reload so the user's panel state persists.
        force: false,
      },
    },
  );

  return vfs;
}
