import type {
  MonacoVscodeWorkerLoaderMap,
  MonacoVscodeWorkerRegistry,
} from "@/monaco-vscode/types/MonacoVscodeBootstrap";
import { getDefaultWorkerLoaders } from "@/monaco-vscode/workers/defaultWorkerLoaders";

export function createWorkerRegistry(
  loaders: MonacoVscodeWorkerLoaderMap = getDefaultWorkerLoaders(),
): MonacoVscodeWorkerRegistry {
  return {
    labels: Object.freeze(Object.keys(loaders)),
    create(label: string): Worker {
      const loader = loaders[label];
      if (!loader) {
        throw new Error(`No Monaco VSCode worker loader registered for '${label}'.`);
      }

      return loader();
    },
  };
}
