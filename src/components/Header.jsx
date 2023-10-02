
import { NavLink } from "react-router-dom";
import menuIcon from "../assets/menuIcon.png"
import {  useState } from "react";

function Header() {
  const [isMenuBarVisible, setMenuBarVisible] = useState(false);


  function handleMenu() {
    setMenuBarVisible(prevState => !prevState);
  }


  return (
    <div className=" py-3 px-5 flex  md:justify-around justify-between items-center bg-gray-200 relative" >
      <div>
        {/* Logo */}
        <div className="  ">
          <img
            className=" w-20 " 
            src="https://th.bing.com/th/id/R.f620109cf09c199e74ff5cdc68609608?rik=NH%2ftiz7F1TZBTw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2016%2f05%2fvector-logo-templates_403097.png&ehk=noSy1RiiCIO3MC3VGzniSWAzCKvExLFgJe4zLJu6dMg%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>
      <div>
        <ul className={`flex items-center  md:gap-4 gap-2  ${isMenuBarVisible ? 'visible' : ''}`} id="toggleNav" >
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? ` bg-green-300 text-black font-bold px-3 py-2`
                  : `text-black font-semibold  px-3 py-2`
              }
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? ` bg-green-300 text-black font-bold px-3 py-2`
                  : `text-black font-semibold  px-3 py-2`
              }
            >
              {" "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? ` bg-green-300 text-black font-bold px-3 py-2`
                  : `text-black font-semibold  px-3 py-2`
              }
            >
              {" "}
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive
                  ? ` bg-green-300 text-black font-bold px-3 py-2`
                  : `text-black font-semibold  px-3 py-2`
              }
            >
              {" "}
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? ` bg-green-300 text-black font-bold px-3 py-2`
                  : `text-black font-semibold  px-3 py-2`
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
        <span onClick={handleMenu}>
        <img src={menuIcon} alt="" id="menuIcon" className=" z-20 w-10 h-10"  />
        </span>
      </div>
    </div>
  );
}

export default Header;
// C:\Users\rahul\OneDrive\Pictures\Desktop\job portal\frontend\src\
