import React from "react";
import { PriceChart } from "./PriceChart/Chart";

export const PriceChartWithInfo = () => {
  return (
    <div>
      <p className="font-bold text-gray-300">Price ( last 30 days )</p>
      <div className="border border-gray-600 mt-2 p-4">
        <div style={{ width: "88%" }}>
          <PriceChart />
        </div>
        <table>
          <tbody className="text-xs">
            <tr>
              <td className="w-40">Min.</td>
              <td>2.32232</td>
            </tr>
            <tr>
              <td>Max.</td>
              <td>4.23423</td>
            </tr>
            <tr>
              <td>Mean</td>
              <td>3.2320</td>
            </tr>
            <tr>
              <td>Standard deviation</td>
              <td>0.938219</td>
            </tr>
            <tr>
              <td>Optimal Range</td>
              <td>2.89392 - 3.273929</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
