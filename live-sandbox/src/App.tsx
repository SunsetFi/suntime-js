import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router";

import AppRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CssBaseline />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
