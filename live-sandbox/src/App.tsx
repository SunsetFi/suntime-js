import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter } from "react-router";

import AppRoutes from "./routes";

const App = () => {
  return (
    <HashRouter>
      <CssBaseline />
      <AppRoutes />
    </HashRouter>
  );
};

export default App;
