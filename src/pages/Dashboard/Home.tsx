
import DepartmentsMetrics from "../../components/ecommerce/DepartmentsMetrics";
import LineApllicants from "../../components/ecommerce/LineApllicants";
import Resources from "../../components/ecommerce/Resources";
import VacancyAndTaskCard from "../../components/ecommerce/VacancyAndTaskCard";
import RecentActivity from "../../components/ecommerce/RecentActivity";
import ApplicantList from "../../components/ecommerce/ApplicantList";
import ScheduleCard from "../../components/ecommerce/ScheduleCard";
import Applicants from "../../components/ecommerce/Appliacants";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6">

      <div className="col-span-12 xl:col-span-7 space-y-6">
        <DepartmentsMetrics />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LineApllicants />
          <ApplicantList />
        </div>

        <VacancyAndTaskCard />
      </div>

      <div className="col-span-12 xl:col-span-5 space-y-6">
        <Resources />
       < ScheduleCard />
        <RecentActivity />
        {/* <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition dark:bg-gray-900 dark:border-gray-800"> */}
         <Applicants />
          {/* </div> */}

      </div>
    </div>
  );
}
