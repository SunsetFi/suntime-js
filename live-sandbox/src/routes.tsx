import React from "react";
import { Routes, Route } from "react-router";

import Redirect from "./components/Redirect";
import EvaluatorPage from "./pages/EvaluatorPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Redirect to="/sandbox" replace />} />
      <Route path="/sandbox" Component={EvaluatorPage} />
    </Routes>
  );
};

export default AppRoutes;
