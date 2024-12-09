import React from "react";
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";

const Q1HTML = () => {
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
      <LayoutGame>
        <div>
          <TitleHTML title={"LEVEL 1"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
          <div className="font-bold text-4xl md:text-5xl">
            <h1>Question</h1>
          </div>
          <div className="p-5 md:p-10 text-lg md:text-2xl leading-relaxed text-[#414040] ">
            What does HTML stand for?
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Your Final Answer?"
              className="p-3 rounded-full  bg-black text-white text-center font-bold  w-[500px]  tracking-wide text-xlborder-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
            />
          </div>
        </div>
        <Questionbutton></Questionbutton>
      </LayoutGame>
    </div>
  );
};

export default Q1HTML;