import img from "../../assets/slider3.jpg";
const AwardHero = () => {
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
          <div className=" p-8 flex-1">
            <h1 className=" text-5xl font-bold">KSA Future Banks Awards 2023</h1>
            <p className=" py-6 text-justify">
              The Saudi Banking Industry is one of the leading financial sector
              in the Middle East. Banks and technology leaders have come
              together and pushed the banks to do better, serve their customers
              better and create a seamless & transaction-friendly culture for
              customers. Post the success of the last edition of KSA Future
              Banks Awards in 2022, The KSA Future Banks Awards 2023 aims to
              appreciate, empower & recognize the new benchmarks set by the
              Banking leaders & tech enthusiasts in the KSA Banking Sector.
            </p>
            <button className=" outline-white drop-shadow-sm btn bg-black text-white hover:text-black">Nominate Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardHero;
