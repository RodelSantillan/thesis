import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Homegame from "./gameusers/Homegame";
import Home from "./gameusers/Home";
import Leaderboards from "./gameusers/Leaderboards";
import Html1 from "./gamelevelhtml/Html1";
import Q1HTML from "./QuestionGame/Q1HTML";
import Signup from "./component/Signup";
import Recover from "./component/Recover";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/home" element={<Homegame />} />
          <Route path="/home/start" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboards />} />
          <Route path="/introduction" element={<Html1 />} />
          <Route path="/game" element={<Q1HTML />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
