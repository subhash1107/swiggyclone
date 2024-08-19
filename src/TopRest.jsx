import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RestCard from "./RestCard";

const TopRest = () => {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchTopRestraunts = async () => {
        const response = await axios.get("https://swiggycloneapi.onrender.com/top-restaurant-chains");
        setData (response.data);
        console.log(response.data);
    }
    // const width = window.innerWidth
    const prevSlide = () => {
        if(slide===0){return false}
        setSlide(slide-1)
    }

    const nextSlide = () => {
        if(slide===data.length){return false}
        setSlide(slide+1)
    }

    useEffect(() => {
        fetchTopRestraunts();
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto mb-16">
            <div className="flex my-3 items-center justify-between">
                <div className="text-[25px] px-2 font-bold">Top Restaurants in Badarpur</div>
                <div className="flex">
                    <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full cursor-pointer mx-2" onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full cursor-pointer mx-2" onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className=" overflow-x-auto slider flex gap-5">
            {data.map((val,index)=>{
                return(<div
                style={{ transform: `translateX(-${slide * 100}%)` }}>
                    <RestCard
                    key={index}
                    src={"https://swiggycloneapi.onrender.com/images/"+ val.image}
                    name = {val.name}
                    offer = {val.offer}
                    title = {val.title}
                    rating = {val.rating}
                    maxTime = {val.maxTime}
                    minTime = {val.minTime}
                    place = {val.place}
                />
                </div>)
                    
            })}

            </div>
            <hr className="my-6 border-[1px]"/>
            
        </div>

    );
}

export default TopRest;
