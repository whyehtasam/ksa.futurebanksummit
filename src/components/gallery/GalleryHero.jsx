import img from "../../assets/slider3.jpg";
import ReactPlayer from "react-player";
const GalleryHero = () => {
  return (
    <section className="container_ ">
      <div className="hero h-[600px]  bg-white drop-shadow-lg rounded-lg">
        <div className="hero-content h-full flex flex-col lg:flex-row-reverse p-10">
          <div
            className=" drop-shadow  flex-1 h-full "
            style={{ borderRadius: "20px", overflow: "hidden" }}
          >
            <ReactPlayer
              url="https://youtu.be/bDMaKEByekE"
              playing="true"
              width="100%"
              height="100%"
              volume={0.8}
            />
          </div>
          <div className=" p-8 flex-1  flex flex-col justify-center ">
            <div className="flex flex-col justify-center ">
              <h1 className=" text-3xl text-center text-sky-500 font-bold">
                3RD ANNUAL FUTURE BANKS SUMMIT KSA 2022 HIGHLIGHT VIDEO
              </h1>

              <button className=" mx-auto outline-white drop-shadow-sm btn  my-8 bg-orange-500 text-white hover:text-black">
                <a
                  href="https://www.youtube.com/@vervemanagement/videos"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch More Videos
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
