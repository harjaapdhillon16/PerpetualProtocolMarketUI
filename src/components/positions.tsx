import React from "react";

export const Positions = () => {
  return (
    <div className="mt-4">
      <p className="font-bold text-gray-300">Positions</p>
      <div className="border border-gray-600 mt-2">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="p-2 font-medium">Range</th>
              <th className="font-medium">Distribution</th>
              <th className="font-medium">Liquidity</th>
              <th className="font-medium">Uncl. Fees</th>
              <th className="font-medium">Fee. APY</th>
              <th className="font-medium">Net Return</th>
              <th className="font-medium">Net APY</th>
              <th>
                <span className="sr-only">Transaction</span>
              </th>
              <th>
                <span className="sr-only">Manage</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-200">
              <td className="p-2">
                <p className="font-semibold">2.7650081-3.99854564</p>
                <p className="text-green-500 text-sm">In Range</p>
              </td>
              <td>
                <p className="text-sm">vCRV : 9asd90as2</p>
                <p className="text-sm">vUSD : 9asd90as2</p>
              </td>
              <td>$10.20</td>
              <td>$0.00</td>
              <td className="text-green-500">0.00%</td>
              <td className="text-red-500">-$0.00</td>
              <td className="text-red-500">-0.00%</td>
              <td className="text-blue-500 font-semibold text-sm"><button>Transactions</button></td>
              <td className="text-blue-500 font-semibold text-sm"><button>Manage</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
