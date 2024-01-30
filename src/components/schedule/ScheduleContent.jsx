import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faClock } from "@fortawesome/free-solid-svg-icons";

const ScheduleContent = ({data}) => {
  return (
    <>
      {data.map((item) => (
        <div className="ScheduleContent flex flex-col gap-4 font-poppins py-4" key={item.id}>
          <div className="time text-blue-600 font-semibold">
            <FontAwesomeIcon className="mr-2 text-yellow-400" icon={faClock} />
           {item.time}
          </div>
          <div className="title font-bold text-slate-800 ">
            {item.title}
          </div>
          <div className="">
            <ul className=" font-medium">
              {item.list.map((item,index) => <li className=" list-item list-inside ml-4" key={index}>
              <FontAwesomeIcon icon={faCaretRight} className='mx-2 ' /> {item}
              </li>)}
              
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ScheduleContent;
