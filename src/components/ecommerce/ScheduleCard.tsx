
import React from "react";

interface ScheduleItem {
  id: number;
  title: string;
  date: string;
  color: "green" | "purple";
}

const schedules: ScheduleItem[] = [
  { id: 1, title: "Meeting Hiring Freelancer", date: "10:00 AM · May 20", color: "green" },
  { id: 2, title: "HR Update Slack Review", date: "02:00 PM · May 20", color: "green" },
  { id: 3, title: "Customer Product Review", date: "11:00 AM · May 21", color: "purple" },
  { id: 4, title: "Finish Reporting System", date: "04:00 PM · May 22", color: "purple" },
];

export default function ScheduleCard() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6
      dark:border-gray-800 dark:bg-gray-900">
      
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
          Schedule
        </h3>
      </div>

      {/* Schedule List */}
      <div className="space-y-3">
        {schedules.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-between rounded-xl p-4
              ${item.color === "green" 
                ? "bg-lime-100 dark:bg-lime-900/20" 
                : "bg-purple-100 dark:bg-purple-900/20"}`}
          >
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                {item.title}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {item.date}
              </p>
            </div>

            <span
              className={`h-2 w-2 rounded-full
                ${item.color === "green" ? "bg-lime-500" : "bg-purple-500"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
