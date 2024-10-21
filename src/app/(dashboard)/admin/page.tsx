import AttendsanceChart from "@/app/components/AttendsanceChart";
import CountCharts from "@/app/components/CountCharts";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="студент" />
          <UserCard type="преподаватель" />
          <UserCard type="родитель" />
          <UserCard type="персонал" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountCharts />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendsanceChart />
          </div>

        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[450px]">
            <FinanceChart/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 bg-gray-300"></div>
    </div>
  );
};

export default AdminPage;
