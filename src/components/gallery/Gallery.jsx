import Breadcrums from "../Breadcrums";
import GalleryHero from "./GalleryHero";

const Gallery = () => {
  return (
    <section className="media w-full bg-white">
      <Breadcrums heading="media" link="Media" />
      <div className=" py-10 w-10/12 mx-auto">
        <GalleryHero />
        <div className="my-16 grid lg:grid-cols-4 md:grid-cols-3 c gap-4">
          <div className="img flex-1">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
