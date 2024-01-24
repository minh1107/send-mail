import Navigate from "@/component/Navitage/Navigate";
import Dashboard from "@/page/Dashboard/Dashboard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-1 h-auto">
      <Navigate />
      <div className="bg-main flex-1 p-8">
        <Dashboard />
      </div>
    </div>
  );
};

export default page;
