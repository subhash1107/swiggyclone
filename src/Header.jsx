import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import Findlocation from "./Findlocation";

const Header = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const activeToggle1 = () => {
    setToggle1(true);
  };
  const activeToggle2 = () => {
    setToggle2(true);
  };

  const hideSideMenu1 = () => {
    setToggle1(false);
  };
  const hideSideMenu2 = () => {
    setToggle2(false);
  };

  return (
    <>
      <div
        className="black-overlay z-[998] w-full h-full fixed duration-500"
        style={{
          opacity: toggle1 || toggle2 ? 1 : 0,
          visibility: toggle1 || toggle2 ? "visible" : "hidden",
        }}
        onClick={() => {
          hideSideMenu1();
          hideSideMenu2();
        }}
      ></div>
      <div
        className={`w-full max-w-md bg-white z-[999] h-[100vh] fixed duration-200 transform ${
          toggle1 ? "translate-x-0" : "-translate-x-full"
        } p-4`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Findlocation hideSideMenu={hideSideMenu1} />
      </div>
      <div
        className={`w-full max-w-md bg-white z-[999] h-[100vh] fixed duration-200 right-0 transform ${
          toggle2 ? "translate-x-0" : "translate-x-full"
        } p-4`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <SignIn hideSideMenu={hideSideMenu2} />
      </div>

      <header className="sticky top-0 p-3 bg-white z-50 sm:p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="sm:w-[100px] w-[70px] sm:my-0 my-2">
            <NavLink to="/">
              <img
                src="images/Swiggy-Logo.png"
                className="w-full"
                alt="swiggy_logo"
              />
            </NavLink>
          </div>
          <div>
            <span className="font-bold header-visibility border-b-[3px] border-black">
              Badarpur
            </span>
            <span className="header-visibility">,New Delhi, India</span>
            <RxCaretDown
              fontSize={25}
              className="inline cursor-pointer text-[#f59842]"
              onClick={activeToggle1}
            />
          </div>
          <nav className="flex list-none sm:gap-5 gap-3 ml-auto font-semibold text-[18px]">
            <NavLink
              to="search"
              className="flex gap-2 items-center cursor-pointer hover:text-[#f59842]"
            >
              <IoIosSearch />
              <span className="header-visibility">Search</span>
            </NavLink>
            <NavLink
              to="offers"
              className="flex gap-2 items-center cursor-pointer hover:text-[#f59842]"
            >
              <CiDiscount1 />
              <span className="header-visibility">
                Offers<sup className="text-[#f59842]">new</sup>
              </span>
            </NavLink>
            <NavLink
              to="help"
              className="flex gap-2 items-center cursor-pointer hover:text-[#f59842]"
            >
              <MdHelpOutline />
              <span className="header-visibility">Help</span>
            </NavLink>
            <NavLink
              className="flex gap-2 items-center tracking-tighter cursor-pointer hover:text-[#f59842]"
              onClick={activeToggle2}
            >
              Sign In
            </NavLink>
            <NavLink className="flex gap-2 items-center cursor-pointer hover:text-[#f59842]">
              <FaCartPlus />
              <span className="header-visibility">Cart</span>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;