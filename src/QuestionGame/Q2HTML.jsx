import React from "react";
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
const Q2HTML = () => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only a single character input
    if (value.length > 1) {
      e.target.value = value.slice(0, 1); // Restrict to the first character
    }
  };
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
          <TitleHTML title={"LEVEL 2"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
          <div className="font-bold text-4xl md:text-5xl">
            <h1>Question</h1>
          </div>
          <div className="p-5 md:p-10 text-lg md:text-2xl leading-relaxed text-[#414040] ">
            <div className="flex items-center gap-1">
              <input
                onInput={handleInputChange} // Handle input to limit to one character
                type="text"
                placeholder=""
                className="p-3 rounded-full  bg-[#1f1f1f] text-white text-center font-bold  w-[40px] h-[50px]  tracking-wide text-xlborder-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
              />
              <p>p</p>

              <input
                onInput={handleInputChange} // Handle input to limit to one character
                type="text"
                placeholder=""
                className="p-3 rounded-full bg-[#1f1f1f] text-white text-center font-bold  w-[40px] h-[50px]  tracking-wide text-xlborder-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
              />
              <p>This is a paragraph.</p>

              <input
                onInput={handleInputChange}
                type="text"
                placeholder=""
                className="p-3 rounded-full  bg-[#1f1f1f] text-white text-center font-bold  w-[40px] h-[50px]  tracking-wide text-xlborder-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
              />
              <p>/p</p>
              <input
                onInput={handleInputChange} // Handle input to limit to one character
                type="text"
                placeholder=""
                className="p-3 rounded-full bg-[#1f1f1f] text-white text-center font-bold  w-[40px] h-[50px]  tracking-wide text-xlborder-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
              />
            </div>
          </div>
        </div>
        <Questionbutton></Questionbutton>
      </LayoutGame>
    </div>
  );
};

export default Q2HTML;
