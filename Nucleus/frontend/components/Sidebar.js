// components/Sidebar.js
"use client";

import { useSearchParams } from "next/navigation";

const Sidebar = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  return (
    <div className="sidebar w-64 h-full bg-gray-800 text-white fixed">
      <ul className="p-4">
        <li className={section === "profile" ? "bg-gray-700" : ""}>
          <a href="?section=profile" className="block p-2">
            Profile
          </a>
        </li>
        <li className={section === "leaderboard" ? "bg-gray-700" : ""}>
          <a href="?section=leaderboard" className="block p-2">
            Leaderboard
          </a>
        </li>
        <li className={section === "payment" ? "bg-gray-700" : ""}>
          <a href="?section=payment" className="block p-2">
            Payment
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
