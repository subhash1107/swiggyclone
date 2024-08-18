import axios from "axios";
import { useEffect, useRef, useState } from "react";
import RestCard from "./RestCard";
import { FaSearch } from "react-icons/fa";
import BestCuisines from "./BestCuisines";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Offers = () => {
    const [data, setData] = useState([]);
    const componentRef = useRef(null);
    const titleRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [originalTop, setOriginalTop] = useState(0);

    const fetchTopRestraunts = async () => {
        const response = await axios.get("https://swiggycloneapi.onrender.com/top-restaurant-chains");
        setData(response.data);
    }

    useEffect(() => {
        fetchTopRestraunts();

        const setInitialPosition = () => {
            if (componentRef.current) {
                setOriginalTop(componentRef.current.offsetTop);
            }
        }

        setInitialPosition();

        const handleScroll = () => {
            if (titleRef.current && componentRef.current) {
                const titleBottom = titleRef.current.getBoundingClientRect().bottom;
                const scrollPosition = window.pageYOffset;
                setIsFixed(titleBottom <= 0 && scrollPosition >= originalTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', setInitialPosition);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', setInitialPosition);
        }
    }, [originalTop]);

    const Links = ['Filter', 'Sort By', 'Fast Delivery', 'New on Swiggy', 'Rating 4.0+', 'Pure Veg', 'Offers', 'Less than ₹300'];

    return (<>
        <div className="max-w-[1200px] mb-16 mx-auto">
            <div ref={titleRef} className="text-[25px] px-2 font-bold my-2">Restaurants with Great Offers</div>
            <div 
                ref={componentRef}
                className={`${isFixed ? 'fixed py-2 top-0 left-0 right-0 bg-white z-[100]' : ''} flex justify-between`}
                style={isFixed ? { width: 'inherit', maxWidth: '1300px', margin: '0 auto' } : {}}
            >
                <div className="flex gap-5 overflow-x-auto">
                    {Links.map((val, index) => (
                        <button 
                            key={index}
                            className="border border-black rounded-3xl py-2 px-3 active:scale-95 tracking-tighter my-2 whitespace-nowrap"
                        >
                            {val}
                        </button>
                    ))}
                </div>
                {isFixed && (<NavLink to='../search'>
                    <div className="relative header-visibility">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 pl-10 border border-black my-2 rounded-3xl"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div></NavLink>
                )}
            </div>
            {isFixed && <div style={{ height: componentRef.current?.offsetHeight }}></div>}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-3">
                {data.map((val, index) => (
                    <RestCard
                        key={index}
                        src={"https://swiggycloneapi.onrender.com/images/" + val.image}
                        name={val.name}
                        offer={val.offer}
                        title={val.title}
                        rating={val.rating}
                        maxTime={val.maxTime}
                        minTime={val.minTime}
                        place={val.place}
                    />
                ))}
            </div>
            <hr className="my-6 border-[1px]"/>
        </div>
        <BestCuisines/>
        <Footer/>
        </>);
}

export default Offers;