import React from "react";
import { Positions, PriceChartWithInfo, HeaderInfo } from "./components";
import './App.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white p-5 pageBackground">
      <HeaderInfo />
      <PriceChartWithInfo />
      <Positions />
    </div>
  );
};

export default App;
