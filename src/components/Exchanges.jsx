import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import Loader from "./Loader";
import { Link, useParams } from "react-router-dom";
import Homepage from "./Homepage";

function Exchange() {
  const [exchanges, setExchanges] = useState([]); // Changed variable name to be more
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangesData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/exchanges`);

        setExchanges(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchanges:", error);
        setLoading(false);
      }
    };

    fetchExchangesData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div className="  bg-[#181a20] fixed h-full w-screen  overflow-y-auto   ">
            <Homepage />
            <div className="">
              <h2 className="text-white text-center text-4xl p-8">
                Global Crypto Exchanges
              </h2>
            </div>
            {exchanges.map((item, index) => (
              <div className="flex justify-center ">
                <div className="lg:m-2 mb-3 ">
                  {" "}
                  <ul className=" bg-[#181a20] border-[0.1px] border-[#2B3139] w-80 lg:w-[120vh] h-14   lg:h-28 rounded-2xl shadow-sm hover:scale-110 transition-all hover:shadow-black ">
                    <Link to={item.url} className="text-white">
                      <li
                        key={index}
                        className=" flex justify-evenly lg:justify-between text-center items-center lg:mr-56 lg:ml-10 "
                      >
                        <img
                          src={item.image}
                          className="h-12 p-1  lg:w-28 lg:h-28 lg:p-3 "
                          alt=""
                        />
                        <h2 className="text-xl w-20 lg:w-5">
                          {item.name.slice(0, 8)}
                        </h2>
                        <h2 className="text-xl hidden lg:block  w-5">
                          {item.country}
                        </h2>
                        <h3 className="text-xl   ">rating</h3>
                        <h3 className="text-xl w-5 hidden lg:block">
                          <b> Established:-</b>
                          {item.year_established}
                        </h3>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Exchange;
