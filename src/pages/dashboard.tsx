import DashboardLayout from "../layouts/dashboard-layout";

export const DashboardPage = () => {
  return (
    <div>
      <DashboardLayout>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        {/* Add more dashboard content here */}
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} style={{ margin: "10px 0" }}>
            <p>Item {index + 1}</p>
          </div>
        ))}
      </DashboardLayout>
    </div>
  );
};
