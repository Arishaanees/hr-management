
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Education", value: 120, color: "#7C83FD" },
  { name: "Agriculture", value: 110, color: "#A3E635" },
  { name: "Bank", value: 90, color: "#D9F99D" },
  { name: "Police Support", value: 80, color: "#C7D2FE" },
  { name: "Finance", value: 65, color: "#9CA3AF" },
  { name: "Human Resources", value: 60, color: "#A78BFA" },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

const Monthly = () => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Application By Departments
        </h2>
        <select className="rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      {/* Chart + Legend */}
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
        {/* Donut Chart */}
        <div className="relative flex-shrink-0">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden">
            <span className="text-2xl font-bold text-gray-800 dark:text-white truncate">
              {total}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
              Total Applications
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 text-sm space-y-2 w-full">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between gap-6">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-700 dark:text-gray-300 truncate">
                  {item.name}
                </span>
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-200 truncate">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monthly;
