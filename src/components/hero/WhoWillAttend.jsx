import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import {attendees} from './highlightsData'
import svg from '../../assets/design-inspiration-animate.svg'
const WhoWillAttend = () => {
  return (
    <section  id='WhoWillAttend' className="who-will-attend-main  flex flex-col justify-center items-center bg-sky-700 relative h-auto bg-no-repeat font-roboto">
      <section className="who-will-attend h-[646px] w-full "></section>
      <div className="absolute p-10 left-0 right-0 flex flex-col justify-between"></div>
      <h1 className="font-roboto-slab font-bold text-white text-4xl absolute top-8">
        WHO WILL YOU MEET ?
      </h1>
      
      <div className="absolute top-20 left-0 right-0 bottom-10 w-10/12 flex justify-evenly mx-auto border-red-600 ">
        <div className="event-img h-full flex-1 flex  flex-col justify-center items-center object-contain ">
            <ul className="text-white font-bold">
            {attendees.map((attendee) => (
                  <li key={attendee.id} className='text-lg p-2'><FontAwesomeIcon icon={faSquareCheck} className='mx-2 ' />{attendee.title}</li>
                ))}
            </ul>
          </div>
        <div className="event-content flex flex-col flex-1  justify-between items-center">
          <div className="event-description w-full ">
            <img src={svg} alt="img" className='w-10/12'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWillAttend;
