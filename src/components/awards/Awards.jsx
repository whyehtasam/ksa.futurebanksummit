import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import AwardHero from "./AwardHero";
import { useState } from "react";

const Awards = () => {
    
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlay = () => {
    setIsVideoVisible(true);
  };
  return (
    <section className="awards bg-white">
      <div className="container-main">
        <div className="container-video w-full flex justify-center  relative bg-black overflow-x-hidden h-full">
          <div
            className={` award-video h-[95vh]  flex w-[80vw] scale-[1.2365]  ${isVideoVisible ? "video-visible" : ""}`}
          >
            <ReactPlayer
              url="https://www.youtube.com/embed/qw_XbQ1EpKY?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fksa.futurebanksummit.com&widgetid=1"
              playing="true"
              width="100%"
              height="100vh"
              volume={0}
              loop="true"
              onPlay={handlePlay}
            />
          </div>
          <div className="award-content h-[51rem] flex justify-center  items-center flex-col text-white absolute top-0  tracking-tighter bg-black w-full bg-opacity-60">
            <h2 className="font-poppins mt-10 text-6xl font-semibold">
              4th Annual
            </h2>
            <h2 className="font-oswal py-10 text-7xl font-semibold">
              KSA Future Banks Awards 2023
            </h2>
            <div className="divider bg-white w-4/12 mx-auto h-[1px] bg-opacity-80"></div>
            <h2 className="font-poppins p-5 text-xl font-base">
              DIGITAL INNOVATIONS SHAPING THE FUTURE OF THE KINGDOM’S BANKING
              LANDSCAPE
            </h2>
            <div className="divider bg-white w-4/12 mx-auto h-[1px] bg-opacity-80"></div>
            <FontAwesomeIcon icon={faCalendarDays} className="p-6" size="3x" />

            <p className="font-poppins text-lg font-semibold">
              Nominations are open now
            </p>
          </div>
        </div>
        <div className="bg-white py-10 w-8/12 mx-auto">

        <AwardHero />
        </div>
      </div>
    </section>
  );
};

export default Awards;
