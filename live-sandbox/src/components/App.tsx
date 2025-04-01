import React from "react";

import Box from "@mui/material/Box";

import JavascriptEditor from "./JavascriptEditor";
import JavascriptEvaluator from "./JavascriptEvaluator";

const App = () => {
  const [code, setCode] = React.useState("console.log('Hello, world!');");
  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <JavascriptEditor
        sx={{ flexShrink: 1, minWidth: 0 }}
        code={code}
        onChange={(c) => setCode(c ?? "")}
      />
      <JavascriptEvaluator sx={{ width: "600px" }} code={code} />
    </Box>
  );
};

export default App;
