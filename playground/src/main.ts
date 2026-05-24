import "./style.css";
import defaultSource from "./default-source.js?raw";
import { workbenchBootstrap } from "./workbench/bootstrap.js";
import { createDefaultWorkspace } from "./workbench/filesystem/createDefaultWorkspace";

workbenchBootstrap
  .initialize({
    workspace: createDefaultWorkspace(defaultSource),
    api: {
      configurationDefaults: {
        "workbench.colorTheme": "Default Dark Modern",
      },
    },
  })
  .catch((err) => {
    console.error("Failed to initialize workbench:", err);
  });
