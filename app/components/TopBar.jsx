import { GiAirplaneDeparture } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-16 py-2">
      <div className="flex items-center gap-2">
        <GiAirplaneDeparture size={44} className="text-dark" />
        <h1 className="text-2xl font-bold text-slate-700">WEEKSAWAY</h1>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <BsFillTelephoneFill size={20} className="text-dark" />
        <p className="text-lg hidden sm:block">111-222-1234</p>
        <div className="w-[2px] h-6 bg-black"></div>
        <button className="bg-gradient-to-r from-light to-dark hover:from-red-400 hover:to-red-600 font-bold text-gray-100">
          CONTACT US
        </button>
      </div>
    </div>
  );
};
export default TopBar;
