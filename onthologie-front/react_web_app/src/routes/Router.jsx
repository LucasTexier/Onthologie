import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Nopage from "../components/pages/FiltrePage";
import InfoPage from "../components/pages/InfoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recommandation" element={<InfoPage />}></Route>
        <Route path="/filtre" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}
