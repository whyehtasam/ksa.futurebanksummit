import React from "react";

const Statistics = () => {
  return (
    <div className="h-[642px] flex justify-center items-center border border-black">
      <div className="stats stats-vertical lg:stats-horizontal shadow btn-ghost no-animation hover:bg-none cursor-pointer">

        <div className="stat text-center btn-ghost">
          <div className="stat-value text-sky-600 text-6xl">31+</div>
          <div className="stat-title font-bold text-2xl text-slate-50 p-4">
            SPEAKERS
          </div>
        </div>

        <div className="stat text-center">
          <div className="stat-value text-sky-600 text-6xl">2 DAYS</div>
          <div className="stat-title font-bold text-2xl text-slate-50 p-4">
            EVENTS
          </div>
        </div>

        <div className="stat text-center">
          <div className="stat-value text-sky-600 text-6xl">400+</div>
          <div className="stat-title font-bold text-2xl text-slate-50 p-4">
            DELEGATES
          </div>
        </div>

        <div className="stat text-center">
          <div className="stat-value text-sky-600 text-6xl">10+</div>
          <div className="stat-title font-bold text-2xl text-slate-50 p-4">
            HOURS OF NETWORKING
          </div>
        </div>

      </div>
    </div>
  );
};

export default Statistics;
