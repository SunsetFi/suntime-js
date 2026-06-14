import { relative } from "node:path";
import { getPackages } from "./scripts/get-packages.mjs";

const packages = getPackages();

export function lintStagedWorkspaceRunner(packageName) {
  const packageInfo = packages.find((pkg) => pkg.name === packageName);
  if (!packageInfo) {
    throw new Error(`Package ${packageName} not found`);
  }

  return (command) => {
    return (paths) => {
      return `pnpm run --filter ${packageName} ${command} ${paths
        .map((path) => relative(packageInfo.path, path))
        .join(" ")}`;
    };
  };
}
