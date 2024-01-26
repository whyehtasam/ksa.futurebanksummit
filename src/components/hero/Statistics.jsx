import React from "react";
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <div className="h-[642px] flex justify-center items-center border border-black">
      <div className="stats stats-vertical lg:stats-horizontal shadow btn-ghost no-animation hover:bg-none cursor-pointer">

      <div className="stat text-center btn-ghost">
  <div className="stat-value text-sky-600 text-6xl">
    <CountUp end={31} duration={5} />+
  </div>
  <div className="stat-title font-bold text-2xl text-slate-50 p-4">
    SPEAKERS
  </div>
</div>

<div className="stat text-center">
  <div className="stat-value text-sky-600 text-6xl">
    <CountUp end={2} duration={5} /> DAYS
  </div>
  <div className="stat-title font-bold text-2xl text-slate-50 p-4">
    EVENTS
  </div>
</div>

<div className="stat text-center">
  <div className="stat-value text-sky-600 text-6xl">
    <CountUp end={400} duration={5} />+
  </div>
  <div className="stat-title font-bold text-2xl text-slate-50 p-4">
    DELEGATES
  </div>
</div>

<div className="stat text-center">
  <div className="stat-value text-sky-600 text-6xl">
    <CountUp end={10} duration={5} />+
  </div>
  <div className="stat-title font-bold text-2xl text-slate-50 p-4">
    HOURS OF NETWORKING
  </div>
</div>

      </div>
    </div>
  );
};

export default Statistics;
