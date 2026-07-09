import { useContext } from "react";

import type { PortalStore } from "./portal-store";

import { PortalContext } from "./portal-context";

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
