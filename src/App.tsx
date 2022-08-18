import React from "react";
import "./App.css";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./components/Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
