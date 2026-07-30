import {useState} from 'react'
import  Sidebar from "../components/dashboard/Sidebar";
import Market from "../components/dashboard/Market";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className = "w-full flex mt-10 px-10 justify-center">
      <Sidebar setActiveTab={setActiveTab} />
      {activeTab === "market" && <Market />}
      
    </div>
  )
}
