import React from "react";

export const HeaderInfo = () => {
  return (
    <div className="">
      <div className="mb-5 flex justify-between">
        <div>
          <p className="mb-3">
            vCRV/vCSD{" "}
            <span className="bg-gray-100 px-2 py-1 rounded mx-2 text-black">
              0.3%
            </span>
          </p>
          <span className="bg-red-400 rounded p-1 text-sm">
            Optimisim / PerpV2
          </span>
        </div>
        <div>
          <p>$14.90</p>
        </div>
      </div>
      <div className="grid grid-cols-8 mb-3">
        <div>
          <p>Current Price</p>
          <p className="text-sm">3.2223 vUSD</p>
        </div>
        <div>
          <p>Total Liquidity</p>
          <p className="text-sm text-green-400">3.019 vUSD</p>
        </div>
        <div>
          <p>Total Fees</p>
          <p className="text-sm">3.23 usd</p>
        </div>
        <div>
          <p>Fee APY</p>
          <p className="text-sm text-green-400">0.00%</p>
        </div>
        <div>
          <p>Net Return</p>
          <p className="text-sm text-red-500">0.00%</p>
        </div>
        <div>
          Net APY
          <p className="text-sm text-red-500">-0.00%</p>
        </div>
      </div>
    </div>
  );
};
