import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Category = () => {
    const [category, setCategory] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchCategory = async () => {
        const response = await axios.get("https://swiggycloneapi.onrender.com/categories");
        setCategory(response.data);
        // console.log(response.data);
    }
    const width = window.innerWidth
    const prevSlide = () => {
        if(slide===0){return false}
        setSlide(slide-1)
    }

    const nextSlide = () => {
        if (width >= 1200){
        if(slide===category.length-8){return false}
        setSlide(slide+1)} 
        if (width < 1200 && width >= 950){
        if(slide===category.length-6){return false}
        setSlide(slide+1)} 
        if (width < 950 && width >= 750){
        if(slide===category.length-5){return false}
        setSlide(slide+1)} 
        if (width < 750 && width >= 590){
        if(slide===category.length-4){return false}
        setSlide(slide+1)} 
        if (width < 590 ){
        if(slide===category.length-2){return false}
        setSlide(slide+1)} 
        
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex my-3 items-center justify-between">
                <div className="text-[25px] font-bold px-2">What's on your mind?</div>
                <div className="flex">
                    <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full cursor-pointer mx-2" onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full cursor-pointer mx-2" onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex slider overflow-x-auto">
                {category.map((val, index) => (
                    <div
                        key={index}
                        style={{ transform: `translateX(-${slide * 100}%)` }}
                        className="w-[150px] shrink-0 cursor-pointer"
                    >
                        <img
                            src={`https://swiggycloneapi.onrender.com/images/${val.image}`}
                            alt={val.path}
                        />
                    </div>
                ))}
            </div>
            <hr className="my-6 border-[1px]"/>
        </div>

    );
}

export default Category;
