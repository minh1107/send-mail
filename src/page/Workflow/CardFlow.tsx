import React from "react";

type Props = {
  icon: any;
  text: string
  classname: string
};

const CardFlow = ({ icon, text, classname }: Props) => {
  return (
    <div
      className={`border-[2px] p-4 rounded-md
        border-gray ${classname} flex gap-4 cursor-pointer hover:bg-gray-100`}
    >
      {icon}
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default CardFlow;
