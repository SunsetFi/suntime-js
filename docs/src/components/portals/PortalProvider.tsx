import React, { useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { PortalContext } from "./portal-context";
import { createPortalStore, type PortalStore } from "./portal-store";

const EMPTY: never[] = [];

/**
 * Subscribes to the store and renders every live portal. Kept as a leaf so that
 * portal churn re-renders only this component, not the whole app tree above the
 * provider.
 */
function PortalOutlet({ store }: { store: PortalStore }): ReactNode {
  const entries = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    () => EMPTY, // SSR: no portals
  );
  return <>{entries.map((entry) => createPortal(entry.node, entry.container, entry.id))}</>;
}

/**
 * App-wide portal provider. Mount once near the root (see `src/theme/Root.tsx`).
 * The context value (the store) is stable for the app's lifetime, so consumers
 * never re-render due to portal changes.
 */
export function PortalProvider({ children }: { children: ReactNode }): ReactNode {
  const storeRef = useRef<PortalStore | null>(null);
  storeRef.current ??= createPortalStore();
  const store = storeRef.current;

  return (
    <PortalContext.Provider value={store}>
      {children}
      <PortalOutlet store={store} />
    </PortalContext.Provider>
  );
}
