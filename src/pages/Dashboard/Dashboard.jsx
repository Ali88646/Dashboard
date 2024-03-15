import DashboardLayout from "../../Components/DashboardLayout";
import Portfolio from "./components/Portfolio";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Portfolio />
    </DashboardLayout>
  );
};

export default Dashboard;
