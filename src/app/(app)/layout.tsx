import ButtonCustom from "@/component/Button/ButtonCustom";
import Header from "@/component/Header/Header";
import React from "react";

type Props = {};

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default layout;
