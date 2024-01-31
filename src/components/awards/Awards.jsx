import ReactPlayer from 'react-player';


const Awards = () => {
  return (
    <section className="awards">
      <div className="container">
        <div className="award-video h-full">
          <ReactPlayer
            url="https://www.youtube.com/embed/qw_XbQ1EpKY?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fksa.futurebanksummit.com&widgetid=1"
            playing='true'
            width="100%"
            height="100vh"
            volume={0}
            loop='true'
          />
        </div>
        <div className="award-content"></div>
      </div>
    </section>
  );
};

export default Awards;
