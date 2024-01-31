import logo from '../../assets/Future-Banks-Summit-KSA-2023.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-blue-400 lg:h-28 h-20 bg-opacity-60 text-white text-opacity-80 fixed top-0 z-50">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="container w-10/12 mx-auto flex justify-between h-full font-oswald ">
              <div className="h-full "><img src={logo} alt="logo" className='h-full object-contain p-2 lg:p-2 md:p-4 text-white' /></div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal flex justify-evenly items-center w-[830px] cursor-pointer">
                  {/* Navbar menu content here */}
                  <Link to="/"><li className="mx-2 text-center h-fit hover:text-white ">HOME</li></Link>
                  
                  <div className="dropdown dropdown-hover no-animation w-fit">
                  <div className=" text-center h-fit hover:text-white">EVENT DETAILS <FontAwesomeIcon icon={faAngleDown} className='ml-1 mt-1' size='sm' /></div>
                    <ul className="dropdown-content z-[1] menu bg-base-100 rounded-box text-sky-600 font-poppins w-52 ">
                     <li><a href='#EventOverview'>EVENT OVERVIEW</a></li>
                     <li><a href='#TopHighlights'>TOP HIGHLIGHTS</a></li>
                     <li><a href='#WhoWillAttend'>WHO WILL ATTEND</a></li>
                     <li><a href='#WhyAttend'>WHY ATTEND</a></li>
                   </ul>
                 </div>
                 
                  <Link to="/schedule"><li className="mx-2 text-center h-fit hover:text-white ">SCHEDULE</li></Link>     
                  <Link to="/speakers"><li className="mx-2 text-center h-fit hover:text-white ">SPEAKERS</li></Link>     
                  <Link to="/partners"><li className="mx-2 text-center h-fit hover:text-white ">PARTNERS</li></Link>
                  <Link to="/awards"><li className="mx-2 text-center h-fit hover:text-white ">AWARDS</li></Link>
                  <li className="mx-2 text-center h-fit hover:text-white ">GALLERY</li>
                  <li className="mx-2 text-center h-fit hover:text-white ">CONTACT US</li>
                  <button className="btn no-animation bg-sky-500 hover:text-white border-none btn-ghost px-8 rounded opacity-100 hover:rounded-xl hover:bg-sky-600 transition-all duration-500">REGISTER</button>
                </ul>
              </div>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
