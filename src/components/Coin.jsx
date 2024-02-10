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
        console.log(response.data);
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
    <div>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <Header />
        </div>
      )}
      <>
        <div className="  bg-[#10b97e]/50 fixed h-full w-screen border-1 overflow-y-auto   ">
          {loading ? (
            <Loader />
          ) : (
            <div className="fixed right-60 ">
              {" "}
              <button
                onClick={() => setCurrency("inr")}
                className="lg:bg-white/50 bg-blue-700 m-1 text-white lg:text-black rounded-lg right-0 px-4 py-2"
              >
                INR
              </button>
              <button
                className="lg:bg-white/50 bg-blue-700 m-1 text-white lg:text-black rounded-lg right-0 px-4 py-2"
                onClick={() => setCurrency("usd")}
              >
                USD
              </button>
            </div>
          )}

          {coins.map((item, index) => (
            <CoinCard
              id={item.id}
              image={item.image}
              currencySymbol={currencySymbol}
              name={item.name.slice(0, 11)}
              price={item.current_price.toFixed(0)}
              cap={item.market_cap_change_percentage_24h.toFixed(2)}
            />
          ))}
        </div>
      </>
    </div>
  );
}

export default Coin;
