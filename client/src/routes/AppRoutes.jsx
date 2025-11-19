import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
