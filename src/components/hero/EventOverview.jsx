import img from "../../assets/event-overview-left.png";
const EventOverview = () => {
  return (
    <section className="event-main h-auto flex  bg-no-repeat relative justify-center items-center bg-white">
      <section className="event-overview h-[646px] w-full "></section>
      <div className="absolute top-10 left-0 right-0 bottom-0 h-[88%] w-10/12 flex justify-evenly mx-auto border-red-600 p-10">
        <div className="event-img h-full flex-1 flex justify-center items-center object-contain ">
          <img
            src={img}
            alt="img"
            className="h-full rounded-3xl shadow-lg border "
          />
        </div>
        <div className="event-content flex flex-col flex-1  justify-between items-center">
          <div className="event-title font-roboto font-bold text-4xl">
            EVENT OVERVIEW
          </div>
          <div className="event-description font-poppins text-justify text-slate-600">
            The banking industry worldwide is undergoing phenomenal change
            giving the banks an opportunity to relook into its existing business
            models and take a huge leap towards the future. The shift in
            consumer’s digital experience, adoption of next-gen technologies,
            transformation of customer service to customer engagement, mobile
            workforce with a need to right-size the branch network are all an
            opportunity for regional banks to seize the opportunity and
            accelerate the shift to digital. <br></br>
            <b>4th Annual Future Banks Summit KSA 2023</b> will showcase latest
            innovations and practical case studies along with interactive panel
            discussions designed to guide the banking sector in KSA in
            identifying the right strategy to knock through long-standing
            resistance and be future ready! <br></br>
            An exciting and timely conference on its way discussing the future
            of the financial industry in KSA driven by innovation and digital
            advancements with the adoption of technologies such as AI, digital
            transformation, digital banking, banking in the metaverse,
            intelligent automation, regtech, data analytics, cloud migration,
            cyber security, digital payments model along with tech-driven
            redefined business continuity planning strategies.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
