import TopHighlightCard from "./TopHighlightCard";
import {highlightsData} from './highlightsData'
const TopHighlights = () => {

    

  return (
    <section className="TopHighlights bg-white p-14 flex flex-col justify-center items-center">
      <h1 className="font-roboto font-extrabold text-black  text-4xl mb-12">
        TOP HIGHLIGHTS
      </h1>
      <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-8">
      <TopHighlightCard data={highlightsData}/>
      </div>
    </section>
  );
};

export default TopHighlights;
