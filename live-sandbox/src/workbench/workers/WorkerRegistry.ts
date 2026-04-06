import type { WorkerLoaderMap, WorkerRegistry } from "../types/index.js";
import { getDefaultWorkerLoaders } from "./loaders.js";

export function createWorkerRegistry(
  loaders: WorkerLoaderMap = getDefaultWorkerLoaders(),
): WorkerRegistry {
  return {
    labels: Object.freeze(Object.keys(loaders)),
    create(label: string): Worker {
      const loader = loaders[label];
      if (!loader) {
        throw new Error(`No worker loader registered for label '${label}'.`);
      }
      return loader();
    },
  };
}
