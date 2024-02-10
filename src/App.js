import React from "react";
import { Route, Routes } from "react-router-dom";
import Exchanges from "./components/Exchanges";
import Coin from "./components/Coin";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Exchanges />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;
