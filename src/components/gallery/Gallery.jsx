import Breadcrums from "../Breadcrums";
import GalleryHero from "./GalleryHero";
import { imgData } from "./mediaData";
const Gallery = () => {
  return (
    <section className="media w-full bg-white">
      <Breadcrums heading="media" link="Media" />
      <div className=" py-10 w-10/12 mx-auto">
        <GalleryHero />
        <div className="my-16 grid lg:grid-cols-4 md:grid-cols-3 c gap-4">
          {imgData.map((item, index) => (
            <div className="img flex-1 shadow-md rounded-md hover:scale-[1.01] hover:drop-shadow-sm hover:-translate-y-2 transition-all duration-200 cursor-pointer overflow-hidden" key={index}>
              <img src={item} alt="img" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mx-auto outline-white drop-shadow-sm btn btn-wide bg-orange-500 text-white hover:text-black">Load more</button>
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;
