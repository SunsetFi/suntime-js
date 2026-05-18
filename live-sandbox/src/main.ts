import "./style.css";
import defaultSource from "./default-source.js?raw";
import { workbenchBootstrap } from "./workbench/bootstrap.js";
import { createDefaultWorkspace } from "./workbench/filesystem/createDefaultWorkspace";

workbenchBootstrap
  .initialize({
    workspace: createDefaultWorkspace(defaultSource),
  })
  .catch((err) => {
    console.error("[live-sandbox-2] Failed to initialize workbench:", err);
  });
