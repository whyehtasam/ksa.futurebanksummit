const TopHighlightCard = (props) => {

  return (
<>
    {props.data.map((items) =><div className="card w-80 bg-base-100 shadow-xl indicator cursor-pointer  hover:bg-sky-500 hover:text-white transition-all duration-200" key={items.id}>
    <span className="indicator-item indicator-start badge p-4 bg-pink-500 text-white font-semibold shadow-sm">{items.id}</span>
      <figure className="px-10 pt-10">
        <img
          src={items.path}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-base">{items.title}</h2>
        
       
      </div>
    </div> )}
    </>
  );
};

export default TopHighlightCard;
