import ReactFlow, {
  Node,
} from "reactflow";

const initialNodes= [
  {
    id: "1",
    type: "input",
    data: { label: <div>Hello</div> },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: <div>Hello</div> },
    position: { x: 250, y: 250 },
  },
];
export default initialNodes;