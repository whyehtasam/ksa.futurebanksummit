import Breadcrums from "../Breadcrums";
import { contactData, formFields } from "./contactData";

const Contact = () => {
  return (
    <section className="contact bg-white">
      <Breadcrums heading="contact us" link="Contact Us" />

      <div className=" py-10 w-8/12 mx-auto">
        <div className="contact-details flex justify-between">
          {contactData.map((item, index) => (
            <div className="flex-1 text-center m-8" key={index}>
              <h2 className="font-oswald text-2xl">{item.title}</h2>
              <p className="font-poppins text-md text-slate-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white py-10 w-full p-8 mx-auto drop-shadow-md rounded-2xl">
        <div className="flex justify-center">
         <h2 className="text-5xl tracking-wider font-semibold font-oswald text-sky-500"> Contact Form</h2>
        </div>
          {formFields.map(({ label, inputType, placeholder }, index) => (
            <div className="w-full my-12" key={index}>
              <label className="form-control w-full relative">
                <div className="label absolute -top-[22px] left-4 h-fit ">
                  <span className="label-text text-base bg-white h-full px-2 text-gray-400">
                    {label}
                  </span>
                </div>
                <input
                  type={inputType}
                  placeholder={placeholder}
                  className="input input-bordered w-full text-gray-400"
                />
              </label>
            </div>
          ))}

          <div className="flex justify-center">
            <button className="mx-auto outline-white drop-shadow-sm btn px-8 bg-sky-500 text-white hover:bg-sky-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
