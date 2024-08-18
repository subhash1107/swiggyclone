
import { useEffect, useRef, useState } from "react";
import HelpItems from "./HelpItems";
import { RxCaretDown } from "react-icons/rx";

const Help = () => {
  const [category, setCategory] = useState("partner_onboarding");
  const [isFixed, setIsFixed] = useState(false);
  const sidebarRef = useRef(null);
  const helpbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current && helpbarRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const helpbarRect = helpbarRef.current.getBoundingClientRect();
        console.log(helpbarRect);
        if (sidebarRect.top <= 0 && !isFixed) {
          helpbarRef.current.style.position = "fixed";
          helpbarRef.current.style.top = "0";

          setIsFixed(true);
        } else if (sidebarRect.top > 0 && isFixed) {
          helpbarRef.current.style.position = "static";
          setIsFixed(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  const getTitle = () => {
    switch (category) {
      case "partner_onboarding":
        return "Partner Onboarding";
      case "Legal":
        return "Legal";
      case "faq":
        return "FAQs";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="sm:pt-[5rem] py-2 bg-[#508C9B] sm:pb-[2.5rem]">
        <div
          ref={helpbarRef}
          className={` px-[6rem]  bg-[#508C9B] transition-all duration-[350ms] w-full z-[999]`}
          style={
            isFixed ? { paddingTop: "1rem", paddingBottom: "1rem" } : {}
          }
        >
          <h1 className="text-3xl text-white">Help & Support</h1>
          <p className="text-white">Let's take a step ahead and help you better.</p>
        </div>
      </div>
      <div
        ref={sidebarRef}
        className={`${
          isFixed ? " bg-white" : "bg-[#508C9B]"
        }  z-[-1] w-full xl:px-24 px-0 transition-all duration-[300ms]`}
      >
        <div className="bg-white xl:p-12 max-w-full container-help transition-none">
          <div className="bg-slate-200 transition-none pt-8 pl-4 min-h-screen"
          style={isFixed?{position:"sticky", top:'200px'}:{}}>
            <ul className="flex flex-col items-start">
              <li
                tabIndex="0"
                onClick={() => {
                  setCategory("partner_onboarding");
                }}
                className="py-4 lg:px-8 focus:text-black focus:font-semibold text-zinc-600 hover:text-black hover:font-semibold focus:bg-white cursor-pointer w-full"
              >
                Partner Onboarding
              </li>
              <li
                tabIndex="0"
                onClick={() => {
                  setCategory("Legal");
                }}
                className=" py-4 lg:px-8 focus:text-black focus:font-semibold text-zinc-600 hover:text-black hover:font-semibold cursor-pointer focus:bg-white w-full"
              >
                Legal
              </li>
              <li
                tabIndex="0"
                onClick={() => {
                  setCategory("faq");
                }}
                className="py-4 lg:px-8 focus:text-black focus:font-semibold text-zinc-600 hover:text-black hover:font-semibold cursor-pointer focus:bg-white w-full"
              >
                FAQs
              </li>
            </ul>
          </div>
          <div className="lg:p-12 transition-none bg-white">
            <div className="flex flex-col transition-none justify-start items-start">
              <h2 className="text-2xl font-semibold">{getTitle()}</h2>
              {HelpItems[0][category].map((val, index) => {
                return (
                  <button
                    key={index}
                    className="flex justify-between hover:text-orange-400 py-6 border-b-2  w-full"
                  >
                    {val}
                    <RxCaretDown />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Help;
