
//  Recent Activity    /////////////////////
 import { Bell, Clock } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Denzel Wright viewed 15 candidate profiles",
      time: "2 hours ago",
      tag: "Software Developer",
      color: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      id: 2,
      title: "Karen Smith interviewed 3 candidates",
      time: "4 hours ago",
      tag: "Marketing Manager",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      id: 3,
      title: "Automated reminder sent to HR team",
      time: "6 hours ago",
      tag: "Interview Follow-ups",
      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Recent Activity
        </h3>

        <Bell size={18} className="text-gray-400 dark:text-gray-300" />
      </div>

      {/* Body */}
      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 border-b pb-4 last:border-none last:pb-0 border-gray-200 dark:border-gray-700"
          >
            {/* Icon */}
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center ${item.color}`}
            >
              <Clock size={18} className="dark:text-gray-200" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-gray-800 text-sm font-medium dark:text-gray-100">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">
                {item.time}
              </p>

              {item.tag && (
                <span className="inline-block mt-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {item.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// import { Bell, Clock } from "lucide-react";

// export default function RecentActivity() {
//   const activities = [
//     {
//       id: 1,
//       title: "Denzel Wright viewed 15 candidate profiles",
//       time: "2 hours ago",
//       tag: "Software Developer",
//       color: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
//     },
//     {
//       id: 2,
//       title: "Karen Smith interviewed 3 candidates",
//       time: "4 hours ago",
//       tag: "Marketing Manager",
//       color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
//     },
//     {
//       id: 3,
//       title: "Automated reminder sent to HR team",
//       time: "6 hours ago",
//       tag: "Interview Follow-ups",
//       color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
//     },
//   ];

//   return (
//     <div className="w-full rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//           Recent Activity
//         </h3>
//         <Bell size={18} className="text-gray-400 dark:text-gray-300" />
//       </div>

//       {/* Body */}
//       <div className="space-y-4">
//         {activities.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-start gap-3 border-b pb-4 last:border-none last:pb-0 border-gray-200 dark:border-gray-700"
//           >
//             {/* Icon */}
//             <div
//               className={`h-10 w-10 rounded-full flex items-center justify-center ${item.color}`}
//             >
//               <Clock size={18} className="dark:text-gray-200" />
//             </div>

//             {/* Text */}
//             <div className="flex-1">
//               <p className="text-gray-800 text-sm font-medium dark:text-gray-100">
//                 {item.title}
//               </p>
//               <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">
//                 {item.time}
//               </p>

//               {item.tag && (
//                 <span className="inline-block mt-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
//                   {item.tag}
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { Bell, Clock } from "lucide-react";

// export default function RecentActivity() {
//   const activities = [
//     {
//       id: 1,
//       title: "Denzel Wright viewed 15 candidate profiles",
//       time: "2 hours ago",
//       tag: "Software Developer",
//       color: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
//     },
//     {
//       id: 2,
//       title: "Karen Smith interviewed 3 candidates",
//       time: "4 hours ago",
//       tag: "Marketing Manager",
//       color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
//     },
//     {
//       id: 3,
//       title: "Automated reminder sent to HR team",
//       time: "6 hours ago",
//       tag: "Interview Follow-ups",
//       color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
//     },
//   ];

//   return (
//     <div className="w-full h-full rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//           Recent Activity
//         </h3>
//         <Bell size={18} className="text-gray-400 dark:text-gray-300" />
//       </div>

//       {/* Body */}
//       <div className="space-y-4 overflow-y-auto max-h-[400px]">
//         {activities.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-start gap-3 border-b pb-4 last:border-none last:pb-0 border-gray-200 dark:border-gray-700"
//           >
//             {/* Icon */}
//             <div
//               className={`h-10 w-10 rounded-full flex items-center justify-center ${item.color}`}
//             >
//               <Clock size={18} className="dark:text-gray-200" />
//             </div>

//             {/* Text */}
//             <div className="flex-1 min-w-0">
//               <p className="text-gray-800 text-sm font-medium dark:text-gray-100">
//                 {item.title}
//               </p>
//               <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">
//                 {item.time}
//               </p>

//               {item.tag && (
//                 <span className="inline-block mt-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
//                   {item.tag}
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { Bell, Clock } from "lucide-react";

// export default function RecentActivity() {
//   const activities = [
//     { id: 1, title: "Denzel Wright viewed 15 candidate profiles", time: "2 hours ago", tag: "Software Developer", color: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300" },
//     { id: 2, title: "Karen Smith interviewed 3 candidates", time: "4 hours ago", tag: "Marketing Manager", color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" },
//     { id: 3, title: "Automated reminder sent to HR team", time: "6 hours ago", tag: "Interview Follow-ups", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300" },
//   ];

//   return (
//     <div className="w-full h-full rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700 flex flex-col min-w-0">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Activity</h3>
//         <Bell size={18} className="text-gray-400 dark:text-gray-300" />
//       </div>

//       <div className="space-y-4 overflow-y-auto flex-1 min-w-0">
//         {activities.map((item) => (
//           <div key={item.id} className="flex items-start gap-3 border-b pb-4 last:border-none last:pb-0 border-gray-200 dark:border-gray-700">
//             <div className={`h-10 w-10 rounded-full flex items-center justify-center ${item.color}`}>
//               <Clock size={18} className="dark:text-gray-200" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-gray-800 text-sm font-medium dark:text-gray-100">{item.title}</p>
//               <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">{item.time}</p>
//               {item.tag && (
//                 <span className="inline-block mt-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">{item.tag}</span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { Bell, Clock } from "lucide-react";

// export default function RecentActivity() {
//   const activities = [
//     { id: 1, title: "Denzel Wright viewed 15 candidate profiles", time: "2 hours ago", tag: "Software Developer", color: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300" },
//     { id: 2, title: "Karen Smith interviewed 3 candidates", time: "4 hours ago", tag: "Marketing Manager", color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" },
//     { id: 3, title: "Automated reminder sent to HR team", time: "6 hours ago", tag: "Interview Follow-ups", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300" },
//   ];

//   return (
//     <div className="w-full h-full rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700 flex flex-col min-w-0">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Activity</h3>
//         <Bell size={18} className="text-gray-400 dark:text-gray-300" />
//       </div>

//       <div className="flex-1 min-w-0 space-y-4 overflow-y-auto">
//         {activities.map((item) => (
//           <div key={item.id} className="flex items-start gap-3 border-b pb-4 last:border-none last:pb-0 border-gray-200 dark:border-gray-700">
//             <div className={`h-10 w-10 rounded-full flex items-center justify-center ${item.color}`}>
//               <Clock size={18} className="dark:text-gray-200" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-gray-800 text-sm font-medium dark:text-gray-100">{item.title}</p>
//               <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">{item.time}</p>
//               {item.tag && (
//                 <span className="inline-block mt-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">{item.tag}</span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
