import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carousel } from "../data/Carousel";

export default function FotoCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className="w-[100%] carousel h-[650px] pt-[100px]">
            <div className="w-[85%] mx-auto flex items-center justify-center pt-[60px]">
                <h2 className="text-[40px] text-black font-semibold">FOTO <span className="text-[#00805e]">GALEREYA</span></h2>
            </div>
            <Slider {...settings} className="w-[85%] mx-auto gap-4 pt-[40px]">
                {carousel.map((item, index) => (
                    <div key={index} className="mr-4">  {/* 'key' attributi bu yerda */}
                        <div className="w-[400px] h-[300px] bg-red-500 shadow-lg flex items-center justify-center rounded-[30px]">
                            <img src={item.img} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-[30px]" />
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    );
}
