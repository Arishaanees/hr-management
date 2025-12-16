
import { useState } from "react";
import { MoreDotIcon } from "../../icons";
import Applicants from "../../components/ecommerce/Appliacants";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function VacancyTaskSchedule() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const toggleMenu = (id: number) =>
    setOpenMenu(openMenu === id ? null : id);

  const vacancies = [
    {
      id: 1,
      title: "Software Developer",
      type1: "Full-time",
      type2: "Remote",
      salary: "$70K - $90K / yr",
      applicants: "120 Applicants",
      iconBg: "bg-indigo-900/40 text-indigo-400",
    },
    {
      id: 2,
      title: "Graphic Designer",
      type1: "Part-time",
      type2: "Hybrid",
      salary: "$40K - $55K / yr",
      applicants: "75 Applicants",
      iconBg: "bg-lime-900/40 text-lime-400",
    },
    {
      id: 3,
      title: "Sales Manager",
      type1: "Full-time",
      type2: "On-site",
      salary: "$65K - $80K / yr",
      applicants: "75 Applicants",
      iconBg: "bg-yellow-900/40 text-yellow-400",
    },
    {
      id: 4,
      title: "HR Coordinator",
      type1: "Contract",
      type2: "Remote",
      salary: "$50K - $60K / yr",
      applicants: "60 Applicants",
      iconBg: "bg-purple-900/40 text-purple-400",
    },
  ];

  const tasks = [
    { title: "Resume Screening", percent: 40, date: "May 27, 2027" },
    { title: "Interview Scheduling", percent: 30, date: "May 20, 2027" },
    { title: "Candidate Communication", percent: 20, date: "May 22, 2027" },
    { title: "Offer Management", percent: 50, date: "May 25, 2027" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* ================= LEFT : VACANCIES ================= */}
      <div className="lg:col-span-8">
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">
              Current Vacancies (104)
            </h3>
            <button className="text-sm text-gray-400 hover:text-gray-200">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {vacancies.map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl border border-gray-800 bg-gray-900 p-5 hover:border-gray-700 transition"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.iconBg}`}
                    >
                      <BriefcaseIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <div className="flex gap-2 mt-1">
                        <span className="rounded-md bg-gray-800 px-2 py-0.5 text-[11px] text-gray-400">
                          {item.type1}
                        </span>
                        <span className="rounded-md bg-gray-800 px-2 py-0.5 text-[11px] text-gray-400">
                          {item.type2}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => toggleMenu(item.id)}>
                    <MoreDotIcon className="w-5 h-5 text-gray-500 hover:text-gray-300" />
                  </button>

                  {openMenu === item.id && (
                    <div className="absolute right-3 top-9 z-20 w-28 rounded-lg border border-gray-700 bg-gray-900">
                      <button className="block w-full px-3 py-2 text-xs text-gray-300 hover:bg-gray-800 text-left">
                        View More
                      </button>
                      <button className="block w-full px-3 py-2 text-xs text-red-400 hover:bg-gray-800 text-left">
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="font-semibold text-white">
                    {item.salary}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.applicants}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIGHT : TASKS + APPLICANTS ================= */}
      <div className="lg:col-span-4 space-y-6">

        {/* TASKS */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold text-white">
              Tasks
            </h3>
            <button className="rounded-lg bg-lime-600 px-3 py-1 text-white hover:bg-lime-500">
              +
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map((task, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-3"
              >
                {/* Circular Progress */}
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 rotate-[-90deg]">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#374151"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#84cc16"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={125}
                      strokeDashoffset={
                        125 - (125 * task.percent) / 100
                      }
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-200">
                    {task.percent}%
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {task.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {task.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICANTS */}
        {/* <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <Applicants />
        </div> */}
      </div>
    </div>
  );
}
