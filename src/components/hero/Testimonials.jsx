import { testimonialsData } from "./highlightsData";
const Testimonials = () => {
  return (
    <section className="testimonials bg-sky-600 p-16 h-auto">
      <div className="container flex w-10/12 mx-auto">
        <div className="flex-1 basis-1/3 flex items-center justify-center">
          <h1 className="font-roboto font-extrabold text-white  text-4xl mb-12 text-center">
            TESTIMONIALS
          </h1>
        </div>

        <div className="testimonials__content flex-1 flex justify-center basis-2/3">
          <div className="w-10/12 h-64 carousel rounded-box mx-auto p-4">
            {testimonialsData.map((item) => (
              <div className="carousel-item w-full px-2" key={item.id}>
                <div className="card w-full bg-base-100 shadow-xl ">
                  <div className="card-body ">
                    <div className="rating"></div>
                    <p className="flex justify-center items-center text-lg">
                    {item.title}
                    </p>
                    <h2 className="card-title font-bold">{item.author}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
