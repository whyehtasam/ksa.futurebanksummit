import Breadcrums from "../Breadcrums"
import GalleryHero from "./GalleryHero"
const Gallery = () => {
  return (
    <section className="media w-full bg-white">
        <Breadcrums heading='media' link='Media' />
        <div className=" py-10 w-8/12 mx-auto">

        <GalleryHero />
        </div>
    </section>
  )
}

export default Gallery