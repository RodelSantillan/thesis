import React, { useState } from "react";
import background from "../picture/background.png";
import { FormLayoutComponent } from "./FormLayoutComponent";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignIn = () => {
    if (password == "admin") {
      navigate("/home");
    } else {
      console.log("error");
    }
  };
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Makes the image cover the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <FormLayoutComponent>
        <form className="w-full flex flex-col gap-7 items-center  font-mono ">
          <div>
            <TitleComponent title={"Sign In"} />
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-full  bg-black text-white text-center font-bold  w-[90%]  tracking-wide text-xlborder-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-full bg-black text-white text-center font-bold w-[90%] tracking-wide text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />

          <div className="text-[#1d1b1b] cursor-pointer font-semibold hover:text-[#3b3939] ">
            <p>You Forget Password?</p>
          </div>
        </form>

        <div>
          <ButtonComponent handleSignIn={handleSignIn} />
        </div>
      </FormLayoutComponent>
    </div>
  );
}
