import { useContext } from "react";

import { PortalContext } from "./portal-context";
import type { PortalStore } from "./portal-store";

/**
 * Access the app-wide portal store. Throws if no {@link PortalProvider} is an
 * ancestor (which, in this app, is mounted at the Docusaurus root).
 */
export function usePortals(): PortalStore {
  const store = useContext(PortalContext);
  if (!store) {
    throw new Error("usePortals must be used within a PortalProvider");
  }
  return store;
}
