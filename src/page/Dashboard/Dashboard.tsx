'use client'
import AccordionCustom from "@/component/Accordion/AccordionCustom";
import ButtonCustom from "@/component/Button/ButtonCustom";
import { useRouter } from 'next/navigation'
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const router = useRouter()
  const handleCreateCampaign = () => {
    router.push('/newcampaign')
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2"> 
          <h2 className="font-bold">Personal Dashboard</h2>
          <p>View and manage personal campaigns</p>
        </div>
        <ButtonCustom text="Create new campaign" handleClick={handleCreateCampaign} />
      </div>
      <div className="mt-[20px]">
          <p className="border-b-2 border-button cursor-pointer p-4 font-semibold text-button w-fit">My campaigns</p>
          <hr />
          <div className="flex flex-col mt-[20px] gap-4">
            <AccordionCustom title="Active Campaigns (2)" content="Hello world"/>  
            <AccordionCustom title="Active Campaigns (2)" content="Hello world"/>  
            <AccordionCustom title="Active Campaigns (2)" content="Hello world" />  
          </div>      
      </div>
    </div>
  );
};

export default Dashboard;
