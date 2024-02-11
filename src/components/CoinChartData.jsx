import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "./BaseUrl";
import { useParams } from "react-router-dom";
import GraphLoader from "./GraphLoader";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function CoinChartData({ img, price }) {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const [days, setDays] = useState(1);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(
          `${BaseUrl}/coins/${id}/market_chart?vs_currency=inr&days=${days}`
        );
        setChartData(data.prices);
        //console.log(data.prices);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchanges:", error);
      }
    };

    getCoin();
  }, [days, id]);
  const Mydata = {
    labels: chartData.map((value) => {
      const date = new Date(value[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} :${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: ` Price in Past Days ${days}(INR) `,
        data: chartData.map((value) => value[1] / 1000),
        borderColor: "#16c784",
        borderWidth: "2.5",

        stack: "line",
        tension: 0,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return value.toFixed(2) + "k";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
      },
      crosshair: {
        line: {
          color: "rgba(0, 0, 0, 0.5)",
          width: 8,
        },
      },
    },
  };
  return (
    <>
      {loading ? (
        <GraphLoader />
      ) : (
        <div className=" ">
          <div className="flex justify-center gap-2 m-3">
            <img src={img} className="h-10 w-10 lg:w-10 lg:h-10   " alt="" />
            <h2 className="text-center text-3xl">{id.toUpperCase()}</h2>
          </div>
          <h1 className="font-semibold m-2">Current Price: ₹ {price}</h1>
          <Line
            data={Mydata}
            options={options}
            className="mt-18 w-full lg:w-screen lg:m-6"
          />
          <div className="flex justify-center  ">
            <button
              className="bg-blue-700 px-3 py-[2px] rounded-lg text-white text-center m-2"
              onClick={() => setDays(1)}
            >
              24 hrs
            </button>
            <button
              className="bg-blue-700 px-3 py-[2px] rounded-lg text-white text-center  m-2"
              onClick={() => setDays(30)}
            >
              1Month
            </button>
            <button
              className="bg-blue-700 px-3 py-[2px] rounded-lg text-white text-center  m-2"
              onClick={() => setDays(365)}
            >
              1Year
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CoinChartData;
