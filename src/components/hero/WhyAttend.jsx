import { whyAttendData } from "./highlightsData";
import svg from "../../assets/organizing-projects-animate.svg";
const WhyAttend = () => {
  return (
    <section className="why-attend-data bg-slate-100 p-16 h-auto">
      <div className="content flex w-10/12 mx-auto h-96">
        <div className="description flex-1">
          <div className="h-full flex flex-col ">
            <h1 className="font-roboto font-extrabold text-sky-400  text-4xl mb-12 text-center">
              WHY ATTEND
            </h1>
            <p className="description-content font-poppins text-justify text-slate-600 leading-7">
              <b>4th Annual Future Banks Summit KSA 2023</b> will highlight the
              enabling role of digitalization in reshaping the future of
              banking. The pandemic has forced digital acceleration at such a
              massive scale that banks are not just looking to transform but
              forced to reimagine the business. Delegates will experience a
              power-packed agenda consisting of presentations, panel discussions
              and keynotes from globally and regionally renowned speakers,
              panelists and moderators. <br /> If you are ready to innovate and
              join the ranks of the Brightest minds in the industry while
              resonating with the following reasons compelling enough to attend,
              then register today:
            </p>
          </div>
        </div>
        <div className="img flex-1 h-full ">
          <img src={svg} alt="img" className="h-full mx-auto" />
        </div>
      </div>
      <div className="content flex w-10/12 mx-auto h-auto">
        <div className="flex flex-wrap justify-between py-8 gap-y-8">
          {whyAttendData.map((items) => (
            <div className="card-content h-44 w-80 py-8" key={items.id}>
              <h1 className="text-red-500 text-[66px] drop-shadow-sm font-semibold text-center font-roboto">
                {items.id}
              </h1>
              <p className="text-md text-center font-semibold text-slate-700">{items.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
