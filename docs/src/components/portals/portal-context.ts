import { createContext } from "react";

import type { PortalStore } from "./portal-store";

/** Provides the app-wide {@link PortalStore}. Null until a PortalProvider mounts. */
export const PortalContext = createContext<PortalStore | null>(null);
