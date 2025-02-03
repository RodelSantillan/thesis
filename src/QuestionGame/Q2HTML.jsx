import React from "react";
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";

const Q2HTML = () => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only a single character input
    if (value.length > 3) {
      e.target.value = value.slice(0, 3); // Restrict to the first character
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
          <div className="font-bold  text-2xl text-center px-5">
            <h1>
              Fill in the missing syntax to create a paragraph about space
              exploration. Use the &lt;p&gt; tag.
            </h1>
          </div>

          <div className="">
            <div className="text-[#ffffff] bg-[#222] p-5 rounded-md">
              <p>
                &lt;html&gt; <br></br>
                &lt;body&gt;
                <br></br>
                <input
                  type="text"
                  placeholder=""
                  className="rounded-sm outline-none w-[30px] text-black"
                  onChange={handleInputChange} // Add the onChange handler here
                  maxLength={10} // Ensure only one character can be entered
                />
                In the year 2050, humans are ready to embark on a journey to
                Mars.h{" "}
                <input
                  type="text"
                  placeholder=""
                  className="rounded-sm outline-none w-[30px] text-black"
                  onChange={handleInputChange} // Add the onChange handler here
                  maxLength={10} // Ensure only one character can be entered
                />
                <br></br>
                &lt;/body&gt; <br></br>&lt;/html&gt;
              </p>
            </div>
          </div>
        </div>
        <Questionbutton></Questionbutton>
      </LayoutGame>
    </div>
  );
};

export default Q2HTML;
