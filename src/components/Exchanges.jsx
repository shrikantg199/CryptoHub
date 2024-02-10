import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function Exchange() {
  const [exchanges, setExchanges] = useState([]); // Changed variable name to be more descriptive
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangesData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/exchanges`);
        console.log(response);
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
        <div className="">
          <Header />
        </div>
      )}
      <div className="  bg-[#10b97e]/50 fixed h-full w-screen border-1 overflow-y-auto   ">
        {exchanges.map((item, index) => (
          <div className="flex justify-center ">
            <div className="lg:m-2 mb-3 ">
              {" "}
              <ul className=" bg-white w-80 lg:w-[120vh] h-16   lg:h-32 rounded-2xl shadow-md  hover:shadow-blue-500 ">
                <Link to={item.url}>
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
  );
}

export default Exchange;
