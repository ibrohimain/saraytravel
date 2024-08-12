import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carousel } from "../data/Carousel";


export default function VideoCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-[100%] carousel h-[400px]">
            <div className="w-[85%] mx-auto flex items-center justify-center">
                <h2 className="text-[40px] text-black font-semibold">Video <span className="text-[#00805e]">GALEREYA</span></h2>
            </div>
            <Slider {...settings} className="w-[85%] mx-auto gap-4 relative">
                {carousel.map((item, index) => (
                    <div className="w-[85%] mx-auto">
                        <div key={index} className="w-[350px] h-[270px] bg-red-500 shadow-lg flex items-center justify-center mr-4 rounded-[10px]">
                            <img src={item.img} alt="Image 1" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
