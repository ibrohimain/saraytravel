import React, { useState } from 'react';

const Register = () => {
    const [adults, setAdults] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const incrementAdults = () => setAdults(adults + 1);
    const decrementAdults = () => setAdults(adults > 0 ? adults - 1 : 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        // Bu yerda backend API'ga ariza yuborishni amalga oshirishingiz mumkin
    };

    return (
        <div className="w-full h-[1100px] register relative">
            <div className="w-full h-[500px] pt-[110px] reg-bg flex items-center justify-center">
                <div className="w-[90%] h-[60%] flex flex-col items-center justify-center mb-10">
                    <h2 className="text-white font-semibold 2xl:text-[40px] xl:text-[38px] lg:text-[38px] md:text-[34px] sm:text-[30px] text-[20px] w-[60%] text-center mb-6 animate-fadeIn">ISHONCHLI VA HAVFSIZ UMRA ZIYORATLARI IQRO TRAVEL BILAN BIRGA</h2>
                    <div className="w-[80px] h-0 border border-[#00806b] animate-grow"></div>
                    <p className="text-[#00806b] mt-6 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px] ">Hurmat bilan - IQRO TRAVEL jamoasi</p>
                </div>
            </div>
            <div className="w-[85%] mx-auto h-[600px] 2xl:flex xl:flex lg:flex md:flex sm:block block  justify-between absolute left-[7.5%] top-[40%]">
                <div className="2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-6 mt-6 shadow-2xl bg-white rounded-[30px] animate-slideInLeft">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0e9e44e6a3d2aeb3eaa3f9d0f8faed22&ll=67.817556%2C40.155219&z=15" width="100%" height="100%" frameborder="0" allowfullscreen="true"></iframe>

                </div>
                <div className="2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[50%] h-[50%] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-6 mt-6 shadow-2xl bg-white rounded-[30px] flex items-center justify-center animate-slideInRight">
                    <div className="w-[85%] h-[35%]">
                        <div className="w-full h-auto 2xl:flex xl:flex lg:flex md:flex sm:flex block items-center gap-4">
                            <h2 className="text-black 2xl:text-[32px] xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[24px] text-[18px] font-semibold w-[250px] 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 mb-4">UMRA SAFARI UCHUN ARIZA</h2>
                            <span className="px-3 py-[0.7rem] bg-red-500 rounded text-white text-sm font-medium animate-pulse">Chegirma</span>
                        </div>
                        <div className='w-[100%] flex items-center mt-10'>
                            <button className='bg-[#00806b] text-white py-2.5 px-8 rounded-[5px]'>Ro'yxatdan o'tish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
