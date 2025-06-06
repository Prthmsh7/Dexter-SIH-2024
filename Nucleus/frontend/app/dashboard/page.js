// app/dashboard/page.js
"use client";

import { useSearchParams } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import Leaderboard from "../../components/Leaderboard";
import Payment from "../../components/Payment";

const Dashboard = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const renderComponent = () => {
    switch (section) {
      case "leaderboard":
        return <Leaderboard />;
      case "payment":
        return <Payment />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex">
      <main className="ml-64 p-8 flex-1 bg-zinc-100">{renderComponent()}</main>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
