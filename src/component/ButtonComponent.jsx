import React from "react";

const ButtonComponent = ({ handleSignIn }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 absolute top-[350px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <button
          className="bg-[#b6b3b3] w-[160px] h-[60px] rounded-full font-bold text-[#084747] border-white border-2 hover:bg-[#e2e2e2]"
          onClick={handleSignIn}
        >
          Enter
        </button>
        <button className="bg-[#b6b3b3] w-[160px] h-[60px] rounded-full font-bold text-[#084747] border-white border-2 hover:bg-[#f0f0f0]">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;
