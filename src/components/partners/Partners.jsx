import Breadcrums from "../Breadcrums";
const Partners = () => {
  return (
    <section className="partners">
      <Breadcrums heading="Partners" link="Partners" />
      <div className="sechdule-content bg-white pt-20">
        <div className="container w-9/12 mx-auto p-3">
          <h2 className="text-5xl text-center font-bold font-oswald uppercase">
            EVENT PARTNERS
          </h2>

          <div className="my-16">
            <h2 className="text-4xl text-orange-500 text-center font-bold font-roboto uppercase">
              EVENT PARTNERS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="image flex-1 shadow-md">

                 <img src="" alt="" className="object-cover"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
