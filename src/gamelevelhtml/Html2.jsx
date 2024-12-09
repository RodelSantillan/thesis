import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html2 = () => {
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
            <h1>WHAT IS HTML Paragraphs</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-2xl leading-relaxed text-[#414040] ">
            In HTML, paragraphs are created using the <p>&lt;p&gt;</p> tag. A
            paragraph is a block of text that is usually displayed with space
            before and after it, making it visually separate from other content.
            Example
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-2xl leading-relaxed text-[#414040]">
            <p>&lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
          </div>
        </div>
        <Gamebutton></Gamebutton>
      </LayoutGame>
    </div>
  );
};

export default Html2;
