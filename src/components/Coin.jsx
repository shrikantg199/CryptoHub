import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "./BaseUrl";
import Loader from "./Loader";
import Header from "./Header";
import CoinCard from "./CoinCard";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");
  const currencySymbol = currency === "inr" ? "₹" : "$";
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchExchangesData = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/coins/markets?vs_currency=${currency}`
        );
        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchanges:", error);
        setLoading(false);
      }
    };

    fetchExchangesData();
  }, [currency]);

  return (
    <div className="bg-[#181a20] fixed h-full w-screen overflow-y-auto">
      {loading ? <Loader /> : <Header />}
      <div className="fixed right-60">
        <button
          onClick={() => setCurrency("inr")}
          className="lg:bg-white bg-blue-700 m-1 text-white lg:text-black rounded-lg right-0 px-4 py-2"
        >
          INR
        </button>
        <button
          className="lg:bg-white bg-blue-700 m-1 text-white lg:text-black rounded-lg right-0 px-4 py-2"
          onClick={() => setCurrency("usd")}
        >
          USD
        </button>
      </div>

      {coins.map((item, index) => (
        <CoinCard
          key={index}
          id={item.id}
          image={item.image}
          currencySymbol={currencySymbol}
          name={item.name.slice(0, 11)}
          price={item.current_price.toFixed(0)}
          cap={item.market_cap_change_percentage_24h.toFixed(2)}
        />
      ))}
    </div>
  );
}

export default Coin;
