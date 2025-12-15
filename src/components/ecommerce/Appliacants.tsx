
import React, { useState } from "react";

interface Applicant {
  id: number;
  name: string;
  role: string;
  applied: string;
  status: string;
}

const data: Applicant[] = [
  { id: 1, name: "Alex Wilson", role: "HR Executive", applied: "Apr 18, 2023", status: "Shortlisted" },
  { id: 2, name: "Sophia Lee", role: "Software Engineer", applied: "Apr 19, 2023", status: "Interviewed" },
  { id: 3, name: "Michael Brown", role: "Product Manager", applied: "Apr 20, 2023", status: "Pending" },
];

const tabs = ["All Applicants", "Shortlisted", "Interviewed", "Pending"];

export default function Applicants() {
  const [activeTab, setActiveTab] = useState("All Applicants");

  const filtered =
    activeTab === "All Applicants" ? data : data.filter((d) => d.status === activeTab);

  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md transition dark:bg-gray-900 dark:border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Applicants List</h2>
        <div className="flex gap-2">
          <input
            className="px-3 py-1.5 text-sm border rounded-lg border-gray-300 bg-white text-gray-700
                       dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            placeholder="Search"
          />
          <select
            className="px-3 py-1.5 text-sm border rounded-lg border-gray-300 text-gray-600
                       dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          >
            <option>Sort by: Name</option>
            <option>Sort by: Date</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-4 text-sm border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-indigo-600 text-indigo-600 font-medium dark:border-indigo-400 dark:text-indigo-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <th className="py-3">Name</th>
              <th className="py-3">Job Role</th>
              <th className="py-3">Applied</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filtered.map((item) => (
              <tr key={item.id}>
                <td className="py-3 font-medium text-gray-800 dark:text-white">{item.name}</td>
                <td className="py-3 text-gray-600 dark:text-gray-300">{item.role}</td>
                <td className="py-3 text-gray-600 dark:text-gray-300">{item.applied}</td>
                <td className="py-3">
                  <span className="rounded-full px-3 py-1 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {item.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <button className="px-3 py-1.5 text-xs border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-200 dark:border-gray-700">
                    View Resume
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
