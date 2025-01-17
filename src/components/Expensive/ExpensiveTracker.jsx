import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const ExpenseTracker = () => {
  const [Text, SetText] = useState("");
  const [amount, SetAmount] = useState();
  const [data, SetData] = useState([]);
  const [total, SetTotal] = useState("");

  const handleExpensive = () => {
    if (Text.length >= 1 && amount >= 1) {
      SetData((prev) => [
        ...prev,
        { name: Text, expensive: Number(amount), id: Date.now() },
      ]);
      console.log(data);
      SetAmount("");
      SetText("");
    }
  };

  const handleDelete = (id) => {
    let filters = data.filter((item) => item.id != id);
    SetData(filters);
  };

  useEffect(() => {
    const totalAmount = data.reduce((sum, item) => sum + item.expensive, 0);
    SetTotal(totalAmount);
  }, [data]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
          Expense Tracker
        </h1>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Expense Name
            </label>
            <input
              type="text"
              value={Text}
              placeholder="Enter expense name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => SetText(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => SetAmount(e.target.value)}
            />
          </div>
          <button
            onClick={handleExpensive}
            className="w-full py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Expense
          </button>
        </div>

        {/* Expense List */}
        <div className="mt-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">Expenses</h2>
          <div>
            {data.map((item, i) => {
              return (
                <div key={i}>
                  <ul className="divide-y divide-gray-200">
                    <li className="flex items-center justify-between py-2">
                      <span className="text-gray-700">{item.name}</span>

                      <div className="flex items-center gap-1">
                        <span className="text-gray-500">{item.expensive}</span>
                        <MdDelete
                          onClick={() => handleDelete(item.id)}
                          className="cursor-pointer"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="text-xl font-medium text-center">
          Total Expensive {total}
        </h1>
      </div>
    </div>
  );
};

export default ExpenseTracker;
