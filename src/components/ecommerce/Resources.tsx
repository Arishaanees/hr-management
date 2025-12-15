
import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { MoreDotIcon } from "../../icons";

export default function ApplicationsByResources() {
  const series = [250, 200, 300, 150, 100];

  // Check dark mode
  const isDark = document.documentElement.classList.contains("dark");

  const options: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "Outfit, sans-serif",
      toolbar: { show: false },
      foreColor: isDark ? "#E4E4E7" : "#101828",
    },
    labels: ["LinkedIn", "Indeed", "Website", "Referral", "Other"],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Applications",
              fontSize: "12px",
              color: isDark ? "#E4E4E7" : "#101828",
              formatter: () => "1,000",
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: 600,
              color: isDark ? "#FFFFFF" : "#101828",
            },
          },
        },
      },
    },
    colors: isDark
      ? ["#818CF8", "#6366F1", "#4F46E5", "#A78BFA", "#C7D2FE"]
      : ["#C7D2FE", "#A5B4FC", "#818CF8", "#6366F1", "#4F46E5"],
    stroke: { width: 0 },
    theme: {
      mode: isDark ? "dark" : "light",
    },
  };

  const stats = [
    { label: "LinkedIn", value: 250 },
    { label: "Indeed", value: 200 },
    { label: "Website", value: 300 },
    { label: "Referral", value: 150 },
  ];

  return (
    <div className="w-full rounded-2xl p-5
      shadow-sm hover:shadow-md
      dark:bg-gray-900 transition">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Applicant Resources
        </h3>
        <MoreDotIcon className="w-6 h-6 text-gray-400 dark:text-gray-300 cursor-pointer" />
      </div>

      {/* Chart */}
      <Chart options={options} series={series} type="donut" height={260} />

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-y-4 mt-4 text-sm">
        {stats.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
            <span className="font-semibold text-gray-800 dark:text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
