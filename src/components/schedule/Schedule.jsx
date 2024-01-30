import  { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import ScheduleContent from "./ScheduleContent";
import Breadcrums from "../Breadcrums";
import { scheduleData,scheduleData2 } from "./scheduleData";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="schedule bg-white">
     <Breadcrums heading='Schedule' link='Schedule'/>
      <div className="sechdule-content bg-white pt-20">
        <div className="container w-9/12 mx-auto p-3">
          <h2 className="text-5xl text-center font-bold font-oswald">
            4TH ANNUAL FUTURE BANKS SUMMIT KSA 2023
          </h2>

          <div className="my-16">
            <div className="flex font-poppins">
              <button
                className={`flex-1 p-4 ${activeTab === 1 ? "bg-sky-700 rounded font-semibold text-white " : "bg-slate-100 rounded font-semibold text-sky-700 hover:bg-[#222222] hover:text-white "}`}
                onClick={() => setActiveTab(1)}
              >
               <FontAwesomeIcon icon={faCalendarDays} className='mx-2 ' /> DAY 1 | 11 SEPTEMBER 2023, MONDAY
              </button>
              <button
                className={`flex-1 p-4 ${activeTab === 2 ? "bg-sky-700 rounded font-semibold text-white" : "bg-slate-100 rounded text-sky-700 font-semibold hover:bg-[#222222] hover:text-white "}`}
                onClick={() => setActiveTab(2)}
              >
                <FontAwesomeIcon icon={faCalendarDays} className='mx-2 '/>DAY 2 | 12 SEPTEMBER 2023, TUESDAY
              </button>
            </div>
            <div className="w-full py-16 px-6">
              {activeTab === 1 && <div><ScheduleContent  data={scheduleData}/></div>}
              {activeTab === 2 && <div><ScheduleContent    data={scheduleData2}/></div>}
              <button className="btn no-animation mt-8 bg-violet-800 text-white border-none btn-ghost px-8 rounded opacity-100 hover:rounded-xl hover:bg-sky-600 transition-all duration-500">REGISTER</button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
