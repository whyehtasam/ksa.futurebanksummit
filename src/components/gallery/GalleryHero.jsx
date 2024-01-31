import img from "../../assets/slider3.jpg";
const GalleryHero = () => {
  return (
    <section className="container_ ">
      <div className="hero h-[600px]  bg-white drop-shadow-lg rounded-lg">
        <div className="hero-content h-full flex flex-col lg:flex-row-reverse ">
          <div className=" p-8 flex-1 h-full">
            <img
              src={img}
              className="object-cover h-full rounded-lg shadow-2xl "
            />
          </div>
          <div className=" p-8 flex-1  flex flex-col justify-center ">
            <h1 className=" text-3xl text-center text-sky-500 font-bold">
              3RD ANNUAL FUTURE BANKS SUMMIT KSA 2022 HIGHLIGHT VIDEO
            </h1>

            <button className="  outline-white drop-shadow-sm btn w-max my-8 bg-orange-500 text-white hover:text-black">
              Nominate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
