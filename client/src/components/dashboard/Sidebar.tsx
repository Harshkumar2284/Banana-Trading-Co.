import {useNavigate} from "react-router-dom"
export default function Sidebar(props:any) {
  const navigate = useNavigate();
  const setActiveTab = props.setActiveTab;
  return (
    <div className="w-1/12 border border-black h-160 bg-[#171006] flex flex-col  rounded-2xl">
      <button className="bg-[#FFF4D1] mt-10 rounded-2xl" onClick={() => setActiveTab("market")}>
        Market
      </button>
      <button className="bg-[#FFF4D1] mt-10 rounded-2xl" onClick={() => navigate("/portfolio")}>
        Portfolio
      </button>
    </div>
  )
}
