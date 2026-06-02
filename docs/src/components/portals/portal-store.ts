import type { ReactNode } from "react";

/** A single live portal: a React node rendered into an externally-owned DOM node. */
export interface PortalEntry {
  id: string;
  container: Element;
  node: ReactNode;
}

/** Controls one mounted portal returned by {@link PortalStore.mount}. */
export interface PortalHandle {
  /** Replace the rendered content. */
  update(node: ReactNode): void;
  /** Remove the portal. */
  unmount(): void;
}

/**
 * Imperative → declarative bridge for rendering React content into DOM nodes
 * owned by non-React code (e.g. a CodeMirror tooltip). The content stays part
 * of the React tree (keeping context), while its DOM lands in `container`.
 *
 * Backed by an external store so the provider at the app root never re-renders
 * on portal changes — only the subscribing outlet does.
 */
export interface PortalStore {
  subscribe(listener: () => void): () => void;
  getSnapshot(): PortalEntry[];
  /** Render `node` into `container`. Stable across the app's lifetime. */
  mount(container: Element, node: ReactNode): PortalHandle;
}

export function createPortalStore(): PortalStore {
  let entries: PortalEntry[] = [];
  const listeners = new Set<() => void>();
  let nextId = 0;

  const emit = (): void => {
    for (const listener of listeners) listener();
  };

  return {
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot() {
      return entries;
    },
    mount(container, node) {
      const id = `portal-${nextId++}`;
      entries = [...entries, { id, container, node }];
      emit();
      return {
        update(next) {
          entries = entries.map((entry) => (entry.id === id ? { ...entry, node: next } : entry));
          emit();
        },
        unmount() {
          entries = entries.filter((entry) => entry.id !== id);
          emit();
        },
      };
    },
  };
}
