import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
