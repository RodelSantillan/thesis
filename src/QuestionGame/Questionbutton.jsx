import React from "react";
import { Link } from "react-router-dom";

const Questionbutton = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-12 absolute top-[480px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <Link to="/introduction">
          <button className="bg-[#0c0c0c] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8] border-2 hover:bg-[#575757]">
            Back
          </button>
        </Link>
        <button className="bg-[#111111] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8]  border-2 hover:bg-[#575757]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questionbutton;
