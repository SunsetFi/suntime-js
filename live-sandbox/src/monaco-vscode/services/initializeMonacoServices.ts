import * as monaco from "monaco-editor";
import { initialize } from "@codingame/monaco-vscode-api";
import getConfigurationServiceOverride from "@codingame/monaco-vscode-configuration-service-override";
import getDebugServiceOverride from "@codingame/monaco-vscode-debug-service-override";
import getExtensionsServiceOverride from "@codingame/monaco-vscode-extensions-service-override";
import getKeybindingsServiceOverride from "@codingame/monaco-vscode-keybindings-service-override";
import getLanguagesServiceOverride from "@codingame/monaco-vscode-languages-service-override";
import getModelServiceOverride from "@codingame/monaco-vscode-model-service-override";
import getTextmateServiceOverride from "@codingame/monaco-vscode-textmate-service-override";
import getThemeServiceOverride from "@codingame/monaco-vscode-theme-service-override";

import "@codingame/monaco-vscode-javascript-default-extension";
import "@codingame/monaco-vscode-theme-defaults-default-extension";
import "vscode/localExtensionHost";

import { registerWorkspaceOverlay } from "@/monaco-vscode/filesystem/registerWorkspaceOverlay";
import type { MonacoVscodeBootstrapContext } from "@/monaco-vscode/types/MonacoVscodeBootstrap";

export async function initializeMonacoServices(
  context: MonacoVscodeBootstrapContext,
): Promise<Record<string, unknown>> {
  const overlayDisposable = registerWorkspaceOverlay(context.workspace);

  window.MonacoEnvironment = {
    getWorker(_workerId, label) {
      if (label && context.workers.labels.includes(label)) {
        return context.workers.create(label);
      }

      return context.workers.create("TextEditorWorker");
    },
  };

  await initialize(
    {
      ...getConfigurationServiceOverride(),
      ...getDebugServiceOverride(),
      ...getExtensionsServiceOverride({ enableWorkerExtensionHost: false }),
      ...getKeybindingsServiceOverride(),
      ...getModelServiceOverride(),
      ...getThemeServiceOverride(),
      ...getTextmateServiceOverride(),
      ...getLanguagesServiceOverride(),
      ...(context.vscodeApi.serviceOverrides ?? {}),
      ...(context.vscodeApi.userServices ?? {}),
    },
    context.rootElement ?? undefined,
    {
      configurationDefaults: context.vscodeApi.configurationDefaults ?? {},
      workspaceProvider: {
        trusted: true,
        workspace: {
          folderUri: monaco.Uri.file(context.workspace.workspacePath),
        },
        async open() {
          return false;
        },
      },
    },
  );

  return {
    configurationDefaults: context.vscodeApi.configurationDefaults ?? {},
    serviceOverrides: context.vscodeApi.serviceOverrides ?? {},
    userServices: context.vscodeApi.userServices ?? {},
    overlayDisposable,
  };
}
