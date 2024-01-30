import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { speakersData } from "./speakersData";
import Breadcrums from "../Breadcrums";
import img1 from './images/asset 3.jpeg'
const Speakers = () => {
  return (
    <section className="speakers">
      <Breadcrums heading="Speakers" link="Speakers" />
      <div className="sechdule-content bg-white pt-20">
        <div className="container w-9/12 mx-auto p-3">
          <h2 className="text-5xl text-center font-bold font-oswald">
            EVENT SPEAKERS
          </h2>

          <div className="my-16 grid lg:grid-cols-4 md:grid-cols-3 c gap-4">

            {speakersData.map(({id,name,path,role,company}) => <div className="card card-compact flex-1 bg-base-100 shadow-xl hover:scale-[1.01] max-w-64 hover:drop-shadow-lg cursor-pointer" key={id}>
              <figure className="">
                <img
                  src={path}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex justify-center items-center text-center tracking-wider">
                <h2 className="card-title text-sky-700">{name}</h2>
                <h2 className="card-title text-slate-500 text-base">{role}</h2>
                <h2 className="card-title text-slate-600 text-base">{company}</h2>
                <hr />
                <div className="divider m-0 opacity-40 "></div> 
                <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-sky-600" size="2x" />
              </div>
            </div>)}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
