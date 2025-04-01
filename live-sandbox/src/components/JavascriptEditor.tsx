import React from "react";

import Editor from "@monaco-editor/react";

import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

export interface JavascriptEditorProps {
  sx?: SxProps;
  code: string;
  onChange: (code: string | undefined) => void;
}

const JavascriptEditor = ({ sx, code, onChange }: JavascriptEditorProps) => {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Editor
        width="100%"
        height="100vh"
        language="javascript"
        value={code}
        onChange={onChange}
      />
    </Box>
  );
};

export default JavascriptEditor;
