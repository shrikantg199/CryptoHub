import React from "react";
import { Route, Routes } from "react-router-dom";
import Exchanges from "./components/Exchanges";
import Coin from "./components/Coin";
import CoinDetails from "./components/CoinDetails";
import NewsCrypto from "./components/NewsCrypto";
import Trendings from "./components/Trendings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Exchanges />} />
        <Route path="/coins" element={<Coin />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
        <Route path="/news" element={<NewsCrypto />} />
        <Route path="/trending" element={<Trendings />} />
      </Routes>
    </>
  );
}

export default App;
