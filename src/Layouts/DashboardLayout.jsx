import Sidebar from "../Component/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex flex-col">
      {/* <Helmet>
            <title>Global | Dashboard</title>
          </Helmet> */}
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
