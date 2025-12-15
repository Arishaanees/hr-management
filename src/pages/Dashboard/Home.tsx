
import DepartmentsMetrics from "../../components/ecommerce/DepartmentsMetrics";
import LineApllicants from "../../components/ecommerce/LineApllicants";
import Resources from "../../components/ecommerce/Resources";
import VacancyAndTaskCard from "../../components/ecommerce/VacancyAndTaskCard";
import RecentActivity from "../../components/ecommerce/RecentActivity";
import ApplicantList from "../../components/ecommerce/ApplicantList";
import ScheduleCard from "../../components/ecommerce/ScheduleCard";

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
      </div>
    </div>
  );
}
