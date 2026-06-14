import { execFileSync } from "node:child_process";

export function getPackages(filter) {
  const args = ["list", "-r", "--depth", "-1", "--json"];
  if (filter) {
    args.push("--filter", filter);
  }
  const output = execFileSync("pnpm", args, { encoding: "utf8" });
  return JSON.parse(output);
}
