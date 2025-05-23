import React from "react";

const TotalCost = ({ items = [], otherCosts = [] }) => {
  const totalItemCost = items.reduce((acc, item) => acc + Number(item.cost || 0), 0);
  const totalOtherCost = otherCosts.reduce((acc, cost) => acc + Number(cost.amount || 0), 0);
  const total = totalItemCost + totalOtherCost;

  return (
    <div className="p-4 mt-4 border rounded-md shadow-md bg-white dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Total Project Cost</h2>
      <div className="text-2xl font-semibold text-green-600 dark:text-green-400">
        ₹ {total.toLocaleString("en-IN")}
      </div>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        (Items: ₹ {totalItemCost.toLocaleString("en-IN")} + Other: ₹ {totalOtherCost.toLocaleString("en-IN")})
      </p>
    </div>
  );
};

export default TotalCost;
