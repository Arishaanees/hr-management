
import Chart from "react-apexcharts";

export default function MonthlySalesChart() {
  const isDark = document.documentElement.classList.contains("dark");

  const options = {
    chart: {
      toolbar: { show: false },
      foreColor: isDark ? "#E4E4E7" : "#101828", // dark/light text color
      background: "transparent",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
      labels: { style: { colors: isDark ? "#E4E4E7" : "#101828" } },
    },
    yaxis: {
      labels: { style: { colors: isDark ? "#E4E4E7" : "#101828" } },
    },
    grid: {
      borderColor: isDark ? "#374151" : "#E5E7EB",
    },
    colors: ["#6366F1"], // bar color
    tooltip: { theme: isDark ? "dark" : "light" },
  };

  const series = [{ name: "Apps", data: [120, 200, 150, 300] }];

  return (
    <div className="w-full rounded-2xl bg-white border border-gray-200 p-5 shadow-sm
      hover:shadow-md transition dark:bg-gray-900 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Applications
      </h3>
      <Chart type="bar" height={180} series={series} options={options} />
    </div>
  );
}
