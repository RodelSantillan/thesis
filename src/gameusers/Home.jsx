import React from "react";
import background from "../picture/background.png";
import { Link } from "react-router-dom";
const Home = () => {
  // Zodiac signs in order
  const zodiacSigns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="gap-10 flex flex-wrap justify-center font-mono">
        {zodiacSigns.map((sign, index) => (
          <Link to="/introduction">
            <div
              key={index}
              className="flex items-center justify-center text-black font-bold bg-yellow-400 rounded-full w-20 h-20 hover:bg-yellow-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
              style={{
                border: "1px solid black",
                boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.8), 
                0 0 20px rgba(255, 255, 255, 0.6), 
                0 0 30px rgba(255, 255, 255, 0.4)
              `,
              }}
            >
              <h1 className="text-2xl">{sign}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
