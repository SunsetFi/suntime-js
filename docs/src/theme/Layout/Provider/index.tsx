import type { WrapperProps } from "@docusaurus/types";
import type ProviderType from "@theme/Layout/Provider";

import { PortalProvider } from "@site/src/components/portals";
import Provider from "@theme-original/Layout/Provider";
import React, { type ReactNode } from "react";

type Props = WrapperProps<typeof ProviderType>;

/**
 * Wraps Docusaurus's Layout Provider (which supplies ColorModeProvider and the
 * other theme contexts) so our PortalProvider — and the PortalOutlet that
 * renders portal content — live INSIDE those contexts. The outlet renders
 * tooltips that call useColorMode, so it must be a child of ColorModeProvider,
 * not a parent (which is why this can't live in a Root swizzle).
 */
export default function ProviderWrapper(props: Props): ReactNode {
  return (
    <Provider {...props}>
      <PortalProvider>{props.children}</PortalProvider>
    </Provider>
  );
}
