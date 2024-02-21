import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "../assets/logo.png";
function Homepage() {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-800 w-52 h-7 rounded-xl text-center justify-center m-12 flex items-center">
        <Link className="text-md">Introducing To Crypto</Link>
        <FaLongArrowAltRight className="my-1 mx-1 text-xl" />
      </div>
      <div className="flex justify-center h-48 m-2">
        <h1 className="text-6xl w-[60%] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-400 to-violet-500">
          Crypto Your Gateway to Digital Prosperity
        </h1>
      </div>

      <div className="flex justify-center ">
        <h1 className="text-2xl w-[60%]">
          Welcome to our Cryptocurrency Web App, your gateway to the exciting
          world of digital currencies! Our application provides a user-friendly
          interface to explore, analyze, and stay informed about the dynamic
          cryptocurrency market.
        </h1>
      </div>
      <div className="m-12 hover:scale-110 transition-all">
        <Link to="/coins" className="bg-violet-700 px-5 py-3 rounded-xl">
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
