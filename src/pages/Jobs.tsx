import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

// Schedule Type
interface ScheduleItem {
  id: number;
  title: string;
  time: string;
  date: string;
  status: "Upcoming" | "Ongoing" | "Completed";
}

// Demo Schedule Data
const scheduleData: ScheduleItem[] = [
  {
    id: 1,
    title: "HR Meeting",
    time: "10:00 AM",
    date: "12 Feb 2025",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Interview – Designer",
    time: "01:30 PM",
    date: "12 Feb 2025",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "Team Briefing",
    time: "03:00 PM",
    date: "13 Feb 2025",
    status: "Completed",
  },
  {
    id: 4,
    title: "Manager Review",
    time: "11:00 AM",
    date: "13 Feb 2025",
    status: "Upcoming",
  },
];

export default function Schedule() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      
      {/* Header */}
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Schedule
        </h3>

        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
          See all
        </button>
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Title
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Time
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {scheduleData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="py-3 font-medium text-gray-800 dark:text-white/90">
                  {item.title}
                </TableCell>

                <TableCell className="py-3 text-gray-500 dark:text-gray-400">
                  {item.date}
                </TableCell>

                <TableCell className="py-3 text-gray-500 dark:text-gray-400">
                  {item.time}
                </TableCell>

                <TableCell className="py-3">
                  <Badge
                    size="sm"
                    color={
                      item.status === "Upcoming"
                        ? "warning"
                        : item.status === "Ongoing"
                        ? "success"
                        : "error"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
