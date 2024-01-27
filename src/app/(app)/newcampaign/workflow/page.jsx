"use client";
import React, { useCallback, useState } from "react";
import initialNodes from "./nodes.js";
import initialEdges from "./edges.js";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  OnEdgesChange,
  OnNodesChange,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import CardFlow from "@/page/Workflow/CardFlow.tsx";
import OutboxIcon from '@mui/icons-material/Outbox';

const page = (props) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="w-full h-full flex">
      <div className="bg-white h-full w-[80%]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          onConnect={onConnect}
        />
      </div>
      <div className="w-[20%] bg-white h-full border-[1px]  rounded-sm"> 
        <div className="p-4">
          <h1 className="text-black">Set up automated journey</h1>
          <p>Drag and drop actions or rules to the canvas to send an email or build on automated campaign journey</p>
        </div>
        <hr />
        <div className="p-4 flex flex-col gap-4">
          <div className="">
            <h2 className="text-green-800 font-bold">Action</h2>
            <p>Do something</p>
          </div>
          <CardFlow classname="border-s-green-800" text="Hello world" icon={<OutboxIcon color="info"/>}/>
          <div className="">
            <h2 className="text-orange-400 font-bold">Action</h2>
            <p>Do something</p>
          </div>
          <CardFlow classname="border-s-orange-400" text="Hello world" icon={<OutboxIcon color="warning"/>}/>
          <CardFlow classname="border-s-orange-400" text="Hello world" icon={<OutboxIcon color="warning"/>}/>
       
        </div>
      </div>
    </div>
  );
};

export default page;
