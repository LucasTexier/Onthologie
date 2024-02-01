import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Nopage from "../components/pages/NoPage";
import InfoPage from "../components/pages/InfoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/info" element={<InfoPage />}></Route>
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}
