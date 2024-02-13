import React, { useEffect, useState } from "react";
import { BaseUrl } from "./BaseUrl";
import axios from "axios";
import Loader from "./Loader";
function Trendings() {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const { data } = await axios.get(`${BaseUrl}/search/trending`);
        setTrendingData(data.coins);
        console.log(data.coins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending data:", error);
        setLoading(false);
      }
    };

    fetchTrendingData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-black pt-12">
            <h2 className="text-center text-5xl p-4 text-white">
              Trending Market
            </h2>
            <ul>
              <div class="relative overflow-x-auto">
                <table class=" lg:w-[200vh] lg:ml-12 mt-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead class="text-xs  rounded-xl text-white">
                    <tr>
                      <th scope="col" class="text-lg px-12 py-3 ">
                        Logo
                      </th>
                      <th scope="col" class="text-lg px-6 py-3">
                        Coins
                      </th>
                      <th scope="col" class="text-lg px-4 py-3">
                        24h Change
                      </th>
                      <th scope="col" class="text-lg px-3 py-3">
                        Current Price
                      </th>
                      <th scope="col" class="text-lg px-6 py-3">
                        Rank
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(trendingData) &&
                      trendingData.map((item, index) => (
                        <tr
                          key={index}
                          className=" bg-black hover:scale-105 transition-all  "
                        >
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            <img
                              src={item.item.large}
                              className="h-12 p-1  lg:w-20 lg:h-20 lg:p-3 "
                              alt=""
                            />
                          </td>
                          <td className="px-6 py-4"> {item.item.name}</td>
                          <td className="px-6 py-4">
                            {item.item.data.price_change_percentage_24h.usd.toFixed(
                              3
                            )}
                            %
                          </td>
                          <td className="px-6 py-4">{item.item.data.price}</td>
                          <td className="px-6 py-4">
                            {item.item.market_cap_rank}
                          </td>
                          {/* Add more data cells as needed */}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Trendings;
