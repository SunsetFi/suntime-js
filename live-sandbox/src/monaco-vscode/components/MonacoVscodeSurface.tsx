import React from "react";

export interface MonacoVscodeSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MonacoVscodeSurface = React.forwardRef<
  HTMLDivElement,
  MonacoVscodeSurfaceProps
>(function MonacoVscodeSurface({ style, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      data-monaco-vscode-surface="true"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 320,
        ...style,
      }}
    />
  );
});
