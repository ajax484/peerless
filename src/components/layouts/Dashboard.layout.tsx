import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
      <section className="ml-[280px] relative flex-1">
        <Topbar />
        <div className="pt-24 pb-6 px-8 bg-[#f9f9f9]">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
