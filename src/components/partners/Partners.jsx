import Breadcrums from "../Breadcrums";
import { imageData } from "./partnersData";
const Partners = () => {
  return (
    <section className="partners">
      <Breadcrums heading="Partners" link="Partners" />
      <div className="sechdule-content bg-slate-50 pt-20">
        <div className="container w-9/12 mx-auto p-3">
          <h2 className="text-5xl text-center font-bold font-oswald uppercase">
            EVENT PARTNERS
          </h2>

          <div className="my-16">
            {imageData.map((item, index) => (
              <>
                <h2 className="text-4xl text-orange-500 text-center font-bold font-roboto drop-shadow-sm mt-10 mb-4">
                  {item.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {item.path.map((item) =>  <div className="image flex-1 shadow-md my-8" key={index}>
                    <img src={item} alt="img" className="object-cover" />
                  </div>)}
                 
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
